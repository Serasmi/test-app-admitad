import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectImage } from './mainSlice';
import { add } from '../history/historySlice';

import Button from '../../components/Button';
import NoData from '../../components/NoData';

import './main.scss';

const Main = () => {
  const image = useSelector(selectImage);
  const dispatch = useDispatch();

  const handleClick = () => {
    if (image.url) {
      dispatch(add(image));
    }

    console.log('Load new image...');
  };

  return (
    <div className="main">
      {image.url ? <img src={image.url} alt={image.title} /> : <NoData>Изображение отсутствует</NoData>}
      <Button onClick={handleClick}>Загрузить</Button>
    </div>
  );
};

export default Main;
