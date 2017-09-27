import { CrowdsourcingPage } from './app.po';

describe('crowdsourcing App', () => {
  let page: CrowdsourcingPage;

  beforeEach(() => {
    page = new CrowdsourcingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
