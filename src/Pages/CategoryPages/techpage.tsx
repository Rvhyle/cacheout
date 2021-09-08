import React from 'react';
import { Category } from '../../Models/Interfaces';
import { RenderCategory } from '../../Components/components';

const techpage: React.FunctionComponent = () => {
  return <RenderCategory path={Category.Electronics} />;
};

export default techpage;
