import React from 'react';


/**
 *
 * @param {String} shadowColour
 * @param {Number} height
 * @param {Number} maxAllowedHeight
 * @return {ReactStyleObj}
 */
const getShadowStyles = (shadowColour = '#fff', height = 0, maxAllowedHeight = 0) => ({
  backgroundImage: `linear-gradient(to bottom, transparent, ${shadowColour})`,
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
  height: maxAllowedHeight === height ? 0 : '60px'
});


export const ShadowOverlay = ({ color, height, maxHeight }) => (
  <div style={getShadowStyles(color, height, maxHeight)} />
);
