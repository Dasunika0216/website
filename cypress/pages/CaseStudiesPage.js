import BasePage from './BasePage';

class CaseStudiesPage extends BasePage {
  verifyPageLoaded() {
    this.verifyHeadingExists('Real Stories, Real Impact');
  }
}

export default CaseStudiesPage;
