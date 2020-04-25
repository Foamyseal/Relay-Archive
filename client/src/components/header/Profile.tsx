import React from 'react';
import { Menu, Dropdown, Button } from 'antd';
import { DownOutlined, UserOutlined} from '@ant-design/icons';
import { Router, Link, HashRouter } from 'react-router-dom';
import { Avatar } from 'antd';

const menu = (
    <Menu>
        <Menu.Item key="0">
            <Link to="/settings"> My Profile</Link>
        </Menu.Item>
        <Menu.Item key="1">
            <a href="http://www.taobao.com/"> + New Group </a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3">Log Out</Menu.Item>
    </Menu>
);

const Profile = () => {

    return (
        <div>
            <Dropdown overlay={menu} placement="bottomCenter" trigger={['click']}>
                <a
                    className="ant-dropdown-link"
                    onClick={(e) => e.preventDefault()}
                >
                <div>
                    <Button type="link" ghost>
                    <Avatar
                        size = "small"
                        icon={<UserOutlined />}
                    />
                    &nbsp;
                    foamyseal
                    </Button>
                </div>
                </a>
            </Dropdown>
        </div>
    )
};
export default Profile;