---
id: 'Sidebar'
section: components
cssPrefix: pf-v6-c-sidebar
---import './Sidebar.css'

## Examples

### Basic

```html
<div class="pf-v6-c-sidebar">
  <div class="pf-v6-c-sidebar__main">
    <div class="pf-v6-c-sidebar__panel">Sidebar panel</div>
    <div class="pf-v6-c-sidebar__content">
      <div class="pf-v6-c-content">
        <p>Default layout.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dapibus nulla id augue dictum commodo. Donec mollis arcu massa, sollicitudin venenatis est rutrum vitae. Integer pulvinar ligula at augue mollis, ac pulvinar arcu semper. Maecenas nisi lorem, malesuada ac lectus nec, porta pretium neque. Ut convallis libero sit amet metus mattis, vel facilisis lorem malesuada. Duis consectetur ante sit amet magna efficitur, a interdum leo vulputate.</p>
        <p>Praesent at odio nec sapien ultrices tincidunt in non mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis consectetur nisl quis facilisis faucibus. Sed eu bibendum risus. Suspendisse porta euismod tortor, at elementum odio suscipit sed. Cras eget ultrices urna, ac feugiat lectus. Integer a pharetra velit, in imperdiet mi. Phasellus vel hendrerit velit. Vestibulum ut augue vitae erat vulputate bibendum a ut magna.</p>
      </div>
    </div>
  </div>
</div>

```

### With secondary background

```html
<div class="pf-v6-c-sidebar">
  <div class="pf-v6-c-sidebar__main">
    <div class="pf-v6-c-sidebar__panel pf-m-secondary">Sidebar panel</div>
    <div class="pf-v6-c-sidebar__content pf-m-secondary">
      <div class="pf-v6-c-content">
        <p>Default layout.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dapibus nulla id augue dictum commodo. Donec mollis arcu massa, sollicitudin venenatis est rutrum vitae. Integer pulvinar ligula at augue mollis, ac pulvinar arcu semper. Maecenas nisi lorem, malesuada ac lectus nec, porta pretium neque. Ut convallis libero sit amet metus mattis, vel facilisis lorem malesuada. Duis consectetur ante sit amet magna efficitur, a interdum leo vulputate.</p>
        <p>Praesent at odio nec sapien ultrices tincidunt in non mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis consectetur nisl quis facilisis faucibus. Sed eu bibendum risus. Suspendisse porta euismod tortor, at elementum odio suscipit sed. Cras eget ultrices urna, ac feugiat lectus. Integer a pharetra velit, in imperdiet mi. Phasellus vel hendrerit velit. Vestibulum ut augue vitae erat vulputate bibendum a ut magna.</p>
      </div>
    </div>
  </div>
</div>

```

### Gutter

```html
<div class="pf-v6-c-sidebar pf-m-gutter">
  <div class="pf-v6-c-sidebar__main">
    <div
      class="pf-v6-c-sidebar__panel"
    >Sidebar panel. Adding some extra content so that the gap between the panel and content area is better illustrated in this example.</div>
    <div class="pf-v6-c-sidebar__content">
      <div class="pf-v6-c-content">
        <p>Adds a gutter between the panel and content when in the split layout.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dapibus nulla id augue dictum commodo. Donec mollis arcu massa, sollicitudin venenatis est rutrum vitae. Integer pulvinar ligula at augue mollis, ac pulvinar arcu semper. Maecenas nisi lorem, malesuada ac lectus nec, porta pretium neque. Ut convallis libero sit amet metus mattis, vel facilisis lorem malesuada. Duis consectetur ante sit amet magna efficitur, a interdum leo vulputate.</p>
        <p>Praesent at odio nec sapien ultrices tincidunt in non mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis consectetur nisl quis facilisis faucibus. Sed eu bibendum risus. Suspendisse porta euismod tortor, at elementum odio suscipit sed. Cras eget ultrices urna, ac feugiat lectus. Integer a pharetra velit, in imperdiet mi. Phasellus vel hendrerit velit. Vestibulum ut augue vitae erat vulputate bibendum a ut magna.</p>
      </div>
    </div>
  </div>
</div>

```

