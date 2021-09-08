import React from 'react';
import { Category } from '../../Models/Interfaces';
import { RenderCategory } from '../../Components/components';

const womenspage: React.FunctionComponent = () => {
  return <RenderCategory path={Category.Women} />;
};

export default womenspage;
