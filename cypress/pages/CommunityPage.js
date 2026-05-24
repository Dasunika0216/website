import BasePage from './BasePage';

class CommunityPage extends BasePage {
  verifyPageLoaded() {
    this.verifyHeadingExists('Welcome to the AsyncAPI Community');
  }
}

export default CommunityPage;