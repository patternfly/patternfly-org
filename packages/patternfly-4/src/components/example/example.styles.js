import { StyleSheet } from '@patternfly/react-styles';
import {
  global_spacer_md as spacerMd,
  global_BackgroundColor_light_100 as backgroundWhite,
  global_BorderWidth_sm as borderWidth,
  global_BorderColor_light_200 as borderColor
} from '@patternfly/react-tokens';

export default StyleSheet.create({
  example: {
    padding: spacerMd.var,
    background: backgroundWhite.var,
    border: `${borderWidth.var} solid ${borderColor.var}`
  }
});
