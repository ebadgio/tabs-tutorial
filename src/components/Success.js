import React from 'react'

const Success = ({reset}) => {
  return (
    <div className="box">
        <h1 className="title">Login Success!</h1>
        <button className="button is-primary is-medium"
                onClick={() => reset()}>Reset Login Form</button>
    </div>
  )
}

export default Success
