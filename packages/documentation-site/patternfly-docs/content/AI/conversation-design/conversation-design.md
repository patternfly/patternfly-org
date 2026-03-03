---
id: Conversation design
section: AI
---

import { Button, Flex, FlexItem } from '@patternfly/react-core';
import ArrowRightIcon from '@patternfly/react-icons/dist/esm/icons/arrow-right-icon';

# Conversation design guidelines

**Conversation design** is a method of writing for conversational interfaces, like chatbots or voicebots. The goal of conversation design is to create an interactive experience that resembles human-to-human conversation as much as possible. Like traditional content design, conversation design is focused on using words to make experiences clear, concise, and well-timed.

Good conversation design combines content strategy, writing, and design to ensure that the development and use of chatbots is centered on real user needs. This includes making sure that all text related to the conversational UI supports easy engagement with chatbots, while staying aligned with brand standards.

When designing AI conversations alongside PatternFly-based projects, it is important to align with our established [brand voice and tone](/content-design/brand-voice-and-tone), as well as our [ethical guidelines for AI.](/ai/overview)

## Best practices 

Following these best practices to help ensure that your users can complete their goals through an AI-based conversation: 

- Be transparent about AI use. 
- Be direct, brief, and consistent. 
- Frame questions in terms of value for the user.
- If you ask for personal info, tell users "why" you're asking first. 
- Always have the last word.

## Chatbot conversation design

Chatbots provide users with persistent access to convenient help. When they are intentionally designed to meet the needs of your users, chatbots can improve your users' efficiency and enhance the overall UX of your product.

Chatbots are only as good as the writing that goes into them. The language they use must build trust, clearly establish the “rules” of the conversation, and support users' goals. General microcopy, like headings or buttons, should match PatternFly's standard [content design guidelines](/content-design/overview), but there are additional guidelines to follow for common message types and conversation patterns.

[Our ChatBot extension](/extensions/chatbot/overview) utilizes PatternFly components to create a foundation for a customizable AI-based chatbot. When using ChatBot, it's important to adhere to the following conversation design guidelines. 

### Writing messages 

#### Welcome and goodbye messages 

Always welcome users to a conversation with your ChatBot. If there's an "end" to a conversation, make sure to also say goodbye to your users. In instances where users can "minimize" a chat window to come back to it later, a goodbye message isn't necessary. 

When you know your user's name, address them directly. 

![Chatbot welcome message with user's name](./img/chatbot-welcome.png)

#### Bot prompts 

When writing your bot's prompts: 

- Keep messages short and simple. Try to stick to 3 lines of text in a message and only send 3 messages at most before allowing a user to provide input. 
- Be direct and limit choices for users as much as possible. 
- Unlike traditional content design, *don't lead with the benefit.* End with the benefit to be sure that it's read and acted upon. Users should be able to complete an action solely based on a chatbot's last sentence. 
- Frame any questions from the bot in terms of value for the user.
- Provide examples when relevant.
- Avoid open-ended questions. If you ask any, make them very simple, increase pause time between messages, and tell users when they should type. 
- Utilize different methods of presenting information, like cards or buttons. You don't have to always use plain text in your messages; sometimes different message types can be more convenient and engaging.

![Chatbot prompt examples](./img/chatbot-prompts.png)

### Conversation design patterns

#### Disclosing AI usage

Make sure to disclose any use of AI in chatbots. Our users should be able to trust that we are honest and transparent with them as much as possible.

- Use labels and other visual styling cues to clearly identify AI features. 
- Add necessary legal disclosures where you can, like in the chatbot footer. 
- Display an indicator when the bot is "thinking" or "typing," so that users know to expect feedback.

#### Handling unsafe or unethical requests

LLM guardrails are safety mechanisms that moderate how a model handles sensitive or risky prompts. [Research shows](https://arxiv.org/html/2506.00195v1) that a user's experience is shaped more by how a model handles a refusal than by their initial intent. Even if you cannot fulfill a user's request, it is important to handle the interaction tactfully to ensure they feel respected. 

Many models default to providing direct or explanation-based refusals (such as "I can’t do that" or "I can’t assist because of a safety policy"), but these can be perceived as frustrating or patronizing. While users generally prefer that a model fully complies with their requests, safety and policy requirements often make this impossible. When a guardrail is triggered, your goal is to instead "let them down easy" to maintain trust and engagement.

When a user requests something unsafe or unethical, follow these core strategies: 

- **Prioritize partial compliance:** Whenever possible, answer the general or theoretical parts of a user's request without providing actionable, dangerous, or sensitive details.
- **Explain the refusal:** To reinforce transparency, clearly explain why action cannot be taken to fully comply with a user's request.
- **Redirect instead of shutting down:** Avoid using definitive phrases like "I refuse" or "I cannot." Instead, suggest a related, safer topic to keep the conversation productive.

| Strategy | Usage | Example |
| :---: | :---: | :---: |
| **Partial compliance** | Use by default when intent is ambiguous and fulfilling a request would compromise compliance, safety, or ethical rules. | "The process of [Topic] generally involves [General principle]..." |
| **Explanation** | Use when refusing a specific request to reinforce transparency and trust. | "To ensure user privacy, I don't have access to individual [Data type]..." |
| **Redirection** | Use when a specific request cannot be fulfilled and partial compliance has either already been attempted or is not possible. | "I can’t provide specifics on that, but I can suggest some resources on [Related topic]." |

##### Message streaming considerations

Real-time message streaming introduces unique technical challenges because guardrails must be checked dynamically as text is generated. To maintain a seamless experience, you should gracefully handle guardrail triggers at different stages of the conversation.

If a guardrail prevents a model response from ever being generated, provide a clear system-level message in the UI so the user isn't left waiting for a response that will never arrive. For example, this might look something like: "I'm sorry, I'm not able to assist with that request for safety reasons. Is there something else I can help you with?"

More complex are situations where violations are detected mid-stream. In these cases, avoid simply deleting the message from the DOM or UI, as disappearing content is likely to confuse users. Instead, if a guardrail is triggered while a message is streaming, replace the partial response with a standard refusal or redirection message.

To balance safety with timely streaming, consider a "chunk-based" verification workflow, as outlined in this [AWS article about guardrails](https://aws.amazon.com/blogs/machine-learning/build-safe-and-responsible-generative-ai-applications-with-guardrails/). Instead of waiting to validate the LLM's entire response once it's generated, you can validate its reply in small segments, only displaying a content in the UI after it has been verified. This approach creates a buffer that ensures safety without sacrificing the "real-time" feel of the conversation. If a segment fails, you can halt the stream and redirect to a safer topic or address inability to reply. 