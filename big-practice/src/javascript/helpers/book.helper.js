import { API_HOST } from "../utils/constant";
export class BookHelper {
  constructor() { }

  async getRequest(endpoint) {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const res = await fetch(API_HOST + endpoint, options);
    if (!res.ok) {
      throw new Error(`An error has occured: ${res.status}`);
    }
    const bookList = await res.json();
    return bookList;
  }

  async deleteRequest(endpoint) {
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    }
      const res = await fetch(API_HOST + endpoint, options);
      if (!res.ok) {
        throw new Error(`An error has occured: ${res.status}`);
      }
  }

  async createRequest(endpoint, body) {
    const requestBody = JSON.stringify(body);

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: requestBody
    }
      const res = await fetch(API_HOST + endpoint, options);
       if (!res.ok) {
        throw new Error(`An error has occured: ${res.status}`);
      }
  }

  async updateRequest(endpoint, body) {
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
      if (res.status !== 200) {
        console.log("err", res);
        return null;
      }
      return await res.json();
    } catch (error) {
      console.log(error);
      return null;
    }
  }

}
