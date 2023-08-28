import React from "react";
import "./styles.css";
const Loading = () => {
  setTimeout(() => {
    const loading = document.querySelector("#loader-box");
    loading.classList.add("lazy");
  }, 1500);

  return (
    <div id="loader-box">
      <span className="loader"></span>
    </div>
  );
};

export default Loading;
