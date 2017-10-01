interface IPageInfo {
  pageContent?: string;
  siteTitle?: string;
  pageName: string;
}

export class PageInfo {
  pageContent: string;
  siteTitle: string;
  pageName: string;

  constructor(data: IPageInfo) {
    this.pageContent = data.pageContent;
    this.siteTitle = data.siteTitle;
    this.pageName = data.pageName;
  }
}
