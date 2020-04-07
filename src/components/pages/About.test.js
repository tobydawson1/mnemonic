import React from "react";
import { shallow, mount } from 'enzyme';


import About from "./About";

describe('Testing the About page with enzyme', () => {
  
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<About />);
  });

  test('test the word mnemonic with enzyme', () => {
    expect(wrapper.find('h1').text()).toContain('About');
  });

});