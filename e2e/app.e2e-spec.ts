import { MyTheaterPage } from './app.po';

describe('my-theater App', () => {
  let page: MyTheaterPage;

  beforeEach(() => {
    page = new MyTheaterPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
