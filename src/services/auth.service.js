const ID_TOKEN_KEY = 'auth/token';

export default {
  /**
   * Returns authentication token from localStorage of found.
   * @returns {string | null}
   */
  getToken() {
    return window.localStorage.getItem(ID_TOKEN_KEY);
  },
  /**
   * Sets authentication token to localStorage.
   * @param token
   */
  saveToken(token) {
    window.localStorage.setItem(ID_TOKEN_KEY, token);
  },
  /**
   * Destroy authentication token stored in localStorage.
   */
  destroyToken() {
    window.localStorage.removeItem(ID_TOKEN_KEY);
  },
};
