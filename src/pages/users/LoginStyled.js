import styled from 'styled-components'

export const Input = styled.input`
  background: none;
  outline: none;
  border: none;
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
  &::placeholder {
    color: #CCC;
  }
  &:focus, &:valid {
    background-color: #fff;
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
  }
`

export const Submit = styled.input.attrs({
  type: 'submit',
  value: 'Se connecter'
})`
  display: block;
  width: 100%;
  min-height: 30px;
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

export const Form = styled.form`
  display: block;
  position: relative;
  max-width: 400px;
  margin: auto;
  padding: 50px 30px;
  background-image: linear-gradient(to bottom, #00BC7E, #108775);
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
  border-radius: 16px;
  width: 100%;
`

export const FromInner = styled.div`
  position: relative;
  display: block;
  background-color: #fff;
  padding: 30px;
  z-index: 2;
`

export const Label = styled.label`
  display: block;
  color: #999;
  font-size: 14px;
  margin-bottom: 5px;
`

export const FormGroup = styled.div`
  margin-bottom: 30px;
`

export const Error = styled.div`
  padding: 10px 15px;
  background-color: #fff;
  border-radius: 8px;
  margin-bottom: 15px;
  color: red;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
`
