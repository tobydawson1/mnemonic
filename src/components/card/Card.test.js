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
            back={'card_set/back.svg'}
            front={'card_set/yellow.svg'}
            flipped={false}
            handleClick={() => handleClick(1)}
        />)
    });
    it('card is not flipped', () => {
        console.log(wrapper.debug());
        expect(wrapper.find('.flipped').exists()).toEqual(false);
    });
});   