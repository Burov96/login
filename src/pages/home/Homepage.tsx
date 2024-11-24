import { ChangeEvent, useState } from 'react'
import './Homepage.scss'
import { NavLink } from 'react-router-dom'

function Homepage():JSX.Element {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  
  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>):void=>{
    setUsername(e.target.value)
  }

  const handlePasswordChange = (e:ChangeEvent<HTMLInputElement>):void=>{
    setPassword(e.target.value)
  }

  const submitHandler = (e: React.FormEvent<HTMLFormElement>):void => {
    e.preventDefault() 
    console.log(trimmedText,password)
    
  }
  const trimmedText=username.trim()
  const trimmedPass=password.trim()

  return (
      <div className='outer-div' >
      <div className='login-form-outerbox' >
      <form className='login-form ' onSubmit={submitHandler}>
          <input type="text" aria-label='username' placeholder='Username' value={username} onChange={handleUsernameChange}/>
          <input type="password"  aria-label='password' placeholder='Password' value={password} onChange={handlePasswordChange}/>
          <NavLink to="/table">
          <button disabled={trimmedText==='' || trimmedPass===''} type='submit'>Login</button>
          </NavLink>
      </form>
      </div>
      </div>
  )
}

export default Homepage
