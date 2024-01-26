import React from 'react'
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Contact from '../index';

afterEach(cleanup);

describe('Contact component', () => {
    //first test
    it('renders', ()=> {
        render(<Contact/>);
    });
    //second test
    it('matches snapshot DOM node structure', ()=> {
        const { asFragment } = render(<Contact/>);
        //assert value comparioson
        expect(asFragment()).toMatchSnapshot();
    });
    it('renders', () => {
        const { getByTestId } = render(<Contact/>)
        expect(getByTestId('h1tag')).toHaveTextContent('Contact me')
    })
    it('renders', () => {
        const { getByTestId } = render(<Contact/>)
        expect(getByTestId('h2tag')).toHaveTextContent('Submit')
    })
})