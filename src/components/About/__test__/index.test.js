import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import About from '../index';

// import { get } from 'mongoose';

afterEach(cleanup);

describe('About component', () => {
    //First Test
    it('renders', () => {
        render(<About/>);
    });
    //Second Test
    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<About/>);
        //assert value comparison
        expect(asFragment()).toMatchSnapshot();
    });
})
