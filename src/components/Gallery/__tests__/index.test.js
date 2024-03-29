import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import Gallery from '../index'

const portrait = { name:' portraits', description: 'portraits of people in my life'};

afterEach(cleanup)

describe('Gallery is rendering', ()=>{
    it('renders', () => {
        render(<Gallery currentCategory={portrait}/>);
    });

    it('matches snapshot', ()=> {
        const { asFragment } = render(<Gallery currentCategory={portrait}/>)
        expect(asFragment()).toMatchSnapshot()
    })

    it('renders', () => {
        const { getByTestId } = render(<Gallery currentCategory={portrait}/>)
        expect(getByTestId('h1tag')).toHaveTextContent('portraits')   
    })
})
