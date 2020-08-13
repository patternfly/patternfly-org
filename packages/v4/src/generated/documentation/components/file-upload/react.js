import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import FileUploadIcon from '@patternfly/react-icons/dist/js/icons/file-upload-icon';

export const DocumentationComponentsFileUploadReactDocs = {
  "slug": "/documentation/components/file-upload/react",
  "source": "react",
  "propComponents": [
    "FileUpload",
    "FileUploadField"
  ],
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/master/packages/react-core/src/components/FileUpload/examples/FileUpload.md",
  "section": "components",
  "id": "File upload",
  "title": "File upload",
  "toc": [
    "Examples"
  ],
  "cssPrefix": "pf-c-file-upload"
};
DocumentationComponentsFileUploadReactDocs.liveContext = {
  FileUploadIcon
};
DocumentationComponentsFileUploadReactDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The basic `}
      <code {...{"className":"ws-code"}}>
        {`FileUpload`}
      </code>
      {` component can accept a file via browse or drag-and-drop, and behaves like a standard form field with its `}
      <code {...{"className":"ws-code"}}>
        {`value`}
      </code>
      {` and `}
      <code {...{"className":"ws-code"}}>
        {`onChange`}
      </code>
      {` props. The `}
      <code {...{"className":"ws-code"}}>
        {`type`}
      </code>
      {` prop determines how the `}
      <code {...{"className":"ws-code"}}>
        {`FileUpload`}
      </code>
      {` component behaves upon accepting a file, what type of value it passes to its `}
      <code {...{"className":"ws-code"}}>
        {`onChange`}
      </code>
      {` prop, and what type it expects for its `}
      <code {...{"className":"ws-code"}}>
        {`value`}
      </code>
      {` prop.`}
    </p>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Text files`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`If `}
      <code {...{"className":"ws-code"}}>
        {`type="text"`}
      </code>
      {` is passed (and `}
      <code {...{"className":"ws-code"}}>
        {`hideDefaultPreview`}
      </code>
      {` is not), a `}
      <code {...{"className":"ws-code"}}>
        {`TextArea`}
      </code>
      {` preview will be rendered underneath the filename bar. When a file is selected, its contents will be read into memory and passed to the `}
      <code {...{"className":"ws-code"}}>
        {`onChange`}
      </code>
      {` prop as a string (along with its filename). Typing/pasting text in the box will also call `}
      <code {...{"className":"ws-code"}}>
        {`onChange`}
      </code>
      {` with a string, and a string value is expected for the `}
      <code {...{"className":"ws-code"}}>
        {`value`}
      </code>
      {` prop.`}
    </p>
    <Example {...DocumentationComponentsFileUploadReactDocs} {...{"code":"import React from 'react';\nimport { FileUpload } from '@patternfly/react-core';\n\nclass SimpleTextFileUpload extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = { value: '', filename: '', isLoading: false };\n    this.handleFileChange = (value, filename, event) => this.setState({ value, filename });\n    this.handleFileReadStarted = fileHandle => this.setState({ isLoading: true });\n    this.handleFileReadFinished = fileHandle => this.setState({ isLoading: false });\n  }\n\n  render() {\n    const { value, filename, isLoading } = this.state;\n    return (\n      <FileUpload\n        id=\"simple-text-file\"\n        type=\"text\"\n        value={value}\n        filename={filename}\n        onChange={this.handleFileChange}\n        onReadStarted={this.handleFileReadStarted}\n        onReadFinished={this.handleFileReadFinished}\n        isLoading={isLoading}\n      />\n    );\n  }\n}","title":"Simple text file","lang":"js"}}>
    </Example>
    <p {...{"className":"ws-p"}}>
      {`A user can always type instead of selecting a file, but by default, once a user selects a text file from their disk they are not allowed to edit it (to prevent unintended changes to a format-sensitive file). This behavior can be changed with the `}
      <code {...{"className":"ws-code"}}>
        {`allowEditingUploadedText`}
      </code>
      {` prop:`}
    </p>
    <Example {...DocumentationComponentsFileUploadReactDocs} {...{"code":"import React from 'react';\nimport { FileUpload } from '@patternfly/react-core';\n\nclass TextFileWithEditsAllowed extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = { value: '', filename: '', isLoading: false };\n    this.handleFileChange = (value, filename, event) => this.setState({ value, filename });\n    this.handleFileReadStarted = fileHandle => this.setState({ isLoading: true });\n    this.handleFileReadFinished = fileHandle => this.setState({ isLoading: false });\n  }\n\n  render() {\n    const { value, filename, isLoading } = this.state;\n    return (\n      <FileUpload\n        id=\"text-file-with-edits-allowed\"\n        type=\"text\"\n        value={value}\n        filename={filename}\n        onChange={this.handleFileChange}\n        onReadStarted={this.handleFileReadStarted}\n        onReadFinished={this.handleFileReadFinished}\n        isLoading={isLoading}\n        allowEditingUploadedText\n      />\n    );\n  }\n}","title":"Text file with edits allowed","lang":"js"}}>
    </Example>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Restricting file size and type`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Any `}
      <a {...{"href":"https://react-dropzone.js.org/#!/Dropzone"}}>
        {`props accepted by `}
        <code {...{"className":"ws-code"}}>
          {`react-dropzone`}
        </code>
        {`'s `}
        <code {...{"className":"ws-code"}}>
          {`Dropzone`}
        </code>
        {` component`}
      </a>
      {` can be passed as a `}
      <code {...{"className":"ws-code"}}>
        {`dropzoneProps`}
      </code>
      {` object in order to customize the behavior of the Dropzone, such as restricting the size and type of files allowed. The following example will only accept CSV files smaller than 1 KB. Note that file type determination is not reliable across platforms (see the note on react-dropzone's docs about the `}
      <code {...{"className":"ws-code"}}>
        {`accept`}
      </code>
      {` prop), so be sure to test the behavior of your file upload restriction on all browsers and operating systems targeted by your application.`}
    </p>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`IMPORTANT: A note about security`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Restricting file sizes and types in this way is for user convenience only, and it cannot prevent a malicious user from submitting anything to your server. As with any user input, your application should also validate, sanitize and/or reject restricted files on the server side.`}
    </p>
    <Example {...DocumentationComponentsFileUploadReactDocs} {...{"code":"import React from 'react';\nimport { FileUpload, Form, FormGroup } from '@patternfly/react-core';\n\nclass TextFileUploadWithRestrictions extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = { value: '', filename: '', isLoading: false, isRejected: false };\n    this.handleFileChange = (value, filename, event) => {\n      this.setState({ value, filename, isRejected: false });\n    };\n    this.handleFileRejected = (rejectedFiles, event) => this.setState({ isRejected: true });\n    this.handleFileReadStarted = fileHandle => this.setState({ isLoading: true });\n    this.handleFileReadFinished = fileHandle => this.setState({ isLoading: false });\n  }\n\n  render() {\n    const { value, filename, isLoading, isRejected } = this.state;\n    return (\n      <Form>\n        <FormGroup\n          fieldId=\"text-file-with-restrictions\"\n          helperText=\"Upload a CSV file\"\n          helperTextInvalid=\"Must be a CSV file no larger than 1 KB\"\n          validated={isRejected ? 'error' : 'default'}\n        >\n          <FileUpload\n            id=\"text-file-with-restrictions\"\n            type=\"text\"\n            value={value}\n            filename={filename}\n            onChange={this.handleFileChange}\n            onReadStarted={this.handleFileReadStarted}\n            onReadFinished={this.handleFileReadFinished}\n            isLoading={isLoading}\n            dropzoneProps={{\n              accept: '.csv',\n              maxSize: 1024,\n              onDropRejected: this.handleFileRejected\n            }}\n            validated={isRejected ? 'error' : 'default'}\n          />\n        </FormGroup>\n      </Form>\n    );\n  }\n}","title":"Text file with restrictions","lang":"js"}}>
    </Example>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Other file types`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`If no `}
      <code {...{"className":"ws-code"}}>
        {`type`}
      </code>
      {` prop is specified, the component will not read files directly. When a file is selected, a `}
      <a {...{"href":"https://developer.mozilla.org/en-US/docs/Web/API/File"}}>
        <code {...{"className":"ws-code"}}>
          {`File`}
        </code>
        {` object`}
      </a>
      {` will be passed to `}
      <code {...{"className":"ws-code"}}>
        {`onChange`}
      </code>
      {` and your application will be responsible for reading from it (e.g. by using the `}
      <a {...{"href":"https://developer.mozilla.org/en-US/docs/Web/API/FileReader"}}>
        {`FileReader API`}
      </a>
      {` or attaching it to a `}
      <a {...{"href":"https://developer.mozilla.org/en-US/docs/Web/API/FormData/Using_FormData_Objects"}}>
        {`FormData object`}
      </a>
      {`). A `}
      <code {...{"className":"ws-code"}}>
        {`File`}
      </code>
      {` object will also be expected for the `}
      <code {...{"className":"ws-code"}}>
        {`value`}
      </code>
      {` prop instead of a string, and no preview of the file contents will be shown by default. The `}
      <code {...{"className":"ws-code"}}>
        {`onReadStarted`}
      </code>
      {` and `}
      <code {...{"className":"ws-code"}}>
        {`onReadFinished`}
      </code>
      {` callbacks will also not be called since the component is not reading the file.`}
    </p>
    <Example {...DocumentationComponentsFileUploadReactDocs} {...{"code":"import React from 'react';\nimport { FileUpload } from '@patternfly/react-core';\n\nclass SimpleFileUpload extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = { value: null, filename: '' };\n    this.handleFileChange = (value, filename, event) => this.setState({ value, filename });\n  }\n\n  render() {\n    const { value, filename } = this.state;\n    return <FileUpload id=\"simple-file\" value={value} filename={filename} onChange={this.handleFileChange} />;\n  }\n}","title":"Simple file of any format","lang":"js"}}>
    </Example>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Customizing the file preview`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Regardless of `}
      <code {...{"className":"ws-code"}}>
        {`type`}
      </code>
      {`, the preview area (the TextArea, or any future implementations of default previews for other types) can be removed by passing `}
      <code {...{"className":"ws-code"}}>
        {`hideDefaultPreview`}
      </code>
      {`, and a custom one can be rendered by passing `}
      <code {...{"className":"ws-code"}}>
        {`children`}
      </code>
      {`.`}
    </p>
    <Example {...DocumentationComponentsFileUploadReactDocs} {...{"code":"import React from 'react';\nimport { FileUpload } from '@patternfly/react-core';\nimport FileUploadIcon from '@patternfly/react-icons/dist/js/icons/file-upload-icon';\n\nclass CustomPreviewFileUpload extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = { value: null, filename: '' };\n    this.handleFileChange = (value, filename, event) => this.setState({ value, filename });\n  }\n\n  render() {\n    const { value, filename, isLoading } = this.state;\n    return (\n      <FileUpload\n        id=\"customized-preview-file\"\n        value={value}\n        filename={filename}\n        onChange={this.handleFileChange}\n        hideDefaultPreview\n      >\n        {value && (\n          <div className=\"pf-u-m-md\">\n            <FileUploadIcon size=\"lg\" /> Custom preview here for your {value.size}-byte file named {value.name}\n          </div>\n        )}\n      </FileUpload>\n    );\n  }\n}","title":"Custom file preview","lang":"js"}}>
    </Example>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Bringing your own file browse logic`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <code {...{"className":"ws-code"}}>
        {`FileUpload`}
      </code>
      {` is a thin wrapper around the `}
      <code {...{"className":"ws-code"}}>
        {`FileUploadField`}
      </code>
      {` presentational component. If you need to implement your own logic for accepting files, you can instead render a `}
      <code {...{"className":"ws-code"}}>
        {`FileUploadField`}
      </code>
      {` directly, which does not include `}
      <code {...{"className":"ws-code"}}>
        {`react-dropzone`}
      </code>
      {` and requires additional props (e.g. `}
      <code {...{"className":"ws-code"}}>
        {`onBrowseButtonClick`}
      </code>
      {`, `}
      <code {...{"className":"ws-code"}}>
        {`onClearButtonClick`}
      </code>
      {`, `}
      <code {...{"className":"ws-code"}}>
        {`isDragActive`}
      </code>
      {`).`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Note that the `}
      <code {...{"className":"ws-code"}}>
        {`isLoading`}
      </code>
      {` prop is styled to position the spinner dead center above the entire component, so it should not be used with `}
      <code {...{"className":"ws-code"}}>
        {`hideDefaultPreview`}
      </code>
      {` unless a custom empty-state preview is provided via `}
      <code {...{"className":"ws-code"}}>
        {`children`}
      </code>
      {`. The below example prevents `}
      <code {...{"className":"ws-code"}}>
        {`isLoading`}
      </code>
      {` and `}
      <code {...{"className":"ws-code"}}>
        {`hideDefaultPreview`}
      </code>
      {` from being used at the same time. You can always provide your own spinner as part of the `}
      <code {...{"className":"ws-code"}}>
        {`children`}
      </code>
      {`!`}
    </p>
    <Example {...DocumentationComponentsFileUploadReactDocs} {...{"code":"import React from 'react';\nimport { FileUploadField, Checkbox } from '@patternfly/react-core';\n\nclass CustomFileUpload extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      value: '',\n      filename: false,\n      isClearButtonDisabled: true,\n      isLoading: false,\n      isDragActive: false,\n      hideDefaultPreview: false,\n      children: false\n    };\n    this.handleTextAreaChange = value => {\n      this.setState({ value });\n    };\n  }\n\n  render() {\n    const {\n      value,\n      filename,\n      isClearButtonDisabled,\n      isLoading,\n      isDragActive,\n      hideDefaultPreview,\n      children\n    } = this.state;\n    return (\n      <div>\n        {['filename', 'isClearButtonDisabled', 'isDragActive', 'isLoading', 'hideDefaultPreview', 'children'].map(\n          stateKey => (\n            <Checkbox\n              key={stateKey}\n              id={stateKey}\n              label={stateKey}\n              aria-label={stateKey}\n              isChecked={this.state[stateKey]}\n              onChange={checked =>\n                this.setState({\n                  [stateKey]: checked,\n                  // See notes above this example\n                  ...(stateKey === 'isLoading' && checked && { hideDefaultPreview: false }),\n                  ...(stateKey === 'hideDefaultPreview' && checked && { isLoading: false })\n                })\n              }\n            />\n          )\n        )}\n        <br />\n        <FileUploadField\n          id=\"custom-file-upload\"\n          type=\"text\"\n          value={value}\n          filename={filename ? 'example-filename.txt' : ''}\n          onChange={this.handleTextAreaChange}\n          filenamePlaceholder=\"Do something custom with this!\"\n          onBrowseButtonClick={() => alert('Browse button clicked!')}\n          onClearButtonClick={() => alert('Clear button clicked!')}\n          isClearButtonDisabled={isClearButtonDisabled}\n          isLoading={isLoading}\n          isDragActive={isDragActive}\n          hideDefaultPreview={hideDefaultPreview}\n        >\n          {children && (\n            <div className=\"pf-u-m-md\">(A custom preview of the uploaded file can be passed as children)</div>\n          )}\n        </FileUploadField>\n      </div>\n    );\n  }\n}","title":"Custom file upload","lang":"js"}}>
    </Example>
  </React.Fragment>
);
DocumentationComponentsFileUploadReactDocs.Component.displayName = 'DocumentationComponentsFileUploadReactDocs';
