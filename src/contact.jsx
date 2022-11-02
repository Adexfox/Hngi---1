import React from 'react';
import Footer from './footer';

const Contact = () => {
  return (
    <>
      <main className='contact-page'>
        <section className='contact'>
            <h1>Contact Me</h1>
            <p>Hi there, contact me to ask about anything you have in mind</p>
            <form action="/" className='form-control'>
              <div className="box">

                <div>

                  <label htmlFor="first_name">First Name</label><br /><br />
                  <input 
                  type="text"
                  id='first_name' 
                  name='first_name'
                  placeholder='Enter your first name'
                  required /><br /><br />

                </div>
                <div>

                  <label htmlFor="last_name">Last Name</label><br /><br />
                  <input 
                  type="text" 
                  id='last_name' 
                  name='last_name'
                  placeholder='Enter your last name'
                  required /><br /><br />

                </div>
              </div>
                <label htmlFor="email">Email</label><br /><br />
                <input 
                type="email" 
                id='email' 
                name='email'
                placeholder='yourname@email.com'
                required /><br /><br />
                <label htmlFor="message">Message</label><br /><br />
                <textarea 
                name="message" 
                id="message" 
                cols="30" 
                rows="5"
                placeholder="Send me a message and I'll reply as soon as posssible..."
                required ></textarea><br /><br />
                <input 
                type="checkbox" 
                id="checkbox" 
                name="checkbox" 
                value="" 
                placeholder=''/>
                <label for="checkbox" id='checkbox-text'> You agree to providing your data to (name) who may contact you.</label><br /><br />
                <button id='btn__submit' type='submit' className='btn'>Send message</button>
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