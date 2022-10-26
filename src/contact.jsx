import React, { useState, useEffect } from 'react';
import Footer from './footer';

const Contact = () => {
  const [person, setPerson ] = useState({first_name: '', last_name: '', email: '', message: ''})
  const [people, setpeople] = useState([]);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
   const [checked, setChecked] = useState(true); 
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    console.log(name, value);
    setPerson({ ...person, [name]: value });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if(person.first_name && person.last_name && person.message && person.email){
      const newPerson = {...person, id: new Date().getTime().toString}
      setpeople([...people, newPerson]);
      setPerson({ first_name: '', last_name: '', email: '', message: ''})
    }
      setFormErrors(validate(person)); 
      setIsSubmit(true);
      if(checked){
        setChecked(false)
      }
      else{
        setChecked(true)
      }
  }
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.first_name) {
      errors.first_name = "Please enter your first name";
    }
    if (!values.last_name) {
      errors.last_name = "Please enter your laste name";
    }
    if (!values.message) {
      errors.message = "Please enter your message";
    }
    if (!values.email) {
      errors.email = "Please enter a valid email address";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    
    return errors;
  };
  
  return (

    <>
      <main className='contact-page'>
        <section className='contact'>
        
            <h1>Contact Me</h1>
            <p>Hi there, contact me to ask about anything you have in mind</p>
            <form action="/" className='form-control'>
              {Object.keys(formErrors).length === 0 && isSubmit ? (
              <h3 className="success-message" onSubmit={handleChange}>Form Submitted</h3>
              ) : <p></p> }
              <div className="box">

                <div>

                  <label htmlFor="first_name">First Name</label><br /><br />
                  <input 
                  type="text"
                  id='first_name' 
                  name='first_name'
                  placeholder='Enter your first name'
                  value={person.first_name}
                  onChange={handleChange}
                  required /><br /> <p>{formErrors.first_name}</p>

                </div>
                <div>

                  <label htmlFor="last_name">Last Name</label><br /><br />
                  <input 
                  type="text" 
                  id='last_name' 
                  name='last_name'
                  placeholder='Enter your last name'
                  value={person.last_name}
                  onChange={handleChange}
                  required /><br /><p>{formErrors.last_name}</p>

                </div>
              </div>
                <label htmlFor="email">Email</label><br /><br />
                <input 
                type="email" 
                id='email' 
                name='email'
                placeholder='yourname@email.com'
                value={person.email}
                onChange={handleChange}
                required /><br /><p>{formErrors.email}</p>
                <label htmlFor="message">Message</label><br /><br />
                <textarea 
                name="message" 
                id="message" 
                cols="30" 
                rows="5"
                value={person.message}
                onChange={handleChange}
                placeholder="Send me a message and I'll reply as soon as posssible..."
                required ></textarea><br /><p>{formErrors.message}</p><br />
                <label class="checkbox-contain">
                  <span> You agree to providing your data to Adexfox who may contact you.</span>
                  <input type="checkbox"
                  id="checkbox" 
                  name="checkbox" 
                  value={person.checkbox} />
                  <div class="checkbox-input"></div>
                </label>
                <button
                 id='btn__submit'
                 type='submit' 
                 className='btn'
                 onClick={handleSubmit}
                 >Send message</button>
            </form>
            

        </section>
        <footer>
          <Footer />
        </footer>
      </main>
        
    </>
  )
}

export default Contact