---
id: Terminology
section: content-design
subsection: grammar
---

import PlusIcon from '@patternfly/react-icons/dist/esm/icons/plus-icon';
import AddCircleOIcon from '@patternfly/react-icons/dist/esm/icons/add-circle-o-icon';
import TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';
import TimesCircleIcon from '@patternfly/react-icons/dist/esm/icons/times-circle-icon';
import AngleDownIcon from '@patternfly/react-icons/dist/esm/icons/angle-down-icon';
import AngleUpIcon from '@patternfly/react-icons/dist/esm/icons/angle-up-icon';
import AngleRightIcon from '@patternfly/react-icons/dist/esm/icons/angle-right-icon';
import CopyIcon from '@patternfly/react-icons/dist/esm/icons/copy-icon';
import TrashIcon from '@patternfly/react-icons/dist/esm/icons/trash-icon';
import DownloadIcon from '@patternfly/react-icons/dist/esm/icons/download-icon';
import PencilAltIcon from '@patternfly/react-icons/dist/esm/icons/pencil-alt-icon';
import ExportIcon from '@patternfly/react-icons/dist/esm/icons/export-icon';
import FilterIcon from '@patternfly/react-icons/dist/esm/icons/filter-icon';
import ImportIcon from '@patternfly/react-icons/dist/esm/icons/import-icon';
import MinusIcon from '@patternfly/react-icons/dist/esm/icons/minus-icon';
import MinusCircleIcon from '@patternfly/react-icons/dist/esm/icons/minus-circle-icon';
import SaveIcon from '@patternfly/react-icons/dist/esm/icons/save-icon';
import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';
import EyeIcon from '@patternfly/react-icons/dist/esm/icons/eye-icon';
import UploadIcon from '@patternfly/react-icons/dist/esm/icons/upload-icon';

This resource overviews common UI terms and their usage. Do not precede any terms in a UI with "please" as it is extraneous and overly formal.

