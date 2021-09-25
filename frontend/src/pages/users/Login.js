import { useEffect, useState, useContext } from 'react'
import Layout from '../../components/Layout'
import { Form, FormGroup, FromInner, Label, Input, Submit } from './LoginStyled'
import Auth from '../../contexts/Auth'
import { login } from '../../services/AuthApi'

function Login ({ history }) {
  const { isAuthenticated, setIsAuthenticated } = useContext(Auth)

  const [user, setUser] = useState({
    username: '',
    password: ''
  })

  const handleChange = ({ currentTarget }) => {
    const { name, value } = currentTarget

    setUser({ ...user, [name]: value })
  }

  const handleSubmit = async event => {
    event.preventDefault()

    try {
      const response = await login(user)
      setIsAuthenticated(response)
      history.replace('/account')
    } catch ({ response }) {
      console.log(response)
    }
  }

  useEffect(() => {
    if (isAuthenticated) {
      history.replace('/account')
    }
  }, [history, isAuthenticated])

  return (
    <Layout pageTitle='Connexion'>
      <Form onSubmit={handleSubmit}>
        <FromInner>
          <FormGroup>
            <Label htmlFor='email'>Email : </Label>
            <Input
              type='email'
              id='email'
              name='email'
              placeholder='mail@mail.fr'
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor='password'>Mot de passe : </Label>
            <Input
              type='password'
              name='password'
              id='password'
              placeholder='Password'
              onChange={handleChange}
            />
          </FormGroup>
        </FromInner>
        <Submit />
      </Form>
    </Layout>
  )
}

export default Login
