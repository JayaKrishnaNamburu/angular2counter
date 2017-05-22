import { Angular2CounterPage } from './app.po';

describe('angular2-counter App', function() {
  let page: Angular2CounterPage;

  beforeEach(() => {
    page = new Angular2CounterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
