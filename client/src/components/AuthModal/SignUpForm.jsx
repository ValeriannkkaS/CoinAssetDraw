import { useForm, Controller } from 'react-hook-form';
import { Form, Input, Typography } from 'antd';
import StyledForm from '../StyledForm.jsx';
import { GradientButton } from '../Buttons/GradientButton.jsx';
import {
    rulesForValidateConfirmPasswordSignUp,
    rulesForValidateEmailSignUp,
    rulesForValidatePasswordSignUp,
    rulesForValidateUsernameSignUp,
} from './rulesForValidateFields.js';

export default function SignUpForm() {
    const {
        handleSubmit,
        control,
        getValues,
        formState: { isValid, errors, values, touchedFields },
    } = useForm({
        mode: 'onChange',
    });

    const onFinish = (data) => {
        alert(JSON.stringify(data));
    };

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
                layout="vertical"
                style={{ padding: '1rem', marginTop: '1rem' }}
                onFinish={handleSubmit((data) => onFinish(data))}
            >
                <Form.Item
                    label="Email:"
                    validateStatus={
                        errors.email ? 'error' : values?.email ? 'success' : ''
                    }
                    help={errors?.email?.message || ''}
                >
                    <Controller
                        control={control}
                        name="email"
                        rules={rulesForValidateEmailSignUp}
                        render={({ field }) => (
                            <Input
                                placeholder="Please, input your e-mail adress"
                                {...field}
                            />
                        )}
                    />
                </Form.Item>

                <Form.Item
                    label="Username:"
                    validateStatus={
                        errors.username
                            ? 'error'
                            : values?.username
                              ? 'success'
                              : ''
                    }
                    help={errors?.username?.message || ''}
                >
                    <Controller
                        control={control}
                        name="username"
                        rules={rulesForValidateUsernameSignUp}
                        render={({ field }) => (
                            <Input
                                placeholder="Please enter your username"
                                {...field}
                            />
                        )}
                    />
                </Form.Item>

                <Form.Item
                    label="Password:"
                    validateStatus={
                        errors.password
                            ? 'error'
                            : values?.password
                              ? 'success'
                              : ''
                    }
                    help={errors?.password?.message || ''}
                >
                    <Controller
                        control={control}
                        name="password"
                        rules={rulesForValidatePasswordSignUp}
                        render={({ field }) => (
                            <Input.Password
                                placeholder="Please enter your password"
                                {...field}
                            />
                        )}
                    />
                </Form.Item>

                <Form.Item
                    label="Confirm your password:"
                    validateStatus={
                        errors.confirmPassword
                            ? 'error'
                            : values?.confirmPassword
                              ? 'success'
                              : ''
                    }
                    help={errors?.confirmPassword?.message || ''}
                >
                    <Controller
                        control={control}
                        name="confirmPassword"
                        rules={{
                            validate: {
                                isEqualPassword: (value) =>
                                    value === getValues('password') || // не стал выносить в файл.
                                    'Passwords must match',
                            },
                            ...rulesForValidateConfirmPasswordSignUp,
                        }}
                        render={({ field }) => (
                            <Input.Password
                                placeholder="Please, confirm your password."
                                {...field}
                            />
                        )}
                    />
                </Form.Item>

                <Form.Item label={null}>
                    <GradientButton
                        type="primary"
                        htmlType="submit"
                        disabled={!isValid || touchedFields.length === 0}
                        style={{
                            marginTop: '1rem',
                            width: '100%',
                        }}
                    >
                        Sign Up
                    </GradientButton>
                </Form.Item>
            </StyledForm>
        </>
    );
}
