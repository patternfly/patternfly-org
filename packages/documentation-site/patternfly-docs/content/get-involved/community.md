---
id: Community
section: get-involved
---

import {Button, Card, CardHeader, CardTitle, CardBody, CardFooter, Divider, Grid } from '@patternfly/react-core';
import ExternalLinkAltIcon from '@patternfly/react-icons/dist/esm/icons/external-link-alt-icon';

# Become a Flyer 

PatternFly's core is its global community of designers, developers, and UX professionals with a passion for open source. We call ourselves **Flyers**.

Whether you're an active contributor or just following our releases, you're a valued member of our community. We believe that by working together, we can foster creativity and build a better design system for everyone.

There are many ways to be a Flyer: 

  <Grid sm={12} md={6} hasGutter className="pf-v5-u-my-lg pf-v5-u-text-align-center ws-building-grid">
    <Card isCompact isClickable> 
      <CardHeader
              selectableActions={{
                onClickAction: () => window.open("https://join.slack.com/t/patternfly/shared_invite/zt-3dcejyvj6-MU93z8IVihJXxbs2ggrMEw"),
                selectableActionAriaLabelledby:'slack-card'
              }}
            >
        <CardTitle id="slack-card" className="pf-v5-u-font-size-l"> Chat with us </CardTitle>
      </CardHeader>
      <CardBody> 
        Ask questions, share feedback, and chat with the team on Slack.
      </CardBody>
      <Divider />
      <CardFooter>
        <Button component="a" href="https://join.slack.com/t/patternfly/shared_invite/zt-3dcejyvj6-MU93z8IVihJXxbs2ggrMEw" variant="link" target="_blank" isInline icon={<ExternalLinkAltIcon />} iconPosition="end"> Join our Slack workspace </Button>
      </CardFooter>
    </Card>
    <Card isCompact isClickable>
      <CardHeader
              selectableActions={{
                onClickAction: () => window.open("https://www.redhat.com/dynamic-form/instance/934b1674-bc8a-4a13-8c9d-d19abcceb263"),
                selectableActionAriaLabelledby:'email-card'
              }}
            >
        <CardTitle id="email-card" className="pf-v5-u-font-size-l"> Stay up to date </CardTitle>
      </CardHeader>
      <CardBody>
        Receive community meeting reminders and quarterly newsletters via email.
      </CardBody>
      <Divider />
      <CardFooter>
        <Button component="a" href="https://www.redhat.com/dynamic-form/instance/934b1674-bc8a-4a13-8c9d-d19abcceb263" variant="link" target="_blank" isInline icon={<ExternalLinkAltIcon />} iconPosition="end"> Sign up for emails </Button>
      </CardFooter>
    </Card>
    <Card isCompact isClickable>
      <CardHeader
              selectableActions={{
                onClickAction: () => window.open("https://calendar.google.com/calendar/embed?src=patternflyteam%40gmail.com&ctz=America%2FNew_York"),
                selectableActionAriaLabelledby:'calendar-card'
              }}
            >
        <CardTitle id="calendar-card" className="pf-v5-u-font-size-l"> Join our meetings </CardTitle>
      </CardHeader>
      <CardBody>
        Hear updates from the team in our community meetings or get help during office hours. 
      </CardBody>
      <Divider />
      <CardFooter>
       <Button component="a" href="https://calendar.google.com/calendar/embed?src=patternflyteam%40gmail.com&ctz=America%2FNew_York" variant="link" target="_blank" isInline icon={<ExternalLinkAltIcon />} iconPosition="end"> Add our Google calendar </Button>
      </CardFooter>
    </Card>
    <Card isCompact isClickable>
      <CardHeader
              selectableActions={{
                onClickAction: () => window.open("https://medium.com/patternfly"),
                selectableActionAriaLabelledby:'blog-card'
              }}
            >
        <CardTitle id="blog-card" className="pf-v5-u-font-size-l"> Read our blog </CardTitle>
      </CardHeader>
      <CardBody>
        On Medium, we share the stories behind our team's projects and practices. You can even write with us and share your own unique insights and experiences.
      </CardBody>
      <Divider />
      <CardFooter>
        <Button component="a" href="https://medium.com/patternfly" variant="link" target="_blank" isInline icon={<ExternalLinkAltIcon />} iconPosition="end"> Follow us on Medium </Button>
      </CardFooter>
    </Card>
  </Grid>

## Contribute to PatternFly

We rely on community contributions to help our design system grow and evolve. Regardless of your background or experience, we encourage any Flyer to get involved by contributing bug reports, new feature ideas, documentation updates, and more.

### Where do I start? 

A great way to get familiar with our team's processes is to [attend our biweekly office hours](https://calendar.google.com/calendar/embed?src=patternflyteam%40gmail.com&ctz=America%2FNew_York). You can listen in on discussions or sign up for a time to ask questions and chat with the team.

When you're ready to contribute, the best place to start is to tackle a **"good first issue"** in one of the repos outlined in our contribution guides. These are tasks that our team has identified as being well-suited for new community members. 

[View our code of conduct](https://github.com/patternfly/patternfly/blob/main/CODE_OF_CONDUCT.md) and explore our contribution guides:

<Grid sm={12} md={4} hasGutter>
<Button size="lg" variant="secondary" component="a" href="/get-involved/contribute/contribute-code"> Contribute code </Button>
<Button size="lg" variant="secondary" component="a" href="/get-involved/contribute/contribute-designs"> Contribute designs </Button>
<Button size="lg" variant="secondary" component="a" href="/get-involved/contribute/contribute-documentation"> Contribute documentation</Button>
</Grid>

## Explore new communities
Flyers sometimes branch out to build their own groups and projects. While the following communities are separate from PatternFly and not officially supported by our team, we love to see our ecosystem grow.

- **[PatternFly Elements](https://patternflyelements.org):** A community-led project creating web components to use across Red Hat's sites and products. It also offers theming options for your own brand library.

- **[PatternFly Kotlin](https://github.com/patternfly-kotlin/patternfly-kotlin):** A Kotlin implementation of PatternFly based on fritz2, built for Kotlin/JS. This project provides reactive PatternFly components that match the fritz2 API. For a quick overview, refer to [the PatternFly Kotlin showcase](https://patternfly-kotlin.github.io/patternfly-kotlin-showcase/#home).

- **[Ansible Component Guide and Figma Library](https://www.figma.com/design/dOVzoCFCRlPXifj2WstR79/AAP-PF6-Style---Component-Guide?node-id=3-10950&t=PBFhyMs7gUxzGRH2-1):** An additional Figma library built on PatternFly components. It's a rapid prototyping tool for repeatable design patterns, tailored for Ansible but with many components applicable to other products.

- **[PatternFly for Yew](https://github.com/patternfly-yew/patternfly-yew)**: Provides PatternFly components for Yew, a Rust framework for creating web applications with WebAssembly. For a quick demo and starter template, refer to [the PatternFly Yew Quickstart](https://github.com/patternfly-yew/patternfly-yew-quickstart).