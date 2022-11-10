import React from "react";

import Timer from "../../components/timer/timer.component";
import BackButton from "../../components/timer/back-button.component";

import { useSelector } from "react-redux";

const style = {
  backgroundColor: "#f0f4c3",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100vw",
  height: "100vh",
  flexDirection: "column"
};

const TimerPage = () => {
  const isLogged = useSelector((state) => state.user.logged);
  return isLogged ? (
    <Timer />
  ) : (
    <div style={style}>
      Need to Login <BackButton />
    </div>
  );
};

export default TimerPage;
