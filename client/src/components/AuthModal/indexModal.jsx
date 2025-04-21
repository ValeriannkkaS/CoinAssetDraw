import { observer } from 'mobx-react-lite';
import { authModalStore } from '../../stores/authModalStore.js';
import SignInForm from './SignInForm.jsx';
import SignUpForm from './SignUpForm.jsx';
import StyledModal from '../StyledModal.jsx';

export default observer(function AuthModal() {
    const { isOpen, closeModal, mode } = authModalStore;

    return (
        <StyledModal
            open={isOpen}
            onCancel={closeModal}
            footer={null}
            width={'37vw'}
        >
            {mode === 'signIn' ? <SignInForm /> : <SignUpForm />}
        </StyledModal>
    );
});
