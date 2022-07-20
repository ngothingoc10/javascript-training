export class HomeController {
  constructor(model, homeView) {
    this.model = model;
    this.homeView = homeView;
    this.init();
  }

  async init() {
    this.handleShowBooks();
    this.homeView.bindDeleteBook();
    this.homeView.bindConfirmDeleteBook(this.handleConfirmDeleteBook.bind(this));
  };

  async handleShowBooks() {
    const bookList = await this.model.getBookList();
    this.homeView.showBookList(bookList);
  }

  async handleConfirmDeleteBook(id) {
   const res =  await this.model.deleteBook(id);
   if (res) {
    this.homeView.removeBook(id);
   }
  }

}
