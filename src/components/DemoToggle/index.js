import React from 'react';

export const DemoToggle = ({ isOpen }) => {
  const colour = isOpen ? 'red' : 'green';
  const text = isOpen ? 'Close sesame!' : 'Open sesame!';

  return (
    <h3 style={{ marginTop: 20, color: colour }}>
      {text}
    </h3>
  );
};
