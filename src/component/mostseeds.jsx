import React from 'react';
const SeedItem = ({ icon, name, count }) => {
  return (
    <div className="bg-gradient-to-r from-[#01E5B2] to-[#01B68D] pl-5 w-[90%] flex self-center items-center rounded-2xl mb-2 ">
      <div className="p-2 mr-4 text-white bg-white rounded-xl">
        {icon}
      </div>
      <div className="">
        <h5 className="font-semibold">{name}</h5>
        <p className="text-sm">{count}</p>
      </div>
    </div>
  );
};
function MostSeeds() {
  const seedsData = [
    { icon: '🥕', name: 'Carrot', count: 498 },
    { icon: '🌾', name: 'Rice', count: 236 },
    { icon: '🍅', name: 'Tomatoes', count: 168 }
  ];

  return (
    <div className="bg-white rounded-2xl flex justify-center items-center flex-col p-5">
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm font-semibold text-secondaryColor">Most Seeds</span>
        <button className="cursor-pointer text-sm text-primaryColor outline-none bg-transparentColor border-none">View all</button>
      </div>
      {seedsData.map((seed, index) => (
        <SeedItem key={index} icon={seed.icon} name={seed.name} count={seed.count} />
      ))}
    </div>
  );
};
export default MostSeeds;