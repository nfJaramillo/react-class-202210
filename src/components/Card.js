import React from 'react';
import './Card.scss';

export const Card = (props) => {
  const { title, url, description } = props;
  return (
    <div className='card'>
      <img className='card-img' src={url} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};
