import * as React from 'react';
import { screen, render, fireEvent } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import AboutComponent from '../components/AboutComponent';

describe("checking wheather AboutComponent is present or not",()=>{
    it("checking resturant image rendered or not",()=>{
        render(<NavigationContainer><AboutComponent/></NavigationContainer>)
        const restaurantImage = screen.getByTestId("resturant-back-ground-image");
       

    });
});


