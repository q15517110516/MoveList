import React, { Component } from 'react';
import MoveList from './MoveList';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import './App.css';
import Logo from './Logo.png';

const { Header, Content, Footer } = Layout;

export class App extends Component {
  render() {
    return (
      <Layout className="layout">
        <Header className="header">
          <img className="logo" src={Logo} alt="logo"/>
        </Header>
        <Content className="content" style={{ padding: '0 50px' }}>
          <div className="list">
            <MoveList/>
          </div>  
        
        </Content>
        <Footer className="footer" style={{ textAlign: 'center' }}></Footer>
      </Layout>
    )
  }
}

export default App
