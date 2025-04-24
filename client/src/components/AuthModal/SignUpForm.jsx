import { useForm, Controller } from 'react-hook-form';
import { Form, Input, Typography } from 'antd';
import StyledForm from '../StyledForm.jsx';
import { GradientButton } from '../Buttons/GradientButton.jsx';

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
                        rules={{
                            required: {
                                value: true,
                                message: 'This field must be filled in',
                            },
                            validate: {
                                incorrectFormat: (value) =>
                                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ||
                                    'Incorrect email address',
                                noSpaces: (value) =>
                                    /^\S+$/.test(value) ||
                                    'Spaces are forbidden.',
                                incorrectDomain: (value) =>
                                    /@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
                                        value,
                                    ) || 'incorrect domain',
                            },
                        }}
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
                        rules={{
                            required: {
                                value: true,
                                message: 'This field must be filled in',
                            },
                            minLength: {
                                value: 5,
                                message:
                                    'Username must be greater than 5 characters',
                            },
                            maxLength: {
                                value: 14,
                                message: 'Maximum characters of username is 14',
                            },
                            validate: {
                                forbiddenSymbols: (value) =>
                                    /^[a-zA-Z0-9_.-]+$/.test(value) ||
                                    'Only Latin letters (a-z), numbers (0-9) and the characters _ . -',
                                dontStartsWithLetter: (value) =>
                                    /^[a-zA-Z]/.test(value) ||
                                    'The name must begin with a letter (a-z, A-Z)',
                                noSpaces: (value) =>
                                    /^\S+$/.test(value) ||
                                    'Spaces are forbidden.',
                                endWithForbiddenSymbols: (value) =>
                                    /.*[a-zA-Z0-9]$/.test(value) ||
                                    'A name cannot end in _ . -',
                                noRepeatedSpecials: (value) =>
                                    /^(?!.*[_.-]{2})[a-zA-Z0-9_.-]+$/.test(
                                        value,
                                    ) ||
                                    'The characters _ . - cannot be repeated',
                                reservedNames: (value) =>
                                    !/^(admin|root|support|system)$/i.test(
                                        value,
                                    ) || 'Reserved username',
                            },
                        }}
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
                        rules={{
                            required: {
                                value: true,
                                message: 'This field must be filled in',
                            },
                            minLength: {
                                value: 8,
                                message:
                                    'Password must be greater than 8 characters',
                            },
                            maxLength: {
                                value: 20,
                                message: 'Maximum characters of password is 20',
                            },
                            validate: {
                                hasLatin: (value) =>
                                    /^[\x00-\x7F]+$/.test(value) ||
                                    'Allowed only English Letters',
                                hasLowercase: (value) =>
                                    /[a-z]/.test(value) ||
                                    'Password must include one lowercase letter',
                                hasUppercase: (value) =>
                                    /[A-Z]/.test(value) ||
                                    'Password must include one uppercase letter',
                                hasNumber: (value) =>
                                    /\d/.test(value) ||
                                    'Password must include one number',
                                hasSpecialSymbol: (value) =>
                                    /[^a-zA-Z0-9]/.test(value) ||
                                    'password must include one special symbol (!, ?, &)',
                                noSpaces: (value) =>
                                    /^\S+$/.test(value) ||
                                    'Spaces are forbidden.',
                            },
                        }}
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
                            required: {
                                value: true,
                                message: 'This field must be filled in',
                            },
                            validate: {
                                isEqualPassword: (value) =>
                                    value === getValues('password') ||
                                    'Passwords must match',
                            },
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
