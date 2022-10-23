import { useState } from 'react'

export const useForm = (initialForm, validateForm, openModal) => {

    const [form, setForm] = useState(initialForm)
    const [errors, setError] = useState({ validado: false })

    const handleChange = (e) =>{ 
        const {name, value} = e.target
        setForm({
            ...form,
            [name]:value
        })
    }
    
    const handleBlur = (e) =>{ 
        handleChange(e)
        setError(validateForm(form))
    }  


    const handleKeyPress = (name, value, maxLength) => {
        if(value.length > maxLength) value =  setForm({...form,[name]:value.slice(0,maxLength)})   
        // if(values.cvv.length > 3) values.cvv = values.cvv.slice(0,3)
    }
    
    
    const  handleSubmit = async (e) =>{ 
        e.preventDefault();
        await setError(validateForm(form))    
        
        if(Object.keys(errors).length === 0 ){
            openModal()
            setForm(initialForm)
            setError({ validado: false })
            console.log(form)
        }
        else{return;}
    }


    return{
        form, errors, handleKeyPress, handleSubmit, handleChange, handleBlur
    }
}
