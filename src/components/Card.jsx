import React from 'react';
import pin from '/src/assets/location-pin.svg';

import './css/Card.css';

export default function Card(props) {
  return (
    <div className='card'>
      <div className='card-wrap'>
        <div className='card-img'>
          <img
            src={props.imageUrl}
            alt={props.title}
            className='card-img__inner'
          />
        </div>

        <div className='card-content'>
          <div className='card-location'>
            <img src={pin} alt='Location Pin' className='card-location__pin' />
            <span>{props.location}</span>
            <a
              href={props.googleMapsUrl}
              target='_blank'
              rel='noopener noreferrer'
            >
              View on Google Maps
            </a>
          </div>

          <div className='card-title'>
            <h1>{props.title}</h1>
          </div>

          <div className='card-date'>
            <h2>
              {props.startDate} - {props.endDate}
            </h2>
          </div>

          <div className='card-description'>
            <p>{props.description}</p>
          </div>
        </div>
      </div>

      {props.id !== props.array.length && (
        <div className='card-divider'>
          <div className='card-divider__inner'></div>
        </div>
      )}
    </div>
  );
}
