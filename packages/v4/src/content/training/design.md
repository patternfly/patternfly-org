---
id: Design
section: training
---

import { Gallery, GalleryItem, Hint, HintTitle, HintBody, HintFooter,Button } from '@patternfly/react-core';
import { TrainingCard } from './trainingCard/trainingCard';
import './design.css'

## Sketch design training

<Hint className="ws-sketch-training-hint">
  <HintTitle>Need to make a Thinkific account?</HintTitle>
  <HintBody>
    The Sketch design training is powered with a tool called Thinkific. You will need to create a free account in order to complete this training.
  </HintBody>
  <HintFooter>
    <Button component="a" href="https://patternflyt-training.thinkific.com/users/sign_up" variant="link" isInline>
      Create a PatternFly Sketch training account now!
    </Button>
  </HintFooter>
</Hint>

<Gallery hasGutter>
  <GalleryItem>
    <TrainingCard
      trainingType="design"
      title="Introduction: Before the workshop"
      level="beginner"
      time="5 minutes"
      description="Set up your design environment with Sketch."
      designUrl="https://patternflyt-training.thinkific.com/courses/take/pf-sketch-e-training/lessons/12824668-video"
    />
  </GalleryItem>
  <GalleryItem>
    <TrainingCard
      trainingType="design"
      title="Topic one: PatternFly philosophy on mockup fidelity"
      level="beginner"
      time="20 minutes"
      description="Learn the types of mockup fidelity as well as pros and cons of each."
      designUrl="https://patternflyt-training.thinkific.com/courses/take/pf-sketch-e-training/lessons/12854000-video"
    />
  </GalleryItem>
  <GalleryItem>
    <TrainingCard
      trainingType="design"
      title="Topic two: Library vs. template"
      level="beginner"
      time="5 minutes"
      description="Learn what the PatternFly Library and the PatternFly Template are and highlight the connections between them."
      designUrl="https://patternflyt-training.thinkific.com/courses/take/pf-sketch-e-training/lessons/12855027-video"
    />
  </GalleryItem>
  <GalleryItem>
    <TrainingCard
      trainingType="design"
      title="Topic three: General Sketch efficiency & proficiency"
      level="beginner"
      time="45 minutes"
      description="Get up to speed with common Sketch shortcuts and skills."
      designUrl="https://patternflyt-training.thinkific.com/courses/take/pf-sketch-e-training/lessons/12855102-video"
    />
  </GalleryItem>
  <GalleryItem>
    <TrainingCard
      trainingType="design"
      title="Topic four: Symbol customization"
      level="intermediate"
      time="20 minutes"
      description="Learn about symbol overrides, what they are, and why they are important."
      designUrl="https://patternflyt-training.thinkific.com/courses/take/pf-sketch-e-training/lessons/12855787-video"
    />
  </GalleryItem>
  <GalleryItem>
    <TrainingCard
      trainingType="design"
      title="Topic five: Spacer system"
      level="intermediate"
      time="25 minutes"
      description="Get familiar with the PatternFly spacing system and explain how it fits into the design kit."
      designUrl="https://patternflyt-training.thinkific.com/courses/take/pf-sketch-e-training/lessons/12856030-video"
    />
  </GalleryItem>
  <GalleryItem>
    <TrainingCard
      trainingType="design"
      title="Topic six: Detaching from the symbol"
      level="advanced"
      time="15 minutes"
      description="Learn when designers should detach from symbols in the PatternFly library and how to retain PatternFly standards when doing so."
      designUrl="https://patternflyt-training.thinkific.com/courses/take/pf-sketch-e-training/lessons/12856104-video"
    />
  </GalleryItem>
  <GalleryItem>
    <TrainingCard
      trainingType="design"
      title="Topic seven: PF4 library upkeep & feedback"
      level="beginner"
      time="10 minutes"
      description="Learn how to stay up to date with design components, how to contribute, and where to ask questions."
      designUrl="https://patternflyt-training.thinkific.com/courses/take/pf-sketch-e-training/lessons/12856217-video"
    />
  </GalleryItem>
</Gallery>
