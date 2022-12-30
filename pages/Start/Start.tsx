/** @format */
import React, { useEffect, useCallback } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Start = ({ app }: { app: string }) => {
  const navigate = useNavigate();
  const profile = useCallback(() => {
    axios
      .get(`${process.env.REACT_APP_API_BASE}/sso/v1/profile/` + app)
      .then(function (response) {
        if (response.data) {
          sessionStorage.setItem("display_name", response.data.display_name);
          sessionStorage.setItem("email", response.data.email);
        } else {
          navigate("./app/login?e=unauthorized");
          sessionStorage.clear();
        }
      })
      .catch(function (error) {
        navigate("./app/login?e=unauthorized");
        sessionStorage.clear();
      });
  }, [app, navigate]);

  useEffect(() => {
    return () => {
      async function getRefreshToken() {
        const response = await axios.get(
          `${process.env.REACT_APP_API_BASE}/sso/v1/refresh/` + app
        );
        if (response.data) {
          clearInterval(refresh);
          sessionStorage.setItem("expires_on", response.data.expires_on);
          profile();
          navigate("./app");
        } else {
          clearInterval(refresh);
          sessionStorage.clear();
          navigate("./app/login?e=timeout");
        }
      }

      const refresh = setInterval(getRefreshToken, 150000);
    };
  }, [app, navigate, profile]);

  return <h1>Wait...</h1>;
};

export default Start;
