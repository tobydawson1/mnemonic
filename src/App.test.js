import React from 'react';
import { shallow, mount } from 'enzyme';
import { render } from '@testing-library/react';
import App from './App';
import Card from './components/card/Card';

describe('Testing the starter App with enzyme and jest', () => {
  
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<App />);
  });

  test('test the word mnemonic with enzyme', () => {
    expect(wrapper.find('h1').text()).toContain('mnemonic');
  });

  test('Test for the h3 tag  enzyme', () => {
    expect(wrapper.find('h2').text()).toContain('can you remember where the cards are?');
  });
    
  test('test mnemonic with the default jest way', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/mnemonic/i);
    expect(linkElement).toBeInTheDocument();
  }); 

  it('app should contain a card', () => {
    const wrapper = shallow(<App />);
    const card = wrapper.find(Card); 
    expect(card).toBe;
  });
});
