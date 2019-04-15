import { StyleSheet } from '@patternfly/react-styles';

export default StyleSheet.create({
  code: {
    'max-height': '37.5rem',
    overflow: 'auto',
    'background-color': '#fff',
    'border-top': '1px solid #f8f8f8',
    'border-right': 'none',
    'border-bottom': 'none',
    'border-left': 'none'
  },
  toolbar: {
    'background-color': '#fff',
    'border-top': '1px solid #f8f8f8',
    'border-right': 'none',
    'border-bottom': 'none',
    'border-left': 'none'
  },
  message: {
    transition: '500ms all ease',
    opacity: 0,
    height: 0,
    'will-change': 'opacity'
  },
  messageText: {
    'background-color': '#fff',
    'color': '#486b00',
    padding: '16px'
  },
  messageShow: {
    opacity: 1,
    height: 'initial'
  }
});
