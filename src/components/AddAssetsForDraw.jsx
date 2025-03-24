import { useState } from 'react'
import {Flex, Select, Space, Typography, Divider, Form, Input, Button, Checkbox, InputNumber, DatePicker} from "antd";
import {useCryptoContext} from "../context/CryptoContext";


export default function AddAssetsForDraw( {} ) {
    const [coin, setCoin] = useState(null);
    const [select, setSelect] = useState(false);


    const {crypto} = useCryptoContext();

    if(!coin){
        return(
            <Select
                style={{
                    width: '100%',
                }}
                open={select}
                onSelect={(value) => setCoin(crypto.find((coin) => coin.id === value))}
                onClick={() => setSelect((prev) => !prev)}
                placeholder='Select Coin'
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
        )
    }

    function onFinish(values) {
        console.log(values)
    }

    return(
        <>
            <Flex align="center">
                <img
                    src={coin.icon}
                    alt={coin.name}
                    title={coin.id}
                    style={{
                        width: 45,
                        aspectRatio: 1,
                    }}
                />
                <Typography.Title level={2} style={{
                    margin: '0 1rem',
                    padding: ''
                }}>
                    ( {coin.symbol} ) {coin.name}
                </Typography.Title>
                <Button onClick={() => setCoin(null)}>
                    Return
                </Button>
            </Flex>
            <Divider/>
            <Form
                name="basic"
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 10,
                }}
                style={{
                    maxWidth: 600,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
            >
                <Form.Item
                    label="Amount"
                    name="amount"
                    rules={[
                        {
                            required: true,
                            type: 'number',
                            min: 0,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <InputNumber style={{
                        width: '100%'
                    }}/>
                </Form.Item>

                <Form.Item
                    label="Price"
                    name="price"
                >
                    <InputNumber disabled style={{
                        width: '100%'
                    }}/>
                </Form.Item>

                <Form.Item
                    label="Date & Time"
                    name="date&time"
                >
                   <DatePicker showTime/>
                </Form.Item>

                <Form.Item
                    label="Total"
                    name="total"
                >
                    <InputNumber disabled style={{
                        width: '100%'
                    }}/>
                </Form.Item>


                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Add Asset
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}