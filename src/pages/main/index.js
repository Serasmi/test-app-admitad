import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchImage } from '../../store/main/actions';
import { selectImage, selectLoading, set } from './mainSlice';
import { add } from '../history/historySlice';

import Button from '../../components/Button';
import NoData from '../../components/NoData';

import './main.scss';

const Main = () => {
  const image = useSelector(selectImage);
  const isLoading = useSelector(selectLoading);
  const dispatch = useDispatch();

  const handleClick = () => {
    if (image.image_url) {
      dispatch(add(image));
    }

    dispatch(fetchImage());
  };

  useEffect(() => {
    dispatch(fetchImage());

    return () => dispatch(set({}));
  }, []);

  return (
    <div className="main">
      {image.image_url ? <img src={image.image_url} alt={image.title} /> : <NoData>Изображение отсутствует</NoData>}
      <Button disabled={isLoading} onClick={handleClick}>
        {isLoading ? 'Загрузка...' : 'Загрузить'}
      </Button>
    </div>
  );
};

export default Main;
