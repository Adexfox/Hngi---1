import React from 'react';
import item from './item.jsx';
import { FaSlack, FaGithub } from "react-icons/fa";
import { IconContext } from 'react-icons/lib/esm/iconContext';

const Profile = () => {

  return (
    <IconContext.Provider value={{ style: {marginRight:  '0.5rem'}, className: 'social'}}>
        <main>

            {item && item.map(( props )=>{
                const { id, text, url } = props;
                return(
                    <div className='cta'>
                        <a href={url}>

                            <button className='btn' id={id}>{ text }</button>

                        </a>
                    </div>
                );
            })}
            <header>
                <div id='profile__img'></div>
                <h3>Adewale Adeola</h3>

            </header>
            <footer>
                <FaSlack />
                <FaGithub />
            </footer>
        </main>
    </IconContext.Provider>
  )
}

export default Profile