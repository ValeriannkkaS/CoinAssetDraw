import { styled } from 'styled-components';
import { Modal } from 'antd';
import { useThemeContext } from '../context/ThemeContext.jsx';

const ModalContentWrapper = styled.div`
    background: ${({ theme }) => theme.modal.background};
    border-radius: 16px;
    padding: 2rem;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
    color: #e2e8f0;

    .ant-modal-content {
        background: transparent;
        box-shadow: none;
    }

    .ant-modal-header {
        background: transparent;
        border-bottom: none;
    }

    .ant-modal-title {
        color: ${({ theme }) => theme.modal.text};
    }
`;
export default function StyledModal(props) {
    const { theme } = useThemeContext();

    return (
        <Modal
            {...props}
            modalRender={(modalNode) => (
                <ModalContentWrapper theme={theme}>
                    {modalNode}
                </ModalContentWrapper>
            )}
        ></Modal>
    );
}
