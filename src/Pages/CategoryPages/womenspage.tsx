import React from 'react';
import { Category } from '../../Models/Interfaces';
import { RenderCategory } from '../../Components/components';

const womenspage: React.FunctionComponent = (): JSX.Element => {
  return <RenderCategory category={Category.Women} />;
};

export default womenspage;
