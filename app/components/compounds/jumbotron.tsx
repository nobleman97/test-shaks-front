
 import React from 'react';

type JumbotronProps = {
  image: string;
  children?: React.ReactNode;
};

export default function Jumbotron({ image, children }: JumbotronProps) {
  return (
    <>
      <div
        className="h-[490px] w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${image})`, backgroundColor: '#F53300' }}
      >
        {children}
      </div>
    </>
  );
}
