import React from "react";
import { convertToReactComponent } from "@patternfly/ast-helpers";
import { TextContent, Text } from "@patternfly/react-core";

// convert summary text from string to jsx, remove links
export const SummaryComponent = ({ id, itemsData }) => {
  const itemDasherized = id.split(' ').join('-').toLowerCase();
  const summary = itemsData?.[itemDasherized]?.summary;
  if (!summary) {
    return null;
  }
  // Remove anchor tags to avoid <a> in summary nested within <a> of Link card/datalistitem
  const summaryNoLinks = summary.replace(/<Link[^>]*>([^<]+)<\/Link>/gm, '$1');
  const { code } = convertToReactComponent(`<>${summaryNoLinks}</>`);
  const getSummaryComponent = new Function('React', code);
  return getSummaryComponent(React);
}

export const TextSummary = ({ id, itemsData }) => {
  if (!id) {
    return null;
  }

  return (
    <TextContent>
      <Text>
        <SummaryComponent id={id} itemsData={itemsData} />
      </Text>
    </TextContent>
  )
};
