import React from 'react';
import { shallow } from 'enzyme';
import { DefaultToggle } from './index';

describe('DefaultToggle', () => {
  it('has a CSS class', () => {
    const wrapper = shallow(<DefaultToggle />);

    expect(wrapper.find('.AnimatedShowMore__DefaultToggle').length).toEqual(1);
  });

  describe('when open', () => {
    it('has the right text', () => {
      const wrapper = shallow(<DefaultToggle isOpen />);

      expect(wrapper.text()).toEqual('Show less');
    });
  });

  describe('when closed', () => {
    it('has the right text', () => {
      const wrapper = shallow(<DefaultToggle />);

      expect(wrapper.text()).toEqual('Show more');
    });
  });
});
