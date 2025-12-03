import React, { createContext, useContext, useState } from "react";
import ModalPersonal from "../components/ModalPersonal";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
    const [modal, setModal] = useState({
        isOpen: false,
        message: "",
    });

    const openModal = (message) => {
        setModal({ isOpen: true, message });
    };

    const closeModal = () => {
        setModal({ isOpen: false, message: "" });
    };

    return (
        <ModalContext.Provider value={{ openModal, closeModal }}>
            {children}
            <ModalPersonal isOpen={modal.isOpen} message={modal.message} onClose={closeModal} />
        </ModalContext.Provider>
    );
};

// Hook per usare la modale facilmente
export const useModal = () => useContext(ModalContext);
