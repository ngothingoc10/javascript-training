export class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.init();
  }

  async init() {
    await this.model.getBookList();
    this.view.showBookList(this.model.bookList);
  };



}


