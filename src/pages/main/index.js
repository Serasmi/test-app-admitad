import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectImage } from './mainSlice';
import { add } from '../history/historySlice';

import Button from '../../components/Button';
import './main.scss';

const Main = () => {
  const image = useSelector(selectImage);
  const dispatch = useDispatch();

  const handleClick = () => {
    if (image.url) {
      dispatch(add(image));
      console.log('Saved!');
    }

    console.log('Load new image...');
  };

  return (
    <div className="main">
      {image.url ? <img src={image.url} alt={image.title} /> : <div className="hint">Изображение отсутствует</div>}
      <Button onClick={handleClick}>Загрузить</Button>
    </div>
  );
};

export default Main;
