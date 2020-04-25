import React from 'react';
import { Route, Link, HashRouter } from 'react-router-dom';
import {
    Layout,
    Avatar,
    Menu,
    Breadcrumb,
    Row,
    Col,
    Input,
    Button,
} from 'antd';

const { Header, Footer, Sider, Content } = Layout;

const FooterBar = () => {
    return (
        <Footer
            className="site-layout-background"
            style={{ textAlign: 'center' }}
        >
            {' '}
            ©2020 Created by Martin and Steven
        </Footer>
    );
};
export default FooterBar;
