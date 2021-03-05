import React from 'react';
import FactList from '../facts/FactList';

const AdminPage = () => {
  return (
    <div>
      
      <FactList forAdmin={true}/>
    </div>
  );
};

export default AdminPage;
