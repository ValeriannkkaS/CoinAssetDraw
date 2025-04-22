import { useForm } from 'react-hook-form';
import { Typography, Form, Input } from 'antd';
import { useThemeContext } from '../../context/ThemeContext.jsx';
import { GradientButton } from '../Buttons/GradientButton.jsx';
import StyledForm from '../StyledForm.jsx';

export default function SignInForm() {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const { theme } = useThemeContext();

    const onFinish = () => {};
    const onFinishFailed = () => {};

    return (
        <>
            <Typography.Paragraph>
                <Typography.Title level={2}>
                    CoinAssetDraw Account.
                </Typography.Title>
                <Typography.Title level={4}>
                    Log in to add cryptocurrency assets and track the growth
                    dynamics of your portfolios.
                </Typography.Title>
            </Typography.Paragraph>
            <hr />
            <StyledForm
                size="large"
                name="basic"
                style={{ padding: '1rem' }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item label={null}>
                    <GradientButton
                        type="primary"
                        htmlType="submit"
                        style={{
                            marginTop: '1rem',
                            width: '100%',
                        }}
                    >
                        Sign In
                    </GradientButton>
                </Form.Item>
            </StyledForm>
        </>
    );
}
