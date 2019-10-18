import React,{useState, useEffect} from 'react';
import DateTimePicker from 'react-datetime-picker';
import Schedule from './Schedule'
import { conditionalExpression } from '@babel/types';
const Form = () => {
    
    const [values, setValues] = useState({
      name:'',
      email:'',
      phone:'',
      date: new Date(),
      
      success:false
    
  })
    const {name, email, phone, date, success} = values
  
  const handleChange = name => event => {
    setValues({...values, [name]:event.target.value});
  
  }
  const clickSubmit = (event) => {
    //prevent browser reload when button clicked
    event.preventDefault()
    setValues({...values})
    Schedule({name, email, phone,date})
    //if date is not present
    .then(data =>{
        
        setValues({
                ...values,
                name:'',
                email:'',
                phone:'',
                date:'',
               
                success:true})
        }
         
  
  )
  
      
  //array.push(data)
}
      
 const ScheduleForm=()=>(
      <form >
          <div className="form-group">
                <label className="text-muted">Name</label>
                <input onChange={handleChange('name')} type="text" className="form-control" 
                value = {name}
                
                />
            </div>
       
            <div className="form-group">
                <label className="text-muted">Email</label>
                <input onChange={handleChange('email')} type="email" className="form-control" 
                value = {email}
                />
            </div>
            <div className="form-group">
                <label className="text-muted">Phone</label>
                <input onChange={handleChange('phone')} type="tel" className="form-control" 
                value={phone}
                />
            </div>
            <div className="form-group"></div>
          <label className="text-muted">Pick date and time</label>
          <DateTimePicker onChange={handleChange} value={date} />
          <button onClick ={clickSubmit} className="btn btn-primary">
                Submit
            </button>
          </form>
  )

const showSuccess = () => {
    return(
    <div className="alert alert-info" style={{display: success ? '':'none'}}>
        New appointment is created. 
    </div>
    );
}

return(
<div>
{showSuccess()}
       
       {ScheduleForm()}
       
</div>    
);
};

export default Form;
      
  
  
  