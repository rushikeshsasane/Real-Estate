import React from 'react'
import './Heros.css'
import hero from '../Images/hero-image.png'
import {HiLocationMarker} from 'react-icons/hi'
import CountUp from 'react-countup';
import {motion} from 'framer-motion'


const Heros = () => {
  return (
    <section className='hero-wrapper'>
    <div className='paddings innerWidth flexCenter hero-container'>
        <div className="flexColStart hero-left">
            {/* Left Section  */}
            <div className="hero-title">
              <div className="orange-circle"/>

              <motion.h1 initial={{ y: "2rem", opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 2, type: "ease-in",}}>
                Discover <br />
                Most Suitable <br /> Property
              </motion.h1>
            </div>

            <div className="flexColStart hero-des">
              <span className='secondaryText'>Find a Variety of properties that suit you very easily</span>
              <span className='secondaryText'>Forget all the difficulties in finding a residencies for you</span>
            </div>

              <div className="FlexCenter search-bar">
              <HiLocationMarker color="var(--blue)" size={30} />
              <input type="text" placeholder='Enter your location'/>
              <button className='button' >Search</button>
              </div>

              <div className="FlexCenter stats">
                <div className="FlexColCenter stat">
                  <span>
                    <CountUp start={8800} end={9000} duration={4} />
                    <span>+</span>
                    </span>
                  <span className='secondaryText box'>Premium Products</span>
                </div>

                <div className="FlexColCenter stat">
                  <span>
                    <CountUp start={1950} end={2000} duration={4} />
                    <span>+</span>
                    </span>
                  <span className='secondaryText box'>Happy Customers</span>
                </div>

                <div className="FlexColCenter stat">
                  <span>
                    <CountUp end={28} />
                    <span>+</span>
                    </span>
                  <span className='secondaryText box'>Award Winning</span>
                </div>
              </div>
        </div>
        <div className="flexCenter hero-right">
            <motion.div initial={{ x: "7rem", opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 2, type: "ease-in", }} className="image-container">
                <img src={hero} alt="" />
            </motion.div>
        </div>

    </div>

    </section>
  )
}

export default Heros;