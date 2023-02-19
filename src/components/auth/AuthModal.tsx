import Modal from "@mui/material/Modal";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Signup from "./Signup";
import Login from "./Login";

const AuthModal = () => {
  const [openModal, setOpenModal] = useState(false);

  const [mode, setMode] = useState("signup");

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => {
    setOpenModal(false);
    setMode("signup");
  };
  return (
    <>
      <button onClick={handleOpen} className="">
        Signup
      </button>

      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="flex flex-col w-full max-w-md h-max rounded-lg py-8 px-16 bg-white justify-center items-center absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
          <header className="flex flex-col w-full justify-center items-center relative">
            <button
              className="ml-auto transition-all rounded-full hover:bg-gray-100 flex items-center justify-center p-1"
              onClick={handleClose}
            >
              <CloseIcon />
            </button>
            <h1 className="text-3xl">{mode}</h1>
          </header>
          {mode === "signup" && <Signup setMode={setMode} />}
          {mode === "login" && <Login setMode={setMode} />}
        </div>
      </Modal>
    </>
  );
};

export default AuthModal;
