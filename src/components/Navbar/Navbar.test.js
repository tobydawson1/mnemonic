import React from "react";
import { shallow, mount } from 'enzyme';
import { render } from '@testing-library/react';
import App from '../../App';
import Navbar from './Navbar';

describe('Testing the starter App with enzyme and jest', () => {
  
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Navbar />);
  });

  test('tests to find a button with text with new game', () => {
    expect(wrapper.find('button').text()).toContain('new game');
  });

  test('tests the amount of values inside the wins', () => {
  expect(wrapper.find('.wins').children()).toHaveLength(3);
  });
  
});

// describe ('Testing for classes using enzyme', ()=> {


//   test('tests text with wins:', () => {
//     const wrap = shallow (<Navbar />);
//     console.log (wrap.is('.wins'))
//     expect(wrap.is('wins')).toContain('wins');
//   });
// })