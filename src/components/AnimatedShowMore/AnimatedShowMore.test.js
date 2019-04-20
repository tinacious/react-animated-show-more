import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import { AnimatedShowMore } from './index';
import { DemoText } from '../DemoText';
import { renderSnapshot } from '../../../test-helpers';


const SmallContainer = ({ children }) => (
  <div style={{ width: 400 }}>
    {children}
  </div>
);

describe('AnimatedShowMore', () => {
  describe('Snapshots', () => {
    it('renders the right elements', () => {
      const snap = renderSnapshot(
        <SmallContainer>
          <AnimatedShowMore>
            I am inside text
          </AnimatedShowMore>
        </SmallContainer>
      );

      expect(snap).toMatchSnapshot();
    });
  });


  describe('contents are larger than the desired height', () => {
    let wrapper;
    let initialBoundingRect;

    beforeEach(() => {
      initialBoundingRect = Element.prototype.getBoundingClientRect;
      Element.prototype.getBoundingClientRect = jest.fn().mockReturnValue({ height: 300 });
    });

    afterEach(() => {
      Element.prototype.getBoundingClientRect = initialBoundingRect;
    });


    it('changes the height when clicking the toggle', () => {
      wrapper = mount(
        <SmallContainer>
          <AnimatedShowMore height={100}>
            <DemoText />
          </AnimatedShowMore>
        </SmallContainer>
      );
      let styles = wrapper.find('.AnimatedShowMore__MainContent').prop('style');

      // Before opening
      expect(styles.overflow).toEqual('hidden');
      expect(styles.maxHeight).toEqual('100px');


      wrapper.find('.AnimatedShowMore__ToggleButton').simulate('click');

      // After opening
      styles = wrapper.find('.AnimatedShowMore__MainContent').prop('style');
      expect(styles.maxHeight).toEqual('300px');

      // Closing again
      wrapper.find('.AnimatedShowMore__ToggleButton').simulate('click');

      styles = wrapper.find('.AnimatedShowMore__MainContent').prop('style');
      expect(styles.maxHeight).toEqual('100px');
    });

    it('displays the overlay shadow', () => {
      wrapper = mount(
        <SmallContainer>
          <AnimatedShowMore height={100}>
            SAMPLE TEXT
          </AnimatedShowMore>
        </SmallContainer>
      );

      expect(wrapper.find('ShadowOverlay').length).toBe(1);
    });

    it('can toggle', () => {
      wrapper = mount(
        <SmallContainer>
          <AnimatedShowMore height={100}>
            <DemoText />
          </AnimatedShowMore>
        </SmallContainer>
      );
      expect(wrapper.text()).toContain('Show more');
      expect(wrapper.find('ShadowOverlay').length).toBe(1);

      // Opening
      wrapper.find('.AnimatedShowMore__ToggleButton').simulate('click');

      expect(wrapper.text()).toContain('Show less');
      expect(wrapper.find('ShadowOverlay').length).toBe(0);

      // Closing again
      wrapper.find('.AnimatedShowMore__ToggleButton').simulate('click');

      expect(wrapper.text()).toContain('Show more');
      expect(wrapper.find('ShadowOverlay').length).toBe(1);
    });


    describe('with custom toggle', () => {
      const DemoToggle = ({ isOpen }) => isOpen ? 'CLOSE SESAME' : 'OPEN SESAME';

      it('displays the toggle', () => {
        wrapper = mount(
          <SmallContainer>
            <AnimatedShowMore height={100} toggle={DemoToggle}>
              <DemoText />
            </AnimatedShowMore>
          </SmallContainer>
        );

        expect(wrapper.find(DemoToggle).length).toBe(1);
        expect(wrapper.text()).toContain('OPEN SESAME');
      });

      it('can toggle', () => {
        const DemoToggle = ({ isOpen }) => isOpen ? 'CLOSE SESAME' : 'OPEN SESAME';

        wrapper = mount(
          <SmallContainer>
            <AnimatedShowMore height={100} toggle={DemoToggle}>
              <DemoText />
            </AnimatedShowMore>
          </SmallContainer>
        );
        expect(wrapper.text()).toContain('OPEN SESAME');

        wrapper.find('.AnimatedShowMore__ToggleButton').simulate('click');

        expect(wrapper.text()).toContain('CLOSE SESAME');
      });
    });
  });


  describe('contents are smaller than the desired height', () => {
    let wrapper;
    let initialBoundingRect;

    beforeEach(() => {
      initialBoundingRect = Element.prototype.getBoundingClientRect;
      Element.prototype.getBoundingClientRect = jest.fn().mockReturnValue({ height: 60 });
    });

    afterEach(() => {
      Element.prototype.getBoundingClientRect = initialBoundingRect;
    });

    it('does not display the overlay shadow', () => {
      wrapper = mount(
        <SmallContainer>
          <AnimatedShowMore height={100}>
            SAMPLE TEXT
          </AnimatedShowMore>
        </SmallContainer>
      );

      expect(wrapper.find('ShadowOverlay').length).toBe(0);
    });

    it('does not display the toggle', () => {
      wrapper = mount(
        <SmallContainer>
          <AnimatedShowMore height={100}>
            SAMPLE TEXT
          </AnimatedShowMore>
        </SmallContainer>
      );

      expect(wrapper.text()).not.toContain('Show');
    });


    describe('with custom toggle', () => {
      const DemoToggle = ({ isOpen }) => isOpen ? 'CLOSE SESAME' : 'OPEN SESAME';

      it('does not display the overlay shadow', () => {
        wrapper = mount(
          <SmallContainer>
            <AnimatedShowMore height={100} toggle={DemoToggle}>
              SAMPLE TEXT
            </AnimatedShowMore>
          </SmallContainer>
        );

        expect(wrapper.find('ShadowOverlay').length).toBe(0);
      });

      it('does not display the toggle', () => {
        wrapper = mount(
          <SmallContainer>
            <AnimatedShowMore height={100} toggle={DemoToggle}>
              SAMPLE TEXT
            </AnimatedShowMore>
          </SmallContainer>
        );

        expect(wrapper.find(DemoToggle).length).toBe(0);
        expect(wrapper.text()).not.toContain('SESAME');
      });
    });
  });
});
