import React from 'react'

const Balance = ({expenses, balance}) => {
  return (
    <div>
        <h3>Your balance</h3>
        <h1> ${balance}</h1>
    </div>
  )
}

export default Balance