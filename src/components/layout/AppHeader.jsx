import {Layout, Select, Space, Button, Modal, Drawer} from "antd";
import {useCryptoContext} from "../../context/CryptoContext";
import {useState, useEffect} from 'react';
import CoinInfoModal from "../CoinInfoModal";
import AddAssetsForDraw from "../AddAssetsForDraw";


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

    const { crypto } = useCryptoContext();

    useEffect( () => {
        const keypress = (event) => {
            if(event.key === '/') {
                setSelect((prev) => !prev)
            }
        };

        document.addEventListener('keypress', keypress);

        return () => document.removeEventListener('keypress', keypress)
    }, []);

    function handleSelect(value){
        setModal((prev) => !prev);
        setCoin((prev) => crypto.find((coin) => coin.id === value));
        console.log(coin)
    }


    return(
        <Layout.Header style={headerStyle}>
            <Select
                style={{
                    width: 250
                }}
                open={select}
                onSelect={handleSelect}
                onClick={() => setSelect((prev) => !prev)}
                value='press / to open'
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
            <Button
                type='primary'
                onClick={() => setDrawer(true)}
            >
                Add Asset
            </Button>
        </Layout.Header>
    )
}