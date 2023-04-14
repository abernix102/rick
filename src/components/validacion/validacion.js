const Validation = (userData)=>{
    let errors = {};
    if(!userData.email){
        errors.email = 'este campo no puede estar vacío pa'
    } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(userData.email)){
        errors.email = 'el email es inválido pa'
    } else if (userData.email.length > 35){
        errors.email = 'no puede ser mayor a 35 caracteres'
    }else{
        errors.email ='';
    }

    if(!userData.password){
        errors.password = 'este campo no puede estar vacío pa'
    } else if (!userData.password.match(/\d/)){
        errors.password ='debe tener al menos un caracter en minúscula, uno en mayúscula, un número, un caracter especial, y tener entre 8 y 20 caracteres'
    }else{
        errors.password = ''
    }
    return errors;
}
export default Validation;