import React from 'react';
import { CategoryResource } from '../../Components/components';
import { CatState } from '../../Models/Interfaces';

const menspage: React.FC = () => {
  return (
    <CategoryResource
      path="men's%20clothing"
      render={(data: CatState) => {
        // Category Container
        // data.products
      }}
    />
  );
};

export default menspage;
