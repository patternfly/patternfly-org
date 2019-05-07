import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";

export default ({ children }) => (
  <div className="ws-demo-core">
    <Highlight {...defaultProps} code={children} language="jsx" theme={undefined} className="code">
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  </div>
);
