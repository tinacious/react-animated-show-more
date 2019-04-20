import renderer from 'react-test-renderer';

export const renderSnapshot = (component) => {
  const tree = renderer
    .create(component)
    .toJSON();
  return tree;
};
