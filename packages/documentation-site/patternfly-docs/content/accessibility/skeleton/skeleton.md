---
id: Skeleton
section: components
---

A **skeleton** is a type of loading state that allows you to expose content incrementally. For content that may take a long time to load, use a [progress bar](https://www.patternfly.org/v4/components/progress) instead.

For sighted users, they are able to see that there is loading content and no other action is needed until loading completes. Likewise, there is nothing that needs to be added for keyboard users. 

For users who rely on assistive technology, skeleton’s visual representation of a loading state won’t be accessible without additional labeling. 

<br/>

<ins>**To make skeleton accessible:**</ins>

- Add the `screenreaderText` prop and add a message for assistive technology (Example: `screenreaderText=”Loading contents”`).
- If multiple skeletons exist on a screen, you likely only need to add the `screenreaderText` prop to one of them.
