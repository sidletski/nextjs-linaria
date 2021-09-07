import React from 'react';
import { styled } from '@linaria/react';

export default function Home() {
  return (
    <div>
      <Background />
      <BackgroundRequire />
      <p>Photo by John Lee: Pexels</p>
      <p>But you won't see it :(</p>
    </div>
  );
}

const img = require('../public/pexels-john-lee-8703948.jpg');
console.log(img);

const BackgroundRequire = styled.div`
  width: 200px;
  height: 200px;
  background: url(${img});
`;

const Background = styled.div`
  width: 200px;
  height: 200px;
  background: url('../public/pexels-john-lee-8703948.jpg');
`;
