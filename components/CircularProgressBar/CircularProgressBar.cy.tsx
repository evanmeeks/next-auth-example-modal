import React from 'react'
import { CircularProgressBar } from './CircularProgressBar'

describe('<CircularProgressBar />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<CircularProgressBar />)
  })
})