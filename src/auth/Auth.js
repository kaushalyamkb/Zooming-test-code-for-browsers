export const createUser = async (access_token, usertype) => {
    let user = {};
    if (!access_token) {
        access_token = null;
    }
    user.token = access_token;
    user.time = new Date();
    user.usertype = usertype;
    sessionStorage.setItem('user', JSON.stringify(user));
};

export const getUser = async (redirect) => {
    let user = JSON.parse(sessionStorage.getItem('user')),
        currentDate = new Date();

    if (!(new Date(user.time) > currentDate.setHours(currentDate.getHours() - 3))) {
        await deleteUser();
        window.location.href = '/';
    }

    return JSON.parse(sessionStorage.getItem('user'));
};

export const deleteUser = async () => {
    sessionStorage.removeItem('user');
};
