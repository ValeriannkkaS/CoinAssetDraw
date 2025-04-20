import {
    Layout,
    Select,
    Space,
    Button,
    Modal,
    Drawer,
    Switch,
    Flex,
    Popover,
    Badge,
    Avatar,
} from 'antd';
import { SunOutlined, MoonOutlined, UserOutlined } from '@ant-design/icons';
import { useCryptoContext } from '../context/CryptoContext.jsx';
import { useState, useEffect } from 'react';
import CoinInfoModal from '../components/CoinInfoModal.jsx';
import AddAssetsForDraw from '../components/AddAssetsForDraw.jsx';
import { useThemeContext } from '../context/ThemeContext.jsx';
import { darkTheme, lightTheme } from '../lightVsDarkTheme.js';
import { GradientButton } from '../components/Buttons/GradientButton.jsx';
import { GradientAvatar } from '../components/Avatar.jsx';

const headerStyle = {
    width: '100%',
    textAlign: 'center',
    height: 60,
    padding: '1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
};
const contentForPopover = (
    <>
        <div>1</div>
        <div>2</div>
        <div>3</div>
    </>
);

export default function AppHeader() {
    const [select, setSelect] = useState(false);
    const [modal, setModal] = useState(false);
    const [drawer, setDrawer] = useState(false);
    const [coin, setCoin] = useState(null);

    const { theme, toggleTheme } = useThemeContext();
    const { crypto } = useCryptoContext();

    useEffect(() => {
        let pressed = new Set();
        const keypress = (event) => {
            pressed.add(event.key);
            if (!pressed.has('Alt') || !pressed.has('Enter')) {
                return;
            }
            setSelect((prev) => !prev);
        };
        const keyup = (event) => {
            pressed.delete(event.key);
        };
        document.addEventListener('keydown', keypress);
        document.addEventListener('keyup', keyup);

        return () => {
            document.removeEventListener('keydown', keypress);
            document.removeEventListener('keyup', keyup);
        };
    }, []);

    function handleSelect(value) {
        setModal((prev) => !prev);
        setCoin(crypto.find((coin) => coin.id === value));
    }

    return (
        <Layout.Header
            style={{
                backgroundColor: theme.header.background,
                color: theme.header.text,
                border: '1px solid' + theme.header.border,
                ...headerStyle,
            }}
        >
            <Flex align={'center'} gap={10}>
                <img src={'/coin-svgrepo-com.svg'} style={{ height: '2rem' }} />
                {theme === lightTheme && (
                    <img
                        src={'/textLogoForLightTheme.svg'}
                        style={{ height: '1rem' }}
                    />
                )}
                {theme === darkTheme && (
                    <img
                        src={'/textLogoForDarkTheme.svg'}
                        style={{ height: '1rem' }}
                    />
                )}
                <Select
                    style={{
                        width: 250,
                        flex: 1,
                        maxWidth: 250,
                    }}
                    open={select}
                    onSelect={handleSelect}
                    onClick={() => setSelect((prev) => !prev)}
                    value="press Alt+Enter to open/close"
                    options={crypto.map((coin) => {
                        return {
                            value: coin.id,
                            label: coin.name,
                            icon: coin.icon,
                        };
                    })}
                    optionRender={(option) => (
                        <Space>
                            <img
                                src={option.data.icon}
                                style={{
                                    width: 20,
                                }}
                                title={option.data.label}
                            />
                            {option.data.label}
                        </Space>
                    )}
                />
            </Flex>

            <Modal
                title="information about cryptocurrency:"
                open={modal}
                onOk={() => setModal(false)}
                onCancel={() => setModal(false)}
                footer={null}
            >
                <CoinInfoModal coin={coin} />
            </Modal>
            <Drawer
                size="large"
                title="Add an asset at the current price, or specify the time"
                onClose={() => setDrawer(false)}
                open={drawer}
            >
                <AddAssetsForDraw onClose={() => setDrawer(false)} />
            </Drawer>
            <Flex align="center" gap={20}>
                <Switch
                    checkedChildren={<SunOutlined />}
                    unCheckedChildren={<MoonOutlined />}
                    onChange={() => {
                        toggleTheme();
                    }}
                />
                <GradientButton type="primary" onClick={() => setDrawer(true)}>
                    {'Add Asset'}
                </GradientButton>
                <Popover title={'user info'} content={contentForPopover}>
                    <Badge>
                        <GradientAvatar
                            icon={<UserOutlined />}
                            shape="square"
                        />
                    </Badge>
                </Popover>
            </Flex>
        </Layout.Header>
    );
}
