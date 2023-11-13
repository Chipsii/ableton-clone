import React from 'react'; 
import './ThirdImageLayout.scss';

import image1 from '../../assets/photo6.jpg';
import image2 from '../../assets/photo7.jpg';

const ThirdImageLayout = () => {

  return (
    <section className='ableton__thirdlayout imagelayout__padding'>
        <div className='background' />
        <div className="grid">
          <img src={image1} alt="saucisse" className="image-left" />
          <div />
          <img src={image2} alt="saucisse" className="image-right" />
        </div>
    </section>
  );
};

export default ThirdImageLayout;