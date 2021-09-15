import React from 'react';
import { Category } from '../../Models/Interfaces';
import { RenderCategory } from '../../Components/components';

const techpage: React.FunctionComponent = (): JSX.Element => {
  return <RenderCategory category={Category.Electronics} />;
};

export default techpage;
