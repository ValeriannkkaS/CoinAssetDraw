import { Badge, Flex, Typography, Divider, Menu, Avatar } from 'antd';
import { GradientAvatar } from './Avatar.jsx';
import AuthModal from './AuthModal/indexModal.jsx';
import {
    UserOutlined,
    NotificationOutlined,
    PieChartOutlined,
    SettingOutlined,
    MailOutlined,
    LogoutOutlined,
    LoginOutlined,
} from '@ant-design/icons';
import { authModalStore } from '../stores/authModalStore.js';

export default function UserInfoForPopover() {
    const items = [
        {
            key: 'settings',
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
            children: [
                {
                    key: 'tooltip-for-confirm-email',
                    label: 'Confirm your email',
                },
            ],
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
                { key: 'log-out', label: 'Log out' },
                { key: 'log-out-all', label: 'Log out of all devices' },
            ],
        },
        {
            key: 'sub3',
            label: 'Login',
            icon: (
                <Badge>
                    <Avatar
                        style={{
                            backgroundColor: '#004524',
                        }}
                        icon={<LoginOutlined />}
                        shape="square"
                    />
                </Badge>
            ),
            children: [
                { key: 'sign-in', label: 'Sign in' },
                { key: 'sign-up', label: 'Sign up' },
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
            <hr />
            <div
                style={{
                    width: '100%',
                }}
            >
                <Menu
                    mode="inline"
                    items={items}
                    onClick={({ key }) => {
                        switch (key) {
                            case 'settings':
                                break;

                            case 'sub1':
                                break;
                            case 'mail-confirmation':
                                break;

                            case 'sub2':
                                break;
                            case 'log-out':
                                break;
                            case 'log-out-all':
                                break;

                            case 'sub3':
                                break;
                            case 'sign-in':
                                authModalStore.openModal('signIn');
                                break;
                            case 'sign-up':
                                authModalStore.openModal('signUp');
                                break;
                        }
                    }}
                />
                <AuthModal />
            </div>
        </>
    );
}
