import React from 'react'
import emailjs from 'emailjs-com'
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton
} from './SigninElements'

const SignIn = () => {
  function sendEmail (e) {
    e.preventDefault()

    emailjs.sendForm('service_7ppi6hs', 'template_utztvin', e.target, 'user_BUC6DJoId8rYPu5vkzwJn')
      .then((result) => {
        console.log(result.text)
      }, (error) => {
        console.log(error.text)
      })
    e.target.reset()
    console.log('hitlolz')
  }

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to='/'>Bronson Perez</Icon>
          <FormContent>
            <Form onSubmit={sendEmail}>
              <FormH1>Email Me</FormH1>
              {/* INDENT */}
              <FormLabel htmlFor='for'>Your Email</FormLabel>
              <FormInput type='text' name='email' required />
              {/* INDENT */}
              <FormLabel htmlFor='for'>Your Name</FormLabel>
              <FormInput type='text' name='from_name' required />
              {/* INDENT */}
              <FormLabel htmlFor='for'>Your Messege</FormLabel>
              <FormInput type='text' name='message' required />
              {/* INDENT */}
              <FormButton type='submit' value='Send'>Send</FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default SignIn
