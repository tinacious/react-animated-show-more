import React from 'react';

/**
 * Main content area with animating frame
 */
export const MainContent = ({ height, animationSpeed = 300, children }) => (
  <div
    className="AnimatedShowMore__MainContent"
    style={{
      overflow: 'hidden',
      maxHeight: `${height}px`,
      transition: `max-height ${animationSpeed}ms linear`
    }}>
    {children}
  </div>
);
