import { PersonalPagePage } from './app.po';

describe('personal-page App', () => {
  let page: PersonalPagePage;

  beforeEach(() => {
    page = new PersonalPagePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
