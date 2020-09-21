---
title: Units and symbols
section: content
hideTOC: true
showTitle: true
---

This page focuses on how to write units and symbols in an interface. For guidance on displaying numeric values like date, time, and currency, see our [Numerics](/design-guidelines/content/numerics) page.

Use consistent formatting, terminology, and symbols to display units of measure in your UI. Units of measure and symbols often appear when describing quantitative values including:

- Date and time
- Data storage
- Data bandwidth
- Currency

When providing quantitative values in your UI, default to the International System of Units (SI units), so that your units of measure can be understood by global users. Use the following base units and symbols to describe different quantities:
- Length: meter (m)
- Mass: kilogram (kg)
- Electric current: ampere (A)
- Thermodynamic temperature: kelvin (K)
- Amount of substance: mole (mol)
- Luminous intensity: candela (cd)

## Time

Write the full name of each time unit whenever possible.

Example: Write "6 minutes" instead of "6 min."

If space is limited, use symbols to communicate the same units of time in a fraction of the space: 

- Millisecond (ms)
- Second (s)
- Minute (min)
- Hour (hr)

Avoid using symbols for expressing days, weeks, months, and years.

## Data storage

Computer storage and memory are typically measured in bytes. Bytes can be shown either in **binary units** (gibibytes) or **metric units** (gigabytes).

Binary units are recommended to represent amounts of data, since most computing uses binary units of measure. 

| **Binary unit** | **Symbol** | **Value**        |
|-----------------|------------|------------------|
| 1 kibibyte      | KiB        | 1024             |
| 1 mebibyte      | MiB        | 1024<sup>2</sup> |
| 1 gibibyte      | GiB        | 1024<sup>3</sup> |
| 1 tebibyte      | TiB        | 1024<sup>4</sup> |
| 1 petabyte      | PiB        | 1024<sup>5</sup> |

| **Metric unit** | **Symbol** | **Value**        |
|-----------------|------------|------------------|
| 1 kilobyte     | KB       | 1000             |
| 1 megabyte     | MB        | 1000<sup>2</sup> |
| 1 gigabyte     | GB        | 1000<sup>3</sup> |
| 1 terabyte     | TB       | 1000<sup>4</sup> |
| 1 petabyte     | PB        | 1000<sup>5</sup> |

## Data bandwidth

Bandwidth is the amount of data transferred from one point to another within a network in a specified amount of time. It's typically expressed as a bitrate and measured in bits per second (bps).

Modern networks have high bandwidths, so denote them with metric prefixes:

| **Metric prefix**                                  | **Unit**             | **Symbol** |
|----------------------------------------------------|----------------------|------------|
| K = kilo = 1,000 bits                              | 1 kilobit per second | Kbps       |
| M = mega = 1,000 kilobits = 1,000,000 bits         | 1 megabit per second | Mbps       |
| G = giga = 1,000 megabits = 1,000,000,000 bits     | 1 gigabit per second | Gbps       |
| T = tera = 1,000 gigabits = 1,000,000,000,000 bits | 1 terabit per second | Tbps       |

**Note**: Bits (b) and bytes (B) are separate units that have a similar abbreviation. One byte (B) equals 8 bits (b), so be sure to use the correct abbreviation to avoid confusion.

## Currency

Wherever possible, display currency in three-letter code according to [ISO Standard 4217](https://www.iso.org/iso-4217-currency-codes.html). See our [Numerics](https://www.patternfly.org/v4/design-guidelines/content/numerics#numbers-and-currency) page for more information about expressing currency.

## Writing units of measure

When writing units of measure into your UI, follow these general best practices:

| **Best practice**                                                                                                                                                          | **Example(s)**                                                                                                                                                                                                                                                            |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Use consistent units, and avoid mixing them.                                                                                                                               | Write "10 to 75 seconds" instead of "10 seconds to 1.25 minutes."                                                                                                                                       |
| Include a space between numbers and units, except for percentages.                                                                                                         | Add a space to "75 kg" but not to "75%."                                                                                                                                                                                                             |
| Display the full name of each unit unless space is limited.                                                                                                                | Write "6 seconds ago" instead of "6s ago."                                                                                                                                                                                                                                |
| Don't make unit symbols plural.                                                                                                                                            | Write "60 cm," not "60 cms."                                                                                                                                                                                                                                              |
| Don't punctuate unit symbols unless they end a sentence.                                                                                                                   | "60 cm doesn't end this sentence, so 'cm' isn't followed by a period."                                                                                                                                                                                                   |
| Write symbols for SI units in lowercase, unless their name is derived from a proper noun. If the SI unit name is a proper noun, capitalize its first letter. | Write "W" for watt. <br><br>Write "Hz" for hertz.</br></br> |
| Don't mix symbols or apply mathematical operations to unit names.                                                                                                          | Write "kg/m<sup>3</sup>" instead of "kilogram/m<sup>3</sup>." <br><br>Write "kg · m<sup>-3</sup>" instead of "kilogram/cubic meter."</br>  <br>Use "kilogram per cubic meter" instead of "kg/cubic meter," "kilogram per meter<sup>3</sup>," or "kg per m<sup>3</sup>."</br></br> |
| Use parentheses to display a secondary unit of measure after a primary one.                                                                                                | "10°C (50°F)"                                                                                                                                                                                                                                                             |
| Clearly express units for two or more related quantities. If necessary, you can include the unit with each numeral.                                                        | "6 to 8 inches" or "6 inches to 8 inches"                                                                                                                                                                                                                                 |
| Use symbols to display derived units of measure (units formed using a calculation).                                                                                        | "38 mph, 27 ft/s<sup>2</sup>"                                                                                                                                                                                                                                                        |
| For derived units of measure, use the symbol that represents its word form, since it will be more familiar to your users.                                                        | Use "Hz" for Hertz instead of the derivation cycles per second (cycles/second).     
