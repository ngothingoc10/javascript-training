import { BookHelper } from '../helpers/book.helper';
export class CategoryModel {
  constructor() {
    this.bookHelper = new BookHelper();
  }

  async getAllCategories() {
    try {
      const categories = await this.bookHelper.getRequest(`/categories`);
      return categories;
    } catch (error) {
      console.log(error);
      return [];
    }
  }
}
