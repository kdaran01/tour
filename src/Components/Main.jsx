import React, { useEffect } from 'react'
import './Main.css'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpg'
import img6 from '../assets/img6.jpg'
import { GrLocationPin } from "react-icons/gr";
import { FaClipboard } from "react-icons/fa";

import Aos from 'aos'
import 'aos/dist/aos.css'


const data = [
  {
    id : 1,
    imgSrc : img1,
    destination : "Taj Mahal",
    location : "Agra",
    grade : "An Immortal Symbol of Love",
    fees : "Rs 20,000 ",
    description : "Majestically located on the banks of Yamuna River, this wonder of the world was built by the Mughal Emperor Shah Jahan as a memorial for his beloved wife Mumtaz Mahal."
  },
  {
    id : 2,
    imgSrc : img2,
    destination : "Hawa Mahal",
    location : "Jaipur",
    grade : "A Five-Storeyed Historic Landmark",
    fees : "Rs 15,000 ",
    description : "An iconic landmark of the city, the honeycomb-shaped palace features beautiful jharokhas and windows. This five-storey building has been built without a foundation and is known for its exceptional ventilation, which is also the reason behind its name, Hawa Mahal, which literally translates to ‘Palace of the Winds’."
  },
  {
    id : 3,
    imgSrc : img3,
    destination : "Golden Temple",
    location : "Amritsar",
    grade : "Holiest Sikh Shrine",
    fees : "Rs 18,000 ",
    description : "Also known as Sri Harmandir Sahib, Golden Temple is considered to be the most important pilgrimage site amongst Sikhs and will leave you in awe with its jaw-dropping gold and marble edifice."
  },
  {
    id : 4,
    imgSrc : img4,
    destination : "Aguada Fort",
    location : "Goa",
    grade : "Beautiful Portuguese architecture",
    fees : "Rs 12,000 ",
    description : "The fort overlooks the confluence of Mandovi River and the Arabian Sea. This beautiful red-brown fort houses the Central Jail and a 19th century lighthouse."
  },
  {
    id : 5,
    imgSrc : img5,
    destination : "Mehrangarh Fort",
    location : "Jodhpur",
    grade : "One of India's Largest Forts",
    fees : "Rs 15,000 ",
    description : "Built by the Rathore clan of Jodhpur in 1460, the well-preserved Mehrangarh Fort towers above 400 feet, overlooking the city."
  },
  {
    id : 6,
    imgSrc : img6,
    destination : "Charminar",
    location : "Hyderabad",
    grade : "Architectural Icon of Hyderabad",
    fees : "Rs 10,000 ",
    description : "Among the most recognizable monuments in India, Charminar is an ancient mosque built over 400 years ago by the Qutb Shahi dynasty after a plague forced them to shift their empire from Golconda to the new city of Hyderabad."
  },

  
]

const Main = () => {

  useEffect(()=>{
    Aos.init({duration : 2000})
  },[])

  return (
    <section className="main container section">
      <div data-aos="fade-right" className="secTitle">
        <h3 className="title">
          Most Visited Places.
        </h3>
      </div>

      <div className="secContent grid">
        {
          data.map(({id,imgSrc,destination,location,grade,fees,description})=>{
            return(
              <div key={id} data-aos="fade-up" className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={destination} />
                </div>
                <div className="cardInfo">
                  <h4 className="destTitle">{destination}</h4>
                  <span className="continent flex">
                    <GrLocationPin className='icon' />
                    <span className="name">{location}</span>
                  </span>
                  <div className="fees flex">
                    <div className="grade">
                      <span>{grade}</span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>
                  <div className="desc">
                    <p>{description}</p>
                  </div>
                  <button className='btn flex'>
                    DETAILS <FaClipboard className="icon" />
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