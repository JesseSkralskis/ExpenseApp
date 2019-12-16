
import {shallow} from 'enzyme'
import React from 'react';
import toJSON from 'enzyme-to-json'
import Header from '../../components/Header';


//need to be able to virtually render our component
//shallow rendering is only concerned with the current component not the children props etc

test('should render Header corectly', () => {
    const wrapper = shallow(<Header/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
    //find function allows us to select element in all ways
    // expect(wrapper.find('h1').text()).toBe('Expensify');
    
    // const renderer = new ShallowRenderer;
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
    // console.log(renderer.getRenderOutput());
})