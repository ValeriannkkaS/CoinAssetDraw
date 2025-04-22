import { useForm } from 'react-hook-form';
import { useThemeContext } from '../../context/ThemeContext.jsx';
import { Form, Input, Typography } from 'antd';
import StyledForm from '../StyledForm.jsx';
import { GradientButton } from '../Buttons/GradientButton.jsx';

export default function SignUpForm() {
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
                    Please, register to add cryptocurrency assets and track the
                    growth dynamics of your portfolios.
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
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your email!',
                        },
                    ]}
                >
                    <Input placeholder="E-mail" />
                </Form.Item>

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
                    <Input placeholder="Username" />
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
                    <Input.Password placeholder="please, input your password." />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Confirm your password!',
                        },
                    ]}
                >
                    <Input.Password placeholder="please, confirm your password." />
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
