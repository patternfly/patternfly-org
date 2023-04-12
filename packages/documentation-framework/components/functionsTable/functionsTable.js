import React from "react";
import {
  Table,
  Caption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from "@patternfly/react-table";

export const FunctionsTable = ({ functionDescriptions }) => {
  const columnNames = {
    name: "Function name",
    description: "Description",
    signature: "Type signature",
    defaultValues: "Default parameter values",
  };

  const formatDefaultValues = (parameters) =>
    parameters.map((param) => `${param.name}: ${param.default}; `);

  return (
    <Table
      aria-label="Function documentation table"
      variant="compact"
    >
      <Caption>Table showing documentation for relevant functions</Caption>
      <Thead>
        <Tr>
          <Th>{columnNames.name}</Th>
          <Th>{columnNames.signature}</Th>
          <Th>{columnNames.defaultValues}</Th>
          <Th>{columnNames.description}</Th>
        </Tr>
      </Thead>
      <Tbody>
        {functionDescriptions.map((functionDescription) => (
          <Tr key={functionDescription.functionName}>
            <Td dataLabel={columnNames.name}>
              {functionDescription.functionName}
            </Td>
            <Td dataLabel={columnNames.signature}>
              {functionDescription.type}
            </Td>
            <Td dataLabel={columnNames.defaultValues}>
              {formatDefaultValues(functionDescription.params)}
            </Td>
            <Td dataLabel={columnNames.description}>
              {functionDescription.description}
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};
