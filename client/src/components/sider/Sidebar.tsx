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

const { Sider } = Layout;

const SideBar = () => {
    return (
        <Sider width={200} className="site-layout-background">
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                style={{ height: '100%', borderRight: 0 }}
            >
                <Menu.Item key="1"> 1 beain cell </Menu.Item>
                <Menu.Item> some sorority group </Menu.Item>
                <Menu.Item> + Add New Group </Menu.Item>
            </Menu>
        </Sider>
    );
};
export default SideBar;
