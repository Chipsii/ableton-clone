import React from 'react';
import './SecondImageLayout.scss';

import image1 from '../../assets/photo3.jpg';
import image2 from '../../assets/photo4.jpg';
import image3 from '../../assets/photo5.jpg';

const SecondImageLayout = () => {

  return (
    <section className='ableton__secondlayout imagelayout__padding'>
        <div className='background' />
        <div className='container-grid'>
          <div className='inner-grid'>
            <img src={image1} alt='people writing on white board' />
            <div />
            <img src={image2} alt='front sign of a music shop' />
          </div>
          <div />
          <img src={image3} alt='studio setc' className='image-right' />
        </div>
    </section>
  );
};

export default SecondImageLayout; 