import React from 'react';
import './FirstImageLayout.scss';

import image1 from '../../assets/photo1.jpg';
import image2 from '../../assets/photo2.jpg';

const FirstImageLayout = () => {

  return (
    <section className='ableton__firstlayout imagelayout__padding'>
      <div className="background" />
      <div className="grid">
        <img src={image1} alt="saucisse" className="image-left" />
        <div />
        <img src={image2} alt="saucisse" className="image-right" />
      </div>
    </section>
  );
};

export default FirstImageLayout;