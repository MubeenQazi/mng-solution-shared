/** @format */
import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Start = () => {
  const navigate = useNavigate();

  const profile = () => {
    axios
      .get("https://api.msolcsptest.com/sso/v1/profile/portal")
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
      axios
        .get("https://api.msolcsptest.com/sso/v1/refresh/portal")
        .then(function (response) {
          if (response.data) {
            sessionStorage.setItem("expires_on", response.data.expires_on);
            profile();

            navigate("./dashboard");
          } else {
            navigate("./login?e=timeout");
          }
        })
        .catch(function (error) {
          navigate("./login?e=unauthorized");
        });
    };
  }, []);

  return <h1>Wait...</h1>;
};

export default Start;
