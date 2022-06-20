import React, { useState } from 'react';

import style from './Tourse.module.css';
const Tours = ({ data, henadleRemove }) => {
  const [readmore, setReadmore] = useState(false);
  const [showless, setshowless] = useState(false);

  return (
    <div>
      <h2>tours component</h2>;
      {data.map((item) => {
        const { id, name, image, price, info } = item;
        return (
          <div key={id}>
            <img src={image} alt='' className={style.img} />
            <h3>{name}</h3>

            <p>
              {readmore ? info : `${info.substring(0, 300)}`}
              <button onClick={() => setReadmore(!readmore)}>
                {readmore ? `showless` : `readmore`}
              </button>
            </p>

            <h3>Price:{price}</h3>
            <button onClick={() => henadleRemove(id)} className={style.btn}>
              Not interested
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Tours;
