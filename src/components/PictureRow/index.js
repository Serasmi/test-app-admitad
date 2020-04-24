import React from 'react';
import { ReactComponent as TrashIcon } from '../../assets/images/icons/trash.svg';

import './pictureRow.scss';

const PictureRow = ({ createdAt, title, url }) => {
  const handleDelete = () => {
    console.log(`Delete image: ${title}`);
  };

  return (
    <div className="picture-row">
      <div className="picture-container">
        <img src={url} alt={title} />
        <TrashIcon onClick={handleDelete} className="icon" width={18} height={18} />
      </div>
      <div>
        <div className="picture-title">{title}</div>
        <div>{createdAt}</div>
      </div>
    </div>
  );
};

export default PictureRow;
