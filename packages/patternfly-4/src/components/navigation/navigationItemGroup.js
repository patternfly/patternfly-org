import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@patternfly/react-styles';
import styles from './navigationItemGroup.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleDown } from '@fortawesome/free-solid-svg-icons';

const propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
  isExpanded: PropTypes.bool.isRequired,
  onToggleExpand: PropTypes.func.isRequired
};

class NavigationItemGroup extends React.Component {
  static currentId = 0;
  static propTypes = propTypes;

  id = NavigationItemGroup.currentId++;
  contentId = `nav-item-group-content-${this.id}`;

  render() {
    const { title, children, isExpanded, onToggleExpand } = this.props;

    return (
      <nav>
        <div
          className={css(styles.title)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
          aria-expanded={isExpanded}
          aria-controls={this.contentId}
          onClick={onToggleExpand}
        >
          {title} {isExpanded ? <FontAwesomeIcon className={css(styles.icon)} icon={faAngleRight} size="1x" /> : <FontAwesomeIcon className={css(styles.icon)} icon={faAngleDown} size="1x" />}
        </div>
        <ul
          id={this.contentId}
          aria-hidden={!isExpanded}
          className={css(styles.items, isExpanded && styles.itemsExpanded)}
        >
          {children}
        </ul>
      </nav>
    );
  }
}

export default NavigationItemGroup;
