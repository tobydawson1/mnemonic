import React from "react";
import { shallow, mount } from 'enzyme';
import { render } from '@testing-library/react';
import Gamebar from './Gamebar';

describe('Testing the Gamebar with enzyme', () => {
  
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Gamebar />);
  });

  test('tests to find a button with text with new game', () => {
    expect(wrapper.find('button').text()).toContain('new game');
  });

  test('tests wins.Div to find the (wins:) text inside', () => {
    expect(wrapper.find('div.wins').text()).toContain('wins:');
  });

  test('tests the amount of values inside the wins.div', () => {
  expect(wrapper.find('.wins').children()).toHaveLength(3);
  });

  test('tests losses.Div to find the (losses:) text inside', () => {
    expect(wrapper.find('div.losses').text()).toContain('losses:');
  });

  test('tests the amount of values inside the losses.div', () => {
  expect(wrapper.find('.losses').children()).toHaveLength(3);
  });

  test('tests score.Div to find the (current score: /7 ) text inside', () => {
    expect(wrapper.find('div.score').text()).toContain('current score: /7');
  });

  test('tests the amount of values inside the score.Div', () => {
  expect(wrapper.find('.score').children()).toHaveLength(2);
  });

  test('tests wrongGuesses.Div to find the (incorrect guesses: /7) text inside', () => {
    expect(wrapper.find('div.wrongGuesses').text()).toContain('incorrect guesses: /7');
  });

  test('tests the amount of values inside the wins', () => {
  expect(wrapper.find('.wrongGuesses').children()).toHaveLength(2);
  });

});
