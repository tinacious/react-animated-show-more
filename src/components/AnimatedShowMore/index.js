import React, { useState, useCallback } from 'react';
import { ShadowOverlay } from './ShadowOverlay/index';
import { DefaultToggle } from './DefaultToggle/index';
import { MainContent } from './MainContent/index';
// import PropTypes from 'prop-types';

const useClientRect = () => {
  const [rect, setRect] = useState(null);
  const ref = useCallback(node => {
    if (node !== null) {
      setRect(node.getBoundingClientRect());
    }
  }, []);

  return [rect, ref];
};

export const AnimatedShowMore = ({ toggle, height = 200, shadowColor, speed, children }) => {
  const Toggle = toggle || DefaultToggle;

  /**
   * We manage 3 heights:
   *  - height: desired collapsed height
   *  - contentsHeight: height of the actual content
   *  - currentHeight: the active state between those 2 ( contentsHeight | height )
   */
  const [rect, contentContainerRef] = useClientRect();
  const contentsHeight = rect ? rect.height : 0;
  const [currentHeight, setCurrentHeight] = useState(height);
  const [isOpen, setIsOpen] = useState(false);

  /**
   * Toggle between the maximum height (height of the content)
   */
  const handleToggleHeight = () => {
    if (currentHeight === height) {
      setCurrentHeight(contentsHeight);
      setIsOpen(true);
    } else {
      setCurrentHeight(height);
      setIsOpen(false);
    }
  };
  const shouldShowShadow = (contentsHeight !== height) && (height < contentsHeight);
  const shouldShowToggle = isOpen || shouldShowShadow;

  return (
    <>
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        {/* ShadowOverlay */}
        { shouldShowShadow && (
          <ShadowOverlay
            color={shadowColor}
            height={currentHeight}
            maxHeight={contentsHeight}
          />
        )}

        {/* Main content area */}
        <MainContent height={currentHeight} animationSpeed={speed}>
          {children}
        </MainContent>

        {/* Invisible conent container */}
        <div
          ref={contentContainerRef}
          style={{ opacity: 0, position: 'absolute', top: 0 }}
          aria-hidden="true">
          {children}
        </div>
      </div>

      {/* The Toggle */}
      {shouldShowToggle && (
        <button
          className="AnimatedShowMore__ToggleButton"
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

AnimatedShowMore.displayName = 'AnimatedShowMore';
