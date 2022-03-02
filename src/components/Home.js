import React from 'react';
import img1 from '../asserts/1.png';
import img2 from '../asserts/2.png';
import img3 from '../asserts/3.png';
import logo from '../asserts/logo.png';
import phone from '../asserts/phone.png';
import facebook from '../asserts/facebook.png';
import globe from '../asserts/globe.png';

const Home = () => {
  return (
    <div className='home container-fuild'>
        <div className='logo' ><img src={logo} id="logo" alt="logo"/></div>

        <div className='col-sm-12 row' id="groupPhoto">


            <div className='col-sm-4'>
                <img src={img1} alt="award" id="award"></img>
            </div>

            <div className='col-sm-8'>
                
                <h5><strong>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</strong></h5>
                <ul>
                    <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
                    <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. </li>
                </ul>
                <img src={img2} alt='groupPhoto' id="photo"/>
                <p>Government of India has awarded the <strong>"National Energy Conservation Award 2018"</strong>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
            </div>

        </div>

        <div className='col-sm-12' id="mechanic">
            <p><strong>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. </strong></p>
            <div className='col-sm-10 mx-auto'>
                <img src={img3} alt="mechanics" id="tools"/>
            </div><br/>
            <p className="text-center">Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </p>
            
        
        </div>

        <div className='col-sm-12 text-center' id="footer">
            <p><strong>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</strong></p>

            <ul className='row'>
                <li>CHEMICALS & PROCESS</li>
                <li>POWER</li>
                <li>WATER & WASTE WATER</li>
                <li>OILS & GAS</li>
                <li>PHARMA</li>
                <li>SUGARS & DISTILLERIES</li>
                <li>PAPER & PULP</li>
                <li>MARINE & DEFENCE</li>
                <li>METAL & MINING</li>
                <li>FOOD & BEVERAGE</li>
                <li>PETROCHEMICAL & REFINERIES</li>
                <li>SOLAR</li>
                <li>BUILDING</li>
                <li>HVAC</li>
                <li>FIRE FIGHTING</li>
                <li>AGRICULTURE & RESIDENTIAL</li>
            </ul><br/>

            <div id="footerBottom" >
                <small style={{backgroundColor:'transparent'}}><div style={{backgroundColor:'transparent'}}><img src={phone} alt="phone" width='30px' style={{backgroundColor:'transparent',borderRadius:'75%'}}/>TollFree <strong style={{backgroundColor:'transparent'}}>1800 200 1234</strong></div></small>
                <small style={{backgroundColor:'transparent'}}><div style={{backgroundColor:'transparent'}}><a href='www.facebook.com/cripumps' style={{color:'white'}}><img src={facebook} alt="facebook" width='35px' style={{backgroundColor:'transparent'}}/>www.facebook.com/cripumps</a></div></small>
                <small style={{backgroundColor:'transparent'}}><div style={{backgroundColor:'transparent'}}><a href='www.crigroups.com'><img src={globe} alt="globe" width='30px' style={{backgroundColor:'transparent'}}/>www.crigroups.com</a></div></small>
            </div>
        
        </div>

    </div>
  )
}

export default Home