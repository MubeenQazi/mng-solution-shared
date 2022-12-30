/** @format */
import React, { useEffect } from "react";
import { getRefreshToken } from "../../components/Api/CallBackApi";

const Start = ({ app }: { app: string }) => {
  useEffect(() => {
    return () => {
      const refresh = setInterval(getRefreshToken, 150000);
      getRefreshToken(app, refresh);
    };
  }, [app]);

  return <h1>Wait...</h1>;
};

export default Start;
