import React from 'react';

const Movi = () => {
  const name = "Harsha";
  const image = "https://imgs.search.brave.com/u_Ue_mH6UL-5i7eznxrr2SDXkg0yjX5vumopWrVydIE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvODI2/MzM0Ny9wZXhlbHMt/cGhvdG8tODI2MzM0/Ny5qcGVnP2F1dG89/Y29tcHJlc3MmY3M9/dGlueXNyZ2ImZHBy/PTEmdz01MDA";

  return (
    <div>
      <h1>{name}</h1>
      <img src={image} alt="movie" width="200" />
    </div>
  );
};

export default Movi;