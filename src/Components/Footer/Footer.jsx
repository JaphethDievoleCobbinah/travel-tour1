import React, {useEffect} from 'react';
import './footer.scss';
import { FiSend } from "react-icons/fi";
import { MdTravelExplore } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import video2 from '../../Assets/vid2.mp4'

import Aos, { init } from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
    // React Hook to add scroll animation..........
    useEffect(()=>{
      Aos.init({duration: 2000})
    }, [])


  return (
    <section className='footer'>
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type='video/mp4'></video>
      </div>
      
      <div className="secContent container">
          <div className="contactDiv flex">
            <div data-aos='fade-up' className="text">
              <small>KEEP IN TOUCH</small>
              <h2>Travel with us</h2>
            </div>


            <div className="inputDiv flex">
                <input data-aos='fade-up' type="text" placeholder='Enter Email Address' />
                <button data-aos='fade-up' className='btn flex' type='submit'>
                SEND <FiSend  className='icon' />
                </button>
            </div>
          </div>



          <div className="footerCard flex">
               <div className="footerIntro flex">
                <div className="logoDiv">
                  <a href="#" className='logo flex'>
                  <MdTravelExplore className='icon' />  Travel and Tour.
                  </a>
                </div>

                <div data-aos='fade-up' className="footerParagraph">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                  Tenetur fugiat vitae exercitationem recusandae culpa similique 
                  minima, veritatis natus rerum quam, excepturi itaque adipisci repellendus
                  quod consequatur quisquam, dolorem voluptas provident.
                </div>

                <div data-aos='fade-up' className="footerSocials flex">
                <AiOutlineTwitter className='icon'/>
                <AiFillYoutube  className='icon' />
                <AiFillInstagram className='icon' />
                <FaTripadvisor className='icon' />
                </div>
               </div>
                

                {/* Group One */}
               <div className="footerLinks grid">
                <div data-aos='fade-up' data-aos-duration='3000' className="linkGroup">
                  <span className="groupTitle">
                    OUR AGENCY
                  </span>

                  <li className="footerList flex">
                    <FiChevronRight className='icon'/>
                    Services
                  </li>

                  <li className="footerList flex">
                    <FiChevronRight className='icon'/>
                    Insurance
                  </li>

                  <li className="footerList flex">
                    <FiChevronRight className='icon'/>
                    Agency
                  </li>

                  <li className="footerList flex">
                    <FiChevronRight className='icon'/>
                    Tourism
                  </li>

                  <li className="footerList flex">
                    <FiChevronRight className='icon'/>
                    Payment
                  </li>
                </div>

                {/* Group Two */}
               <div className="footerLinks grid">
                <div data-aos='fade-up' data-aos-duration='4000' className="linkGroup">
                  <span className="groupTitle">
                    PARTNERS
                  </span>

                  <li className="footerList flex">
                    <FiChevronRight className='icon'/>
                    Bookings
                  </li>

                  <li className="footerList flex">
                    <FiChevronRight className='icon'/>
                    Rent Cars
                  </li>

                  <li className="footerList flex">
                    <FiChevronRight className='icon'/>
                    Hostel Worlds
                  </li>

                  <li className="footerList flex">
                    <FiChevronRight className='icon'/>
                    Trivago
                  </li>

                  <li className="footerList flex">
                    <FiChevronRight className='icon'/>
                    TripAdvisor
                  </li>
                </div>

                {/* Group Three */}
               <div className="footerLinks grid">
                <div data-aos='fade-up' data-aos-duration='5000' className="linkGroup">
                  <span className="groupTitle">
                    LAST MINUTE
                  </span>

                  <li className="footerList flex">
                    <FiChevronRight className='icon'/>
                    London
                  </li>

                  <li className="footerList flex">
                    <FiChevronRight className='icon'/>
                    Kenya
                  </li>

                  <li className="footerList flex">
                    <FiChevronRight className='icon'/>
                    Dubai
                  </li>

                  <li className="footerList flex">
                    <FiChevronRight className='icon'/>
                    Rwanda
                  </li>

                  <li className="footerList flex">
                    <FiChevronRight className='icon'/>
                    Turkey
                  </li>
                </div>
               </div>

               </div>

               <div className="footerDiv flex">
                   <small>Japheth Website Theme</small>
                   <small>Copyright Reserved - 2024 Japheth Dievole Cobbinah</small>
               </div>

               </div>



          </div>
      </div>
    </section>
  )
}

export default Footer;
