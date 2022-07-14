export class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.init();

    this.view.bindDeleteBook(this.handleDeleteBook.bind(this));
    // this.view.bindConfirmDeleteBook(this.handleConfirmDeleteBook.bind(this));
  }

  async init() {
    this.handleShowBooks();
  };

  async handleShowBooks() {
    await this.model.getBookList();
    this.view.showBookList(this.model.bookList);
  }

  async handleDeleteBook(id) {
    console.log(id);
    await this.model.deleteBook(id);
    this.view.removeBook(id);
  }

  // async  handleConfirmDeleteBook() {
  //   await this.model.deleteBook(this.selectedBookId);
  //   this.view.showBookList(this.model.bookList);
  // }

}
