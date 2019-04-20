import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

export const renderSnapshot = (component) => {
  const tree = renderer
    .create(component)
    .toJSON();
  return tree;
};


export const configureEnzyme = () => {
  Enzyme.configure({ adapter: new Adapter() });
};
