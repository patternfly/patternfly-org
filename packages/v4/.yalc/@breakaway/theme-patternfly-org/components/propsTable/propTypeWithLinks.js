import React from "react";
import { slugger } from "../../helpers/slugger";

export const PropTypeWithLinks = ({ type, allPropComponents }) => {
  // If this type contains the names of any other components on this page as full words, turn them into links.
  const referencedComponentNames = allPropComponents
    .filter((component) => type.match(new RegExp(`\\b${component.name}\\b`)))
    .map((component) => component.name);
  if (referencedComponentNames.length > 0) {
    return (
      <React.Fragment>
        {type
          .split(new RegExp(`\\b(${referencedComponentNames.join("|")})\\b`))
          .map((segment, i) =>
            referencedComponentNames.includes(segment) ? (
              <a
                key={segment + i}
                onClick={(event) => {
                  event.preventDefault();
                  document.getElementById(slugger(segment)).scrollIntoView();
                }}
              >
                {segment}
              </a>
            ) : (
              segment
            )
          )}
      </React.Fragment>
    );
  }
  return type;
};
