import React from 'react'
import { render, screen } from '@testing-library/react'
import App from '../src/App'

describe('App Component', () => {
  it('renders the main heading', () => {
    render(<App />)
    const heading = screen.getByText(/Where Creativity Meets Community/i)
    expect(heading).toBeInTheDocument()
  })

  it('renders feature cards', () => {
    render(<App />)
    expect(screen.getByText(/Image Posts/i)).toBeInTheDocument()
    expect(screen.getByText(/Social Network/i)).toBeInTheDocument()
    expect(screen.getByText(/Real-time Updates/i)).toBeInTheDocument()
  })

  it('renders sign in button', () => {
    render(<App />)
    const button = screen.getByText(/Sign In/i)
    expect(button).toBeInTheDocument()
  })

  it('renders navigation header', () => {
    render(<App />)
    const logo = screen.getByText('Pulse')
    expect(logo).toBeInTheDocument()
  })
})
