import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Modal from '../index';


const toggleModal = jest.fn();

const currentPhoto = {
    name: 'Park bench',
    category: 'landscape',
    description: 'Lorem ipsum dolor sit amet, consectetur',
    index: 1
};

afterEach(cleanup);

describe('Modal component', () => {
    it('renders', () => {
        //baseline render component test
        render(<Modal/>);
    })

    //snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Modal/>)
        expect(asFragment()).toMatchSnapshot()
    });

    it('matches snapshot DOM node structure', () => {
        //arrange the snapshot- declare variables

        //assert the match
    })

})