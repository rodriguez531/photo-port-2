import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import Photolist from '../index'

afterEach(cleanup)

describe('PhotoList is rendering', () => {
    it('renders', ()=> {
        render(<Photolist />);
    });

    it('renders', ()=> {
        const { asFragment } = render(<Photolist/>)
        expect(asFragment()).toMatchSnapshot()
    });
});