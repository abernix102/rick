import { useState } from "react"
import Validation from "../components/validacion/validacion"
const Form = ({login})=>{
    const [userData, setUserDAta] = useState({
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState({
        email: '',
        password: ''
    })
    const handleChange = (event)=>{
        setUserDAta({...userData,[event.target.name]: event.target.value})
        setErrors(Validation({...userData,[event.target.name]: event.target.value}))
    }
    const handleSumbit =(event)=>{event.preventDefault(); login(userData)}
    return(
        <form onSubmit={handleSumbit}>
            <label htmlFor="email"></label>
            <input type="email" name="email" value={userData.email} id="email" onChange={handleChange}/>
            {errors.email && <p>{errors.email}</p>}
            <label htmlFor="password"></label>
            <input type="password" name="password" value={userData.password} id="password"  onChange={handleChange}/>
            {errors.password && <p>{errors.password}</p>}
            <button >Submit</button>
        </form>
    )
}

export default Form