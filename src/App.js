import './App.css';
import Modal from './Modal';
import cardlogo from './components/images/card-logo.svg'
import { useForm } from './hooks/useForm';
import { useModal } from './hooks/useModal'
import validationsForm from './helpers/validationsForm';

const initialForm = {
    name:'',
    numbersCard:'',
    month:'',
    year:'',
    cvv:''
}


function App() {

    const [isOpen, openModal, closeModal] = useModal(false)

    const {
        form,
        errors,
        handleBlur,
        handleChange,
        handleSubmit
    } = useForm(initialForm, validationsForm, openModal)


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
                    <input type="text" placeholder='e.g 1234 5678 9123 0000' name='numbersCard'value={form.numbersCard}
                    onChange={handleChange}  onBlur={handleBlur} />

                    {errors.numbersCard && <p>{errors.numbersCard}</p>  }

                </div>

                <div className='container-EXP-DATE-CVC'>
                    <div className='div-EXP-DATE'>
                        <div >EXP. DATE (MM/YY)</div>
                            <input type="text" placeholder='MM' name='month'value={form.month}
                            onChange={handleChange} onBlur={handleBlur} /> 

                
                            <input type="text" placeholder='YY' name='year' value={form.year}
                            onChange={handleChange}  onBlur={handleBlur}/>
                            
                    {errors.year ? <p>{errors.year}</p> : <p>{errors.month}</p> }

                    </div>
                    <div className='div-CVC'>
                        <div>CVC</div>
                        <input type="text" placeholder='e.g.123' maxLength={3} name='cvv' value={form.cvv}
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