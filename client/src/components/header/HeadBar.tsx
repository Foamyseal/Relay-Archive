import React from 'react';
import { Route, Link, HashRouter } from 'react-router-dom';
import {
    Form,
    InputNumber,
    Layout,
    Avatar,
    Menu,
    Breadcrumb,
    Row,
    Col,
    Input,
    Button,
} from 'antd';
import SearchBar from './SearchBar';
import Profile from './Profile';

const { Header } = Layout;
const HeadBar = () => {
    return (
            <Header id="header" style={{ zIndex: 1, width: '100%' }}>
                <Row>
                    <Col span={3}>
                        <Button type="link" ghost>
                            <Link to="/"> RELAY</Link>
                        </Button>{' '}
                    </Col>
                    <Col span={19}>
                        {' '}
                        <SearchBar />
                    </Col>
                    <Col span={2}>
                        <Profile />
                    </Col>
                </Row>
            </Header>
    );
};
export default HeadBar;
