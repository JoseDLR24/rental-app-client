import React from 'react'
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const ToasterMessage = () => {
  return (
    <ToastContainer
        position="top-right"
        autoClose={1000}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        theme="light"
      />
  )
}

export default ToasterMessage

