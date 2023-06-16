export const releaseNotes =[
    {
        component: "Label/Label group",
        description: "Used gap instead of item margins",
        pullRequestURL: "https://github.com/patternfly/patternfly/pull/5221",
        details: "Updated the label component to use CSS `gap` to space its children instead of using `margin` (same as chip).",
        repo: "html/css",
        fixedWithCodeMod: false
    },
    {
        component: "Label/Label group",
        description: " Add wrappers for content and actions to manage styling embedded components",
        pullRequestURL: " https://github.com/patternfly/patternfly/pull/5360",
        details: "Added wrapping elements for both the label content and actions to make the layout more flexible. (same as chip).",
        repo: "html/css",
        fixedWithCodeMod: false
    },
    {
        component: "Label/Label group",
        description: " Allow text to truncate",
        pullRequestURL: " https://github.com/patternfly/patternfly/pull/5364",
        details: "Updated the HTML structure so that text truncation is supported by default.",
        repo: "html/css",
        fixedWithCodeMod: false
    },
    {
        component: "Layouts",
        description: "Updated level, split, stack to use gap",
        pullRequestURL: "https://github.com/patternfly/patternfly/pull/5585", 
        details: "Updated the “gutter” variation of these layouts to use CSS `gap` to create gutters between children instead of `margin`",
        repo: "html/css",
        fixedWithCodeMod: false
    },
    {
        component: "Modal",
        description: "Added wrapper to close button",
        pullRequestURL: "https://github.com/patternfly/patternfly/pull/5371 ",
        details:"Added a structural HTML element to the modal component that is used to wrap the close button. This improves the flexibility of the close button and is more structurally consistent with similar components.",
        repo: "html/css",
        fixedWithCodeMod: false
    },
    {
        component: "Navigation",
        description: "Added top and bottom padding to navigation list", 
        pullRequestURL: "https://github.com/patternfly/patternfly/pull/5507",
        details: "Added top and bottom padding to navigation lists to replace the role of padding vertical navigation in the page sidebar that was removed in https://github.com/patternfly/patternfly/pull/5093.",
        repo: "html/css",
        fixedWithCodeMod: false
    },
    {
        component: "Navigation",
        description: "Updated spacing for grouped navigation", 
        pullRequestURL: "https://github.com/patternfly/patternfly/pull/5607", 
        details: "Removed the `.pf-m-no-title` class that only existed in core and is no longer necessary.",
        repo: "html/css",
        fixedWithCodeMod: false
    },
    {
        component: "Notification drawer",
        description: "Set body to fill available vertical space", 
        pullRequestURL: "https://github.com/patternfly/patternfly/pull/5214",
        details: "Sets the drawer body to fill the vertical space to fix a visual bug.",
        repo: "html/css",
        fixedWithCodeMod: false
    },
    {
        component: "Options menu",
        description: "Removed line Height css variable", 
        pullRequestURL: "https://github.com/patternfly/patternfly/pull/5422 ",
        details: "Removed unnecessary line-height styles from the options menu toggle.",
        repo: "html/css",
        fixedWithCodeMod: false
    },
    {
        component: "Page",
        description: "Added multiple body support", 
        pullRequestURL: "https://github.com/patternfly/patternfly/pull/5093",
        details: "Updated the page component sidebar to support multiple body elements, instead of a single body element used to position vertical navigation.",
        repo: "html/css",
        fixedWithCodeMod: false
    },
    {
        component: "Page",
        description: "Default page to full viewport height", 
        pullRequestURL: "https://github.com/patternfly/patternfly/pull/5517",
        details: "Updated the page component height to be 100% of the viewport height using `100vh` and `100dvh` units. Previously the page height was set to 100%, requiring the need for all ancestors of the page component element to also have an implicit or explicit CSS height set. This update removes the need for any ancestors of the page component to have a height set.",
        repo: "html/css",
        fixedWithCodeMod: false
    },
    {
        component: "Page",
        description: "Moved vars to root", 
        pullRequestURL: " https://github.com/patternfly/patternfly/pull/5637",
        details: "This update scopes all of the page component CSS variables to the `:root` scope instead of the page component class selector. This allows any top-level CSS variable for the page component to be accessible from anywhere in the document, instead of only being accessible within the page component class selector.",
        repo: "html/css",
        fixedWithCodeMod: false
    },
    {
        component: "Pagination",
        description: "Updated styles to target menu toggle", 
        pullRequestURL: "https://github.com/patternfly/patternfly/pull/5619 ",
        details: "Updates all styles within the pagination component that were targeting the deprecated options menu toggle to target the menu toggle component instead.",
        repo: "html/css",
        fixedWithCodeMod: false
    },
    {
        component: "Popover",
        description: "Added header, title, close elements", 
        pullRequestURL: "https://github.com/patternfly/patternfly/pull/5370 ",
        details: "Refactored the popover component HTML to be more flexible and consistent with similarly structured components. Added a structural HTML element to the container that is used to wrap the close button. Made the header element required. Updated the popover title to be more flexible",
        repo: "html/css",
        fixedWithCodeMod: false
    },
    {
        component: "Progress",
        description: "Prevented empty description and status from rendering", 
        pullRequestURL: "https://github.com/patternfly/patternfly/pull/5387",
        details: "The title isn’t a breaking change. However, this PR also Updates the progress status element to use CSS `gap` to space its children instead of `margin`.",
        repo: "html/css",
        fixedWithCodeMod: false
    },
    {
        component: "Radio",
        description: "Set description/body to fill available width", 
        pullRequestURL: "https://github.com/patternfly/patternfly/pull/5233",
        details: "Previously the description and body elements would only be as wide as their content, and now they occupy the available width.",
        repo: "html/css",
        fixedWithCodeMod: false
    },
    {
        component: "Search input",
        description: "Removed component", 
        pullRequestURL: "https://github.com/patternfly/patternfly/pull/5506 ",
        details: "The search input component was removed in favor of the text input group component.",
        repo: "html/css",
        fixedWithCodeMod: false
    }
]
