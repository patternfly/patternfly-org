import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';


export const DocumentationContentNumericsDesignGuidelinesDocs = {
  "slug": "/documentation/content/numerics/design-guidelines",
  "source": "design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/master/src/content/design-guidelines/content/numerics.md",
  "section": "content",
  "id": "Numerics",
  "title": "Numerics",
  "toc": [
    "Date and time",
    "Numbers and currency"
  ]
};
DocumentationContentNumericsDesignGuidelinesDocs.liveContext = {
  
};
DocumentationContentNumericsDesignGuidelinesDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Date and time`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`If you can, let users customize how their date and time format is displayed in the interface.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`These date and time standards are based in American English, but date and time is formatted differently depending on language.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`For applications or websites that are accessed globally, use DD Month YYYY.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Examples:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Thursday, 01 January 2020`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`07 January 2020`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`When you represent the date as a numeric value or label, use the ISO Standard 8601: YYYY-MM-DD.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Whenever possible, write out the full name of the month. If space is limited, use the month’s  3-letter abbreviation:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Jan`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Feb`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Mar`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Apr`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`May`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Jun`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Jul`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Aug`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Sep`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Oct`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Nov`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Dec`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`When adding a date/time in your copy, display time in the user's time zone or in UTC.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`UTC is recommended for cases where people may be collaborating across time zones (for instance, tracking incidents on a server). If you use UTC, try to show the user’s estimated time zone as well, if possible.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Example:
Maintenance begins today at 14:00 UTC (2 PM EST).`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`When representing date and time, include the timestamp after the date and separate with a comma.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Examples:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Thursday, 21 January 2019, 9:38:11 PM EST`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`07 Jan 2019, 23:33 UTC`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`:38:11 PM`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`9:38 PM`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Using `}
      <strong>
        {`absolute`}
      </strong>
      {` or `}
      <strong>
        {`relative`}
      </strong>
      {` timestamps will depend on the context. If your user is primarily interested in understanding the exact date and time that an event occurred, use an absolute timestamp.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`If users are interested in how long ago an event occurred, use a relative timestamp. When reporting relative time, follow these examples:`}
    </p>
    <table className="ws-content-table">
      <tr>
        <th>
          <center>
            <strong>
              <p {...{"className":"ws-p"}}>
                {`Time frame`}
              </p>
</strong>
</center>
</th>
                <th>
          <center>
            <strong>
              <p {...{"className":"ws-p"}}>
                {`Usage`}
              </p>
</strong>
</center>
</th>
</tr>
            <tr>
        <td>
          <p {...{"className":"ws-p"}}>
            {`0–60 seconds`}
          </p>
</td>
                <td>
          <p {...{"className":"ws-p"}}>
            {`Just now`}
          </p>
</td>
</tr>
            <tr>
        <td>
          <p {...{"className":"ws-p"}}>
            {`1–60 minutes`}
          </p>
</td>
                <td>
          <p {...{"className":"ws-p"}}>
            {`4 minutes ago`}
          </p>
</td>
</tr>
            <tr>
        <td>
          <p {...{"className":"ws-p"}}>
            {`1–24 hours`}
          </p>
</td>
                <td>
          <p {...{"className":"ws-p"}}>
            {`4 hours ago`}
          </p>
</td>
</tr>
            <tr>
        <td>
          <p {...{"className":"ws-p"}}>
            {`Yesterday`}
          </p>
</td>
                <td>
          <p {...{"className":"ws-p"}}>
            {`1 day ago`}
          </p>
</td>
</tr>
            <tr>
        <td>
          <p {...{"className":"ws-p"}}>
            {`1–30 days ago`}
          </p>
</td>
                <td>
          <p {...{"className":"ws-p"}}>
            {`24 days ago`}
          </p>
</td>
</tr>
            <tr>
        <td>
          <p {...{"className":"ws-p"}}>
            {`1 month–1 year ago`}
          </p>
</td>
                <td>
          <p {...{"className":"ws-p"}}>
            {`4 months ago`}
          </p>
</td>
</tr>
            <tr>
        <td>
          <p {...{"className":"ws-p"}}>
            {`1 year+`}
          </p>
</td>
                <td>
          <p {...{"className":"ws-p"}}>
            {`21 Jan 2020`}
          </p>
</td>
</tr>
            <tr>
        <td>
          <p {...{"className":"ws-p"}}>
            {`Exact date and time`}
          </p>
</td>
                <td>
          <p {...{"className":"ws-p"}}>
            {`21 Jan 2020, 23:33 UTC`}
          </p>
</td>
</tr>
</table>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Numbers and currency`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`In a UI, use numerals instead of written numbers.`}
    </p>
    <table className="ws-content-table">
      <tr>
        <th>
          <center>
            <strong>
              <p {...{"className":"ws-p"}}>
                {`Before`}
              </p>
</strong>
</center>
</th>
                <th>
          <center>
            <strong>
              <p {...{"className":"ws-p"}}>
                {`After`}
              </p>
</strong>
</center>
</th>
</tr>
            <tr>
        <td>
          <p {...{"className":"ws-p"}}>
            {`Your transaction will be complete in three business days.`}
          </p>
</td>
                <td>
          <p {...{"className":"ws-p"}}>
            {`Your transaction will be complete in 3 business days.`}
          </p>
</td>
</tr>
</table>
    <br/>
    <p {...{"className":"ws-p"}}>
      {`For larger numbers, add a comma after every 3 digits from the right.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Example:`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`1,000`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`For currencies that use the symbol "$" alone, modify with the first two letters of the ISO code:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`US$1,500 (United States)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`AU$1,500 (Australia)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`HK$1,500 (Hong Kong)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`CA$1,500 (Canada)`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`For other currencies, use the national currency symbol whenever possible:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`£1,500 (British pound)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`€1,500 (Euro)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`¥1,500 (Japanese Yen)`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Generally, we don’t provide currency conversions.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`(Taken from the Red Hat Corporate Style Guide)`}
    </p>
  </React.Fragment>
);
DocumentationContentNumericsDesignGuidelinesDocs.Component.displayName = 'DocumentationContentNumericsDesignGuidelinesDocs';
