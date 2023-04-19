import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants/";

import "./Chef.css";

const Chef = () => (
  <div className='app__bg section__padding app__wrapper'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt='chef' />
    </div>
    <div className='app__wrapper_info'>
      <SubHeading title="Chef's word" />
      <h1 className='headtext__cormorant'> What we believe in</h1>

      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt="chef's quote" />
          <p className='p__opensans'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse harum
            fuga
          </p>
        </div>
        <p className='p__opensans'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde tempore
          tempora aut dolores repellendus iure culpa animi error natus rerum.
        </p>
      </div>

      <div className='app__chef-sign'>
        <p>Kevin Luo</p>
        <p className='p__opensans'>Chef and Founder</p>
        <img src={images.sign} alt='sign' />
      </div>
    </div>
  </div>
);

export default Chef;
