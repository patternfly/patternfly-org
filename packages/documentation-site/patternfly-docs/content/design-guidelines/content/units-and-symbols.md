---
id: Units and symbols
section: UX writing
---

# Communicating measurements

Use consistent formatting, terminology, and symbols when displaying units of measurement in your UI, including:

- Currency.
- Data bandwidth.
- Data storage.
- Time.

When displaying quantitative values for measurements in your UI, use the [International System of Units](https://www.nist.gov/pml/owm/metric-si/si-units) (SI unit) so that your content can be understood by global users. The following table outlines the base units and symbols you should use to describe different quantitative values:

<div class="ws-content-table">

| **Measurement** | **Unit** | **Symbol** |
| --- | --- | ---|
| Length | Meter | m
| Mass | Kilogram | kg
| Electric current | Ampere | A
| Thermodynamic temperature | Kelvin | K
| Amount of substance | Mole | mol
| Luminous intensity | Candela | cd

</div>

## Currency

Wherever possible, display currency in three-letter code according to [ISO Standard 4217](https://www.iso.org/iso-4217-currency-codes.html). See our [numerics](/ux-writing/numerics#numbers-and-currency) guidelines for more information about writing currency.

## Data bandwidth

Bandwidth is the amount of data transferred from one point to another within a network in a specified amount of time.

Data transfer is primarily measured in two ways:

- **Megabits/second (Mbps)**: Specifies download and upload speeds on the internet 
- **Megabytes/second (MBps)**: Specifies the quantity of data or file size transferred over time

Data transfer rates can be measured in binary or metric units. Always align this unit with the scale you use to measure data size. 

| **Binary unit** | **Symbol** |      
|-----------------|------------|
| 1 mebibyte/second | MiBps | 
| 1 gibibyte/second | GiBps | 
| 1 tebibyte/second | TiBps | 

| **Metric unit** | **Symbol** |      
|-----------------|------------|
| 1 megabyte/second | MBps | 
| 1 gigabyte/second | GBps | 
| 1 terabyte/second | TBps | 

**Note**: Pay special attention to the letter case when writing symbols for bits (b) and bytes (B). Eight bits (b) make up one byte (B), so using the wrong symbol will change your meaning. 

## Data storage

Computer storage and memory are typically measured in bytes. Bytes can be shown in **binary units** (gibibytes) or **decimal/metric units**(gigabytes).

To remain consistent and reduce confusion, use binary units to express amounts of digital information. This practice aligns with most computing and open source software.

<div class="ws-content-table">

| **Binary unit** | **Symbol** | **Value**        |
|-----------------|------------|------------------|
| 1 kibibyte      | KiB        | 1024             |
| 1 mebibyte      | MiB        | 1024<sup>2</sup> |
| 1 gibibyte      | GiB        | 1024<sup>3</sup> |
| 1 tebibyte      | TiB        | 1024<sup>4</sup> |

</div>

<div class="ws-content-table">

| **Metric unit** | **Symbol** | **Value**        |
|-----------------|------------|------------------|
| 1 kilobyte     | KB       | 1000             |
| 1 megabyte     | MB        | 1000<sup>2</sup> |
| 1 gigabyte     | GB        | 1000<sup>3</sup> |
| 1 terabyte     | TB       | 1000<sup>4</sup> |

</div>

## Time

Whenever possible, write the full name of each time unit. 

For example, write "6 minutes" instead of "6 min."

If space is limited, use symbols to communicate the same units of time in less space: 

<div class="ws-content-table">

| **Unit** | **Symbol**|
| --- | --- |
| Millisecond | ms
| Second | s
| Minute | min
| Hour | hr

</div>

Avoid using symbols for days, weeks, months, and years.

## Best practices for writing units of measurement

Follow these general best practices for writing units of measurement:

<div class="ws-content-table">

| **Best practice** | **Examples**  |
|------------------------|--------------------------|
| Use consistent units, and avoid mixing them. | Write *10 to 75 seconds* instead of *10 seconds to 1.25 minutes*. |
| Include a space between numbers and units, except for percentages.   | Add a space to *75 kg* but not to *75%*. |
| Display the full name of each unit unless space is limited.  | Write *6 seconds ago* instead of *6s ago.* |
| Don't make unit symbols plural. | Write *60 cm*, not *60 cms*. | Don't punctuate unit symbols unless they end a sentence. *60 cm doesn't end this sentence, so "cm" isn't followed by a period.*  |
| Write SI unit symbols in lowercase. If a symbol is named after a person or proper noun, then capitalize its first letter. | Write *W* for watt.  <br /><br />Write *Hz* for hertz. |
| Don't mix symbols or apply mathematical operations to unit names.  | Write *kg/m<sup>3</sup>* instead of *kilogram/m<sup>3</sup>*.  <br /><br />Write *kg · m<sup>-3</sup>* instead of *kilogram/cubic meter*.  <br /><br />Use *kilogram per cubic meter* instead of *kg/cubic meter*, *kilogram per meter<sup>3</sup>*, or *kg per m<sup>3</sup>*. |
| Use parentheses to display a secondary unit of measure. | *10°C (50°F)* |
| Clearly express units for two or more related quantities. If necessary, you can include the unit after each numeral.  | Write *6 to 8 inches* or *6 inches to 8 inches*. |
| Use symbols to display derived units of measure (units formed using a calculation). | *38 mph, 27 ft/s<sup>2</sup>*   |
| For derived units of measure, use the symbol that represents its word form, since it will be more familiar to your users. | Use *Hz* for Hertz instead of the derivation *cycles per second (cycles/second)*.     

</div>