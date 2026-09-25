---
id: Chatbot
title: Chatbot rules
section: AI
subsection: Development guidelines
sortValue: 1
---

# Chatbot Rules

Essential rules for PatternFly Chatbot implementation and integration patterns.

## Related Files

- [**Component Architecture**](/ai/development-guidelines/component-architecture) - Chatbot component structure rules
- [**Styling Standards**](/ai/development-guidelines/styling-standards) - CSS and styling best practices

## Installation Rules

### Required Installation

```bash
# ✅ Install PatternFly Chatbot package
npm install @patternfly/chatbot
```

### Required CSS Import

```jsx
// ✅ MUST import CSS - chatbot components require specific styling
import '@patternfly/chatbot/dist/css/main.css';
```

### Webpack Configuration (if needed)

The PatternFly React seed exports an object with a `stylePaths` array from `stylePaths.js`. If webpack is not loading the chatbot stylesheet, add this entry to that existing array; keep the other entries and the `module.exports = { stylePaths: [...] }` shape:

```diff
// stylePaths.js - retain the existing stylePaths entries and export
 module.exports = {
   stylePaths: [
     // ...other existing paths
-    path.resolve(__dirname, 'node_modules/@patternfly/react-inline-edit-extension/node_modules/@patternfly/react-styles/css')
+    path.resolve(__dirname, 'node_modules/@patternfly/react-inline-edit-extension/node_modules/@patternfly/react-styles/css'),
+    require.resolve('@patternfly/chatbot/dist/css/main.css')
   ]
 };
```

## Import Rules

### Public Import Pattern

- ✅ **Use standard imports** from the package's public entry point
- ✅ **Use dynamic imports when needed** - Import individual components from `/dist/dynamic/` only when optimizing bundle loading

```jsx
// ✅ Correct - Import from the public package entry point
import {
  Chatbot,
  ChatbotContent,
  ChatbotFooter,
  ChatbotWelcomePrompt,
  Message,
  MessageBar,
  MessageBox
} from '@patternfly/chatbot';
```

## Implementation Rules

### Required Component Structure

- ✅ **Use standard chatbot hierarchy** - Chatbot > ChatbotContent > MessageBox + ChatbotFooter
- ✅ **Reference official demos** - Use PatternFly demo source code as templates
- ❌ **Don't create custom chat UI** - Use PatternFly chatbot components

```jsx
// ✅ Required chatbot structure
<Chatbot>
  <ChatbotContent>
    <MessageBox ariaLabel="Scrollable message log">
      <ChatbotWelcomePrompt title="Assistant" description="How can I help?" />
      {messages.map(message => (
        <Message key={message.id} role={message.role} content={message.content} />
      ))}
    </MessageBox>
  </ChatbotContent>
  <ChatbotFooter>
    <MessageBar onSendMessage={handleSendMessage} />
  </ChatbotFooter>
</Chatbot>
```

### Message State Rules

- ✅ **Use supported message roles** - 'user' and 'bot'
- ✅ **Include timestamps** - For message ordering and display
- ✅ **Handle loading states** - Show indicators during API calls
- ✅ **Handle error states** - Show error messages with retry options

```jsx
// ✅ Required message structure
const createMessage = (content, role) => ({
  id: generateId(),
  content,
  role, // 'user' | 'bot'
  timestamp: new Date().toLocaleString()
});
```

### Demo Implementation Rules

- ✅ **Study official demos** - [Basic](https://www.patternfly.org/patternfly-ai/chatbot/overview/demo/basic-chatbot) and [Embedded](https://www.patternfly.org/patternfly-ai/chatbot/overview/demo/embedded-chatbot)
- ✅ **Use demo source code** - Copy patterns from "View Code" sections
- ✅ **Follow demo structure** - Don't deviate from proven patterns

### Integration Rules

- ✅ **Use with PatternFly layout** - Integrate in PageSection, Modal, or Card
- ✅ **Handle responsive design** - Chatbot must work on all screen sizes
- ❌ **Don't create standalone chatbot pages** - Integrate with app layout

```jsx
// ✅ Required integration pattern
<PageSection hasBodyWrapper>
    <Chatbot>
      {/* Chatbot content */}
    </Chatbot>
</PageSection>
```

## Accessibility Rules

### Required Accessibility

- ✅ **Use proper ARIA labels** - For screen reader support
- ✅ **Implement keyboard navigation** - Full keyboard accessibility
- ✅ **Use component accessibility props** - `ariaLabel`, `announcement`, and `isLiveRegion`
- ✅ **Auto-scroll to new messages** - For better UX

```jsx
// ✅ Required accessibility pattern
<Chatbot ariaLabel="AI Assistant">
  <MessageBox ariaLabel="Scrollable message log">
    {messages.map(message => (
      <Message key={message.id} {...message} isLiveRegion />
    ))}
  </MessageBox>
</Chatbot>
```

## Essential Do's and Don'ts

### ✅ Do's

- Import CSS from `@patternfly/chatbot/dist/css/main.css`
- Use standard imports from `@patternfly/chatbot`
- Reference official PatternFly demo pages for implementation
- Provide proper ARIA labels and roles for accessibility
- Handle loading states during message processing
- Implement proper error handling for API failures
- Use supported message roles (user and bot)

### ❌ Don'ts

- Skip CSS imports - chatbot components require specific styling
- Ignore demo source code from PatternFly documentation
- Create custom chat UI when PatternFly components exist
- Skip accessibility considerations for screen readers
- Hardcode chatbot dimensions without responsive design
- Mix different chatbot libraries with PatternFly Chatbot

## Common Issues

### Styling Issues

- **Missing styles**: Ensure CSS is imported in main app file
- **Webpack config**: Add CSS path to stylePaths.js if needed

### Component Issues

- **Import errors**: Verify imports use the public `@patternfly/chatbot` entry point
- **Component not found**: Verify package is installed and paths are correct

### Performance Issues

- **Long conversations**: Implement message virtualization
- **Memory leaks**: Clean up event listeners and subscriptions

## Quick Reference

- **[Chatbot Overview](https://www.patternfly.org/patternfly-ai/chatbot/overview)** - Main documentation
- **[Basic Demo](https://www.patternfly.org/patternfly-ai/chatbot/overview/demo/basic-chatbot)** - Simple implementation
- **[Embedded Demo](https://www.patternfly.org/patternfly-ai/chatbot/overview/demo/embedded-chatbot)** - Embedded pattern

**Note**: This chatbot guidance takes precedence over general PatternFly patterns. Always consult the latest PatternFly Chatbot documentation and demo source code.

## Reference Documentation

- [PatternFly Chatbot on PatternFly.org](https://www.patternfly.org/patternfly-ai/chatbot/overview)
- [PatternFly Chatbot GitHub Repository](https://github.com/patternfly/chatbot)

> For the most up-to-date documentation and code examples, consult both PatternFly.org and the official GitHub repository. When using AI tools, leverage context7 to fetch the latest docs from these sources.

### Further Reading
- **[PatternFly Chatbot Docs](https://www.patternfly.org/chatbot/overview/)**
- **[Message Component API](https://www.patternfly.org/patternfly-ai/chatbot/messages/react)** - Message component API documentation
- **[Accessibility Guide](https://www.patternfly.org/get-started/accessibility-guide)**
