import {API_HOST} from "../utils/constant";

const getRequest = async (endpoint) => {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }

  try {
    const res = await fetch(API_HOST + endpoint, options);
    console.log(API_HOST);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

const createRequest = async (endpoint, body) => {
  if (typeof body === undefined) {
    console.log('Not body in request.');
  }
  const requestBody = JSON.stringify(body);

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: requestBody
  }

  try {
    const res = await fetch(API_HOST + endpoint, options);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

const updateRequest = async (endpoint, body) => {
  if (typeof body === undefined) {
    console.log('Not body in request.');
  }
  const requestBody = JSON.stringify(body);

  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: requestBody
  }

  try {
    const res = await fetch(API_HOST + endpoint, options);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

const deleteRequest = async (endpoint) => {
  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body
  }

  try {
    const res = await fetch(API_HOST + endpoint, options);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

export {
  getRequest,
  createRequest,
  updateRequest,
  deleteRequest,
};
