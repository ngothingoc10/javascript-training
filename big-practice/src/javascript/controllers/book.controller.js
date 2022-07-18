export class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.init();

    this.view.bindDeleteBook();
    this.view.bindConfirmDeleteBook(this.handleConfirmDeleteBook.bind(this));
  }

  async init() {
    this.handleShowBooks();
  };

  async handleShowBooks() {
    await this.model.getBookList();
    this.view.showBookList(this.model.bookList);
  }

  async handleConfirmDeleteBook(id) {
    console.log(id);
    await this.model.deleteBook(id);
    this.view.removeBook(id);
  }

}
