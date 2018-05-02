import { OauRantsPage } from './app.po';

describe('oau-rants App', () => {
  let page: OauRantsPage;

  beforeEach(() => {
    page = new OauRantsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
