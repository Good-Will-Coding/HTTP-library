/**
 * EasyHTTP Library
 * Library for making HTTP Requests
 * 
 *  @version 3.0.0
 *  @author Billy Phillips
 *  @license MIT
 */

class EasyHTTP {
    // Make an HTTP get request
    async get(url) {
        const response = await fetch(url);

        const resData = await response.json();

        return resData;
    }
    // Make an HTTP post request
    async post(url, data) {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    }
    // Make an HTTP PUT Request
    async put(url, data) {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const resData = await response.json();
        return resData;
    }
    // Make an HTTP DELETE request
    async delete(url) {
        const response = fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            },
        });
        const resData = await 'Resource Deleted';
        return resData;
    }
}