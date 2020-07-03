import React from "react";
import Modal from "./modal";
import { action } from "@storybook/addon-actions";
export default { title: "Modal" };

export const DefaultModal = () => (
  <Modal modalState={true} closeModal={action("button-click")}>
    {" "}
    <div
      style={{
        height: 150,
        width: 300,
        background: "white",
        position: "absolute",
        top: "50%",
        left: "50%",
        zIndex: 101,
      }}
    >
      Hello modal
    </div>{" "}
  </Modal>
);
