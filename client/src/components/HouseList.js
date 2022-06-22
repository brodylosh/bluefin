import React from 'react';
import HouseCard from './HouseCard';

function HouseList({ houseList }) {
  let renderHouses = houseList.map((house) => {
    return <HouseCard key={house.id} house={house} />;
  });

  return <ul>{renderHouses} </ul>;
}

export default HouseList;
