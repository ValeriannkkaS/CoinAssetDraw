import { useForm } from 'react-hook-form';
import { Typography, Form, Input } from 'antd';
import { styled } from 'styled-components';
import { useThemeContext } from '../../context/ThemeContext.jsx';
import { GradientButton } from '../Buttons/GradientButton.jsx';

export default function SignInForm() {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const { theme } = useThemeContext();

    const StyledFormWrapper = styled.div`
        margin: 0 auto;
        padding: 2rem;
    `;

    const StyledForm = styled(Form)`
        .ant-form-item-label > label {
            color: #d1d5db;
            font-weight: 500;
        }

        .ant-input {
            background: #1e293b;
            border-color: #334155;
            color: #f8fafc;

            &:focus,
            &:hover {
                border-color: #3b82f6;
                box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.3);
            }
        }

        .ant-input-password {
            background: #1e293b;
            color: #f8fafc;
        }
    `;

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
            <StyledFormWrapper>
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
            </StyledFormWrapper>
        </>
    );
}
