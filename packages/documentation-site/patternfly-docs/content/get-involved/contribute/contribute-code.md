---
id: Contribute code
title: Contribute code
section: get-involved
subsection: Contribute
---

We invite developers of all skill levels to contribute code to PatternFly, either to advance our system with new features or to fix issues in our existing offerings.

## Where do I start?

A great way to get familiar with our team and processes is to [attend our biweekly office hours](https://calendar.google.com/calendar/embed?src=patternflyteam%40gmail.com&ctz=America%2FNew_York). You can listen in on discussions, get help with a problem, or sign up for a time to chat with the team.

When you're ready to contribute, the best place to start is by finding a "good first issue" in one of our repos.

## Find a good first issue 

"Good first issues" are tasks our team has identified as being well-suited for new community members. You can find these in our component repositories:

- [patternfly (Core):](https://github.com/patternfly/patternfly/issues?q=is%3Aissue%20state%3Aopen%20label%3A%22Good%20first%20issue%22) Our foundational HTML/CSS library. [View the Core contribution guidelines.](https://github.com/patternfly/patternfly#guidelines-for-css-development)
- [patternfly-react:](https://github.com/patternfly/patternfly-react/issues?q=is%3Aissue%20state%3Aopen%20label%3A%22Good%20first%20issue%22) Our React library. [View the React contribution guidelines.](https://github.com/patternfly/patternfly-react/blob/main/CONTRIBUTING.md#contribution-process)

If you find an issue you'd like to work on, leave a comment and a team member will guide you. For questions, you can reach out on the [#patternfly-core](https://patternfly.slack.com/archives/C9Q224EFL) or [#patternfly-react](https://patternfly.slack.com/archives/C4FM977N0) Slack channels.

## Explore other code contributions

Beyond component issues, you can also contribute to our extensions or to the PatternFly.org website itself. For any of these repositories, you can leave a comment on an issue you're interested in or ask questions in [our #general Slack channel](https://patternfly.slack.com/archives/C293LQ36J).

- **Extensions:** These packages combine multiple base components to offer specific functionality. You can contribute to any of their repositories:
    - [chatbot:](https://github.com/patternfly/chatbot) Code for [the ChatBot extension](/patternfly-ai/chatbot/about-chatbot).
    - [patternfly-quickstarts:](https://github.com/patternfly/patternfly-quickstarts). Code for [the quick starts extensions](/extensions/quick-starts).
    - [react-catalog-view:](https://github.com/patternfly/react-catalog-view) Code for [the catalog view extension](/extensions/catalog-view/catalog-item-header).
    - [react-component-groups:](https://github.com/patternfly/react-component-groups) Code for [the component groups extension](/component-groups/about-component-groups).
    - [react-data-view:](https://github.com/patternfly/react-data-view) Code for [the data view extension](/extensions/data-view/overview).
    - [react-log-viewer:](https://github.com/patternfly/react-log-viewer) Code for [the log viewer extension](/extensions/log-viewer).
    - [react-topology:](https://github.com/patternfly/react-topology) Code for [the Topology extension](/topology/about-topology).
    - [react-user-feedback:](https://github.com/patternfly/react-user-feedback) Code for [the user feedback extension](/extensions/user-feedback).
- **PatternFly.org website:** To contribute to the functionality of our website, you can work on issues in the [patternfly-org repo](https://github.com/patternfly/patternfly-org).

## AI-assisted development guidelines

AI-generated code can be accepted as a contribution to this project as long as the contributor adheres to the following guidance.

When using AI coding assistants (such as GitHub Copilot, ChatGPT, Claude, or other similar tools) to help with development work on PatternFly React, please follow these guidelines to ensure code quality, security, and transparency:

1. **Verify and validate AI-generated code.**

    - **Treat AI-generated code as suggestions, not final code.** Review all generated code and modify as appropriate. Thoroughly review and test all code that you intend to integrate into your work.

    - **Do not automatically trust the code assistant output.** Always apply your own judgment and expertise. AI coding assistants can introduce security vulnerabilities if not used carefully, and AI models can sometimes hallucinate and provide incorrect or non-functional code.

    - **Make sure you thoroughly understand any AI-generated code.** If the generated code you intend to incorporate in your work is outside your expertise, consult with someone knowledgeable in the area prior to making it available to others.

1. **Mark any substantial AI-generated code portions.**

        - Nontrivial and substantial AI-generated or AI-assisted content should be "marked", using one of the following approaches:

          - **In a commit message, or in a pull request/merge request description field:** Identify the code assistant that you used, perhaps elaborating on how it was used. You might also use a trailer like "Assisted-by:" or "Generated-by:". For example:

            ```
            Assisted-by: GitHub Copilot
            Generated-by: ChatGPT for initial component structure
            ```

          - **In a source file comment:** Indicate the use of the code assistant. For example:

            ```javascript
            // Generated by GitHub Copilot
            // AI-assisted implementation with human review and modifications
            ```

1. **Review security:** Pay special attention to security implications of AI-generated code, especially when dealing with user input, authentication, or data handling.
1. **Test your code:** Ensure that AI-generated code is thoroughly tested and meets all existing project standards for testing coverage.
1. **Review code style:** Verify that AI-generated code follows PatternFly React's coding standards and style guidelines as outlined in this document.
1. **Review documentation:** If AI assists in generating documentation or comments, review them for accuracy and completeness.