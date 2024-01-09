import React from 'react';

function MostSeeds() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold mb-3">Most Seeds</h3>
      {/* Seed items here */}
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium">Carrot</span>
        <span className="text-sm">498</span>
      </div>
      {/* Repeat for other seeds */}
    </div>
  );
};
export default MostSeeds;