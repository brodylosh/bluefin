import React from 'react';
import HouseCard from './HouseCard';

function HouseList({ houseList }) {
  let renderHouses = houseList.map((house) => {
    return <HouseCard key={house.id} house={house} />;
  });

  return (
    <div>
      {/* <h1>Houses</h1> */}
      <ul>{renderHouses} </ul>;
    </div>
  );
}

export default HouseList;
