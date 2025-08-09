import React, { useRef, useEffect } from 'react';
import VanillaTilt from 'vanilla-tilt';

const TiltComponent = ({ options, children }) => {
  const tiltRef = useRef(null);

  useEffect(() => {
    const node = tiltRef.current;
    VanillaTilt.init(node, options || {
      max: 15,
      speed: 300,
      glare: true,
      "max-glare": 0.1,
    });

    // Cleanup on unmount
    return () => {
      node.vanillaTilt.destroy();
    };
  }, [options]);

  return (
    <div ref={tiltRef} className="tilt-root">
      {children}
    </div>
  );
};

export default TiltComponent;
