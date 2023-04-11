import React from "react";
import { Badge } from "@patternfly/react-core";
import {
  Table,
  Caption,
  Thead,
  Th,
  Tr,
  Tbody,
  Td,
  TableText
} from "@patternfly/react-table";
import { AutoLinkHeader } from "../autoLinkHeader/autoLinkHeader";
import { PropTypeWithLinks } from "./propTypeWithLinks";
import { css } from "@patternfly/react-styles";
import accessibleStyles from "@patternfly/react-styles/css/utilities/Accessibility/accessibility";

export const PropsTable = ({ title, description, rows, allPropComponents }) => (
  <React.Fragment>
    <AutoLinkHeader size="h3">{title}</AutoLinkHeader>
    <Table className="pf-u-mt-md pf-u-mb-lg" variant="compact" aria-label={title} gridBreakPoint="grid-lg">
      <Caption>
        {description && <div className="pf-u-mb-md">{description}</div>}
        <div>
          <span className="ws-prop-required">*</span>required
        </div>
      </Caption>
      <Thead>
        <Tr>
          <Th width={20}>Name</Th>
          <Th width={20}>Type</Th>
          <Th>Default</Th>
          <Th>Description</Th>
        </Tr>
      </Thead>
      <Tbody>
        {rows
          .sort((a, b) => (a.required === b.required ? 0 : a.required ? -1 : 1))
          .map((row, idx) => (
            <Tr key={idx}>
              <Td>
                <TableText wrapModifier="breakWord">
                  {row.deprecated && "Deprecated: "}
                  {row.name}
                  {row.required ? (
                    <React.Fragment key={`${row.name}-required-prop`}>
                  <span
                    aria-hidden="true"
                    key={`${row.name}-asterisk`}
                    className="ws-prop-required"
                  >
                    *
                  </span>
                      <span
                        key={`${row.name}-required`}
                        className={css(accessibleStyles.screenReader)}
                      >
                    required
                  </span>
                    </React.Fragment>
                  ) : (
                    ""
                  )}
                  {row.beta && (
                    <Badge
                      key={`${row.name}-${idx}`}
                      className="ws-beta-badge pf-u-ml-sm"
                    >
                      Beta
                    </Badge>
                  )}
                </TableText>
              </Td>
              <Td>
                <TableText wrapModifier="breakWord">
                  <PropTypeWithLinks
                    type={row.type}
                    allPropComponents={allPropComponents}
                  />
                </TableText>
              </Td>
              <Td>
                <TableText wrapModifier="breakWord">
                  {row.defaultValue}
                </TableText>
              </Td>
              <Td>
                <TableText wrapModifier="breakWord">
                  {row.description}
                </TableText>
              </Td>
            </Tr>
          ))}
      </Tbody>
    </Table>
  </React.Fragment>
);
