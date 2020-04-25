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

import HeadBar from './header/Header';

const { Header, Footer, Sider, Content } = Layout;
const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 10 },
};
const { SubMenu } = Menu;
const { Search } = Input;
const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not validate email!',
        number: '${label} is not a validate number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};

const Settings = () => {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <HeadBar />
            <Layout>
                <Content
                    className="site-layout-background"
                    style={{ padding: '0 50px' }}
                >
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>
                            <Link to="/chat"> Home</Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>Settings</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{ paddingTop: 24 }}>
                        <Form
                            {...layout}
                            name="nest-messages"
                            validateMessages={validateMessages}
                        >
                            <Form.Item
                                name={['user', 'name']}
                                label="Username"
                                rules={[{ required: true }]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name={['user', 'email']}
                                label="Email"
                                rules={[{ required: true, type: 'email' }]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name={['user', 'age']}
                                label="Age"
                                rules={[{ type: 'number', min: 0, max: 99 }]}
                            >
                                <InputNumber />
                            </Form.Item>
                            <Form.Item
                                name={['user', 'website']}
                                label="Website"
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name={['user', 'introduction']}
                                label="Introduction"
                            >
                                <Input.TextArea />
                            </Form.Item>
                            <Form.Item
                                wrapperCol={{ ...layout.wrapperCol, offset: 8 }}
                            >
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </Content>
            </Layout>
            <Footer
                className="site-layout-background"
                style={{ textAlign: 'center' }}
            >
                {' '}
                ©2020 Created by Martin and Steven
            </Footer>
        </Layout>
    );
};
export default Settings;
