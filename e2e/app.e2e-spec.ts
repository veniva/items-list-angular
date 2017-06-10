import { ShoppingListAngularPage } from './app.po';

describe('shopping-list-angular App', () => {
  let page: ShoppingListAngularPage;

  beforeEach(() => {
    page = new ShoppingListAngularPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
