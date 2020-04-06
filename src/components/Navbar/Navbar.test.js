import React from "react";
import { shallow, mount } from 'enzyme';
import { render } from '@testing-library/react';
import Navbar from './Navbar';

describe('Testing the starter App with enzyme and jest', () => {
  
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Navbar />);
  });

  test('test the word mnemonic with enzyme', () => {
    expect(wrapper.find('button').text()).toContain('new game');
  });
});