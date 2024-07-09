import React, {useEffect} from 'react';
import './main.scss';
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";
import img1 from '../../Assets/img1.jpg';
import img2 from '../../Assets/img2.jpg';
import img3 from '../../Assets/img3.jpg';

import Aos, { init } from 'aos';
import 'aos/dist/aos.css';

const Data = [
  {
    id: 1,
    imgSrc: img1,
    desTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description:'imply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.'
  },

  {
    id: 2,
    imgSrc: img2,
    desTitle: 'Accra',
    location: 'Ghana',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description:'imply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.'
  },

  {
    id: 3,
    imgSrc: img3,
    desTitle: 'Bora',
    location: 'Dubai',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description:'imply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.'
  },

]

const Main = () => {
   // React Hook to add scroll animation..........
   useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return (
    <section className='main continer section'>

        <div className="secTitle">
          <h3 data-aos='fade-right' className="title">
            Most visited destinations
          </h3>
        </div>

        <div className="secContent grid">

          {
            Data.map(({id, imgSrc, desTitle, location, grade, fees, description})=> {
                return(
                  <div key={id} data-aos='fade-up' className="singleDestination">
                    
                    <div className="imageDiv">
                      <img src={imgSrc} alt={desTitle} />
                    </div>

                    <div className="cardInfo">
                      <h4 className="destTitle">{desTitle}</h4>
                      <span className="continent flex">
                      <HiOutlineLocationMarker className='icon' />
                      <span className="name">
                        {location}
                      </span>
                      </span>

                      <div className="fees flex">
                        <div className="grade">
                          <span>{grade}<small>+1</small></span>
                        </div>
                        <div className="price">
                          <h5>{fees}</h5>
                        </div>
                      </div>

                      <div className="desc">
                        <p>{description}</p>
                      </div>

                      <button className='btn flex'>
                        DETAILS <HiOutlineClipboardCheck className='icon' />
                      </button>
                    </div>
                  </div>
                )
            })
          }

        </div>
    </section>
  )
}

export default Main
