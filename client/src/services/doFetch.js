import userService from "./userService";

const doFetch = (url, method, data) => {

    return fetch(url, {
        method: method,
        headers: {
            Authorization: userService.authHeader(),
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
}

export default doFetch;