### Stack

```html
<div class="pf-v6-c-sidebar pf-m-stack">
  <div class="pf-v6-c-sidebar__main">
    <div class="pf-v6-c-sidebar__panel">Sidebar panel</div>
    <div class="pf-v6-c-sidebar__content">
      <div class="pf-v6-c-content">
        <p>Forces a stacked layout.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dapibus nulla id augue dictum commodo. Donec mollis arcu massa, sollicitudin venenatis est rutrum vitae. Integer pulvinar ligula at augue mollis, ac pulvinar arcu semper. Maecenas nisi lorem, malesuada ac lectus nec, porta pretium neque. Ut convallis libero sit amet metus mattis, vel facilisis lorem malesuada. Duis consectetur ante sit amet magna efficitur, a interdum leo vulputate.</p>
        <p>Praesent at odio nec sapien ultrices tincidunt in non mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis consectetur nisl quis facilisis faucibus. Sed eu bibendum risus. Suspendisse porta euismod tortor, at elementum odio suscipit sed. Cras eget ultrices urna, ac feugiat lectus. Integer a pharetra velit, in imperdiet mi. Phasellus vel hendrerit velit. Vestibulum ut augue vitae erat vulputate bibendum a ut magna.</p>
      </div>
    </div>
  </div>
</div>

```

### Split

```html
<div class="pf-v6-c-sidebar pf-m-split">
  <div class="pf-v6-c-sidebar__main">
    <div class="pf-v6-c-sidebar__panel">Sidebar panel</div>
    <div class="pf-v6-c-sidebar__content">
      <div class="pf-v6-c-content">
        <p>Forces a split layout.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dapibus nulla id augue dictum commodo. Donec mollis arcu massa, sollicitudin venenatis est rutrum vitae. Integer pulvinar ligula at augue mollis, ac pulvinar arcu semper. Maecenas nisi lorem, malesuada ac lectus nec, porta pretium neque. Ut convallis libero sit amet metus mattis, vel facilisis lorem malesuada. Duis consectetur ante sit amet magna efficitur, a interdum leo vulputate.</p>
        <p>Praesent at odio nec sapien ultrices tincidunt in non mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis consectetur nisl quis facilisis faucibus. Sed eu bibendum risus. Suspendisse porta euismod tortor, at elementum odio suscipit sed. Cras eget ultrices urna, ac feugiat lectus. Integer a pharetra velit, in imperdiet mi. Phasellus vel hendrerit velit. Vestibulum ut augue vitae erat vulputate bibendum a ut magna.</p>
      </div>
    </div>
  </div>
</div>

```

### Panel right (HTML)

```html
<div class="pf-v6-c-sidebar">
  <div class="pf-v6-c-sidebar__main">
    <div class="pf-v6-c-sidebar__content">
      <div class="pf-v6-c-content">
        <p>Moves the panel to the right by placing the panel after the content in the HTML.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dapibus nulla id augue dictum commodo. Donec mollis arcu massa, sollicitudin venenatis est rutrum vitae. Integer pulvinar ligula at augue mollis, ac pulvinar arcu semper. Maecenas nisi lorem, malesuada ac lectus nec, porta pretium neque. Ut convallis libero sit amet metus mattis, vel facilisis lorem malesuada. Duis consectetur ante sit amet magna efficitur, a interdum leo vulputate.</p>
        <p>Praesent at odio nec sapien ultrices tincidunt in non mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis consectetur nisl quis facilisis faucibus. Sed eu bibendum risus. Suspendisse porta euismod tortor, at elementum odio suscipit sed. Cras eget ultrices urna, ac feugiat lectus. Integer a pharetra velit, in imperdiet mi. Phasellus vel hendrerit velit. Vestibulum ut augue vitae erat vulputate bibendum a ut magna.</p>
      </div>
    </div>
    <div class="pf-v6-c-sidebar__panel">Sidebar panel</div>
  </div>
</div>

```

