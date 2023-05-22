const validationsForm = (form) =>{
    let errors = {}

    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;


    if(!form.name.trim()){
        errors.name = "Can't be blank"
    } else if(!regexName.test(form.name.trim())){
        errors.name = "Accepts only letters and spaces and blanks"
    }


    if(!form.numbersCard.trim()){
        errors.numbersCard = "Can't be blank"
    } else if(form.numbersCard.trim().length < 19){
        errors.numbersCard = "Must be 16 digits"
    }


    if(!form.month.trim()){
        errors.month = "Can't be blank"
    }else if( form.month.trim() > 12){
        errors.month = "Check your card"
    }else if( form.month.trim() < 1){
        errors.month = "Check your card"
    }else if(!form.year.trim()){
        errors.year = "Can't be blank"
    }else if( form.year.trim() < 22){
        errors.year = "Check your card"
    }else if( 31 < form.year.trim()){
        errors.year = "Check your card"
    }


    if(!form.cvv.trim()){
        errors.cvv = "Can't be blank"
    }else if(form.cvv.length !== 3){
        errors.cvv = "Must be 3 digits"
    }

    return errors
}

export default validationsForm