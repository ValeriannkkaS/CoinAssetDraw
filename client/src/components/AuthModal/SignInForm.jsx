import { useForm, Controller } from 'react-hook-form';
import { Typography, Form, Input } from 'antd';
import { GradientButton } from '../Buttons/GradientButton.jsx';
import StyledForm from '../StyledForm.jsx';

export default function SignInForm() {
    const {
        handleSubmit,
        control,
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
                    Log in to add cryptocurrency assets and track the growth
                    dynamics of your portfolios.
                </Typography.Title>
            </Typography.Paragraph>
            <hr />
            <StyledForm
                size="large"
                layout="vertical"
                name="basic"
                style={{ padding: '1rem' }}
                onFinish={handleSubmit((data) => onFinish(data))}
            >
                <Form.Item
                    label="Username or email:"
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
                            validate: {
                                onlyLettersAndNumbers: (value) =>
                                    /^[a-zA-Z0-9_.-]+$/.test(value) ||
                                    'The name has only English letters and numbers.',
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
                            validate: {
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

                <Form.Item label={null}>
                    <GradientButton
                        type="primary"
                        disabled={!isValid || touchedFields.length === 0}
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
