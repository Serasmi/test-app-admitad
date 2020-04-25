import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove, selectImages } from './historySlice';

import NoData from '../../components/NoData';
import PictureRow from '../../components/PictureRow';

const History = () => {
  const images = useSelector(selectImages);
  const dispatch = useDispatch();

  const onRemove = (createdAt) => dispatch(remove(createdAt));

  return (
    <div className="history">
      {images.length ? (
        images.map((image) => <PictureRow key={image.createdAt} {...{ onRemove, ...image }} />)
      ) : (
        <NoData>Изображения отсутствуют</NoData>
      )}
    </div>
  );
};

export default History;
