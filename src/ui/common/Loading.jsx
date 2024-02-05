import { Spin } from "antd";


const Loading = () => {
  return (
    <Spin
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    />
  );
};

export default Loading;
