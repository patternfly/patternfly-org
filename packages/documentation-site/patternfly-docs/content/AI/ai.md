---
id: Overview
title: AI overview
section: AI
sortValue: 1
--- 
import { Alert, AlertActionLink, Accordion, AccordionItem, AccordionContent, AccordionToggle, Button, Card, CardHeader, CardTitle, CardBody, CardFooter, Checkbox, Divider,  DescriptionList, DescriptionListTerm, DescriptionListGroup,  DescriptionListDescription, Grid, GridItem} from '@patternfly/react-core';
import ExternalLinkSquareAltIcon from '@patternfly/react-icons/dist/esm/icons/external-link-square-alt-icon';

When used thoughtfully, **AI** can enhance user experiences through personalized interactions, increased efficiency, and innovative designs. 

To support your AI practices, we provide a range of AI tools that you can integrate into your workflows, plus guidance for using AI with PatternFly:

- **[Rapid prototyping](/ai/rapid-prototyping):** How to quickly test and iterate on AI features during the early stages of design.
- **[AI-assisted code migration](/ai/ai-assisted-code-migration):** How to quickly test and iterate on AI features during the early stages of design.
- **[Conversational Design Principles](/ai/conversation-design):** Guidance for designing effective and human-centered text-based conversational flows.
- **[Rapid Prototyping Guidelines](/ai/generative-uis/overview):** How to quickly test and iterate on AI features during the early stages of design.

Regardless of the AI resources or workflow you're using, it's important to ensure that you're aligned with the compliance rules, ethical considerations, and best practies on this page. 

---

## How do I ensure compliance?

There are important compliance rules and ethical considerations that must guide your use of AI with PatternFly.

### Red hat policies

When using PatternFly to design Red Hat products, you *must* adhere to AI-related policies that Red Hat has previously outlined. This means you must:
- Gain approval before using AI technology for business related to Red Hat.
- Gain approval before using certain information as input for AI technology.
- Review, test, and validate generative AI model output.
- Always consider data privacy when entering company or personal information into AI resources, and ensure compliance with all company data protection policies and rules around AI usage.   

<Button component="a" href="https://source.redhat.com/?signin&r=%2fdepartments%2flegal%2fglobal_legal_compliance%2fcompliance_folder%2fpolicy_on_the_use_of_ai_technologypdf" target="_blank" variant="link" isInline icon={<ExternalLinkSquareAltIcon />} iconPosition="end">
      View policy details (requires Red Hat login)
</Button>

## How do I ensure ethical practice?

There are 5 core principles of PatternFly AI: accountability, explainability, transparency, fairness, and human-centeredness. These principles create an ethics-first framework for AI use, and any AI system built with PatternFly should adhere to all **five principles**.

<Grid hasGutter>
<GridItem span={6}>
    <Card isFullHeight>
    <CardHeader>
    <CardTitle>Accountability</CardTitle>
    </CardHeader>
    <CardBody>
        All people involved in any step of creating AI are **accountable** for considering its impact. There should be clearly defined roles for design, development, and deployment. Decisions and processes should be well-documented.
    </CardBody>
    </Card>
</GridItem>
<GridItem span={6}>
    <Card isFullHeight>
    <CardHeader>
    <CardTitle>Explainability</CardTitle>
    </CardHeader>
    <CardBody>
        AI systems should be easy to **explain** and comprehend. Humans should be able to easily perceive, recognize, and understand their decision-making processes. Imperceptible AI is *not* ethical. 
    </CardBody>
    </Card>
</GridItem>
<GridItem span={6}>
    <Card isFullHeight>
    <CardHeader>
    <CardTitle>Transparency</CardTitle>
    </CardHeader>
    <CardBody>
        All processes, decisions, and practices involved in AI systems should be open and **transparent**&mdash;not hidden. Users should be able to understand who is making decisions and how these decisions are made.
    </CardBody>
    </Card>
</GridItem>
<GridItem span={6}>
    <Card isFullHeight>
    <CardHeader>
    <CardTitle>Fairness</CardTitle>
    </CardHeader>
    <CardBody>
        AI systems that are **fair** should be intentionally designed to prioritize and promote inclusion. They should focus **on** accessibility for all humans and should minimize&mdash;not amplify&mdash;bias.
    </CardBody>
    </Card>
</GridItem>
<GridItem span={12}>
    <Card isFullHeight>
    <CardHeader>
    <CardTitle>Human-centeredness</CardTitle>
    </CardHeader>
    <CardBody>
        At their core, AI systems must prioritize a **human-centered** approach, focusing on addressing real needs and empowering humans. They should emphasize accessibility, transparency, user autonomy, and privacy. To build trust and promote understanding, these systems should provide users with intuitive interfaces and clear communication of intentions and capabilities. 
    </CardBody>
    </Card>
</GridItem>
</Grid>

### Ethical design checklist 

When working on an AI system, you should consciously check that you're in alignment with the core principles of PatternFly AI. While this is an area that will continue to evolve with the rest of the industry, the following checklists outline some of the key areas that you should consider for each principle.

#### Accountability

