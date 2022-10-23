import './App.css';
import cardlogo from './components/images/card-logo.svg'
import { useForm } from './hooks/useForm';
// import Modals from './Modals';
import Modal from './Modal';
import { useModal } from './hooks/useModal'

const initialForm = {
    name:'',
    numbersCard:'',
    month:'',
    year:'',
    cvv:''
}

const ValidationsForm = (form) =>{
    let errors = {}

    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;

    if(!form.name.trim()){
        errors.name = "Can't be blank"
    } else if(!regexName.test(form.name.trim())){
        errors.name = "Accepts only letters and spaces and blanks"
    }


    if(!form.numbersCard.trim()){
        errors.numbersCard = "Can't be blank"
    } else if(form.numbersCard.trim().length < 16){
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


function App() {

    const [isOpen, openModal, closeModal] = useModal(false)

    const {
         form,
         errors,
         handleBlur,
         handleChange,
         handleKeyPress,
         handleSubmit
    } = useForm(initialForm, ValidationsForm, openModal)

// 
  return (
    <div className="App" >
        <Modal isOpen={isOpen}  closeModal={closeModal}/>
        <form className='container' onSubmit={handleSubmit} >
            <div className='container-tarjeta'>
         
                <div className='tarjeta-front'>
                    <div>
                        <img src= {cardlogo} alt="logo" />
                    </div>

                    <div>
                        <span>{form.numbersCard ===''? '0000 0000 0000 0000': form.numbersCard}</span>
                    </div>

                    <div className='tarjeta-front-user'>

                        <span>{form.name ===''? 'Erick Sánchez': form.name.slice(0,18)}</span>
             
                        <span>
                                <span>{form.month ===''? '00' : form.month}</span>/
                                <span>{form.year ===''? '00' : form.year}</span>
                        </span>
                     
                    </div>
    
                </div>

                <div className='tarjeta-back'>
                    <p>{form.cvv ===''? '000' : form.cvv}</p>
                </div>

            </div>

            <div className='formulario'>
                <div className='div-label-cardholder'>
                    <label>CARDHOLDER NAME </label>
                    <input type="text" autoComplete='off' placeholder='e.g Erick Sánchez' name='name' value={form.name}
                    onChange={handleChange} onBlur={handleBlur} />

                    {errors.name && <p> {errors.name} </p>  }

                </div>

                <div className='div-label-cardnumber'>
                    <label> CARD NUMBER</label>
                    <input type="number" placeholder='e.g 1234 5678 9123 0000' name='numbersCard'value={form.numbersCard}
                    onKeyPress={handleKeyPress('numbersCard', form.numbersCard, 16)}
                    onChange={handleChange}  onBlur={handleBlur} />

                    {errors.numbersCard && <p>{errors.numbersCard}</p>  }

                </div>

                <div className='container-EXP-DATE-CVC'>
                    <div className='div-EXP-DATE'>
                        <div >EXP. DATE (MM/YY)</div>
                            <input type="number" placeholder='MM' name='month'value={form.month}
                            onKeyPress={handleKeyPress('month', form.month, 2)}
                            onChange={handleChange} onBlur={handleBlur} /> 

                
                            <input type="number" placeholder='YY' name='year' value={form.year}
                            onKeyPress={handleKeyPress('year', form.year, 2)}
                            onChange={handleChange}  onBlur={handleBlur}/>
                            
                    {errors.year ? <p>{errors.year}</p> : <p>{errors.month}</p> }

                    </div>
                    <div className='div-CVC'>
                        <div>CVC</div>
                        <input type="number" placeholder='e.g.123' maxLength={3} name='cvv' value={form.cvv}
                        onKeyPress={handleKeyPress('cvv', form.cvv, 3)}
                        onChange={handleChange}  onBlur={handleBlur}/>

                    {errors.cvv && <p>{errors.cvv}</p>  }

  
                    </div>
                </div>
                
                <input type='submit' value='Confirm' />
      
               

            </div>
        </form>
    </div>
  );
}

export default App;
