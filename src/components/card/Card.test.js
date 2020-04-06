import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Testing the Card', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Card
            id={1}
          
            width={200}
            height={200}
            type={'card_set/back.svg'}
            flipped={false}
            solved={false}
            disabled={false}
            handleClick={() => handleClick(1)}
        />)
    });
    it('card is not flipped', () => {
        expect(wrapper.find('.flipped').exists()).toEqual(false);
    });

});   