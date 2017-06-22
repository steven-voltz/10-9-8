import { HeadsOrTailsPage } from './app.po';

describe('heads-or-tails App', () => {
  let page: HeadsOrTailsPage;

  beforeEach(() => {
    page = new HeadsOrTailsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
