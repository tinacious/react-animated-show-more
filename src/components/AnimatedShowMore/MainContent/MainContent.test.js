import React from 'react';
import { MainContent } from './index';
import { renderSnapshot } from '../../../../test-helpers';

describe('MainContent', () => {
  describe('Snapshots', () => {
    it('renders', () => {
      const snap = renderSnapshot(
        <MainContent height={200} animationSpeed={500}>
          Hello world
        </MainContent>
      );
      expect(snap).toMatchSnapshot();
    });
  });
});