| <div style="width:10rem">Key area</div> | Rule | <div style="width:10rem">Status</div>| 
| --- | --- | --- |
| Policies | Company AI policies are readily accessible to all team members. | <Checkbox label="Compliant"></Checkbox>
| Legal compliance | All necessary laws, regulations, and ethical guidelines are followed throughout the development process. AI does not enable illegal, unethical, or contract-breaking activities. | <Checkbox label="Compliant"></Checkbox>
| Practices | AI does not answer unsafe questions or access unsecure data. | <Checkbox label="Compliant"></Checkbox>

#### Explainability

| <div style="width:10rem">Key area</div> | Rule | <div style="width:10rem">Status</div>| 
| --- | --- | --- |
| Outcomes | There are clear explanations available that describe how AI conclusions are reached. | <Checkbox label="Compliant"></Checkbox>
| Citations | Any related citations are provided to users. | <Checkbox label="Compliant"></Checkbox>|
| Context | To support troubleshooting, AI gives context to Red Hatters who review its interactions. |<Checkbox label="Compliant"></Checkbox> |

#### Transparency

| <div style="width:10rem">Key area</div> | Rule | <div style="width:10rem">Status</div>| 
| --- | --- | --- |
| Documentation | Design processes and decisions are well documented.| <Checkbox label="Compliant"></Checkbox>
| Data usage | Informed consent is obtained to collect and use data. The ways that user data is collected, stored, and used are openly shared. AI is clear about the data that it records. | <Checkbox label="Compliant"></Checkbox>
| Confidence | AI shares when it has low confidence in its response. |<Checkbox label="Compliant"></Checkbox>
| Limitations | AI shares when it believes that it can’t fulfill a request. | <Checkbox label="Compliant"></Checkbox>

#### Fairness

| <div style="width:10rem">Key area</div> | Rule | <div style="width:10rem">Status</div>| 
| --- | --- | --- |
| Bias | Potential biases are identified, reduced, and actively studied. | <Checkbox label="Compliant"></Checkbox>
| Inclusion | Designs are inclusive and accommodating of various user demographics. | <Checkbox label="Compliant"></Checkbox>
| Equal access | Access to AI technologies is available and beneficial to as many users and communities as possible. | <Checkbox label="Compliant"></Checkbox>

#### Human-centeredness 

| <div style="width:10rem">Key area</div> | Rule | <div style="width:10rem">Status</div>| 
| --- | --- | --- |
| Value and need | AI is aligned with user needs and values and will be continuously refined based on user feedback and ethical considerations.  | <Checkbox label="Compliant"></Checkbox>
| Communication | AI has a predictable tone and voice. It can handle emotional responses from users gracefully. | <Checkbox label="Compliant"></Checkbox>
| Cultural sensitivity | Cultural differences are considered and respected.  | <Checkbox label="Compliant"></Checkbox>
| Data rights and control | Users have control over their data, including the ability to access, modify, and delete their information. AI does not act on behalf of users without explicit permission and clear opportunities for permission withdrawal.  | <Checkbox label="Compliant"></Checkbox>
| Optional | There is an obvious and simple way for users to opt out of using AI. | <Checkbox label="Compliant"></Checkbox>
| Privacy | Personally identifiable information is protected and used responsibly.  | <Checkbox label="Compliant"></Checkbox>

## How do I apply AI design best practices?

When designing, developing, and using AI, consider the following ethical and best-practice guidelines.

### Determine if AI adds value

Not all uses of AI are good for your UX strategy. As much as possible, conduct research to identify real user needs that AI features could help solve

Some of the more common problems that AI *might* be able to help solve include:
- Increasing users' productivity and efficiency.
- Personalizing user experience to make engagements more personal and relevant.
- Making design processes more sustainable.

#### When to use AI
Depending on your users' needs, value-adding features could include:
- AI-driven search, to tailor search results to a user's unique needs. 
- AI that helps streamline onboarding, data entry, or routine job tasks. 
- AI that makes product recommendations based on a user's history. 

#### When not to use AI
- Do not add AI features simply because they are new, trendy, or fun. They need to matter to the user.

### Enhance—don't replace—human abilities

AI is best when it enhances human abilities, not when it's used to replace humans. It cannot exist in a silo—humans help bring the value of AI to life.

To ensure that the design of AI systems is human-centered, follow these practices: 

- Nurture collaboration and cross-team alignment.
- Welcome multiple perspectives to encourage creativity and help mitigate bias. 
- Check AI output for accuracy and identify areas where meaning is lost, language isn't inclusive, or information isn't true. Ask peers to review your AI-generated deliverables to help fact-check and catch mistakes.

### Be transparent with your users

As one of our core pillars, transparency is essential for ethical design with AI. 

To help people understand and trust AI features: 

- Tell users when AI is being used.
- Make its capabilities and limitations clear to set appropriate expectations.
- Explain how AI makes decisions.
- Keep users in control and let them decide how they interact with AI.
- Be clear and honest when AI fails or hallucinates.

### Be prepared for something to go wrong 

Errors and failure are inevitable when working with AI, so it is essential that you are prepared to handle undesired outcomes. You should understand the risk involved in AI and the impact that an error may have. 

To create a plan for issues, start by following these guidelines: 

- When AI fails, be explicit about errors and let users regain control as they want.
- Provide easy access to human support.