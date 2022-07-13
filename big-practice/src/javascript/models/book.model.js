import { BookHelper } from '../helpers/book.helper';
 export class Model {
  constructor() {
    this.bookList = [];
    this.bookHelper = new BookHelper();
  }

  getBookList = async () => {
    this.bookList = await this.bookHelper.getRequest('/books') || [];
    return this.bookList;
  };
}
