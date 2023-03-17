import React from 'react'
import { Link } from 'react-router-dom'
import { Wrapper } from './Wrapper'

const ErrorPage = () => {
  return (
    <Wrapper>
      <h3 className="text-base font-semibold leading-6 text-gray-900">
        You've not provided your details. Kindly head back to the{' '}
        <Link to="/">homepage</Link>.
      </h3>
    </Wrapper>
  )
}

export default ErrorPage
