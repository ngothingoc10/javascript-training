import { BookHelper } from '../helpers/book.helper';
export class BookModel {
  constructor() {
    this.bookHelper = new BookHelper();
  }

  async getBookList() {
    try {
      const bookList = await this.bookHelper.getRequest(`/books`);
      return bookList;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  async deleteBook(id) {
    try {
      const res = await this.bookHelper.deleteRequest(`/books/${id}`);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async creatBook(body) {
    try {
      const res = await this.bookHelper.createRequest(`/books`, body);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}
