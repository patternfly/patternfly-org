---
id: About PatternFly AI
section: PatternFly-AI
--- 
import { Alert, AlertActionLink, Accordion, AccordionItem, AccordionContent, AccordionToggle, Button, Card, CardHeader, CardTitle, CardBody, CardFooter, Divider,  DescriptionList,  DescriptionListTerm,  DescriptionListGroup,  DescriptionListDescription, Grid, GridItem, Stack, StackItem} from '@patternfly/react-core';
import ExternalLinkSquareAltIcon from '@patternfly/react-icons/dist/esm/icons/external-link-square-alt-icon';

When used thoughtfully, AI can enhance user experiences through personalized interactions, increased efficiency, and innovative designs. **PatternFly AI** provides resources that can help you integrate AI into your design process, balancing a consideration for its potential benefits and unintended consequences.

## Red Hat policies

When using PatternFly to design Red Hat products, you must adhere to AI-related policies that Red Hat has previously outlined:
- Gain approval before using AI technology for business related to Red Hat.
- Gain approval before using certain information as input for AI technology.
- Review, test, and validate generative AI model output.

<Button component="a" href="https://source.redhat.com/?signin&r=%2fdepartments%2flegal%2fglobal_legal_compliance%2fcompliance_folder%2fpolicy_on_the_use_of_ai_technologypdf" target="_blank" variant="link" isInline icon={<ExternalLinkSquareAltIcon />} iconPosition="end">
      View policy details (requires Red Hat login)
</Button>

## Core principles 

These core principles of PatternFly AI create an ethics-first framework for AI use.

<Stack hasGutter>
<StackItem span={6}>
    <Card isFullHeight >
    <CardHeader>
    <CardTitle>Accountability</CardTitle>
    </CardHeader>
    <CardBody>Clear responsibilities must be defined for AI design, development, and deployment processes&mdash;including policies and the documentation of design decisions and processes​.
    </CardBody>
    </Card>
</StackItem>

<StackItem span={6}>
    <Card isFullHeight >
    <CardHeader>
    <CardTitle>Explainability</CardTitle>
    </CardHeader>
    <CardBody>AI systems must be easy to explain and comprehend. Our users should be able to understand who is making decisions and how these decisions are made. 
    </CardBody>
    </Card>
</StackItem>
<StackItem span={6}>
    <Card isFullHeight >
    <CardHeader>
    <CardTitle>Transparency</CardTitle>
    </CardHeader>
    <CardBody>Processes, decisions, and practices involved in AI systems must be transparent. Users must be able to have insight into these areas.
    </CardBody>
    </Card>
</StackItem>
<StackItem span={6}>
    <Card isFullHeight >
    <CardHeader>
    <CardTitle>Fairness</CardTitle>
    </CardHeader>
    <CardBody>AI systems must be inclusive and accessible, and should attempt to avoid amplifying bias.
    </CardBody>
    </Card>
</StackItem>
<StackItem span={6}>
    <Card isFullHeight >
    <CardHeader>
    <CardTitle>Human-centeredness</CardTitle>
    </CardHeader>
    <CardBody>AI systems must be human-centered and focus on empowering users and supporting their needs. 
    </CardBody>
    </Card>
</StackItem>
</Stack>

### Accountability

<Grid span={6} hasGutter>
<GridItem>
<Card isFullHeight >
    <CardHeader>
    <CardTitle>Accessible policies</CardTitle>
    </CardHeader>
    <CardBody>Company policies should be readily accessible to all team members.  
    </CardBody>
    </Card>
</GridItem>
<GridItem>
<Card isFullHeight >
    <CardHeader>
    <CardTitle>Legal compliance</CardTitle>
    </CardHeader>
    <CardBody>All necessary laws, regulations, and ethical guidelines must be followed throughout the development process.
    </CardBody>
    </Card>
</GridItem>
</Grid>

### Explainability 

<Grid span={6} hasGutter>
<GridItem>
<Card isFullHeight >
    <CardHeader>
    <CardTitle>Accessible policies</CardTitle>
    </CardHeader>
    <CardBody>Company policies should be readily accessible to all team members.  
    </CardBody>
    </Card>
</GridItem>
<GridItem>
<Card isFullHeight >
    <CardHeader>
    <CardTitle>Understandable outcomes</CardTitle>
    </CardHeader>
    <CardBody>To build trust and help users make use of AI conclusions, clear explanations of how these conclusions are reached should be provided.
    </CardBody>
    </Card>
</GridItem>
</Grid>

### Transparency

<Grid span={6} hasGutter>
<GridItem>
<Card isFullHeight >
    <CardHeader>
    <CardTitle>Accessible policies</CardTitle>
    </CardHeader>
    <CardBody>Company policies should be readily accessible to all team members.  
    </CardBody>
    </Card>
</GridItem>
<GridItem>
<Card isFullHeight >
    <CardHeader>
    <CardTitle>Transparent processes and decisions</CardTitle>
    </CardHeader>
    <CardBody>To help users understand intentions and decision-making methods, design processes and decisions should be well documented.
    </CardBody>
    </Card>
</GridItem>
<GridItem>
<Card isFullHeight >
    <CardHeader>
    <CardTitle>Data transparency</CardTitle>
    </CardHeader>
    <CardBody>Informed consent must be obtained to collect and use data. The ways that user data is collected, stored, and used should be shared.
    </CardBody>
    </Card>
</GridItem>
</Grid>

### Fairness

<Grid span={6} hasGutter>
<GridItem>
<Card isSelectable isFullHeight >
    <CardHeader>
    <CardTitle>Bias mitigation</CardTitle>
    </CardHeader>
    <CardBody>To prevent discriminatory outcomes, potential biases should be identified and reduced.  
    </CardBody>
    </Card>
</GridItem>
<GridItem>
<Card isFullHeight >
    <CardHeader>
    <CardTitle>Inclusive design</CardTitle>
    </CardHeader>
    <CardBody>To avoid systemic bias, designs should be inclusive and accommodating of various user demographics.
    </CardBody>
    </Card>
</GridItem>
<GridItem>
<Card isFullHeight >
    <CardHeader>
    <CardTitle>Equal access</CardTitle>
    </CardHeader>
    <CardBody>Access to AI technologies should be available and beneficial to most users and communities.
    </CardBody>
    </Card>
</GridItem>
</Grid>

### Human-centeredness

<Grid span={6} hasGutter>
<GridItem>
<Card isFullHeight >
    <CardHeader>
    <CardTitle>Value and need alignment</CardTitle>
    </CardHeader>
    <CardBody>AI systems should be aligned with user needs and values. They should be continuously refined based on user feedback and ethical considerations.
    </CardBody>
    </Card>
</GridItem>
<GridItem>
<Card isFullHeight >
    <CardHeader>
    <CardTitle>Cultural sensitivity</CardTitle>
    </CardHeader>
    <CardBody>Cultural differences should be considered and respected.
    </CardBody>
    </Card>
</GridItem>
<GridItem>
<Card isFullHeight >
    <CardHeader>
    <CardTitle>Data rights and control</CardTitle>
    </CardHeader>
    <CardBody>Users should have control over their data, including the ability to access, modify, and delete their information.
    </CardBody>
    </Card>
</GridItem>
<GridItem>
<Card isFullHeight >
    <CardHeader>
    <CardTitle>Privacy protection</CardTitle>
    </CardHeader>
    <CardBody>Personally identifiable information must be protected and used responsibly.
    </CardBody>
    </Card>
</GridItem>
</Grid>