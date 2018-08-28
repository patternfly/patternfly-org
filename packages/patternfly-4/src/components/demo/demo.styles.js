import { StyleSheet } from '@patternfly/react-styles';
import {
  global_spacer_md as spacerMd,
  global_spacer_sm as spacerSm,
  global_spacer_xs as spacerXs,
  global_BorderWidth_sm as borderWidth,
  global_BorderColor_dark as borderColor
} from '@patternfly/react-tokens';

export default StyleSheet.create({
  example: {
    padding: spacerMd.var,
    border: `${borderWidth.var} solid ${borderColor.var}`,
    margin: spacerSm.var
  },
  spacing: {
    margin: spacerSm.var
  },
  toolbar: {
    marginBottom: spacerMd.var
  },
  componentApiTitle: {
    paddingRight: spacerXs.var
  },
  componentApi: {
    padding: spacerXs.var
  }
});