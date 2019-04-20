import React from 'react';


export const DefaultToggle = ({ isOpen }) => (
  <span className="AnimatedShowMore__DefaultToggle">
    { isOpen ? 'Show less' : 'Show more' }
  </span>
);
