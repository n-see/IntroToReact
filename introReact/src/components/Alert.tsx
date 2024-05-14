import { useState } from "react"


interface AlertProps {
    children: string
    closeAlertFunction: () => void
}

const Alert = ({children, closeAlertFunction}:AlertProps) => {

  
  return (
    <>
        <div className="alert alert-primary alert-dismissible" role="alert">
            {children}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={closeAlertFunction} ></button>
        </div>
    </>
  )
}

export default Alert