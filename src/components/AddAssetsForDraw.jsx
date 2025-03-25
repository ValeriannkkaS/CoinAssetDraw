import { useState } from 'react'
import {Flex, Select, Space, Typography, Divider, Form, Input, Button, Checkbox, InputNumber, DatePicker, Result} from "antd";
import {useCryptoContext} from "../context/CryptoContext";

const validateMessages = {
  required: '${label} is required',
  types: {
      number: '${label} is not a valid number'
  },
  number: {
      range: '${label} must be between ${min} and ${max}'
  }
};

export default function AddAssetsForDraw( {onClose} ) {
    const [form] = Form.useForm();

    const [coin, setCoin] = useState(null);
    const [select, setSelect] = useState(false);
    const [result, setResult] = useState(false);


    const {crypto} = useCryptoContext();

    if (result){
        return(
            <Result
                status="success"
                title="Successfully Added new Asset"
                subTitle={`Added ${42} of ${coin.name} by price ${24}`}
                extra={[
                    <Button type="primary" key="console" onClick={() => {
                        onClose();
                        setCoin(false);
                        setResult(false);
                    }}>
                        Go Back
                    </Button>,
                    <Button key="buy" onClick={() => {
                        setResult(false);
                        setCoin(null);
                    }}>
                        Buy Again
                    </Button>,
                ]}
            />
        )
    }

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
        setResult((prev) => !prev)
    }

    function handleAmountChange(value){
        const price = form.getFieldValue('price');
        console.log(price);
        form.setFieldsValue({
            total: +(value * price).toFixed(2),
        })
    }
    function handlePriceChange(value){
        const amount = form.getFieldValue('amount');
        console.log(amount);
        form.setFieldsValue({
            total: +(value * amount).toFixed(2),
        })
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
                form={form}
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
                    price: + coin.price.toFixed(2),
                }}
                onFinish={onFinish}
                validateMessages={validateMessages}
                clearOnDestroy
            >
                <Form.Item
                    label="Amount"
                    name="amount"
                    rules={[
                        {
                            required: true,
                            type: 'number',
                            min: 0,
                        },
                    ]}
                >
                    <InputNumber
                        onChange={handleAmountChange}
                        placeholder='Enter coin amount'
                        style={{
                        width: '100%'
                    }}/>
                </Form.Item>

                <Form.Item
                    label="Price"
                    name="price"
                >
                    <InputNumber
                        onChange={handlePriceChange}
                        style={{
                        width: '100%'
                    }}/>
                </Form.Item>

                <Form.Item
                    label="Date & Time"
                    name="date&time"
                >
                   <DatePicker
                       style={{
                       width: '100%'
                   }}
                       showTime/>
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