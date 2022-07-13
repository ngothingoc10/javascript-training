import {
  getRequest,
  // createRequest,
  // updateRequest,
  // deleteRequest,
} from '../helpers/book.helper';

class Model {
  constructor() {
    this.bookList = [];
  }

  getBookList = async () => {
    try {
      this.bookList = await getRequest('/books');
      return this.bookList;
    } catch (error) {
      console.log('HIHI' + error);
    }
  };
}

export {Model}
