---
id: Conversation design
section: AI
---

import { Button, Flex, FlexItem} from '@patternfly/react-core';
import ArrowRightIcon from '@patternfly/react-icons/dist/esm/icons/arrow-right-icon';

# Conversation design guidelines

**Conversation design** is the practice of creating human-centered chatbots and other AI-driven interfaces. Like traditional content design, conversation design uses words to make experiences clear, concise, and relevant. At Red Hat, our goal is to ensure that AI enhances user experiences through interactive interactions that resemble a helpful, professional dialogue.

When designing AI conversations for PatternFly-based projects, align with our [brand voice and tone](/content-design/brand-voice-and-tone) and the ethical guidelines outlined in our [AI overview](/ai/overview).

## Best practices 

Follow these best practices to ensure users can complete their goals:

- **Be transparent:** Clearly disclose when the user is interacting with AI.
- **Be direct and brief:** Use simple language and get to the point quickly.
- **Explain the "why":** If you ask for personal information or specific data, tell users why it's needed first.
- **End with an invitation:** Always have the "last word" in a chat-based interaction so the user knows the model is ready for their next prompt.
- **Focus on value:** Frame bot questions and suggestions in terms of how they help the user, not just what the technology can do.

## Red Hat AI voice guidelines

Our research shows that users want AI to be personable but not human. Red Hat AI experiences should sound like a helpful colleague, without pretending to be a person or mimicking human emotions.

| **Don't** | **Do** |
| :--- | :--- |
| Use formal corporate language or jargon like "leverage," "utilize," or "seamless." | Use contractions and everyday language to stay conversational. |
| Use top-down or directive language like "You must..." or "Do X now." | Use partner-first framing: "Let's...", "Want me to...", or "We can..." |
| Position Red Hat as the sole decision-maker or impose a single path. | Directly address users and emphasize their autonomy as the decision-maker. |
| Talk down to users or over-explain basic, fundamental concepts. | Treat the user as a competent professional; give direct, technical instructions. |
| Use "human" descriptors (e.g., "I'm excited to help") or pretend to have feelings. | Maintain a professional, objective tone that focuses on tasks and solutions. |
| Give vague recommendations without explaining how or where. | Provide concrete next steps, specific commands, and actionable examples. |
| Provide a "data dump" of logs or facts without any interpretation. | Interpret data and explain the significance of raw facts or log events. |
| Overpromise certainty or claim to have performed actions that cannot be done. | Be transparent about the limitations of the model's capabilities. |
    
### Voice and tone prompt example

When configuring an LLM or assessing a model's response, use this description as a baseline:

> "Be a helpful colleague. Get straight to the point but engage the user like a peer. Ask clarifying questions if you need more information to give a precise answer. Give concrete advice, not vague platitudes. Empower the user—position Red Hat's technology as an enabler for their success, not a replacement for their expertise."

## Writing for chatbots

The physical constraints of a chat interface require specific attention to message length and formatting. See our [ChatBot design guidelines](/extensions/chatbot/overview/design-guidelines) for details on prompts, welcome messages, and streaming.

### Handling unsafe or unethical requests

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

### Message streaming considerations

Real-time message streaming introduces unique technical challenges because guardrails must be checked dynamically as text is generated. To maintain a seamless experience, you should gracefully handle guardrail triggers at different stages of the conversation.

If a guardrail prevents a model response from ever being generated, provide a clear system-level message in the UI so the user isn't left waiting for a response that will never arrive. For example, this might look something like: "I'm sorry, I'm not able to assist with that request for safety reasons. Is there something else I can help you with?"

More complex are situations where violations are detected mid-stream. In these cases, avoid simply deleting the message from the DOM or UI, as disappearing content is likely to confuse users. Instead, if a guardrail is triggered while a message is streaming, replace the partial response with a standard refusal or redirection message.

To balance safety with timely streaming, consider a "chunk-based" verification workflow, as outlined in this [AWS article about guardrails](https://aws.amazon.com/blogs/machine-learning/build-safe-and-responsible-generative-ai-applications-with-guardrails/). Instead of waiting to validate the LLM's entire response once it's generated, you can validate its reply in small segments, only displaying a content in the UI after it has been verified. This approach creates a buffer that ensures safety without sacrificing the "real-time" feel of the conversation. If a segment fails, you can halt the stream and redirect to a safer topic or address inability to reply. 