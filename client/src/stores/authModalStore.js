import { makeAutoObservable } from 'mobx';

class AuthModalStore {
    isOpen = false;
    mode;

    constructor() {
        makeAutoObservable(this);
    }

    openModal = (mode) => {
        this.mode = mode;
        this.isOpen = true;
    };

    closeModal = () => {
        this.isOpen = false;
    };
}

export const authModalStore = new AuthModalStore();
