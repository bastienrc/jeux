import Layout from '../components/Layout'

const SignUp = () => {
  return (
    <Layout pageTitle='Inscription'>
      <form id='SignUpForm'>
        <div className='form-group'>
          <label for='email'>Adresse mail</label>
          <input type='email' id='email' />
        </div>
        <div className='form-group'>
          <label for='password'>Mot de passe</label>
          <input type='password' id='password' />
        </div>
        <div className='form-group'>
          <label for='avatar'>Avatar</label>
          <input type='text' id='avatar' />
        </div>
        <button className='btn btn-success'>Inscription</button>
      </form>
    </Layout>
  )
}

export default SignUp
