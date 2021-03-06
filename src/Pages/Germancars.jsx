import React from 'react'

import HeroB from '../HeroComponents/HeroB';

import "bootstrap/dist/css/bootstrap.min.css";
import Blog from '../Components/Blog'
import Footer from '../Components/Footer'
import { useTheme, useThemeUpdate } from '../Components/ThemeContext';
import Postsonpage1 from '../Components/Postsonpage1';


function Germancars() {
    const darkTheme = useTheme()
    const toggleTheme = useThemeUpdate()
    const themeStyles = {
        backgroundColor: darkTheme ? '#333' : '#CCC',
        color: darkTheme ? '#CCC' : '#333'
    }
    return (
      
        <div style={ themeStyles }  >
            <HeroB />
            <div  >
                <div className="first-section">
                  
                    <input type="checkbox" class="toggle" checked onClick={toggleTheme} />
                
                </div>
           <Blog/>
           <Postsonpage1/>
            </div>
           <Footer/>
        </div>
       
    )
}

export default Germancars;
