/** @format */
import React, { useEffect } from "react";
import { CallBackApi } from "../../components/Api/CallBackApi";
import { useNavigate } from "react-router-dom";

const Start = ({ app }: { app: string }) => {
  const navigate = useNavigate();
  useEffect(() => {
    return () => {
      const refresh = setInterval(CallBackApi, 150000);
      CallBackApi(app, navigate, refresh);
    };
  }, [app]);

  return <h1>Wait...</h1>;
};

export default Start;
