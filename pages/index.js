import Link from 'next/link'
import React from 'react'

const index = () => {
  return (
    <div>
      <h1>Home page</h1>
      <Link href='users'>
      <a>
        User page
      </a>
      </Link>
      <hr />
      <Link href='posts'>
      <a>
        Posts 
      </a>
      </Link>
      <hr />
      <Link href='comments'>
      <a>
        Comments 
      </a>
      </Link>
      <hr />
      <Link href='products'>
      <a>
        Products 
      </a>
      </Link>
      <hr />
      <Link href='dashboard'>
      <a>
        Dashboard 
      </a>
      </Link>
      <hr />
      <Link href='events'>
      <a>
        Events 
      </a>
      </Link>
    </div>
  )
}

export default index