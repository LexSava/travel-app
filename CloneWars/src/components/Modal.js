import React from "react";

function Modal(props) {
  const { show, closeModal, dataModal } = props;

  return (
    <>
    <div className={show ? "overlay" : "hide"} onClick={closeModal} />
      <div className={show ? "modal" : "hide"}>
        <button onClick={closeModal}>X</button>
        <h1>Modal heading</h1>
        <div>{dataModal}</div>
      </div>
    </>
  );
}

export default Modal;