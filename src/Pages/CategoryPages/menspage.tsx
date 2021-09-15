import React from 'react';
import { Category } from '../../Models/Interfaces';
import { RenderCategory } from '../../Components/components';

const menspage: React.FunctionComponent = (): JSX.Element => {
  return <RenderCategory category={Category.Men} />;
};

export default menspage;
