import React from 'react';


export const DefaultToggle = ({ isOpen }) => (
  <span className="AnimatedReadMore__DefaultToggle">
    { isOpen ? 'Show less' : 'Show more' }
  </span>
);
