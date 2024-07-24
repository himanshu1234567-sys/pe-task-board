import React from 'react'
import { preloadTodos } from '../todo/page'

const page = () => {
    preloadTodos();
  return (
    <div>page</div>
  )
}

export default page