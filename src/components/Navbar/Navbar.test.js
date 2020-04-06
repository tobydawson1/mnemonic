import React from "react";
import { shallow, mount } from 'enzyme';
import { render } from '@testing-library/react';
import App from '../../App';
import Navbar from './Navbar';

describe('Testing the Navbar with enzyme', () => {
  
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Navbar />);
  });

  test('tests to find a button with text with new game', () => {
    expect(wrapper.find('button').text()).toContain('new game');
  });

  test('tests wins Div to find the wins: text inside', () => {
    expect(wrapper.find('div.wins').text()).toContain('wins:');
  });

  test('tests the amount of values inside the wins', () => {
  expect(wrapper.find('.wins').children()).toHaveLength(3);
  });

  test('tests wins Div to find the losses: text inside', () => {
    expect(wrapper.find('div.losses').text()).toContain('losses:');
  });

  test('tests the amount of values inside the wins', () => {
  expect(wrapper.find('.losses').children()).toHaveLength(3);
  });

  test('tests wins Div to find the losses: text inside', () => {
    expect(wrapper.find('div.score').text()).toContain('current score: /7');
  });

  test('tests the amount of values inside the wins', () => {
  expect(wrapper.find('.score').children()).toHaveLength(2);
  });


});
