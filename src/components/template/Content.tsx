import React, { ReactNode } from 'react';

interface IContent {
  children?: ReactNode
}

const Content:React.FC<IContent> = (props) => {
  return (
    <div className={`
      flex flex-col mt-7
      dark:text-gray-200
    `}>
      {props.children}
    </div>
  );
}
 
export { Content };