### Panel right (modifier)

```html
<div class="pf-v6-c-sidebar pf-m-panel-right">
  <div class="pf-v6-c-sidebar__main">
    <div class="pf-v6-c-sidebar__panel">Sidebar panel</div>
    <div class="pf-v6-c-sidebar__content">
      <div class="pf-v6-c-content">
        <p>
          Moves the panel to the right via the modifier class
          <b>.pf-m-panel-right</b>&nbsp;on the sidebar component.
        </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dapibus nulla id augue dictum commodo. Donec mollis arcu massa, sollicitudin venenatis est rutrum vitae. Integer pulvinar ligula at augue mollis, ac pulvinar arcu semper. Maecenas nisi lorem, malesuada ac lectus nec, porta pretium neque. Ut convallis libero sit amet metus mattis, vel facilisis lorem malesuada. Duis consectetur ante sit amet magna efficitur, a interdum leo vulputate.</p>
        <p>Praesent at odio nec sapien ultrices tincidunt in non mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis consectetur nisl quis facilisis faucibus. Sed eu bibendum risus. Suspendisse porta euismod tortor, at elementum odio suscipit sed. Cras eget ultrices urna, ac feugiat lectus. Integer a pharetra velit, in imperdiet mi. Phasellus vel hendrerit velit. Vestibulum ut augue vitae erat vulputate bibendum a ut magna.</p>
      </div>
    </div>
  </div>
</div>

```

### Sticky panel

```html
<div class="pf-v6-c-sidebar" tabindex="0">
  <div class="pf-v6-c-sidebar__main">
    <div class="pf-v6-c-sidebar__panel pf-m-sticky">Sidebar panel</div>
    <div class="pf-v6-c-sidebar__content">
      <div class="pf-v6-c-content">
        <p>Forces the panel to be sticky to the top of the layout.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dapibus nulla id augue dictum commodo. Donec mollis arcu massa, sollicitudin venenatis est rutrum vitae. Integer pulvinar ligula at augue mollis, ac pulvinar arcu semper. Maecenas nisi lorem, malesuada ac lectus nec, porta pretium neque. Ut convallis libero sit amet metus mattis, vel facilisis lorem malesuada. Duis consectetur ante sit amet magna efficitur, a interdum leo vulputate.</p>
        <p>Praesent at odio nec sapien ultrices tincidunt in non mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis consectetur nisl quis facilisis faucibus. Sed eu bibendum risus. Suspendisse porta euismod tortor, at elementum odio suscipit sed. Cras eget ultrices urna, ac feugiat lectus. Integer a pharetra velit, in imperdiet mi. Phasellus vel hendrerit velit. Vestibulum ut augue vitae erat vulputate bibendum a ut magna.</p>
      </div>
    </div>
  </div>
</div>

```

### Static panel

```html
<div class="pf-v6-c-sidebar" tabindex="0">
  <div class="pf-v6-c-sidebar__main">
    <div class="pf-v6-c-sidebar__panel pf-m-static">Sidebar panel</div>
    <div class="pf-v6-c-sidebar__content">
      <div class="pf-v6-c-content">
        <p>Forces the panel to be statically positioned (not sticky).</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dapibus nulla id augue dictum commodo. Donec mollis arcu massa, sollicitudin venenatis est rutrum vitae. Integer pulvinar ligula at augue mollis, ac pulvinar arcu semper. Maecenas nisi lorem, malesuada ac lectus nec, porta pretium neque. Ut convallis libero sit amet metus mattis, vel facilisis lorem malesuada. Duis consectetur ante sit amet magna efficitur, a interdum leo vulputate.</p>
        <p>Praesent at odio nec sapien ultrices tincidunt in non mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis consectetur nisl quis facilisis faucibus. Sed eu bibendum risus. Suspendisse porta euismod tortor, at elementum odio suscipit sed. Cras eget ultrices urna, ac feugiat lectus. Integer a pharetra velit, in imperdiet mi. Phasellus vel hendrerit velit. Vestibulum ut augue vitae erat vulputate bibendum a ut magna.</p>
      </div>
    </div>
  </div>
</div>

```

