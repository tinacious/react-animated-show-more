import React, { useState, useRef } from 'react';
import { ShadowOverlay } from './ShadowOverlay';
import { DefaultToggle } from './DefaultToggle';
import { MainContent } from './MainContent';
// import PropTypes from 'prop-types';


export const AnimatedReadMore = ({ toggle, height = 200, shadowColor, speed, children }) => {
  const Toggle = toggle || DefaultToggle;

  // Refs
  const contentContainerRef = useRef(null);

  /**
   * Gets the max height, which should be the contentContainerRef height
   */
  const getMaxHeight = () => {
    if (!contentContainerRef || !contentContainerRef.current) return 0;

    const currentHeight = contentContainerRef.current.offsetHeight;
    return currentHeight;
  };

  // Heights
  // We manage 2 heights: user defined and the current
  const [heightValues, setHeightValues] = useState({
    userDefined: height,
    internal: height,
    isOpen: false,
  });
  const { userDefined, internal, isOpen } = heightValues;

  /**
   * Toggle between the maximum height (height of the content)
   */
  const handleToggleHeight = () => {
    if (internal === userDefined) {
      setHeightValues({
        ...heightValues,
        isOpen: true,
        internal: getMaxHeight()
      });
    } else {
      setHeightValues({
        ...heightValues,
        isOpen: false,
        internal: heightValues.userDefined
      });
    }
  };
  const shouldShowShadow = getMaxHeight() !== userDefined;
  const shouldShowToggle = isOpen ||
    (internal !== getMaxHeight() && userDefined !== getMaxHeight());

  return (
    <>
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        {/* ShadowOverlay */}
        { shouldShowShadow && (
          <ShadowOverlay
            color={shadowColor}
            height={internal}
            maxHeight={getMaxHeight()}
          />
        )}

        {/* Main content area */}
        <MainContent height={internal} animationSpeed={speed}>
          {children}
        </MainContent>

        {/* Invisible conent container */}
        <div
          ref={contentContainerRef}
          style={{ zIndex: -1, opacity: 0, position: 'absolute', top: 0 }}
          aria-hidden="true">
          {children}
        </div>
      </div>

      {/* The Toggle */}
      {shouldShowToggle && (
        <button
          style={{
            display: 'block',
            border: 'none',
            outline: 'none',
            background: 'transparent',
            padding: 0,
            color: 'inherit',
            font: 'inherit'
          }}
          onClick={handleToggleHeight}
        >
          <Toggle isOpen={isOpen} />
        </button>
      )}
    </>
  );
};
