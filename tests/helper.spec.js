const axios= require('axios');
import {expect} from '@playwright/test';
import { parse } from 'path';
// const cookies = require('cookies');


let apiUrl
 async function authenticateUser(username, password ,{request}) {
    const apiUrl =await getApiBaseUrl();
    const headers={
        'Content-Type': 'application/json',     
    
    };
    const requestBody={
        email: username,
        password: password,
    };
    const response = await request.post(`${apiUrl}/users/login`, {
        headers,
        data: requestBody,
    });
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    const token =responseBody.token;
    return token;
}
 async function getApiBaseUrl() {
    apiUrl=process.env.API_BASE_URL 
    if (!apiUrl) {
        apiUrl='https://thinking-tester-contact-list.herokuapp.com/api';
    }
    return apiUrl;
}
async function createEntity(accessToken, entityType, data, {request}) {
    const apiUrl = await getApiBaseUrl();
    const headers = {
        'Content-Type': 'application/json',
        'accept': 'application/json',   
        'Authorization': `Bearer ${accessToken}`,
    };
    const response = await request.post(`{apiUrl+module}`, {
        headers,
        data: JSON.stringify(userData),
    });     
    
    const responseBody = await response.json();
    const statusCode = response.status();
    expect(statusCode).toBe(201);
    if(responseBody && responseBody.id){
    return responseBody.id;
    }else {
        return null;
}
}
async function deleteEntity(accessToken, module , {request}) {
    const apiUrl = await getApiBaseUrl();
    const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',   
        'Authorization': "Bearer" + {accessToken},
    };
    const response = await request.delete(apiUrl+ module, {
        headers,
    });
    const statusCode = response.status();
    expect(statusCode).toBe(204);
}
// }
async function validateEntity(accessToken, module, {request}) {
    const apiUrl = await getApiBaseUrl();
    const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',   
        'Authorization':"Bearer" + {accessToken},
    };
    const response = await request.get(apiUrl+ module, {
        headers,
    });
    const statusCode = response.status();
    expect(statusCode).toBe(parseInt(status));
}

async function getEntity(accessToken, module, data, {request}) {
    const apiUrl = await getApiBaseUrl();
    const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',   
        'Authorization': "Bearer" + {accessToken},
    };
    const response = await request.get(apiUrl+ module, {
        headers,
        // data: JSON.stringify(userData),
    }); 
    // const responseBody = await response.json();
    const statusCode = response.status();   
    expect(statusCode).toBe(parseInt(status));
    const responseBody = await response.json();
    if(responseBody && responseBody[0]._id){    
    return responseBody[0]._id;
    }else {
        return null;
    }
}
