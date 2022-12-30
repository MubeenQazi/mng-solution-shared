/** @format */
/** @format */
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const LogoutApi = () => {
  const navigate = useNavigate();
  axios
    .get(`${process.env.REACT_APP_API_BASE}/app/signout/portal`)
    .then(function (response) {
      sessionStorage.removeItem("display_name");
      sessionStorage.removeItem("email");
      sessionStorage.removeItem("expires_on");
      navigate("./app/login?e=signout");
    })
    .catch(function (error) {
      navigate("./app/login?e=signout");
    });
};
