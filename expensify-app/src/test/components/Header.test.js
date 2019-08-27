import React from 'react'
import ReactShallowRender from 'react-test-renderer/shallow'
import Header from '../../components/Header'


test('should reneder Header correctly', () => {
    const renderer = new ReactShallowRender();
    renderer.render(<Header />)
    expect(renderer.getRenderOutput()).toMatchSnapshot();
})