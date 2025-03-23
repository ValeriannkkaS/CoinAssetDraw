import {Layout, Select, Space, Button} from "antd";
import {useCryptoContext} from "../../context/CryptoContext";
import {useState, useEffect} from 'react';


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

    useEffect( () => {
        const keypress = (event) => {
            if(event.key === '/') {
                setSelect((prev) => !prev)
            }
        };

        document.addEventListener("keypress", keypress);

        return () => document.removeEventListener()
    }, []);

    const { crypto } = useCryptoContext();

    function handleSelect(value){
        console.log(value);
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
                optionLabelProp='label'
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
            <Button type='primary'>Add Asset</Button>
        </Layout.Header>
    )
}