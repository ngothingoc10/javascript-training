export class HomeController {
  constructor(bookModel, homeView) {
    this.bookModel = bookModel;
    this.homeView = homeView;
    this.init();
  }

  async init() {
    this.handleShowBooks();
    this.homeView.bindDeleteBook();
    this.homeView.bindConfirmDeleteBook(this.handleConfirmDeleteBook.bind(this));
  };

  async handleShowBooks() {
    const bookList = await this.bookModel.getBookList();
    this.homeView.showBookList(bookList);
  }

  async handleConfirmDeleteBook(id) {
    console.log('this', this);
    const res = await this.bookModel.deleteBook(id);
    if (res) {
      this.homeView.removeBook(id);
    } else {
      this.homeView.alertMess();
    }
  }

}