### Responsive panel width

```html
<div class="pf-v6-c-sidebar" tabindex="0">
  <div class="pf-v6-c-sidebar__main">
    <div
      class="pf-v6-c-sidebar__panel pf-m-sticky pf-m-width-50 pf-m-width-33-on-lg pf-m-width-75-on-xl"
    >Sidebar panel</div>
    <div class="pf-v6-c-sidebar__content">
      <div class="pf-v6-c-content">
        <p>Changes the panel with and can change responsively at different breakpoints.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dapibus nulla id augue dictum commodo. Donec mollis arcu massa, sollicitudin venenatis est rutrum vitae. Integer pulvinar ligula at augue mollis, ac pulvinar arcu semper. Maecenas nisi lorem, malesuada ac lectus nec, porta pretium neque. Ut convallis libero sit amet metus mattis, vel facilisis lorem malesuada. Duis consectetur ante sit amet magna efficitur, a interdum leo vulputate.</p>
        <p>Praesent at odio nec sapien ultrices tincidunt in non mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis consectetur nisl quis facilisis faucibus. Sed eu bibendum risus. Suspendisse porta euismod tortor, at elementum odio suscipit sed. Cras eget ultrices urna, ac feugiat lectus. Integer a pharetra velit, in imperdiet mi. Phasellus vel hendrerit velit. Vestibulum ut augue vitae erat vulputate bibendum a ut magna.</p>
      </div>
    </div>
  </div>
</div>

```

### Border

```html
<div class="pf-v6-c-sidebar pf-m-gutter">
  <div class="pf-v6-c-sidebar__main pf-m-border">
    <div class="pf-v6-c-sidebar__panel">Sidebar panel</div>
    <div class="pf-v6-c-sidebar__content">
      <div class="pf-v6-c-content">
        <p>Default layout.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dapibus nulla id augue dictum commodo. Donec mollis arcu massa, sollicitudin venenatis est rutrum vitae. Integer pulvinar ligula at augue mollis, ac pulvinar arcu semper. Maecenas nisi lorem, malesuada ac lectus nec, porta pretium neque. Ut convallis libero sit amet metus mattis, vel facilisis lorem malesuada. Duis consectetur ante sit amet magna efficitur, a interdum leo vulputate.</p>
        <p>Praesent at odio nec sapien ultrices tincidunt in non mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis consectetur nisl quis facilisis faucibus. Sed eu bibendum risus. Suspendisse porta euismod tortor, at elementum odio suscipit sed. Cras eget ultrices urna, ac feugiat lectus. Integer a pharetra velit, in imperdiet mi. Phasellus vel hendrerit velit. Vestibulum ut augue vitae erat vulputate bibendum a ut magna.</p>
      </div>
    </div>
  </div>
</div>

```

### Padding on panel

```html
<div class="pf-v6-c-sidebar">
  <div class="pf-v6-c-sidebar__main">
    <div class="pf-v6-c-sidebar__panel pf-m-padding">Sidebar panel, with padding</div>
    <div class="pf-v6-c-sidebar__content">
      <div class="pf-v6-c-content">
        <p>Default layout.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dapibus nulla id augue dictum commodo. Donec mollis arcu massa, sollicitudin venenatis est rutrum vitae. Integer pulvinar ligula at augue mollis, ac pulvinar arcu semper. Maecenas nisi lorem, malesuada ac lectus nec, porta pretium neque. Ut convallis libero sit amet metus mattis, vel facilisis lorem malesuada. Duis consectetur ante sit amet magna efficitur, a interdum leo vulputate.</p>
        <p>Praesent at odio nec sapien ultrices tincidunt in non mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis consectetur nisl quis facilisis faucibus. Sed eu bibendum risus. Suspendisse porta euismod tortor, at elementum odio suscipit sed. Cras eget ultrices urna, ac feugiat lectus. Integer a pharetra velit, in imperdiet mi. Phasellus vel hendrerit velit. Vestibulum ut augue vitae erat vulputate bibendum a ut magna.</p>
      </div>
    </div>
  </div>
</div>

```

