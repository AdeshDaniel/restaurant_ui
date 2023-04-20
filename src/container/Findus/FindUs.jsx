import React from "react";
import { images } from "../../constants";
import { SubHeading } from "../../components";

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='contact'>
    <div className='app__wrapper_info'>
      <SubHeading title='Contact' />
      <h1 className='headtext__cormorant' style={{ marginBottom: "3rem" }}>
        Find us
      </h1>
      <div className='app__wrapper-content'>
        <p className='p__opensans'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea laboriosam
          minus repudiandae ullam?
        </p>
        <p
          className='p__cormorant'
          style={{ color: "#dcca87", margin: "2rem 0" }}
        >
          Opening Hours
        </p>
        <p className='p__opensans'>Mon - Fri: 10am - 8pm</p>
        <p className='p__opensans'>Sat - Sun: 12pm - 10pm</p>
      </div>
      <button className='custom__button' style={{ marginTop: "2rem" }}>
        Visit Us
      </button>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.findus} alt='findus' />
    </div>
  </div>
);

export default FindUs;
