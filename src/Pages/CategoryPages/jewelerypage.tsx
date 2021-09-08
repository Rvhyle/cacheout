import React from 'react';
import { Category } from '../../Models/Interfaces';
import { RenderCategory } from '../../Components/components';

const jewelerypage: React.FunctionComponent = () => {
  return <RenderCategory path={Category.Jewelery} />;
};

export default jewelerypage;
