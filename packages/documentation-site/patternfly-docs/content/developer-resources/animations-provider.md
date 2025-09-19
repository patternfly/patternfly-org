---
id: Animations provider
title: PatternFly animations provider
section: developer-resources
---

# Animations provider

The AnimationsProvider is a React context provider that allows you to configure animation behavior globally across all PatternFly components in your application. This provider gives you centralized control over animations, making it easy to disable them for accessibility purposes or performance optimization.

### Application-level setup

The AnimationsProvider should be placed at the root of your application to provide global animation configuration for all PatternFly components.

```tsx
// App.tsx or index.tsx
import React from 'react';
import { AnimationsProvider } from '@patternfly/react-core';
import { MyApplication } from './MyApplication';

const App: React.FunctionComponent = () => {
  return (
    <AnimationsProvider config={{ hasAnimations: true }}>
      <MyApplication />
    </AnimationsProvider>
  );
};

export default App;
```

<br />

### Basic usage

Wrap your components with the AnimationsProvider to control animations.

```tsx
import React from 'react';
import { AlertGroup, Alert, Button } from '@patternfly/react-core';
import { AnimationsProvider } from '@patternfly/react-core/dist/esm/helpers';

export const AnimationExample: React.FunctionComponent = () => {
  return (
    <AnimationsProvider config={{ hasAnimations: true }}>
      <div>
        <Button>Click me</Button>
        
        {/* All PatternFly components inherit animation settings from provider */}
        <AlertGroup isToast>
          <Alert title="Success notification" variant="success" />
          <Alert title="Info notification" variant="info" />
        </AlertGroup>
      </div>
    </AnimationsProvider>
  );
};
```

<br />

### Override provider with component prop

Individual components can still override the global animation setting when needed.

```tsx
// Disable animations for a specific AlertGroup
<AlertGroup isToast hasAnimations={false}>
  {alerts.map(alert => (
    <Alert key={alert.id} title={alert.title} variant={alert.variant} />
  ))}
</AlertGroup>

// Or wrap specific sections in AnimationsProvider
<AnimationsProvider config={{ hasAnimations: false }}>
  <AlertGroup isToast>
    {criticalAlerts.map(alert => (
      <Alert key={alert.id} title={alert.title} variant={alert.variant} />
    ))}
  </AlertGroup>
</AnimationsProvider>
```

<br />

### Disable animations globally

For accessibility or performance reasons, you can disable animations globally by setting `hasAnimations: false`.

```tsx
// App.tsx - Disable animations for the entire application
import React from 'react';
import { AnimationsProvider } from '@patternfly/react-core';
import { MyApplication } from './MyApplication';

const App: React.FunctionComponent = () => {
  return (
    <AnimationsProvider config={{ hasAnimations: false }}>
      <MyApplication />
    </AnimationsProvider>
  );
};
```

<br />

### Conditional animations based on user preferences

You can integrate with user preferences or system settings to conditionally enable animations.

```tsx
// App.tsx - Respect user's motion preferences
import React from 'react';
import { AnimationsProvider } from '@patternfly/react-core';
import { MyApplication } from './MyApplication';

const App: React.FunctionComponent = () => {
  // Respect user's reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  return (
    <AnimationsProvider config={{ hasAnimations: !prefersReducedMotion }}>
      <MyApplication />
    </AnimationsProvider>
  );
};
```

## Benefits

- **Accessibility**: Easily disable animations for users who prefer reduced motion
- **Performance**: Prevent browser processing overload when multiple animations run simultaneously with demanding tasks
- **Consistency**: Centralized animation control across your entire application
- **Flexibility**: Override global settings on individual components when needed
