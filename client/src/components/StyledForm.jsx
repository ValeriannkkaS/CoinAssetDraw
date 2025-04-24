import styled from 'styled-components';
import { Form } from 'antd';
import { useThemeContext } from '../context/ThemeContext.jsx';

const StyledFormWrapper = styled(Form)`
    .ant-form {
        padding: 1rem;
    }

    .ant-form-item-label > label {
        //подписи полей
        color: ${({ theme }) => theme.form.label};
        font-weight: 600;
        font-size: 16px;
    }

    .ant-input-number,
    .ant-picker,
    .ant-input,
    .ant-input-password {
        //стили для обычных полей
        background: ${({ theme }) => theme.form.commonFieldsBg};
        border-color: ${({ theme }) => theme.form.commonFieldsBorder};

        &:hover,
        &:focus,
        &:focus-within {
            background: ${({ theme }) => theme.form.commonFieldsBgHover};
            border-color: ${({ theme }) => theme.form.commonFieldsBorderHover};
        }
    }

    .ant-input-number-disabled {
        //стили для отключенных полей
        background: ${({ theme }) => theme.form.disabledFieldsBg} !important;
        border-color: ${({ theme }) =>
            theme.form.disabledFieldsBorder} !important;

        &:hover {
            background: ${({ theme }) =>
                theme.form.disabledFieldsBgHover} !important;
        }
    }

    .ant-input-number-affix-wrapper {
        background: ${({ theme }) => theme.form.disabledFieldsBg} !important;
        border-color: ${({ theme }) =>
            theme.form.disabledFieldsBorder} !important;

        &:hover {
            background: ${({ theme }) =>
                theme.form.disabledFieldsBgHover} !important;
        }
    }

    .ant-input-number-status-success.ant-input-number-outlined,
    .ant-input-status-success.ant-input-outlined,
    .ant-picker-status-success.ant-picker-outlined {
        // стили для полей success
        background: ${({ theme }) => theme.form.commonFieldsBg};
        border-color: ${({ theme }) => theme.form.successFieldsBorder};

        &:hover,
        &:focus {
            background: ${({ theme }) => theme.form.commonFieldsBg};
            border-color: ${({ theme }) => theme.form.successFieldsBorderHover};
        }

        &:focus-within {
            background: ${({ theme }) => theme.form.commonFieldsBg};
            border-color: ${({ theme }) => theme.form.successFieldsBorder};
        }
    }

    .ant-input-number-status-error.ant-input-number-outlined,
    .ant-input-status-error.ant-input-outlined,
    .ant-input-status-error.ant-input-password.ant-input-outlined {
        // стили для полей с ошибками
        background: rgba(89, 2, 2, 0.2);
        border-color: ${({ theme }) => theme.form.errorFieldsBorder};

        &:hover,
        &:focus {
            background: ${({ theme }) => theme.form.commonFieldsBg};
            border-color: ${({ theme }) => theme.form.errorFieldsBorderHover};
        }

        &:focus-within {
            background: ${({ theme }) => theme.form.commonFieldsBg};
            border-color: ${({ theme }) => theme.form.errorFieldsBorder};
        }
    }

    .ant-input-number-handler {
        //кнопки изменения числа в цифровом поле
        background: ${({ theme }) => theme.form.numberHandlerBg};
    }

    .anticon {
        //иконки полей
        color: ${({ theme }) => theme.form.icon} !important;
    }

    .ant-input-number-input,
    .ant-picker-input,
    .ant-input,
    .ant-input-password,
    .ant-picker-input.ant-picker-input-placeholder > input {
        color: ${({ theme }) => theme.form.inputColor};
        font-size: 16px;
    }

    .ant-input::placeholder,
    .ant-input-number-input::placeholder,
    .ant-picker-input > input::placeholder {
        color: ${({ theme }) => theme.form.inputPlaceholder};
    }

    & input:-webkit-autofill,
    & input:-webkit-autofill:hover,
    & input:-webkit-autofill:focus {
        border: 1px solid ${({ theme }) => theme.form.commonFieldsBorder};
        -webkit-text-fill-color: ${({ theme }) => theme.form.inputColor};
        -webkit-box-shadow: 0 0 0px 1000px
            ${({ theme }) => theme.form.commonFieldsBg} inset;
        transition: background-color 5000s ease-in-out 0s;
    }
`;

export default function StyledForm({ children, ...props }) {
    const { theme } = useThemeContext();

    return (
        <StyledFormWrapper theme={theme} {...props}>
            {children}
        </StyledFormWrapper>
    );
}
