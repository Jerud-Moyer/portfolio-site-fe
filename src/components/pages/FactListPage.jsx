import React from 'react';
import FactList from '../facts/FactList';

const FactListPage = () => {
  return (
    <div>
      <FactList forAdmin={false} />
    </div>
  );
};

export default FactListPage;
