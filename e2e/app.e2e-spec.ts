import { FamilyPhotoPage } from './app.po';

describe('family-photo App', () => {
  let page: FamilyPhotoPage;

  beforeEach(() => {
    page = new FamilyPhotoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
