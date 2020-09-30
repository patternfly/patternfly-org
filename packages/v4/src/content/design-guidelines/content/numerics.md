---
id: Numerics
section: UX writing
---

## Date and time
All date and time formats should be localizable, not hard-coded. When building localizable date and time formats, development teams should share the same library by using a resource like [moment.js](http://momentjs.com/).  

These date and time standards are based in American English, but date and time formats will vary once they're localized.

For applications or websites that are accessed globally, use DD Month YYYY.

Examples:
- Tuesday, 07 January 2020
- 07 January 2020

When you represent the date as a numeric value or label, use the [ISO Standard 8601](https://www.iso.org/iso-8601-date-and-time-format.html): YYYY-MM-DD.

Example: Write January 7, 2020 as 2020-01-07.

Whenever possible, write out the full name of the month. If space is limited, use the month’s three-letter abbreviation:

- Jan
- Feb
- Mar
- Apr
- May
- Jun
- Jul
- Aug
- Sep
- Oct
- Nov
- Dec

When adding a date/time in your copy, display it in UTC or the user's time zone. 

UTC is recommended for cases where people may be collaborating across time zones (for instance, tracking incidents on a server). If you use UTC, show the user's estimate time zone in parentheses.

Example: Maintenance begins today at 14:00 UTC (2 PM EST).

When representing date and time, include the timestamp after the date and separate with a comma.

Examples:
- Tuesday, 07 January 2020, 9:38:11 PM EST
- 07 Jan 2020, 23:33 UTC
- 9:38:11 PM
- 9:38 PM

Using **absolute** or **relative** timestamps will depend on the context. If your user is primarily interested in understanding the exact date and time that an event occurred, use an absolute timestamp.

If users are interested in duration, the amount of time it takes for an event to occur, or the amount of time between events, use an absolute timestamp formatted as HH:MM:SS.

If users are interested in how long ago an event occurred, use a relative timestamp. When reporting relative time, follow these examples:

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
In a UI, use numerals instead of written numbers. 

<div class="ws-content-table">
  
| **Before**      | **After**              |
|---------------------|------------------------|
| Your transaction will be complete in three business days.      | Your transaction will be complete in 3 business days.              |

Never hard-code number formatting. Currency symbols, comma placements, and decimal placements vary by locale.

</div>

For larger numbers, American English uses the comma as the thousand separator, added every 3 digits from the right. For consistency, write your text with this formatting. The number will look different after localization.  

Examples: 

- United States: 1,000
- Brazil: 1.000

For currencies that use the symbol "$" alone, modify with the first two letters of their [three-letter ISO code](https://www.iso.org/iso-4217-currency-codes.html):

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

(Taken from the Red Hat Corporate Style Guide)
