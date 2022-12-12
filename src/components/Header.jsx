import React from 'react';
import globe from '/src/assets/globe.svg';

import './css/Header.css';

export default function Header() {
  return (
    <div className='header'>
      <div className='header-wrap'>
        <img src={globe} alt='Globe' className='header-img' />
        <span>places visited.</span>
      </div>
    </div>
  );
}
