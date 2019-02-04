import { StyleSheet } from '@patternfly/react-styles';
import {
  global_BorderWidth_sm as borderWidth,
  global_BorderColor_light as borderColor
} from '@patternfly/react-tokens';

export default StyleSheet.create({
  code: {
    'max-height': '37.5rem',
    overflow: 'auto',
    border: '1px solid #bbb'
  },
  toolbar: {
    borderLeft: `${borderWidth.var} solid ${borderColor.var}`,
    borderRight: `${borderWidth.var} solid ${borderColor.var}`,
    borderBottom: `${borderWidth.var} solid ${borderColor.var}`
  },
  message: {
    transition: '500ms all ease',
    opacity: 0,
    height: 0,
    'will-change': 'opacity'
  },
  messageText: {
    background: 'black',
    color: 'white',
    padding: '3px 5px'
  },
  messageShow: {
    opacity: 1,
    height: 'initial'
  }
});
