/** @format */
import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Redirect } from "react-router-dom";

const Start = ({ app }: { app: string }) => {
  const navigate = useNavigate();
  const profile = () => {
    axios
      .get("https://api.msolcsptest.com/sso/v1/profile/" + app)
      .then(function (response) {
        if (response.data) {
          sessionStorage.setItem("display_name", response.data.display_name);
          sessionStorage.setItem("email", response.data.email);
        } else {
          navigate("/login?e=unauthorized");
        }
      })
      .catch(function (error) {
        navigate("./login?e=unauthorized");
      });
  };

  useEffect(() => {
    return () => {
      async function getRefreshToken() {
        const response = await axios.get(
          "https://api.msolcsptest.com/sso/v1/refresh/" + app
        );
        if (response.data) {
          clearInterval(refresh);
          sessionStorage.setItem("expires_on", response.data.expires_on);
          profile();
          navigate("./dashboard");
        } else {
          clearInterval(refresh);
          sessionStorage.clear();
          navigate("./login?e=timeout");
        }
      }

      const refresh = setInterval(getRefreshToken, 150000);
    };
  }, []);

  return <h1>Wait...</h1>;
};

export default Start;
