import { AngularFacebookApiPage } from './app.po';

describe('angular-facebook-api App', function() {
  let page: AngularFacebookApiPage;

  beforeEach(() => {
    page = new AngularFacebookApiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
