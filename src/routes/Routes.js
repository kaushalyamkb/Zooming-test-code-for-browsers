import {deleteUser} from "../auth/Auth";

export const getRequest = async (endpoint, token) => {
    const response = await fetch(endpoint, {
        method: 'GET',
        headers: {
            'Authorization': token ? token : null
        },
    });
    let responseData = JSON.parse(await response.text());
    checkUserLoginStatus(responseData);
    return {data: responseData, status: response.status};
};

export const postRequest = async (values) => {
    const response = await fetch(values.endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': values.token ? values.token : null
        },
        body: JSON.stringify(values),
    });
    let responseData = JSON.parse(await response.text());
    checkUserLoginStatus(responseData);
    return {data: responseData, status: response.status};
};

export const deleteRequest = async (endpoint, token) => {
    const response = await fetch(endpoint, {
        method: 'DELETE',
        headers: {
            'Authorization': token ? token : null
        },
    });
    let responseData = JSON.parse(await response.text());
    checkUserLoginStatus(responseData);
    return {data: responseData, status: response.status};
};

export const putRequest = async (values) => {
    const response = await fetch(values.endpoint, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': values.token ? values.token : null
        },
        body: JSON.stringify(values),
    });
    let responseData = JSON.parse(await response.text());
    checkUserLoginStatus(responseData);
    return {data: responseData, status: response.status};
};

export const uploadFile = async (data, endpoint, token) => {
    const response = await fetch(endpoint, {
        method: 'POST',
        body: data,
        headers: {
            'Authorization': token ? token : null
        },
    });
    let responseData = JSON.parse(await response.text());
    checkUserLoginStatus(responseData);
    return {data: responseData, status: response.status};
};

export const downloadFile = async (endpoint, token) => {
    const response = await fetch(endpoint, {
        method: 'GET',
        headers: {
            'Authorization': token
        },
    });
    return {
        data: await response,
        status: response.status,
        text: response.status !== 200 ? JSON.parse(await response.text()) : null
    };
};

const checkUserLoginStatus = (data) => {
    if (data.error && data.message === 'Not Authorized!') {
        deleteUser().then(() => {
            window.location.href = '/login';
        });
    }
}
