import React from 'react';


export const ShadowOverlay = ({ color = '#fff' }) => (
  <div
    className="AnimatedShowMore__ShadowOverlay"
    style={{
      backgroundImage: `linear-gradient(to bottom, transparent, ${color})`,
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      height: 60
    }}
  />
);
