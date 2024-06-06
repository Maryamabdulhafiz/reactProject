import React from 'react'
import Button from './Button'

export default function Login() {
  return (
    <div>
      <h2>User Login</h2>
      <form>
        <input type='text' placeholder='Username' />
        <br />
        <input type='password' placeholder='Password' />
        <br />
        <Button />
      </form>
    </div>
  )
}
