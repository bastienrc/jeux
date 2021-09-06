import { useState } from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components'
// import axios from 'axios'

// const USER_API_BASE_URL = 'http://localhost:5000/api/user'

// class User {
//   signup (user) {
//     return axios.post(USER_API_BASE_URL + '/signup', user)
//   }

//   login (user) {
//     return axios.post(USER_API_BASE_URL + '/login', user)
//   }
// }

const Input = styled.input`
  appearance: none;
  background: none;
  outline: none;
  border: none;
  &:not([type="submit"]) {
    display: block;
    width: 100%;
    padding: 15px;
    border-radius: 8px;
    background-color: rgba(0, 0, 0, 0.2);
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
    transition: 0.4s;
    color: #222;
    font-size: 18px;
    font-weight: 300;
  }
  &:not([type="submit"])::placeholder {
    color: #CCC;
  }
  &:not([type="submit"]):focus, &:not([type="submit"]):valid {
    background-color: #fff;
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
  }
`
const Submit = styled.input.attrs({
  type: 'submit',
  value: 'LOGIN'
})`
  display: block;
  width: 100%;
  padding: 15px;
  border-radius: 8px;
  background-color: #2F4960;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
  transition: 0.4s;
  color: #FFF;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
`

const Button = styled.button`
  appearance: none;
  background: none;
  outline: none;
  border: none;
`

const Welcome = styled.div`
`

const Form = styled.form`
  display: block;
  position: relative;
  max-width: 400px;
  padding: 50px 30px;
  background-image: linear-gradient(to bottom, #00BC7E, #108775);
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
  border-radius: 16px;
  width: 100%;
  &::after {
    content: '';
    display: block;
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    z-index: 1;
    background-image: linear-gradient(to bottom right, #ffce00, #fe4880);
  }
`

const FromInner = styled.div`
  position: relative;
  display: block;
  background-color: #fff;
  padding: 30px;
  z-index: 2;
`

const Label = styled.label`
  display: block;
  color: #999;
  font-size: 14px;
  margin-bottom: 5px;
`

const FormGroup = styled.div`
  margin-bottom: 30px;
`

const Error = styled.div`
  padding: 10px 15px;
  background-color: #fff;
  border-radius: 8px;
  margin-bottom: 15px;
  color: red;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
`

// const Welcome = styled.div`
// `
// const Welcome = styled.div`
// `

function LoginApp () {
  const adminUser = {
    email: 'admin@admin.fr',
    password: 'admin'
  }
  const [user, setUser] = useState({ email: '' })
  const [details, setDetails] = useState({ email: '', password: '' })
  const [error, setError] = useState('')

  const Login = details => {
    console.log(details)

    if (details.email === adminUser.email && details.password === adminUser.password) {
      console.log('Logged In')
      setUser({
        email: details.email
      })
    } else {
      console.log('Details do not match!')
      setError('Details do not match!')
    }
  }

  const Logout = () => {
    setUser({ email: '' })
  }

  const submitHandler = e => {
    e.preventDefault()
    Login(details)
  }

  return (
    <Layout pageTitle='Connexion'>
      {(user.email !== '')
        ? (
          <Welcome>
            <h2>Bienvenue, <span>{user.email}</span></h2>
            <Button onClick={Logout}>Déconnexion</Button>
          </Welcome>
          )
        : (
          <Form onSubmit={submitHandler}>
            <FromInner>
              {(error !== '' ? (<Error>{error}</Error>) : '')}
              <FormGroup>
                <Label htmlFor='email'>Email : </Label>
                <Input type='email' email='email' id='email' onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email} />
              </FormGroup>
              <FormGroup>
                <Label htmlFor='password'>Mot de passe : </Label>
                <Input type='password' password='password' id='password' onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
              </FormGroup>
            </FromInner>
            <Submit />
          </Form>
          )}
    </Layout>
  )
}

export default LoginApp
