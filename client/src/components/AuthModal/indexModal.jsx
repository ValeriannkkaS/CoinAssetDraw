import { observer } from 'mobx-react-lite';
import { authModalStore } from '../../stores/authModalStore.js';
import { Modal } from 'antd';
import SignInForm from './SignInForm.jsx';
import SignUpForm from './SignUpForm.jsx';

export default observer(function AuthModal() {
    const { isOpen, closeModal, mode } = authModalStore;

    return (
        <Modal open={isOpen} onCancel={closeModal} footer={null}>
            {mode === 'signIn' ? <SignInForm /> : <SignUpForm />}
        </Modal>
    );
});
