///
/// Default Implementation
///

// import React from 'react';
// import App from './App';

// import renderer from 'react-test-renderer';

// it('renders without crashing', () => {
//   const rendered = renderer.create(<App />).toJSON();
//   expect(rendered).toBeTruthy();
// });


///
/// Custom Implementation
///

import React from 'react';
import App from './App';
import { Text } from 'react-native';
//import Enzyme, { shallow } from 'enzyme';
//import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-render';

//Enzyme.configure({ adapter: Adapter });


describe("App", () => {
  it('should have 3 components', () => {
    let tree = renderer.create(<App />);
    let testInstance = tree.root;
    //expect(rendered).toBeTruthy();
    console.log(testInstance.toTree());
  });
});
