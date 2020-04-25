import React from 'react';
import { Layout, Avatar, Menu, Breadcrumb, Row, Col, Input } from 'antd';
import MessageCard from './card/MessageCard';


import Chat from './Chat/Chat';
import { Link } from 'react-router-dom';
import Header from './header/Header';
import FootBar from './Footer/FootBar';
import SideNav from './SideNav/SideNav';

const {  Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;
const { Search } = Input;

const MainBody = () => {
    const name: string = 'steven';

    const selectedRoomName = () => {

    };

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Header />
            <Layout>
                <SideNav />
                <Content
                    className="site-layout-background"
                    style={{ padding: '0 50px' }}
                >
                    <div style={{ paddingTop: 24 }}>
                        <Row>
                            <Col span={6}>
                                <MessageCard />{' '}
                            </Col>
                            <Col span={6}>
                                <MessageCard />{' '}
                            </Col>
                            <Col span={6}>
                                <MessageCard />{' '}
                            </Col>
                            <Col span={6}>
                                <MessageCard />{' '}
                            </Col>
                        </Row>
                    </div>
                    <Chat authentication={name} />
                </Content>
                
            </Layout>
            <FootBar />
        </Layout>
    );
};
export default MainBody;
