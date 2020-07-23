---
id: Numerics
section: content
---

## Date and time
If you can, let users customize how their date and time format is displayed in the interface.  

These date and time standards are based in American English, but date and time is formatted differently depending on language.

For applications or websites that are accessed globally, use DD Month YYYY.

Examples:
- Thursday, 01 January 2020
- 07 January 2020

When you represent the date as a numeric value or label, use the ISO Standard 8601: YYYY-MM-DD.

Whenever possible, write out the full name of the month. If space is limited, use the month’s  3-letter abbreviation:

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

When adding a date/time in your copy, display time in the user's time zone or in UTC. 

UTC is recommended for cases where people may be collaborating across time zones (for instance, tracking incidents on a server). If you use UTC, try to show the user’s estimated time zone as well, if possible.

Example:
Maintenance begins today at 14:00 UTC (2 PM EST).

When representing date and time, include the timestamp after the date and separate with a comma.

Examples:
- Thursday, 21 January 2019, 9:38:11 PM EST
- 07 Jan 2019, 23:33 UTC
- :38:11 PM
- 9:38 PM

Using **absolute** or **relative** timestamps will depend on the context. If your user is primarily interested in understanding the exact date and time that an event occurred, use an absolute timestamp.

If users are interested in how long ago an event occurred, use a relative timestamp. When reporting relative time, follow these examples:

<table style="table-layout: fixed" tr width="80%">
    <tr>
        <th><center><strong>Time frame</strong></center></th>
        <th><center><strong>Usage</strong></center></th>
    </tr>
    <tr>
        <td>0–60 seconds</td>
        <td>Just now</td>
</tr> 
<tr>
         <td>1–60 minutes</td>
	        <td>4 minutes ago</td>
          </tr> 
          <tr>
	         <td>1–24 hours</td>
	          <td>4 hours ago</td>
            </tr> 
            <tr>
	           <td>Yesterday</td>
	            <td>1 day ago</td>
    </tr> 
    <tr>
    <td>1–30 days ago</td>
     <td>24 days ago</td>
     </tr> 
     <tr>
     <td>1 month–1 year ago</td>
      <td>4 months ago</td>
      </tr> 
      <tr>
      <td>1 year+</td>
       <td>21 Jan 2020</td>
       </tr> 
       <tr>
       <td>Exact date and time</td>
        <td>21 Jan 2020, 23:33 UTC</td>
        </tr>

</table>

## Numbers and currency
In a UI, use numerals instead of written numbers. 

<table style="table-layout: fixed" tr width="80%">
    <tr>
        <th><center><strong>Before</strong></center></th>
        <th><center><strong>After</strong></center></th>
    </tr>
    <tr>
        <td>Your transaction will be complete in three business days.</td>
        <td>Your transaction will be complete in 3 business days.</td>
    </tr>
</table>
<br />

For larger numbers, add a comma after every 3 digits from the right. 

Example: 

1,000

For currencies that use the symbol "$" alone, modify with the first two letters of the ISO code:
- US$1,500 (United States)
- AU$1,500 (Australia)
- HK$1,500 (Hong Kong)
- CA$1,500 (Canada)

For other currencies, use the national currency symbol whenever possible:
- £1,500 (British pound)
- €1,500 (Euro)
- ¥1,500 (Japanese Yen)

Generally, we don’t provide currency conversions. 

(Taken from the Red Hat Corporate Style Guide)