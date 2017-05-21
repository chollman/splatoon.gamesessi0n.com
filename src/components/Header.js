import React from 'react'
import Link from 'next/link'
import Button from 'react-bootstrap/lib/Button'

const Header = () => (
  <div className="header">
    <div className="container-fluid">
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/test">
        <a>test</a>
      </Link>
      <Button>Default</Button>
    </div>
    <style jsx>{`
      .container-fluid {
        max-width: 1170px;
        padding: 15px;
        border-radius: 10px;
        background: #1d1d1d;
      }
      a {
        color: red;
      }
    `}</style>
  </div>
)

export default Header
