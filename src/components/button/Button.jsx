import React from 'react'

const Button = ({text, classes}) => {
  return (
    <div className={`${classes} bg-blue px-4 py-2 rounded-lg text-white `}>{text}</div>
  )
}

export default Button