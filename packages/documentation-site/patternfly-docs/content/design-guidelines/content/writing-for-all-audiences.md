---
id: Writing for all audiences
section: UX writing
--- 

By following accessibility and global writing best practices, you’ll be better equipped to create product experiences for users of all abilities and backgrounds. 

## Writing for all abilities 
When designing interfaces, consider all users’ abilities, including physical and cognitive. Use words that are clear, concise, and consistent. Refer to the [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/TR/WCAG21/) for accessibility compliance information. 

To create accessible content, refer to the following best practices: 

- Use plain language and short sentences. 

- Use common contractions (for example, "it’s” and "you’re") in areas that sound most natural to you. Contractions help make your UI more accessible, and they’re great for maintaining a casual voice and tone.

- Don't identify items by color only. Color identifiers don’t help users who are colorblind. For example:

    <br />
    <img src="./img/submit-form.png" alt="blue PatternFly primary button reading Submit form" width="150"/>
    <br />

    <div class="ws-content-table">

    | **Before** | **After** |
    |--------|-----------|
    | Click the blue button. | Click **Submit form**. | 

    </div> 

- Write for responsive design. If your application is accessible by multiple devices, such as a tablet, laptop, television, and smartphone, then consider that on some devices you may slide or tap the screen, while on others you may select options by clicking or pressing. 

- Use proper heading levels (H1, H2) to articulate the page content’s organization. Headings are useful in identifying content changes, and machine translation recognizes each heading level as a new segment, which is important with text-laden pages. 
    - Headings are ranked hierarchically from H1 through H6, with H1 headings representing the most important idea on a page. 

- Consistently describe UI elements in tooltips and product documentation. For example, for a kebab icon the tooltip text might be "More options". In product documentation, you would then say "Click **More options**". 

- Label UI elements (buttons, icons, menus) consistently and descriptively to clearly represent the element’s function.

## Writing for localization and translation

Accessibility is closely related to localization and translation. The more accessible your words are, the easier it is to translate them. Keep the following additional guidelines in mind when writing for global users: 

- Translated text can be a drastically different length than the source text. Collaborate with UX designers to ensure that the text you use can appear 50% shorter or 50% longer with no negative impact on design.

- Character width is affected by double-byte characters.

- Avoid describing objects with human characteristics, for example “the computer knows when you log on.”

- Avoid idioms, jargon, or regional metaphors, such as “on the ball.” They don’t make sense in all languages.

- Avoid culture-specific or location-specific references and examples. They won’t resonate with all users.

- Avoid vague terms like “stuff” or “kind of.” These terms can be translated incorrectly.

- Use humor sparingly. It generally doesn’t translate well.

## Writing for screen readers

Include text for screen readers. Screen readers are most useful when the words represent what is visually shown on the screen. When writing text that is visible only to a screen reader, such as an aria-label that describes an icon button, reference the following guidelines:  

- Avoid redundancy. Screen readers announce the component or element as well as the associated property and state when the HTML is defined correctly. For example, a search button is announced to a user as a combination of the label and the component. Label the button as "Search", not "Search button." This way, it will be announced as "Search button" (rather than "Search search button").

- Make sure that labels for elements like buttons or links make sense when pulled out of context. Use descriptive hyperlinks instead of raw links or vague linked text, such as “Click here.”  

- When you define an aria-label for an element that also has associated visible text in the UI, ensure the aria-label begins with the same text that is displayed in the UI to avoid confusing screen reader users who have vision. 

- Avoid unnecessary capitalization. 

- Avoid leet speak, which uses numbers or special characters in place of letters (for example, "a11y" for accessibility). 

## Using accessible and global-friendly graphics

The graphics that you use in your UI should meet accessibility and localization standard by following these best practices:

- Verify that you have rights to use graphics without infringing on copyrights.

- Include alt text for images that provide additional meaning or content to the page. If the image is decorative or if the alt text would be duplicated by adjacent text, then use an empty alt attribute instead, `alt=""`. An empty alt attribute communicates to screen readers that the image provides no additional content and can be ignored.

- Select a text-free image and use callouts to caption the image. When localizing content, graphics containing text may require translation, and translating a static image requires graphic editing. Callouts are easier to localize.




