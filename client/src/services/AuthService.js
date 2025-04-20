import $api from '../http/index.js';

export default class AuthService {
    static async login(email, password) {
        const response = await $api.post('/users/auth/login', {
            email,
            password,
        });
        return response.data;
    }

    static async registration(email, password) {
        const response = await $api.post('/users/auth/register', {
            email,
            password,
        });
        return response.data;
    }

    static async logout() {
        const response = await $api.post('/users/auth/logout');
        return response.data;
    }

    static async logoutAll() {
        const response = await $api.post('/users/auth/logout-all');
    }
}
