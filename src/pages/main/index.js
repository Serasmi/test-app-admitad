import React from 'react';
import Button from '../../components/Button';
import './main.scss';

const Main = ({ image = {} }) => {
  const handleClick = () => {
    if (image.url) {
      console.log('Saved!');
    } else {
      console.log('Load...');
    }
  };

  return (
    <div className="main">
      {image.url ? <img src={image.url} alt={image.title} /> : <div className="hint">Изображение отсутствует</div>}
      <Button onClick={handleClick}>Загрузить</Button>
    </div>
  );
};

export default Main;
