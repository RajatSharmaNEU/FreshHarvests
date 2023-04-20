const localStorageService = {
    getToken() {
        return localStorage.getItem('token');
    },

    getUser() {
        return JSON.parse(localStorage.getItem('User'));
    },

    setToken(token) {
        localStorage.setItem("Token", token);
    },

    setUser(user) {
        localStorage.setItem("User", JSON.stringify(user));
    },

    setVerifiedUser(status) {
        localStorage.setItem("verifiedUser", status);
    },

    getVerifiedUser() {
        return localStorage.getItem('verifiedUser');
    },

    setEmail(email) {
        localStorage.setItem('email', email);
    },

    getEmail() {
        return localStorage.getItem('email');
    },

    removeSessionData() {
        localStorage.removeItem('User');
        localStorage.removeItem('Token');
        localStorage.removeItem('verifiedUser');
        localStorage.removeItem('getUser');
        localStorage.removeItem('email');
    },
}

export default localStorageService;