
import { useContext } from 'react'
import {UserContext} from './../App'


export default function Login() {
    const {userState,setUserState}= useContext(UserContext)

    const handleFormSubmit = (e) => {
        e.prevenDefault()

        const formData = {
            email: e.target.enmail.value, 
            password: e.target.password.value,
        }
        console.log('formData->',formData)
    }

    console.log('UserInfo in Login ->', userState)

  return (
    <form action="submit" onSubmit={ handleFormSubmit}>
      <label htmlFor="">
        Email:
        <input type="text" name='email' />
      </label>
      <label htmlFor="">
        Password:
        <input type="password" name='password' />
      </label>
      <button type="submit">
        Login
        </button>
    </form>
  )
}
