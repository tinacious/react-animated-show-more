import React from 'react';
import { ShadowOverlay } from './index';
import { renderSnapshot } from '../../../../test-helpers';

describe('ShadowOverlay', () => {
  describe('Snapshots', () => {
    it('renders the default shadow', () => {
      const snap = renderSnapshot(<ShadowOverlay />);

      expect(snap).toMatchSnapshot();
    });

    it('renders a custom shadow', () => {
      const snap = renderSnapshot(<ShadowOverlay color="#f39" />);

      expect(snap).toMatchSnapshot();
    });
  });
});

