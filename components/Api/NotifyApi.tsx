/** @format */
import React from "react";
import axios from "axios";

export const NotifyApi = (requestBody: any) => {
  axios
    .post(
      `${process.env.REACT_APP_API_BASE}/notify/v1/portalmessage`,
      requestBody,
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      }
    )
    .then(function (response) {
      return true;
    })
    .catch(function (error) {
      return false;
    });
  return false;
};
