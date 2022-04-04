import React, { Component } from 'react'

export class Navbar extends Component {
  render() {
    return (
      <>
      {/* bg-light */}
        <nav className="navbar navbar-expand-lg navbar-light " style={{backgroundColor:"#2acd3f"}}>
            <a className="navbar-brand mx-2" href="/#" style={{fontFamily:"corbel", fontWeight:"600"}}>QRyde</a>
        </nav>
      </>
    )
  }
}

export default Navbar