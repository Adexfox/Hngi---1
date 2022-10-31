import React from 'react';
import item from './item.jsx';
import { FaGithub } from "react-icons/fa";
import { IconContext } from 'react-icons/lib/esm/iconContext';
import { RiShareForwardLine } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";

const Profile = () => {

  return (
    <IconContext.Provider value={{ size: '1.40rem', style: {marginRight:  '0.5rem'}, className: 'social'}}>
        <main>

            {item && item.map(( props )=>{
                const { id, text, url, title } = props;
                return(
                    <div className='cta'>
                        <a href={url} id={id} title ={title}>

                            <button className='btn'>{ text }</button>

                        </a>
                    </div>
                );
            })}
            <section className='profile-section'>
                <div id='profile__img'>
                    <div className='overlayer'>
                        <img src="images/cam.svg" alt="" className='cam'/>
                    </div>
                </div>
                <h3 id='twitter'>@Adexfox20</h3> 

                   { /******************************
                      SLACK USERNAME === ADEXFOX 
                     ******************************/}
                {/* <h3 id='slack'>Adexfox</h3> */}

                <RiShareForwardLine className= 'share-1' size= '2rem'/>
                <BsThreeDots className= 'share-2' size= '2rem'/>

            </section>
            <div className='icons'>
                <a href='/' className='icon-1'>

                    <img src="images/slack.svg" alt=""/>
                </a>
                <a href="https://github.com/Adexfox">
                    <FaGithub />
                </a>
            </div>
            <footer>
                <img src="images/zuri.svg" alt="" />
                <h3>HNG Internship 9 Frontend Task</h3>
                <img src="images/14g.svg" alt="" />
            </footer>
        </main>
    </IconContext.Provider>
  )
}

export default Profile