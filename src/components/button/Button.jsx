import React from 'react'

const Button = ({text, classes}) => {
  return (
    <div className={`${classes}`}>{text}</div>
  )
}

export default Button