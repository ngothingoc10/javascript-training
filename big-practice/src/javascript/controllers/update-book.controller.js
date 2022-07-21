export class UpdateBookController {
  constructor(bookModel, categoryModel, updateBookView) {
    this.bookModel = bookModel;
    this.categoryModel = categoryModel;
    this.updateBookView = updateBookView;
    this.init();
  }

  async init() {
    this.handleShowCategories();
    this.handleShowBook(); 
    this.updateBookView.bindCancelUpdateBook();
    this.updateBookView.bindUpdateBook(this.handleUpdateBook.bind(this));
    this.updateBookView.bindShowImage();
  }

  async handleShowCategories() {
    const categories = await this.categoryModel.getAllCategories();
    this.updateBookView.showCategories(categories);
  }

  async handleShowBook() {
    const bookId = this.updateBookView.getBookId();
    const book = await this.bookModel.getBookById(bookId);
    this.updateBookView.showBookById(book);
  }

  async handleUpdateBook(body, bookId) {
    const res = this.bookModel.updateBook(body, bookId);
    if (res) {
      // this.updateBookView.redirectHomePage();
    } else {
      this.updateBookView.alertMess();
    }
  }
}
