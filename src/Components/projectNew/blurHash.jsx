import React, { useEffect, useState } from 'react';
import { Blurhash } from 'react-blurhash';

function BlurHash({ src, alt, hash }) {
  const [imageLoad, setImageLoad] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoad(true);
    };
    img.src = src;
  }, [src, hash, alt]);

  return (
    <>
      <div style={{ display: imageLoad ? 'none' : 'inline' }}>
        <Blurhash
          hash={hash}
          resolutionY={32}
          width={400}
          height={300}
          resolutionX={32}
          punch={1}
        />
      </div>

      <img
        src={src}
        alt={alt}
        style={{
          width: '100%',
          height: '100%',
          display: !imageLoad ? 'none' : 'inline',
        }}
        className={` rounded-lg`}
      />
    </>
  );
}

export default BlurHash;
