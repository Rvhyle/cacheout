import React from 'react';
import { Category } from '../../Models/Interfaces';
import { RenderCategory } from '../../Components/components';

const jewelerypage: React.FunctionComponent = (): JSX.Element => {
  return <RenderCategory category={Category.Jewelery} />;
};

export default jewelerypage;
