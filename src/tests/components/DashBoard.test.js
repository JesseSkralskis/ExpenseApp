import React from 'react';
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import  DashBoard  from '../../components/DashBoard';




test(
    "should render Dashboard component correctly", () => {
        const wrapper = shallow(<DashBoard/>);
        expect(toJSON(wrapper)).toMatchSnapshot();
    }

   

    
);

