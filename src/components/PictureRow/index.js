import React from 'react';
import moment from 'moment';
import { ReactComponent as TrashIcon } from '../../assets/images/icons/trash.svg';

import './pictureRow.scss';

const dateFormat = 'YYYY-MM-DD HH:mm:ss';

const PictureRow = ({ createdAt, onRemove, title, image_url: url }) => {
  return (
    <div className="picture-row">
      <div className="picture-container">
        <img src={url} alt={title} />
        <div className="picture-icon-wrapper">
          <TrashIcon onClick={() => onRemove(createdAt)} width={18} height={18} />
        </div>
      </div>

      <div>
        <div className="picture-title">{title || 'Офигенная гифка без названия'}</div>
        <div>{moment(createdAt).format(dateFormat)}</div>
      </div>
    </div>
  );
};

export default PictureRow;
