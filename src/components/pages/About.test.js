import React from "react";
import { shallow, mount } from 'enzyme';


import About from "./About";

describe('Testing the About page with enzyme', () => {
  
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<About />);
  });

  test('test the contents of the H1 using enzyme', () => {
    expect(wrapper.find('h1').text()).toContain('About');
  });

  test('test the contents of the h2 ',() => {
    expect(wrapper.find('h2').text()).toContain('mnemonic on github');
  });
  test('test the contents of the h2',() => {
    expect(wrapper.find('h2').html()).toContain('<h2><a href=\"https://github.com/tobydawson1/mnemonic\">mnemonic on github</a></h2>');
  });
  
});