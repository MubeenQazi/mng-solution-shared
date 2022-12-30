/** @format */
/** @format */
import React, { useCallback } from "react";
import axios from "axios";

export const CallBackApi = async (app: string, navigate: any, refresh: any) => {
  const profile = () => {
    // useCallback(() => {
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
    // }, [app, navigate]);
  };

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
};
