export class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.init();
  }

  async init() {
    this.handleShowBook();
  };

  async handleShowBook() {
    await this.model.getBookList();
    this.view.showBookList(this.model.bookList);
  }

  async handleDeleteBook(id) {
    const book = await this.model.deleteBook(id);
    this.onCourseListChanged(this.model.courses);
  }



}


