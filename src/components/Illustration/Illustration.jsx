import React from 'react';
import './Illustration.scss';

import image from '../../assets/photo9.jpg';

const Illustration = () => {

  return (
    <section className='ableton__illustration section__padding'>
        <img src={image} alt="" />
    </section>
  );
};

export default Illustration;