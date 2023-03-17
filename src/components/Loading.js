import React from 'react'
import { Wrapper } from './Wrapper'

const Loading = ({ loadingMessage }) => {
  return (
    <Wrapper>
      <div>
        <h1 className="font-bold leading-7 text-gray-900 sm:tracking-tight">
          {loadingMessage}
        </h1>
      </div>
    </Wrapper>
  )
}

export default Loading
