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
    } else if(calculateSum(form) % 10 !== 0){
        errors.numbersCard = "Enter a valid card"
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


function calculateSum(form){
    let sumaTotal = 0
    let sumaParcial 
    let arrayParametro = form.numbersCard.replace(/\s/g, "").split('')
        
    for (let i = 0; i < form.numbersCard.replace(/\s/g, "").length; i++) {
        if(i%2 === 0) {
            sumaParcial = arrayParametro[i]*2
            if(sumaParcial >= 10) {                
                let array = String(sumaParcial).split('')
                sumaParcial = Number(array[0])+Number(array[1])
            }
            sumaTotal += sumaParcial
        }

        if(i%2 !== 0){
            sumaTotal += arrayParametro[i]*1
        }
    }
    return sumaTotal
}