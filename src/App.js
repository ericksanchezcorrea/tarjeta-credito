import { useState } from 'react';
import './App.css';
import cardlogo from './components/images/card-logo.svg'

function App() {

    const [RevisarCampos, setRevisarCampos] = useState(false)
    const [MostrarModal, setMostrarModal] = useState(false)

    const [values, setValues] = useState({
        name:'',
        numbersCard:'',
        month:'',
        year:'',
        cvv:''
    })


    const HandleInputChange = (e) =>{
        const {name, value} = e.target
        setValues({
            ...values,
            [name]:value,
        })
    }

    const EnviarFormulario = (boolean) => {
        setRevisarCampos(boolean)
        console.log(MostrarModal)
    } 

    const ActualizarEstado = () =>{
        setMostrarModal(true)
    }

    const HandleForm = (e) =>{

        e.preventDefault()
        EnviarFormulario(true)
        
        console.log(values)
    }
    

    const HandleKeyPress = (name,parametro,maxLength) => {
        if(parametro.length > maxLength) parametro =  setValues({...values,[name]:parametro.slice(0,maxLength)})   
        // if(values.cvv.length > 3) values.cvv = values.cvv.slice(0,3) 
    }

    

  return (
    <div className="App">
   
        <form className='container' onSubmit={HandleForm}>
            <div className='container-tarjeta'>
         
                <div className='tarjeta-front'>
                    <div>
                        <img src= {cardlogo} alt="logo" />
                    </div>

                    <div>
                        <span>{values.numbersCard ===''? '0000 0000 0000 0000': values.numbersCard}</span>
                    </div>

                    <div className='tarjeta-front-user'>
                        <span>{values.name ===''? 'Erick Sánchez ': values.name.slice(0,18)}</span>
                        <span>
                                <span>{values.month ===''? '00' : values.month}</span>/
                                <span>{values.year ===''? '00' : values.year}</span>
                        </span>
                     
                    </div>
    
                </div>

                <div className='tarjeta-back'>
                    <p>{values.cvv ===''? '000' : values.cvv}</p>
                </div>

            </div>

            <div className='formulario'>
                <div className='div-label-cardholder'>
                    <label>CARDHOLDER NAME </label>
                    <input type="text" autoComplete='off' placeholder='e.g Erick Sánchez' name='name' value={values.name}
                    onChange={HandleInputChange} />

                    { (RevisarCampos && values.name ==='' && <p>Can't be blank</p>)  }

                </div>

                <div className='div-label-cardnumber'>
                    <label> CARD NUMBER</label>
                    <input type="number" placeholder='e.g 1234 5678 9123 0000' name='numbersCard'value={values.numbersCard}
                    onKeyPress={HandleKeyPress('numbersCard', values.numbersCard, 16)}
                    onChange={HandleInputChange} />

                    { RevisarCampos ? <p> {values.numbersCard ==='' && <p>Can't be blank</p> } </p> : <p style={{display:'none'}}></p>}    
                    { RevisarCampos ? <p> {values.numbersCard !=='' && values.numbersCard.length < 16  && <p>Must contain 16 digits</p> } </p> : <p style={{display:'none'}}></p>}    

                </div>

                <div className='container-EXP-DATE-CVC'>
                    <div className='div-EXP-DATE'>
                        <div >EXP. DATE (MM/YY)</div>
                            <input type="number" placeholder='MM' name='month'value={values.month}
                            onKeyPress={HandleKeyPress('month', values.month, 2)}
                            onChange={HandleInputChange} />

                
                            <input type="number" placeholder='YY' name='year' value={values.year}
                            onKeyPress={HandleKeyPress('year', values.year, 2)}
                            onChange={HandleInputChange}/>
                            
                    { RevisarCampos && <p> {values.month ==='' || values.year ==='' ? <p>Can't be blank</p>: <p style={{display:'none'}}></p> } </p> }
                    { RevisarCampos && <p> {values.year !== '' && (22 > values.year || values.year> 30)  ? <p>Check your card</p>: <p style={{display:'none'}}></p> } </p> }
                    { RevisarCampos && values.month !=='' && <p> {values.month > 12 || values.month < 1 ? <p>Check your card</p> : <p style={{display:'none'}}></p>  } </p> }

                    </div>
                    <div className='div-CVC'>
                        <div>CVC</div>
                        <input type="number" placeholder='e.g.123' maxLength={3} name='cvv' value={values.cvv}
                        onKeyPress={HandleKeyPress('cvv', values.cvv, 3)}
                        onChange={HandleInputChange}/>

                    { RevisarCampos ? <p> {values.cvv ==='' && <p>Can't be blank</p> } </p> :<p style={{display:'none'}}></p>}
                    { RevisarCampos ? <p> {values.cvv !=='' && values.cvv.length < 3  && <p>Must contain 3 digits</p> } </p> : <p style={{display:'none'}}></p>} 
  
                    </div>
                </div>
                
                <input type='submit' value='Confirm'  />
                

            </div>
        </form>
    </div>
  );
}

export default App;
