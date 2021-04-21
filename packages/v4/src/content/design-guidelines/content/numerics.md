---
id: Numerics
section: UX writing
---

## Date and time formats
All date and time formats should be localizable, not hard-coded. When building localizable date and time formats, development teams should share the same library by using resources like [date-fns](https://date-fns.org/) or [Day.js](https://day.js.org/).

PatternFly date and time formats follow the American standard. When localizing, use the appropriate format for the language locale and follow ISO standards.

<div class="ws-content-table">

| **Element** | **Description** | **Example** |
|-------------|-------------|-------------|
| Date | Use Month DD, YYYY | September 17, 2020 <br /><br />Sep 17, 2020 |
| Date numeric value | When you represent the date as a numeric value or label, use MM-DD-YYYY. | 09-17-2020 |
| Time | Display time in either 12-hour or 24-hour (UTC) time. | 12-hour: 3:00 PM <br /><br />With seconds: 3:30:11 PM <br /><br />24-hour: 15:00 |
| 12-hour time notation | This time convention divides the 24 hours of the day into 2 periods of 12 hours, AM and PM. <br /><br />12-hour time notation is the American standard. | 3:00 PM |
| 24-hour time notation | This time convention divides the day by 24 hours and runs from midnight to midnight. The hours are represented from 0 to 23. | 14:00 |
| Date and time | Include the timestamp after the date. | Thursday, January 21, 2019 9:38:11 PM EST<br /><br />Thursday, 21 January 2019, 9:38:11 PM EST <br /><br />07 Jan 2019, 23:33 UTC |
| Time zone | Display time in the user's time zone or in UTC. <br /><br />Use UTC when spanning multiple time zones. | Maintenance begins today at 14:00 UTC (2 PM EST). |
| Day |Write out the full name of the day. If space is limited, use the day’s 3-letter abbreviation: <ul><li>Mon</li><li>Tue</li><li>Wed</li><li>Thu</li><li>Fri</li><li>Sat</li><li>Sun</li></ul> | Monday, September 17, 2020 <br /><br />Mon, Sep 17, 2020 |
| Month | Write out the full name of the month. If space is limited, use the month’s 3-letter abbreviation. <ul><li>Jan</li><li>Feb</li><li>Mar</li><li>Apr</li><li>May</li><li>Jun</li><li>Jul</li><li>Aug</li><li>Sep</li><li>Oct</li><li>Nov</li><li>Dec</li></ul> | September 17, 2020 <br /><br />Sep 17, 2020 |
| Duration | HH:MM:SS or HH:MM | 03:15:30 <br /><br />03:15<br /><br />00:15 |
</div>

## Absolute or relative time

Using **absolute** or **relative** timestamps depends on the context. To represent the exact date and time that an event occurred, use an absolute timestamp following examples provided in the previous [table of date and time formats](#date-and-time-formats).

To represent how long ago an event occurred, use a relative timestamp. When reporting relative time, follow these examples:

<div class="ws-content-table">
  
| **Time frame**      | **Usage**              |
|---------------------|------------------------|
| 0-60 seconds        | Just now               |
| 1-60 minutes        | 4 minutes ago          |
| 1-24 hours          | 4 hours ago            |
| Yesterday           | 1 day ago              |
| 1-30 days ago       | 24 days ago            |
| 1 month-1 year ago  | 4 months ago           |
| 1 year+             | 07 Jan 2020            |
| Exact date and time | 07 Jan 2020, 23:33 UTC |

</div>

## Numbers and currency
Use numerals instead of written numbers. 

<div class="ws-content-table">
  
| **Before**      | **After**              |
|---------------------|------------------------|
| Your transaction will be complete in three business days. | Your transaction will be complete in 3 business days. |
| You have a credit of two dollars. | You have a credit of US$2.00. |

</div>

### Digit grouping

Use the American notation standard. Use a decimal comma to separate thousands.

Examples:<br />
1,000,000.00<br />
1,000,000,000

### Currency

For currencies that use the symbol "$" alone, add the first two letters of the ISO currency code.

- US$1,500 (United States)
- AU$1,500 (Australia)
- HK$1,500 (Hong Kong)
- CA$1,500 (Canada)

For other currencies, use their three-letter ISO code wherever possible. You can use national currency symbols, but some users may not be familiar with them. When in doubt, default to ISO. 

- EUR 1,500 or £1,500 (British pound)
- GPB 1,500 or €1,500 (Euro)
- JPY 1,500 or ¥1,500 (Japanese Yen)

Use a currency's ISO three-digit numeric code when writing for computerized systems or for countries that don't use Latin scripts.

| **Country**        | **Currency** | **Alphabetic code** | **Numeric code** |
|----------------|----------|-----------------|--------------|
| United States  | Dollar   | USD             | 840          |
| China          | Yuan     | CNY             | 156          |
| European Union | Euro     | EUR             | 978          |
| United Kingdom | Pound    | GBP             | 826          |

Generally, we don't provide currency conversions.