/**
 * This layout pushes the footer area under the fold (user has to scroll to get to footer)
 */
import React from 'react';

class FooterUnderFoldLayout extends React.Component {
  constructor(props) {
    super(props);

    // Retrieve the last state
    this.state = {
      bannerHeight: 0,
      headerHeight: 0,
      contentPadding: 0
    };
  }

  componentDidMount() {
    setInterval(
      () => {
        const banner = document.getElementById('pf3-banner');
        const bannerVisible = !!banner;
        const headerHeight = document.getElementsByClassName('pf4-site-header')[0].offsetHeight;
        const bannerHeight = bannerVisible ? banner.offsetHeight : 0;
        const contentComputedStyle = window.getComputedStyle(document.getElementsByClassName('pf-c-page__main-section pageSectionStyles markdown-body')[0]);
        const contentPadding = Number.parseInt(contentComputedStyle.getPropertyValue('padding-top')) + Number.parseInt(contentComputedStyle.getPropertyValue('padding-bottom'));
        this.setState({
          headerHeight,
          bannerHeight,
          contentPadding
        })
      },
      1
    );
  }

  render() {
    const { children } = this.props;
    const { headerHeight, bannerHeight, contentPadding } = this.state;
    return (
      <div style={{ height: `calc(100vh - (${headerHeight}px + ${bannerHeight}px + ${contentPadding}px))` }}>
        {children}
      </div>
    );
  }
}

export default FooterUnderFoldLayout;