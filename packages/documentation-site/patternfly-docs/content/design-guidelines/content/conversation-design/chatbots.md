---
id: Chatbots
section: UX writing
subsection: Conversation design
---

import { Button, Card, CardBody, CardFooter, CardTitle, Divider, Gallery, GalleryItem } from '@patternfly/react-core';
import ArrowRightIcon from '@patternfly/react-icons/dist/esm/icons/arrow-right-icon';

## Writing for chatbots 

When designed with your users in mind, chatbots can improve the overall UX, because they are convenient, efficient, and persistent. 

Chatbots are only as good as the writing that goes into them. The language they use must build trust and clearly establish the “rules” of the conversation.
 
There 2 main types of chatbots:

<Gallery hasGutter minWidths={{default:'400px'}}>
<GalleryItem>
<Card isFullHeight isLarge>
<CardTitle>Rule-based chatbots</CardTitle>
    <CardBody>Bots that are based on a set of predefined rules. These use a planned, guided dialog, and have a script that the user must stay on. The script is written by a human, including any microcopy, rules, prompts, and responses.</CardBody>
    <CardFooter> <Button component="a" href="https://www.patternfly.org/ux-writing/chatbots" variant="link" icon={<ArrowRightIcon />} iconPosition="end"> View chatbot writing guidelines  </Button></CardFooter>
</Card>
</GalleryItem>
<GalleryItem>
<Card isFullHeight isLarge >
<CardTitle>AI-based chatbots</CardTitle>
    <CardBody>Bots that use technologies like natural language processing and generative AI to parse user input and decide how to response. Often makes for a more natural, free flowing conversation, but relies on a trustworthy AI model.</CardBody>
    <CardFooter> <Button component="a" href="https://www.patternfly.org/" variant="link" icon={<ArrowRightIcon />} iconPosition="end"> Use our chatbot extension</Button> </CardFooter>
</Card>
</GalleryItem>
</Gallery>

## When should I use a chatbot?

It is important to only use chatbots when they add value to the user experience. Do not use chatbots simply for the sake of novelty. Your users aren't likely to be excited  to interact with a new chatbot feature, unless it directly helps them.

Common chatbot uses include: 
- Providing customer assistance, when waiting for human help would take longer
- Connecting users with resources, to streamline the process of searching for resources on their own
- Assisting users with common, recurring tasks

Before building a chatbot, ask yourself the following questions: 
- What are your users’ goals?
- How could a bot help your users reach their goals? 
- How is a bot better than traditional contextual support, like wizards, modals, and so on?

| **Do** | **Don't** |
| --- | --- |
| Do use a chatbot to help resolve common problems more efficiently. | Don't use a chatbot when users can accomplish tasks more efficiently through the UI. |
| Do use a chatbot to make it easier for users to complete routine tasks. | Don't use a chatbot for a complex or lengthy process. |
| To use a chatbot if users would benefit from on-demand help. | Don't use a chatbot for sensitive or emotional topics, that need real humans. |

## Chatbot personality and branding

Chatbots should be aligned with the [PatternFly brand guidelines.]() 

If your chatbot is designed for a Red Hat product, there are [additional Red Hat brand guidelines](https://www.redhat.com/en/about/brand/standards) that you should follow. Additionally, you will need to customize the chatbot with the brand name and system avatar for your product. 




