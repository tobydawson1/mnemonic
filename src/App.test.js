import React from 'react';
import { mount } from 'enzyme';
import { render } from '@testing-library/react';
import App from './App';

describe('Testing the starter App with enzyme and jest', () => {

  let wrapper;
  beforeEach(() => {
    wrapper = mount(<App />);
  });

  test('test the word mnemonic with enzyme', () => {
    expect(wrapper.find('h1').text()).toContain('mnemonic is live');
  });
    
  test('test mnemonic with the default jest way', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/mnemonic is live/i);
    expect(linkElement).toBeInTheDocument();
  }); 
});