import React from 'react';
import moment from 'moment';

import PictureRow from '../../components/PictureRow';

const fakeData = {
  url: 'http://www.opeterburge.ru/images/content/lajfkhaki/sankt_peterburg_foto_01.jpg',
  title: 'Санкт-Петербург',
  createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),
};

const History = ({ pictures = [] }) => {
  return (
    <div className="history">
      <PictureRow {...fakeData} />
      <PictureRow {...fakeData} />
      <PictureRow {...fakeData} />
      <PictureRow {...fakeData} />
      <PictureRow {...fakeData} />
      <PictureRow {...fakeData} />
      <PictureRow {...fakeData} />
      <PictureRow {...fakeData} />
      <PictureRow {...fakeData} />
      <PictureRow {...fakeData} />
    </div>
  );
};

export default History;