For Red Hat product terminology and documentation standards, see [Red Hat's supplementary style guide for product documentation](https://redhat-documentation.github.io/supplementary-style-guide/#introduction).

## Trademarked terms

You can use third-party trademarked terms (including those of competitors) when necessary to describe their goods and services accurately, or to prevent marketplace confusion between Red Hat and third parties.. 

When using trademarks:
- Avoid using them as attention-getting devices.
- Ensure their usage does not mislead users.
- Use them only to objectively compare relevant and verifiable goods or services.
- Do not discredit or denigrate a competitor's trademarks, trade names or other distinguishing signs.
- Do not take unfair advantage of a competitor's trademark.
- Do not present goods or services as imitations or replicas of trademarked products.
- Limit trademark usage to body text rather than headlines, titles, or graphics.
- Never use a third party's logo without explicit permission.

| Before | After | 
| :---: | :---: |
| Why settle for VMware's slow boot times? Our platform is 20% faster and costs half as much as their legacy junk. | In independent benchmarks, Red Hat OpenShift demonstrated 20% faster deployment times compared to VMware vSphere. Our solution offers a verifiable cost-efficiency advantage for enterprise-scale workloads.|

## Glossary

<div class="ws-content-table">

| **Term** | **Usage** | **Related&nbsp;icon** | **Opposite&nbsp;term** | **Notes** |
|------------------|-----------|-----|-----|-----|
| **Add** <br /> (verb) | Use to describe adding an existing item to an existing list, group, view, or other container element. | <PlusIcon /> <br /> (fa-plus) | *Remove* | If the object being added is not readily apparent from the context, consider adding a noun (like "Add user"). If you're creating a new object, **do not use** *Add*. See *Create*.
| **Cancel** <br /> (verb) | Use to describe ending an action in progress or ending an action where changes could be lost (like in a form). | | | Use *Canceling* instead of *Cancelling*. Use *Canceled* instead of *Cancelled*.|
| **Change** | **Do not use**. See *Edit*. | | |
| **Click** <br /> (verb) | Use to prompt the user to click a button, radio button, link, or any other item that isn't part of a list, group, view, or other container element.| | | **Do not use** interchangeably with *Select*.|
| **Close** <br /> (verb) | Use to describe shutting an open window (like a message dialog). | <TimesIcon /> <br /> (fa-times) <br/><br/> <TimesCircleIcon /> <br /> (fa-times-circle) | *Open* | **Do not use** interchangeably with *Cancel* or *Quit*. |
| **Collapse** <br /> (verb) | Use to describe minimizing a container element (like a list or message) so that it's partially visible. | <AngleDownIcon /> <br /> (fa-angle-down) <br/><br/> <AngleUpIcon /> <br /> (fa-angle-up) | *Expand* |
| **Continue** <br /> (verb) | Use to describe proceeding with an action or process that is in progress. | | |
| **Copy** <br /> (verb) | Use to describe the action of creating a reproduction of an object (like a file or text). This may be used in reference to the keyboard action (Ctrl/cmd + c). | <CopyIcon /> <br /> (fa-copy) | | **Do not use** interchangeably with *Duplicate*.
| **Create** <br /> (verb) | Use to describe creating something new. | <AddCircleOIcon /> <br /> (pficon-add-circle-o) | *Delete* | If the object being created is not readily apparent from the context, consider adding a noun (like "Create user"). *New* or *Add* are not recommended for this use case. See *Add* for usage guidelines.
| **Delete** <br /> (verb) | Use to describe completely removing an object. Delete is a destructive action. | <TrashIcon /> <br /> (fa-trash) | *Create* | *Erase* and *Remove* are not recommended for this use case. See *Remove* for usage guidelines.
| **Deselect** <br /> (verb) | Use to prompt the user to deselect an item from a list, group, view, or other container element. | | *Select* |
| **Download** <br /> (verb) | Use to describe copying a file from a server or site directly to your system in a file format. | <DownloadIcon /> <br /> (fa-download) | *Upload* |
| **Duplicate** <br /> (verb) | Use to describe creating a copy of an object (like a file or configuration). The duplicate item may be edited upon or after creation. | | | **Do not use** interchangeably with *Copy*.
| **Edit** <br /> (verb) | Use to describe making changes to an object (like a file, configuration, or policy). | <PencilAltIcon /> <br /> (fa-pencil-alt) | | *Modify* and *Change* are not recommended for this use case.|
| **Expand** <br /> (verb) | Use to describe expanding a container element (like a list or message) to show all its contents. | <AngleRightIcon /> <br /> (fa-angle-right) | *Collapse* |
| **Export** <br /> (verb) | Use to describe packing the contents (like a project or spreadsheet) from a website or application to a file format (like .pdf or .xslx) to your system. | <ExportIcon /> <br /> (pficon-export) | *Import* | **Do not use** interchangeably with *Download*.
| **Export** <br /> (verb) | Use to describe packing the contents (like a project or spreadsheet) from a website or application to a file format (like .pdf or .xslx) to your system. | <ExportIcon /> <br /> (pficon-export) | *Import* | **Do not use** interchangeably with *Download*.
| **Filter** <br /> (verb) | Use to describe the action of narrowing a set of search results to show only items meeting a certain criteria. Filtering is mostly associated with views like tables, lists, and card grids and assumes that a search has previously been performed to return an initial results list. | <FilterIcon /> <br /> (fa-filter) | |
| **Hide** <br /> (verb) | Use to describe hiding something that is displayed in the interface. | | *Show* |
| **Home page** <br /> (noun) | Use to describe the main page of a website. | | | Write *Home page* as two words, not one.
| **Import** <br /> (verb) | Use to describe loading a copy of an object (like a file, image, or format) to your system, software, or application for use or processing. | <ImportIcon /> <br /> (pficon-import) | *Export* | **Do not use** interchangeably with *Upload* or *Add*.
| **Log in** <br /> (verb) | Use to describe logging in. | | *Log out *| Use *log in to,* not *log into.*
| **Login** <br /> (adjective) | Use to describe something related to the act of logging in to an application, like a login page. | | | The noun *Login* can also be used as an alternative for *Username*, but *Username* is recommended. |
| **Log out** <br /> (verb) | Use to describe logging out. | | *Log in* |
| **Modify** | **Do not use.** See *Edit*. | | |
| **New** | **Do not use.** See *Add* or *Create*. | | |
| **OK** <br /> (adjective) | Use to collect confirmation or understanding from the user. | | | **Do not use** *Okay,* *O.K.,* *Ok,* or *ok* in the UI.
| **Open** <br /> (verb) | Use to describe launching something (like system preferences).| | *Close* |
| **Quit** <br /> (verb) | Use to describe exiting an application. | | |
| **Please** <br /> (adverb) | **Do not use**  | | | Do not precede UI terms with "please". It is extraneous and overly formal. | 
| **Remove** <br /> (verb) | Use to describe removing an item from a list, group, view, or other container element without completely deleting it. Also see *Add* and *Delete*. | <MinusIcon /> <br /> (fa-minus) <br/><br/> <MinusCircleIcon /> <br /> (fa-minus-circle) | *Add* | If what you're removing is not readily apparent from the context, consider adding a noun (like "Remove file").
| **Save** <br /> (verb) | Use to describe preserving changes made by the user. | <SaveIcon /> <br /> (pficon-save) | *Cancel* |
| **Search** <br /> (verb) | Use to describe the action of querying a data set to return a results list. Searching will always be applied against some criteria and may be narrow or broad. | <SearchIcon /> <br /> (fa-search) | |
| **Select** <br /> (verb) | Use to prompt the user to select an item from a list, group, view, or other container element. | | *Deselect* | **Do not use** *Choose* for this use case.
| **Set up** <br /> (verb) | Use to describe setting up an arrangement (like a system, process, or environment). | | | *Set up* is two words as a verb and one word as a noun. See *Setup*.
| **Setup** <br /> (noun) | Use to describe the setup of something (like a system, process, or environment). | | | *Setup* is one word as a noun and two words as a verb. See *Set up*.
| **Show** <br /> (verb) | Use to describe displaying something that is hidden in the interface. | <EyeIcon /> <br /> (fa-eye) | *Hide* | **Do not use** interchangeably with *View* or *Expand*.
| **Sign up** <br /> (verb) | Use to describe signing up for a web account, application, service, or event. | | | *Sign up* is two words as a verb and one word as an adjective or noun. See *Signup*.
| **Signup** <br /> (adjective) | Use to describe something related to the act of signing up for a web account, application, service, or event, like a signup page. | | | The noun *Signup* can also be used to refer to a user signup submission (for example, "We need more signups for this event.").
| **View** <br /> (verb) | Use to describe accessing another page to see details. (n.) Use to represent an arrangement of data in the interface (like a list view). | | | **Do not use** interchangeably with *Show* or *Expand*.
| **Upload** <br /> (verb) | Use to describe loading a copy of a file to a server.| <UploadIcon /> <br /> (fa-upload) | | Do not use interchangeably with *Import*.
| **Username** <br /> (noun) | Usually a unique ID (like ssmith123). | | |
| **Utilize** <br /> (verb) | **Do not use.** Opt for the less formal version, *Use*. | | |

</div> 

## Abbreviations and acronyms
Use abbreviations that users are familiar with, and write out uncommon abbreviations. Only use an abbreviation that has already been established and *never* make up an abbreviation or acronym yourself to help keep consistency in your products. Make sure that your abbreviations are consistent, always abbreviate units of measurement, and, when referring to a product, default to how the company refers to it themselves. 

<div class="ws-content-table">

| **Abbreviation** | **Usage** |
|------------------|-----------|
| **CSS** | Stands for *Cascading Style Sheets*. Write *CSS* in all caps. |
| **e.g.**, **i.e.**, and **etc.** | Use sparingly. These terms aren't easily understood by everyone, especially users whose native language is not rooted in Latin. Write out their meaning instead:<ul><li>e.g. - for example</li><li>i.e. – in other words</li><li>etc. – and more/so on</li></ul> |
| **HTML** | Stands for *Hypertext Markup Language*. Write *HTML* in all caps. |
| **JS** | Stands for *JavaScript*. Write *JS* in all caps. |
| **K8** | Stands for *Kubernetes*. |
| **KVM** | Refers to a kernel-based virtual machine. Write *KVM* in all caps. |
| **sysadmin** | Avoid using abbreviations like *sysadmin* and *SysAdmin* because they're too informal and not always easily understood. *System* should be singular (not *Systems administrator*) because it can include both a single system and multiple systems, similar to a *brain surgeon*, who works on more than one brain. <br /><br /> Taken from Red Hat Corporate Style Guide. |
| **U.S.** | As a noun, use *United States* unless there are space constraints. As an adjective, use *U.S.* (for example, *U.S. soldier*). As part of an organization, use *U.S.* <br /><br /> Taken from Red Hat Corporate Style Guide. | 
| **URL** | Stands for *Uniform Resource Locator*. Write *URL* in all caps. |
| **VM** | Refers to a virtual machine. OK to abbreviate as long as you've spelled it out once in the first occurrence and as long as *VM* won't be confused with other terms that share that acronym. <br /><br />Taken from Red Hat Corporate Style Guide. |
| **N/A** | Refers to *data not applicable*, meaning there is no relevant, matching, or applicable data.<br /><br />For example, when a filter returns no results, when a data source is empty, or when no data source is connected.|
| **--** | Refers to *data unavailable*, meaning the data exists and fits the criteria, but is not currently available to display.<br /><br />For example, when a data source is connected, but data can't be fetched due to permission restrictions or errors.|

</div> 
