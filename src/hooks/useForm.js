import { useState } from 'react'

export const useForm = (initialForm, validationsForm, openModal) => {

    const [form, setForm] = useState(initialForm)
    const [errors, setErrors] = useState({ validado: false })

    const handleChange=(e)=>{
        let {name, value} = e.target
   
        if(name === "name"){
            if(value.length > 100) value = value.slice(0, 100)
            setForm({ ...form, name: value });
        }


        if (name === "numbersCard") {
            let formattedValue = value.replace(/\s/g, ""); // Elimina espacios en blanco existentes en nueva variable
          
            const alphanumericRegex = /^[0-9]*$/;   // Verificar si hay caracteres no permitidos
            if (formattedValue !== "" && !alphanumericRegex.test(formattedValue)) {
              return;
            }
          
            if (formattedValue.length > 16) {
              formattedValue = formattedValue.slice(0, 16);
            }
          
            let newValue = "";
            for (let i = 0; i < formattedValue.length; i++) {
              if (i > 0 && i % 4 === 0) {
                newValue += " "; // Agregar espacio cada 4 caracteres
              }
              newValue += formattedValue[i];
            }
          
            setForm({ ...form, numbersCard: newValue });
        }
          
          

        if (name === "month") {
            if(value.length > 2) value = value.slice(0,2)

            const numericValue = value.replace(/\s/g,"").replace(/\D/g,"");
        
            if (numericValue !== value) {
              setForm({ ...form, month: numericValue });
              return
            }
        
            setForm({ ...form, month: value });
        }


        if(name === "year"){
            if(value.length > 2) value = value.slice(0,2)

            const numericValue = value.replace(/\s/g,"").replace(/\D/g,"");
        
            if (numericValue !== value) {
              setForm({ ...form, year: numericValue });
              return
            }
        
            setForm({ ...form, year: value });
        }


        if(name === "cvv"){
            if(value.length > 2) value = value.slice(0,3)

            const numericValue = value.replace(/\s/g,"").replace(/\D/g,"");
        
            if (numericValue !== value) {
              setForm({ ...form, cvv: numericValue });
              return
            }
        
            setForm({ ...form, cvv: value });

        }
    }
    

    const handleBlur = (e) => {
        const { name, value } = e.target;
        const fieldError = validationsForm(form)[name];

        if (name === "month") {
            let newValue = value
            if(value.length === 1){
                newValue = "0"+value
                setForm({ ...form, month: newValue });
            } 
        }
      
        setErrors({
          ...errors,
          [name]: fieldError,
        });
    };
    
    
    const handleSubmit=(e)=>{
        e.preventDefault()
        const newErrors = validationsForm(form);
        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
            setForm(initialForm)
            setErrors({})
            openModal()
        }
    }


    return{
        form, errors, handleSubmit, handleChange, handleBlur
    }
}
