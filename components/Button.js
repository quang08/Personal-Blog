import React from "react"

const Button = ({ children, className, onClick }) => {
  return (
    <button
      className={`p-2 rounded-md hover:ring-2 hover:ring-teal-400 transition duration-300 ${className}`}
      onClick={onClick}
    >{children}</button>
  )
}

export default Button