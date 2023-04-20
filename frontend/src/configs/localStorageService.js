const localStorageService = {
    getToken() {
        return localStorage.getItem('token');
    },

    getUser() {
        return localStorage.getItem('User');
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

    removeSessionData() {
        localStorage.removeItem('User');
        localStorage.removeItem('Token');
        localStorage.removeItem('verifiedUser');
        localStorage.removeItem('getUser');
    },
}

export default localStorageService;