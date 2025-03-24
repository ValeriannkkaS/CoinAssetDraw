import {Layout, Select, Space, Button, Modal, Drawer, Switch, Flex} from "antd";
import {SunOutlined , MoonOutlined} from '@ant-design/icons'
import {useCryptoContext} from "../../context/CryptoContext";
import {useState, useEffect} from 'react';
import CoinInfoModal from "../CoinInfoModal";
import AddAssetsForDraw from "../AddAssetsForDraw";
import {useThemeContext} from "../../context/ThemeContext";


const headerStyle = {
    width: '100%',
    textAlign: 'center',
    height: 60,
    padding: '1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
};


export default function AppHeader() {
    const [select, setSelect] = useState(false);
    const [modal, setModal] = useState(false);
    const [drawer, setDrawer] = useState(false);
    const [coin, setCoin] = useState(null);

    const { theme, toggleTheme } = useThemeContext();
    const { crypto } = useCryptoContext();

    useEffect( () => {
        let pressed = new Set();
        const keypress = (event) => {
            pressed.add(event.key);
            if (!pressed.has('Alt') || !pressed.has('Enter')) {
                return
            }
            setSelect((prev) => !prev);
        };
        const keyup = (event) => {
            pressed.delete(event.key)
        };
        document.addEventListener('keydown', keypress);
        document.addEventListener('keyup', keyup);

        return (() => {
            document.removeEventListener('keydown', keypress);
            document.removeEventListener('keyup', keyup)
        })
    }, []);

    function handleSelect(value){
        setModal((prev) => !prev);
        setCoin(crypto.find((coin) => coin.id === value));
        console.log(coin)
    }


    return(
        <Layout.Header style={{
            backgroundColor: theme.header.background,
            color: theme.header.text,
            border: '1px solid' + theme.header.border,
            ...headerStyle,
        }}>
            <Select
                style={{
                    width: 250,
                    flex: 1,
                    maxWidth: 250,
                }}
                open={select}
                onSelect={handleSelect}
                onClick={() => setSelect((prev) => !prev)}
                value='press Alt+Enter to open/close'
                options={crypto.map( (coin) => {
                    return {
                        value: coin.id,
                        label: coin.name,
                        icon: coin.icon,
                    }
                })}

                optionRender={(option) => (
                    <Space>
                        <img src={option.data.icon} style={{
                            width: 20,
                        }}
                        title={option.data.label}
                        />
                        {option.data.label}
                    </Space>
                )}
            />

            <Modal
                title="Basic Modal"
                open={modal}
                onOk={() => setModal(false)}
                onCancel={() => setModal(false)}
                footer={null}
            >
                <CoinInfoModal coin={coin}/>
            </Modal>
            <Drawer
                size="large"
                title="Basic Drawer"
                onClose={() => setDrawer(false)}
                open={drawer}
            >
                <AddAssetsForDraw/>
            </Drawer>
            <Flex
            align="center"
            gap={20}
            >

                <Switch
                    checkedChildren={<SunOutlined />}
                    unCheckedChildren={<MoonOutlined />}
                    onChange={() => {
                        toggleTheme();
                    }}
                />
                <Button
                    type='primary'
                    onClick={() => setDrawer(true)}
                >
                    {'Add Asset'}
                </Button>
            </Flex>
        </Layout.Header>
    )
}

