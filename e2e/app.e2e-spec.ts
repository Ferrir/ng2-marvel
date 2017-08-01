import { Ng2MarvelPage } from './app.po';

describe('ng2-marvel App', () => {
  let page: Ng2MarvelPage;

  beforeEach(() => {
    page = new Ng2MarvelPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