### Padding on content

```html
<div class="pf-v6-c-sidebar">
  <div class="pf-v6-c-sidebar__main">
    <div class="pf-v6-c-sidebar__panel">Sidebar panel</div>
    <div class="pf-v6-c-sidebar__content pf-m-padding">
      <div class="pf-v6-c-content">
        <p>Sidebar content, with padding</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dapibus nulla id augue dictum commodo. Donec mollis arcu massa, sollicitudin venenatis est rutrum vitae. Integer pulvinar ligula at augue mollis, ac pulvinar arcu semper. Maecenas nisi lorem, malesuada ac lectus nec, porta pretium neque. Ut convallis libero sit amet metus mattis, vel facilisis lorem malesuada. Duis consectetur ante sit amet magna efficitur, a interdum leo vulputate.</p>
        <p>Praesent at odio nec sapien ultrices tincidunt in non mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis consectetur nisl quis facilisis faucibus. Sed eu bibendum risus. Suspendisse porta euismod tortor, at elementum odio suscipit sed. Cras eget ultrices urna, ac feugiat lectus. Integer a pharetra velit, in imperdiet mi. Phasellus vel hendrerit velit. Vestibulum ut augue vitae erat vulputate bibendum a ut magna.</p>
      </div>
    </div>
  </div>
</div>

```

## Documentation

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-sidebar` | `<div>` | Initiates the sidebar component. **Required** |
| `.pf-v6-c-sidebar__main` | `<div>` | Initiates the sidebar main element. **Required** |
| `.pf-v6-c-sidebar__panel` | `<div>` | Initiates the sidebar panel element. **Required** |
| `.pf-v6-c-sidebar__content` | `<div>` | Initiates the sidebar content element. **Required** |
| `.pf-m-border` | `.pf-v6-c-sidebar__main` | Modifies the sidebar component to add a border between the panel and content. |
| `.pf-m-padding` | `.pf-v6-c-sidebar__panel`, `.pf-v6-c-sidebar__content` | Modifies the sidebar component to add a padding to panel and/or content. |
| `.pf-m-gutter` | `.pf-v6-c-sidebar` | Modifies the sidebar component to add a gutter between the panel and content. |
| `.pf-m-stack` | `.pf-v6-c-sidebar` | Modifies the sidebar to stack the panel on top of the content. |
| `.pf-m-split` | `.pf-v6-c-sidebar` | Modifies the sidebar to position the panel and content side by side. |
| `.pf-m-panel-right` | `.pf-v6-c-sidebar` | Modifies the sidebar to place the panel to the right of the content. |
| `.pf-m-sticky` | `.pf-v6-c-sidebar__panel` | Modifies the panel to be sticky to the top of the layout. |
| `.pf-m-static` | `.pf-v6-c-sidebar__panel` | Modifies the panel to be positioned statically. |
| `.pf-m-width-{default, 25, 33, 50, 66, 75, 100}{-on-[breakpoint]}` | `.pf-v6-c-sidebar__panel` | Modifies the panel width at optional [breakpoint](/tokens/all-patternfly-tokens). **Note:** does not apply when the panel is stacked on top of the content. |
| `.pf-m-no-background` | `.pf-v6-c-sidebar`, `.pf-v6-c-sidebar__panel, .pf-v6-c-sidebar__content` | Modifies the element to have a transparent background. |
| `.pf-m-secondary` | `.pf-v6-c-sidebar__panel, .pf-v6-c-sidebar__content` | Modifies the element to have secondary styling. |
