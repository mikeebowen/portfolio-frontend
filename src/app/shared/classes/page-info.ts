interface IPageInfo {
  pageTitle?: string;
  pageType: string;
  pageContent?: string;
}

export class PageInfo {
  pageContent: string;
  pageType: string;
  pageTitle: string;

  constructor(option: IPageInfo) {
    this.pageType = option.pageType;
    this.pageContent = option.pageContent;
    this.pageTitle = option.pageTitle;
  }
}
