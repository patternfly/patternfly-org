import React from 'react';
import './tutorials.css'

const KatacodaExample = ({katacodaId}) => {
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const script = document.createElement('script');
      script.setAttribute('src', '//katacoda.com/embed.js');
      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
      }
    }
  }, []);
  return (
    <div
      id={`katacoda-scenario-${katacodaId}`}
      data-katacoda-id={`patternfly/courses/${katacodaId}`}
      data-katacoda-color="004d7f"
      className="tutorial-layout"
    ></div>
  );
}

export default KatacodaExample;