import React, { Component } from 'react';
import styled from 'styled-components';
import Navbar from '../layout/Navbar.css';

export default class navbar extends Component {
  render() {
    return (
      <div>
        <nav className='navbar navbar-expand-md navbar-dark bg-dark fixed-top' >
          
          <a 
             href=''
             className='navbar-brand col-sm-3 col-md-2 mr-0 align-items-center'>Pokedex</a>
        </nav>
      </div>
    )
  }
}
