import { Badge, Flex, Typography, Divider, Menu, Avatar } from 'antd';
import { GradientAvatar } from './Avatar.jsx';
import { useState } from 'react';
import {
    UserOutlined,
    NotificationOutlined,
    PieChartOutlined,
    SettingOutlined,
    MailOutlined,
    LogoutOutlined,
} from '@ant-design/icons';
import { MailIcon } from 'lucide-react';

export default function UserInfoForPopover() {
    const items = [
        {
            key: '3',
            icon: (
                <Badge>
                    <Avatar icon={<SettingOutlined />} shape="square" />
                </Badge>
            ),
            label: 'Settings',
        },
        {
            key: 'sub1',
            label: 'Mail confirmation',
            icon: (
                <Badge>
                    <Avatar icon={<MailOutlined />} shape="square" />
                </Badge>
            ),
            children: [{ key: '5', label: 'Confirm your email' }],
        },
        {
            key: 'sub2',
            label: 'Logout',
            icon: (
                <Badge>
                    <Avatar
                        style={{
                            backgroundColor: '#8B0000',
                        }}
                        icon={<LogoutOutlined />}
                        shape="square"
                    />
                </Badge>
            ),
            children: [
                { key: '9', label: 'Log out' },
                { key: '10', label: 'Log out of all devices' },
            ],
        },
    ];

    return (
        <>
            <Flex align="center" justify="center" gap="2rem">
                <Badge>
                    <GradientAvatar icon={<UserOutlined />} shape="square" />
                </Badge>
                <Flex vertical>
                    <Typography.Text strong>Hello, ValeriankaS</Typography.Text>
                    <Typography.Text>timonkin.max@yandex.ru</Typography.Text>
                </Flex>
                <Badge>
                    <GradientAvatar
                        icon={<NotificationOutlined />}
                        shape="square"
                    />
                </Badge>
            </Flex>
            <Divider textPaddingInline={0} />
            <div
                style={{
                    width: '100%',
                }}
            >
                <Menu mode="inline" items={items} />
            </div>
        </>
    );
}
