import React, { Component } from 'react';
import Router from './Router';
import { Layout } from 'antd';
import { NavLink } from "react-router-dom";
import Logo from './Logo.png';
import './App.css';
import "antd/dist/antd.css";




const { Header, Content, Footer } = Layout;

export class App extends Component {
  render() {
    return (
      <Layout className="layout">
        <Header className="header">
          <NavLink to="/">
            <img className="logo" src={Logo} alt="logo"/>
          </NavLink>
          <div className="nav">
            <NavLink className="navlink" exact to="/MovieList//">
              Home
            </NavLink>
            <NavLink className="navlink" to="/MovieList//Favorites">
              Favorites
            </NavLink>
            <NavLink className="navlink" to="/MovieList//Cart">
              Cart
            </NavLink>
            <NavLink className="navlink" to="/MovieList//Review">
              Review
            </NavLink>
          </div>
        </Header>
        <Content className="content" style={{ padding: '0 50px'}}>
          <Router/>
        </Content>
        <Footer className="footer" style={{ textAlign: 'center' }}></Footer>

      </Layout>
      
    )
  }
}

export default App
