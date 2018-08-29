
export class PageModel {

  public totalPages: number;
  public currentPage: number;
  public itemsPerPage: number;
  public totalItems: number;


  constructor(totalPages: number, currentPage: number, itemsPerPage: number, totalItems: number) {
    this.totalItems = totalItems;
    this.totalPages = totalPages;
    this.currentPage = currentPage;
    this.itemsPerPage = itemsPerPage;
  }


  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  jumpPage(page: number) {
    if (page <= this.totalPages && page >= 1) {
      this.currentPage = page;
    }
  }

}
