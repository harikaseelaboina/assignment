




import React from 'react';
// import './index.css';

function Man() {

  
  return (
    // <Avatar
    //   width={200}
    //   height={200}
    //   hairColor={'#4a4a4a'}
    //   hairLength={'medium'}
    //   hairDensity={'medium'}
    //   skinColor={'#efd9ca'}
    //   shirtColor={'#6a8caf'}
    //   pantColor={'#414d5a'}
    //   shoeColor={'#2e2e2e'}
    //   facialHairType={'mediumBeard'}
    //   facialHairColor={'#4a4a4a'}
    //   eyeType={'default'}
    //   eyebrowType={'default'}
    //   mouthType={'default'}
    //   noseType={'default'}
    // />
    <div className="man-container" >
      
      <svg viewBox="0 0 100 100">
  <rect x="20" y="10" width="60" height="80" rx="10" fill="transparent" />
  <circle cx="50" cy="25" r="15" fill="#f5a623" />
  <path d="M50 35 L35 55 L65 55 Z" fill="#f5a623" />
  <rect x="25" y="60" width="10" height="25" rx="5" fill="transparent" class="left-leg" />
  <rect x="65" y="60" width="10" height="25" rx="5" fill="transparent" class="right-leg" />
  <path d="M30 40 L20 60 L35 60 L35 80 L45 80 L45 60 L60 60 L50 40 Z" fill="#f5a623" class="left-hand" />
  <path d="M70 40 L80 60 L65 60 L65 80 L55 80 L55 60 L40 60 L50 40 Z" fill="#f5a623" class="right-hand" />
  <circle cx="42" cy="22" r="3" fill="#ffffff" class="left-eye" />
  <circle cx="58" cy="22" r="3" fill="#ffffff" class="right-eye" />
  <path d="M45 40 Q 50 45 55 40" stroke="#ffffff" stroke-width="3" fill="none" class="mouth" />
</svg>


          </div>
  );
}

export default Man;
