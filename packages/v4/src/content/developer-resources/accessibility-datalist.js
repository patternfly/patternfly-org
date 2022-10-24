import React from 'react';
import {
  Button,
  DataList,
  DataListItem,
  DataListItemRow,
  DataListCell,
  DataListAction,
  DataListToggle,
  DataListContent,
  DataListItemCells,
  Dropdown,
  DropdownItem,
  DropdownPosition,
  KebabToggle,
} from '@patternfly/react-core';
import AngleDownIcon from '@patternfly/react-icons/dist/js/icons/angle-down-icon';
import AngleRightIcon from '@patternfly/react-icons/dist/js/icons/angle-right-icon';

export class AccessibilityDatalist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: [],
      isOpen1: false,
      isOpen2: false,
      isOpen3: false,
      isOpen4: false,
      isOpen5: false,
      isOpen6: false,
      allExpanded: false
    };

    this.onToggleAll = () => {
      this.setState(
        {
          allExpanded: !this.state.allExpanded
        },
        () => {
          if (this.state.allExpanded) {
            this.setState({
              expanded: ['ex-toggle1', 'ex-toggle2', 'ex-toggle3', 'ex-toggle4', 'ex-toggle5', 'ex-toggle6']
            });
          } else {
            this.setState({
              expanded: []
            });
          }
        }
      );
    };
    this.onSelect1 = event => {
      this.setState(prevState => ({
        isOpen1: !prevState.isOpen1
      }));
    };

    this.onSelect2 = event => {
      this.setState(prevState => ({
        isOpen2: !prevState.isOpen2
      }));
    };

    this.onSelect3 = event => {
      this.setState(prevState => ({
        isOpen3: !prevState.isOpen3
      }));
    };

    this.onSelect4 = event => {
      this.setState(prevState => ({
        isOpen4: !prevState.isOpen4
      }));
    };

    this.onSelect5 = event => {
      this.setState(prevState => ({
        isOpen5: !prevState.isOpen5
      }));
    };

    this.onSelect6 = event => {
      this.setState(prevState => ({
        isOpen6: !prevState.isOpen6
      }));
    };
  }

  render() {
    const toggle = id => {
      const expanded = this.state.expanded;
      const index = expanded.indexOf(id);
      const newExpanded =
        index >= 0 ? [...expanded.slice(0, index), ...expanded.slice(index + 1, expanded.length)] : [...expanded, id];
      this.setState(() => ({ expanded: newExpanded }));
    };
    return (
      <React.Fragment>
        <br />
        <Button onClick={this.onToggleAll}>
          {this.state.allExpanded && <AngleDownIcon />}
          {!this.state.allExpanded && <AngleRightIcon />}
          Toggle All
        </Button>
        <br />
        <br />
        <DataList aria-label="Headings">
          <DataListItem aria-labelledby="ex-item0">
            <DataListItemRow>
              <DataListItemCells
                dataListCells={[
                  <DataListCell key="primary content">
                    <span id="ex-item1">Guideline</span>
                  </DataListCell>,
                  <DataListCell key="secondary content">
                    <span>Link</span>
                  </DataListCell>,
                  <DataListCell key="secondary content 2">
                    <span>Category</span>
                  </DataListCell>
                ]}
              />
            </DataListItemRow>
          </DataListItem>
          <DataListItem aria-labelledby="ex-item1" isExpanded={this.state.expanded.includes('ex-toggle1')}>
            <DataListItemRow>
              <DataListToggle
                onClick={() => toggle('ex-toggle1')}
                isExpanded={this.state.expanded.includes('ex-toggle1')}
                id="ex-toggle1"
                aria-controls="ex-expand1"
              />
              <DataListItemCells
                dataListCells={[
                  <DataListCell isIcon key="icon">
                  </DataListCell>,
                  <DataListCell key="primary content">
                    <div id="ex-item1">Skip to main links</div>
                  </DataListCell>,
                  <DataListCell key="secondary content">
                    <a href="//www.w3.org/WAI/WCAG21/quickref#bypass-blocks">WCAG 2.4.1</a>
                  </DataListCell>,
                  <DataListCell key="secondary content 2">
                    <span>development</span>
                  </DataListCell>
                ]}
              />
            </DataListItemRow>
            <DataListContent
              aria-label="Primary Content Details"
              id="ex-expand1"
              isHidden={!this.state.expanded.includes('ex-toggle1')}
            >
              <p>
              A mechanism should be available to bypass blocks of content that are repeated on multiple Web pages. 
              When keyboard-only users interact with your site, they use the tab key to jump from link to link. If you have a lot of links at the first of your page in your header or in a menu, they must tab through those every time they come to a new page just to get to the main content. Providing a skip to main content link allows them to easily bypass this.
              </p>

            </DataListContent>
          </DataListItem>
          <DataListItem aria-labelledby="ex-item2" isExpanded={this.state.expanded.includes('ex-toggle2')}>
            <DataListItemRow>
              <DataListToggle
                onClick={() => toggle('ex-toggle2')}
                isExpanded={this.state.expanded.includes('ex-toggle2')}
                id="ex-toggle2"
                aria-controls="ex-expand2"
              />
              <DataListItemCells
                dataListCells={[
                  <DataListCell isIcon key="icon">
                  </DataListCell>,
                  <DataListCell key="secondary content">
                    <div id="ex-item2">Page Titles</div>
                  </DataListCell>,
                  <DataListCell key="secondary content 2">
                    <a href="//www.w3.org/WAI/WCAG21/quickref#page-titled">WCAG 2.4.2</a>
                  </DataListCell>,
                  <DataListCell key="secondary content3">
                    <span>development</span>
                  </DataListCell>
                ]}
              />
            </DataListItemRow>
            <DataListContent
              aria-label="Primary Content Details"
              id="ex-expand2"
              isHidden={!this.state.expanded.includes('ex-toggle2')}
            >
              <div>
                Descriptive titles help users find content, orient themselves within it, and navigate through it. Users can more quickly identify the content they need when accurate, descriptive titles appear in site maps or lists of search results. 
                The title of each web page should:
                  <ul>
                    <li> Identify the subject of the web page. </li>
                    <li> Make sense when read out of context, for example by a screen reader or in a site map or list of search results.</li>
                    <li> Be short. </li>
                  </ul>
              </div>
            </DataListContent>
          </DataListItem>
          <DataListItem aria-labelledby="ex-item3" isExpanded={this.state.expanded.includes('ex-toggle3')}>
            <DataListItemRow>
              <DataListToggle
                onClick={() => toggle('ex-toggle3')}
                isExpanded={this.state.expanded.includes('ex-toggle3')}
                id="ex-toggle3"
                aria-controls="ex-expand3"
              />
              <DataListItemCells
                dataListCells={[
                  <DataListCell isIcon key="icon">
                  </DataListCell>,
                  <DataListCell key="tertiary content">
                    <div id="ex-item3">Links</div>
                  </DataListCell>,
                  <DataListCell key="secondary content">
                    <a href="//www.w3.org/WAI/WCAG21/quickref#link-purpose-in-context">WCAG 2.4.4</a>
                  </DataListCell>,
                  <DataListCell key="secondary content 2">
                    <span>design, development</span>
                  </DataListCell>
                ]}
              />
            </DataListItemRow>
            <DataListContent
              aria-label="Primary Content Details"
              id="ex-expand3"
              isHidden={!this.state.expanded.includes('ex-toggle3')}
            >
            <p>
              If more than one link has the same label, it should also have the same URL. 
              Screen reader users can access the list of links that are on a page, which pulls the links out of context. 
              If you have links with different URLs but the same label, then add additional text to provide context to the screen reader user.
            </p>
            </DataListContent>
          </DataListItem>
          <DataListItem aria-labelledby="ex-item4" isExpanded={this.state.expanded.includes('ex-toggle4')}>
            <DataListItemRow>
              <DataListToggle
                onClick={() => toggle('ex-toggle4')}
                isExpanded={this.state.expanded.includes('ex-toggle4')}
                id="ex-toggle4"
                aria-controls="ex-expand4"
              />
              <DataListItemCells
                dataListCells={[
                  <DataListCell isIcon key="icon">
                  </DataListCell>,
                  <DataListCell key="tertiary content">
                    <div id="ex-item3">Landmarks</div>
                  </DataListCell>,
                  <DataListCell key="secondary content">
                    <a href="//www.w3.org/TR/WCAG20-TECHS/ARIA11.html">ARIA11</a>
                  </DataListCell>,
                  <DataListCell key="secondary content 2">
                    <span>design, development</span>
                  </DataListCell>
                ]}
              />
            </DataListItemRow>
            <DataListContent
              aria-label="Primary Content Details"
              id="ex-expand4"
              isHidden={!this.state.expanded.includes('ex-toggle4')}
            >
            <p>
              Use landmark roles to clearly identify regions that communicate page structure. If more than one landmark role occurs in the page, use aria-label to differentiate the landmark elements
              Landmark roles programmatically identify sections of a page. Landmarks help assistive technology (AT) users orient themselves to a page and help them navigate easily to various sections of a page.
              Whenever a landmark role is used more than once, provide a name using aria-label or aria-labelledby to provide context for that landmark. (ARIA6, ARIA16)
              While toolbar is not a landmark role, the same rule applies to this role.
            </p>
            </DataListContent>
          </DataListItem>
          <DataListItem aria-labelledby="ex-item5" isExpanded={this.state.expanded.includes('ex-toggle5')}>
            <DataListItemRow>
              <DataListToggle
                onClick={() => toggle('ex-toggle5')}
                isExpanded={this.state.expanded.includes('ex-toggle5')}
                id="ex-toggle5"
                aria-controls="ex-expand"
              />
              <DataListItemCells
                dataListCells={[
                  <DataListCell isIcon key="icon">
                  </DataListCell>,
                  <DataListCell key="tertiary content">
                    <div id="ex-item3">Headings</div>
                  </DataListCell>,
                  <DataListCell key="secondary content">
                    <a href="//www.w3.org/WAI/WCAG21/quickref#section-headings">WCAG 2.4.10</a>
                  </DataListCell>,
                  <DataListCell key="secondary content 2">
                    <span>design, development</span>
                  </DataListCell>
                ]}
              />
            </DataListItemRow>
            <DataListContent
              aria-label="Primary Content Details"
              id="ex-expand5"
              isHidden={!this.state.expanded.includes('ex-toggle5')}
            >
            <p>
            Heading text should be descriptive. Correct heading levels should be used to communicate the outline and structure of the page.
            A common practice is to use a single h1 for the primary headline or logo on a page, h2s to designate major sections, and h3's in supporting subsections
            </p>
            </DataListContent>
          </DataListItem>
          <DataListItem aria-labelledby="ex-item6" isExpanded={this.state.expanded.includes('ex-toggle6')}>
            <DataListItemRow>
              <DataListToggle
                onClick={() => toggle('ex-toggle6')}
                isExpanded={this.state.expanded.includes('ex-toggle6')}
                id="ex-toggle6"
                aria-controls="ex-expand"
              />
              <DataListItemCells
                dataListCells={[
                  <DataListCell isIcon key="icon">
                  </DataListCell>,
                  <DataListCell key="tertiary content">
                    <div id="ex-item3">Contents</div>
                  </DataListCell>,
                  <DataListCell key="secondary content">
                  </DataListCell>,
                  <DataListCell key="secondary content 2">
                    <span>design</span>
                  </DataListCell>
                ]}
              />
            </DataListItemRow>
            <DataListContent
              aria-label="Primary Content Details"
              id="ex-expand5"
              isHidden={!this.state.expanded.includes('ex-toggle6')}
            >
            <p>
            Content should be meaningful, clear, and concise. Use simple language and formatting, as appropriate for the context.
            </p>
            </DataListContent>
          </DataListItem>
        </DataList>
      </React.Fragment>
    );
  }
}