import { rehydrate } from '@patternfly/react-styles';

exports.onClientEntry = () => {
  if (window._pf_styles) {
    console.log('found _pf_styles');
    rehydrate(window._pf_styles);
    delete window._pf_styles;
  } else {
    console.log('did not find _pf_styles');
  }
};
