const $BASE_REST = "http://localhost:3000";

export const environment = {
    baseRest: $BASE_REST,
     auth: {
        login: `${$BASE_REST}/api/auth/login`,
        register: `${$BASE_REST}/api/auth/register`
    },
}