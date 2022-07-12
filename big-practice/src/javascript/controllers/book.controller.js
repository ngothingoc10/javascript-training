class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.init();
  }

  init = async () => {
    await this.model.getBookList();
    this.view.showBookList(this.model.bookList);
  };

}

export { Controller }
