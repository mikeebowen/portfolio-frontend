import { PortfolioFrontendPage } from './app.po';

describe('portfolio-frontend App', () => {
  let page: PortfolioFrontendPage;

  beforeEach(() => {
    page = new PortfolioFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
