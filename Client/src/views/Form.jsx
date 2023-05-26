import { useState } from "react"
import ImgRick from '../assets/rick-and-morty-31043.png'
import Icon from '../assets/rick-and-morty-31001.png'
import { FormS, SectionForm, ImgCont, LabelForm, InputForm, Btn, Cara} from "../components/form/form"
import Validation from "../components/validacion/validacion"

const Form = ({ login }) => {
  const [userData, setUserData] = useState({
    email: '',
    password: ''
  })

  const [errors, setErrors] = useState({
    email: '',
    password: ''
  })

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value })
    setErrors(Validation({ ...userData, [event.target.name]: event.target.value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  }

  return (
    <SectionForm>
      <Cara src={Icon} alt="cara" />
      <ImgCont src={ImgRick} alt='rick' />
       <FormS onSubmit={handleSubmit}>
      <LabelForm htmlFor="email">Email:</LabelForm>
      <InputForm type="email" name="email" value={userData.email} id="email" onChange={handleChange} />
      {errors.email && <p>{errors.email}</p>}

      <LabelForm htmlFor="password">Contraseña:</LabelForm>
      <InputForm type="password" name="password" value={userData.password} id="password" onChange={handleChange} />
      {errors.password && <p>{errors.password}</p>}

      <Btn type="submit">Submit</Btn>
    </FormS>
    </SectionForm>
  )
}

export default Form
