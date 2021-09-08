import React from 'react';
import { Category } from '../../Models/Interfaces';
import { RenderCategory } from '../../Components/components';

const menspage: React.FunctionComponent = () => {
  return <RenderCategory path={Category.Men} />;
};

export default menspage;
