---
id: 'Description list'
section: components
cssPrefix: pf-v6-c-description-list
---## Examples

### Default

```html
<dl class="pf-v6-c-description-list" aria-label="Default example">
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Name</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Namespace</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">
        <a href="#">mary-test</a>
      </div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Labels</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Pod selector</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">
        <button class="pf-v6-c-button pf-m-inline pf-m-link" type="button">
          <span class="pf-v6-c-button__icon pf-m-start">
            <i class="fas fa-plus-circle" aria-hidden="true"></i>
          </span>
          <span class="pf-v6-c-button__text">app=MyApp</span>
        </button>
      </div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Annotation</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">2 Annotations</div>
    </dd>
  </div>
</dl>

```

### Term help text

```html
<dl class="pf-v6-c-description-list" aria-label="Term help text example">
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span
        class="pf-v6-c-description-list__text pf-m-help-text"
        role="button"
        type="button"
        tabindex="0"
      >Name</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span
        class="pf-v6-c-description-list__text pf-m-help-text"
        role="button"
        type="button"
        tabindex="0"
      >Namespace</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">
        <a href="#">mary-test</a>
      </div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span
        class="pf-v6-c-description-list__text pf-m-help-text"
        role="button"
        type="button"
        tabindex="0"
      >Labels</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span
        class="pf-v6-c-description-list__text pf-m-help-text"
        role="button"
        type="button"
        tabindex="0"
      >Pod selector</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">
        <button class="pf-v6-c-button pf-m-inline pf-m-link" type="button">
          <span class="pf-v6-c-button__icon pf-m-start">
            <i class="fas fa-plus-circle" aria-hidden="true"></i>
          </span>
          <span class="pf-v6-c-button__text">app=MyApp</span>
        </button>
      </div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span
        class="pf-v6-c-description-list__text pf-m-help-text"
        role="button"
        type="button"
        tabindex="0"
      >Annotation</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">2 Annotations</div>
    </dd>
  </div>
</dl>

```

### Default, two column

```html
<dl
  class="pf-v6-c-description-list pf-m-2-col"
  aria-label="Default, two column example"
>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Name</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div
        class="pf-v6-c-description-list__text"
      >This is a long description that should wrap to multiple lines in a multi-column layout.</div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Namespace</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">
        <a href="#">mary-test</a>
      </div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Labels</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Pod selector</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">
        <button class="pf-v6-c-button pf-m-inline pf-m-link" type="button">
          <span class="pf-v6-c-button__icon pf-m-start">
            <i class="fas fa-plus-circle" aria-hidden="true"></i>
          </span>
          <span class="pf-v6-c-button__text">app=MyApp</span>
        </button>
      </div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Annotation</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">2 Annotations</div>
    </dd>
  </div>
</dl>

```

### Default, three column on lg breakpoint

```html
<dl
  class="pf-v6-c-description-list pf-m-3-col-on-lg"
  aria-label="Default, three column on lg breakpoint example"
>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Name</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Namespace</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">
        <a href="#">mary-test</a>
      </div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Labels</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Pod selector</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">
        <button class="pf-v6-c-button pf-m-inline pf-m-link" type="button">
          <span class="pf-v6-c-button__icon pf-m-start">
            <i class="fas fa-plus-circle" aria-hidden="true"></i>
          </span>
          <span class="pf-v6-c-button__text">app=MyApp</span>
        </button>
      </div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Annotation</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">2 Annotations</div>
    </dd>
  </div>
</dl>

```

### Horizontal

```html
<dl
  class="pf-v6-c-description-list pf-m-horizontal"
  aria-label="Horizontal example"
>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Name</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Namespace</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">
        <a href="#">mary-test</a>
      </div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Labels</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Pod selector</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">
        <button class="pf-v6-c-button pf-m-inline pf-m-link" type="button">
          <span class="pf-v6-c-button__icon pf-m-start">
            <i class="fas fa-plus-circle" aria-hidden="true"></i>
          </span>
          <span class="pf-v6-c-button__text">app=MyApp</span>
        </button>
      </div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Annotation</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">2 Annotations</div>
    </dd>
  </div>
</dl>

```

### Horizontal, two column

```html
<dl
  class="pf-v6-c-description-list pf-m-horizontal pf-m-2-col"
  aria-label="Horizontal, two column example"
>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Name</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Namespace</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">
        <a href="#">mary-test</a>
      </div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Labels</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Pod selector</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">
        <button class="pf-v6-c-button pf-m-inline pf-m-link" type="button">
          <span class="pf-v6-c-button__icon pf-m-start">
            <i class="fas fa-plus-circle" aria-hidden="true"></i>
          </span>
          <span class="pf-v6-c-button__text">app=MyApp</span>
        </button>
      </div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Annotation</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">2 Annotations</div>
    </dd>
  </div>
</dl>

```

### Horizontal, three column on lg breakpoint

```html
<dl
  class="pf-v6-c-description-list pf-m-horizontal pf-m-3-col-on-lg"
  aria-label="Horizontal, three column on lg breakpoint example"
>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Name</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Namespace</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">
        <a href="#">mary-test</a>
      </div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Labels</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Pod selector</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">
        <button class="pf-v6-c-button pf-m-inline pf-m-link" type="button">
          <span class="pf-v6-c-button__icon pf-m-start">
            <i class="fas fa-plus-circle" aria-hidden="true"></i>
          </span>
          <span class="pf-v6-c-button__text">app=MyApp</span>
        </button>
      </div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Annotation</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">2 Annotations</div>
    </dd>
  </div>
</dl>

```

### Compact

```html
<dl class="pf-v6-c-description-list pf-m-compact" aria-label="Compact example">
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Name</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Namespace</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">
        <a href="#">mary-test</a>
      </div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Labels</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Pod selector</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">
        <button class="pf-v6-c-button pf-m-inline pf-m-link" type="button">
          <span class="pf-v6-c-button__icon pf-m-start">
            <i class="fas fa-plus-circle" aria-hidden="true"></i>
          </span>
          <span class="pf-v6-c-button__text">app=MyApp</span>
        </button>
      </div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Annotation</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">2 Annotations</div>
    </dd>
  </div>
</dl>

```

### Compact horizontal

```html
<dl
  class="pf-v6-c-description-list pf-m-compact pf-m-horizontal pf-m-2-col"
  aria-label="Compact horizontal example"
>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Name</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Namespace</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">
        <a href="#">mary-test</a>
      </div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Labels</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Pod selector</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">
        <button class="pf-v6-c-button pf-m-inline pf-m-link" type="button">
          <span class="pf-v6-c-button__icon pf-m-start">
            <i class="fas fa-plus-circle" aria-hidden="true"></i>
          </span>
          <span class="pf-v6-c-button__text">app=MyApp</span>
        </button>
      </div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Annotation</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">2 Annotations</div>
    </dd>
  </div>
</dl>

```

### Fluid horizontal

```html
<dl
  class="pf-v6-c-description-list pf-m-horizontal pf-m-fluid pf-m-2-col"
  aria-label="Fluid horizontal example"
>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Name</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Namespace</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">
        <a href="#">mary-test</a>
      </div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Labels</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Pod selector</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">
        <button class="pf-v6-c-button pf-m-inline pf-m-link" type="button">
          <span class="pf-v6-c-button__icon pf-m-start">
            <i class="fas fa-plus-circle" aria-hidden="true"></i>
          </span>
          <span class="pf-v6-c-button__text">app=MyApp</span>
        </button>
      </div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Annotation</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">2 Annotations</div>
    </dd>
  </div>
</dl>

```

### Column fill

Column fill will modify the default placement of description list groups to fill from top to bottom using css column-count, instead of left to right. **Note:** using this modifier will change the layout so that horizontally adjacent groups are no longer aligned in the same row.

```html
<dl
  class="pf-v6-c-description-list pf-m-fill-columns pf-m-2-col pf-m-3-col-on-lg"
  aria-label="Column fill example"
>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Name</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div
        class="pf-v6-c-description-list__text"
      >This is a long description that should wrap to multiple lines in a multi-column layout.</div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Namespace</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">
        <a href="#">mary-test</a>
      </div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Labels</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Pod selector</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">
        <button class="pf-v6-c-button pf-m-inline pf-m-link" type="button">
          <span class="pf-v6-c-button__icon pf-m-start">
            <i class="fas fa-plus-circle" aria-hidden="true"></i>
          </span>
          <span class="pf-v6-c-button__text">app=MyApp</span>
        </button>
      </div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Annotation</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">2 Annotations</div>
    </dd>
  </div>
</dl>

```

## Auto fit

### Auto-fit basic

```html
<dl
  class="pf-v6-c-description-list pf-m-auto-fit"
  aria-label="Auto-fit basic example"
>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Name</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Namespace</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">
        <a href="#">mary-test</a>
      </div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Labels</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Pod selector</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">
        <button class="pf-v6-c-button pf-m-inline pf-m-link" type="button">
          <span class="pf-v6-c-button__icon pf-m-start">
            <i class="fas fa-plus-circle" aria-hidden="true"></i>
          </span>
          <span class="pf-v6-c-button__text">app=MyApp</span>
        </button>
      </div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Annotation</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">2 Annotations</div>
    </dd>
  </div>
</dl>

```

### Auto-fit, min width modified, grid template columns

```html
<dl
  class="pf-v6-c-description-list pf-m-auto-fit"
  aria-label="Auto-fit, min width modified, grid template columns example"
  style="--pf-v6-c-description-list--GridTemplateColumns--min: 200px;"
>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Name</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Namespace</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">
        <a href="#">mary-test</a>
      </div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Labels</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Pod selector</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">
        <button class="pf-v6-c-button pf-m-inline pf-m-link" type="button">
          <span class="pf-v6-c-button__icon pf-m-start">
            <i class="fas fa-plus-circle" aria-hidden="true"></i>
          </span>
          <span class="pf-v6-c-button__text">app=MyApp</span>
        </button>
      </div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Annotation</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">2 Annotations</div>
    </dd>
  </div>
</dl>

```

### Auto-fit, min width modified, responsive grid template columns

```html
<dl
  class="pf-v6-c-description-list pf-m-auto-fit"
  aria-label="Auto-fit, min width modified, responsive grid template columns example"
  style="--pf-v6-c-description-list--GridTemplateColumns--min-on-md: 100px; --pf-v6-c-description-list--GridTemplateColumns--min-on-lg: 150px; --pf-v6-c-description-list--GridTemplateColumns--min-on-xl: 200px; --pf-v6-c-description-list--GridTemplateColumns--min-on-2xl: 300px;"
>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Name</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Namespace</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">
        <a href="#">mary-test</a>
      </div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Labels</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Pod selector</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">
        <button class="pf-v6-c-button pf-m-inline pf-m-link" type="button">
          <span class="pf-v6-c-button__icon pf-m-start">
            <i class="fas fa-plus-circle" aria-hidden="true"></i>
          </span>
          <span class="pf-v6-c-button__text">app=MyApp</span>
        </button>
      </div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Annotation</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">2 Annotations</div>
    </dd>
  </div>
</dl>

```

## Responsive column definitions

### Default, responsive columns

```html
<dl
  class="pf-v6-c-description-list pf-m-2-col-on-lg pf-m-3-col-on-xl"
  aria-label="Default, responsive columns example"
>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Name</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Namespace</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">
        <a href="#">mary-test</a>
      </div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Labels</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Pod selector</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">
        <button class="pf-v6-c-button pf-m-inline pf-m-link" type="button">
          <span class="pf-v6-c-button__icon pf-m-start">
            <i class="fas fa-plus-circle" aria-hidden="true"></i>
          </span>
          <span class="pf-v6-c-button__text">app=MyApp</span>
        </button>
      </div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Annotation</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">2 Annotations</div>
    </dd>
  </div>
</dl>

```

### Horizontal, responsive columns

```html
<dl
  class="pf-v6-c-description-list pf-m-horizontal pf-m-2-col-on-lg pf-m-3-col-on-xl"
  aria-label="Horizontal, responsive columns example"
>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Name</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Namespace</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">
        <a href="#">mary-test</a>
      </div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Labels</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Pod selector</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">
        <button class="pf-v6-c-button pf-m-inline pf-m-link" type="button">
          <span class="pf-v6-c-button__icon pf-m-start">
            <i class="fas fa-plus-circle" aria-hidden="true"></i>
          </span>
          <span class="pf-v6-c-button__text">app=MyApp</span>
        </button>
      </div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Annotation</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">2 Annotations</div>
    </dd>
  </div>
</dl>

```

### Responsive, horizontal, vertical group layout

```html
<dl
  class="pf-v6-c-description-list pf-m-horizontal pf-m-vertical-on-md pf-m-horizontal-on-lg pf-m-vertical-on-xl pf-m-horizontal-on-2xl"
  aria-label="Responsive, horizontal, vertical group layout example"
>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Name</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Namespace</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">
        <a href="#">mary-test</a>
      </div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Labels</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Pod selector</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">
        <button class="pf-v6-c-button pf-m-inline pf-m-link" type="button">
          <span class="pf-v6-c-button__icon pf-m-start">
            <i class="fas fa-plus-circle" aria-hidden="true"></i>
          </span>
          <span class="pf-v6-c-button__text">app=MyApp</span>
        </button>
      </div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Annotation</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">2 Annotations</div>
    </dd>
  </div>
</dl>

```

## Auto-column-width

### Default, auto columns width

```html
<dl
  class="pf-v6-c-description-list pf-m-auto-column-widths pf-m-3-col"
  aria-label="Default, auto columns width example"
>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Name</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Namespace</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">
        <a href="#">mary-test</a>
      </div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Labels</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Pod selector</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">
        <button class="pf-v6-c-button pf-m-inline pf-m-link" type="button">
          <span class="pf-v6-c-button__icon pf-m-start">
            <i class="fas fa-plus-circle" aria-hidden="true"></i>
          </span>
          <span class="pf-v6-c-button__text">app=MyApp</span>
        </button>
      </div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Annotation</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">2 Annotations</div>
    </dd>
  </div>
</dl>

```

### Horizontal, auto column width

```html
<dl
  class="pf-v6-c-description-list pf-m-horizontal pf-m-auto-column-widths pf-m-2-col-on-lg"
  aria-label="Horizontal, auto column width example"
>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Name</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Namespace</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">
        <a href="#">mary-test</a>
      </div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Labels</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Pod selector</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">
        <button class="pf-v6-c-button pf-m-inline pf-m-link" type="button">
          <span class="pf-v6-c-button__icon pf-m-start">
            <i class="fas fa-plus-circle" aria-hidden="true"></i>
          </span>
          <span class="pf-v6-c-button__text">app=MyApp</span>
        </button>
      </div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Annotation</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">2 Annotations</div>
    </dd>
  </div>
</dl>

```

## Inline grid

### Default, inline grid

```html
<dl
  class="pf-v6-c-description-list pf-m-3-col pf-m-inline-grid"
  aria-label="Default, inline grid example"
>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Name</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Namespace</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">
        <a href="#">mary-test</a>
      </div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Labels</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Pod selector</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">
        <button class="pf-v6-c-button pf-m-inline pf-m-link" type="button">
          <span class="pf-v6-c-button__icon pf-m-start">
            <i class="fas fa-plus-circle" aria-hidden="true"></i>
          </span>
          <span class="pf-v6-c-button__text">app=MyApp</span>
        </button>
      </div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Annotation</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">2 Annotations</div>
    </dd>
  </div>
</dl>

```

### Display variant

```html
<dl
  class="pf-v6-c-description-list pf-m-display-lg pf-m-2-col-on-lg"
  aria-label="Display variant example"
>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Name</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Namespace</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">
        <a href="#">mary-test</a>
      </div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Labels</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Pod selector</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">
        <button class="pf-v6-c-button pf-m-inline pf-m-link" type="button">
          <span class="pf-v6-c-button__icon pf-m-start">
            <i class="fas fa-plus-circle" aria-hidden="true"></i>
          </span>
          <span class="pf-v6-c-button__text">app=MyApp</span>
        </button>
      </div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Annotation</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">2 Annotations</div>
    </dd>
  </div>
</dl>

```

## Card variants

Cards can be used as description list group wrappers. Using cards in this way applies the card body padding directly to the card and enables the use of card modifiers within description list groups.

### Description list group wrapper as card

```html
<dl
  class="pf-v6-c-description-list pf-m-2-col-on-lg"
  aria-label="Description list group wrapper as card example"
>
  <div class="pf-v6-c-card">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Name</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-v6-c-card">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Namespace</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">
        <a href="#">mary-test</a>
      </div>
    </dd>
  </div>
  <div class="pf-v6-c-card">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Labels</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-v6-c-card">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Pod selector</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">
        <button class="pf-v6-c-button pf-m-inline pf-m-link" type="button">
          <span class="pf-v6-c-button__icon pf-m-start">
            <i class="fas fa-plus-circle" aria-hidden="true"></i>
          </span>
          <span class="pf-v6-c-button__text">app=MyApp</span>
        </button>
      </div>
    </dd>
  </div>
  <div class="pf-v6-c-card">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Annotation</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">2 Annotations</div>
    </dd>
  </div>
</dl>

```

### Display lg and card variant

```html
<dl
  class="pf-v6-c-description-list pf-m-display-lg pf-m-2-col-on-lg"
  aria-label="Display lg and card variant example"
>
  <div class="pf-v6-c-card">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Name</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-v6-c-card">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Namespace</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">
        <a href="#">mary-test</a>
      </div>
    </dd>
  </div>
  <div class="pf-v6-c-card">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Labels</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-v6-c-card">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Pod selector</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">
        <button class="pf-v6-c-button pf-m-inline pf-m-link" type="button">
          <span class="pf-v6-c-button__icon pf-m-start">
            <i class="fas fa-plus-circle" aria-hidden="true"></i>
          </span>
          <span class="pf-v6-c-button__text">app=MyApp</span>
        </button>
      </div>
    </dd>
  </div>
  <div class="pf-v6-c-card">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Annotation</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">2 Annotations</div>
    </dd>
  </div>
</dl>

```

### Display 2xl and card variant

```html
<dl
  class="pf-v6-c-description-list pf-m-display-2xl pf-m-2-col-on-lg"
  aria-label="Display 2xl and card variant example"
>
  <div class="pf-v6-c-card">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Name</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-v6-c-card">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Namespace</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">
        <a href="#">mary-test</a>
      </div>
    </dd>
  </div>
  <div class="pf-v6-c-card">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Labels</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-v6-c-card">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Pod selector</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">
        <button class="pf-v6-c-button pf-m-inline pf-m-link" type="button">
          <span class="pf-v6-c-button__icon pf-m-start">
            <i class="fas fa-plus-circle" aria-hidden="true"></i>
          </span>
          <span class="pf-v6-c-button__text">app=MyApp</span>
        </button>
      </div>
    </dd>
  </div>
  <div class="pf-v6-c-card">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Annotation</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">2 Annotations</div>
    </dd>
  </div>
</dl>

```

### Display and card variant, three column on lg breakpoint

```html
<dl
  class="pf-v6-c-description-list pf-m-3-col-on-lg pf-m-display-lg"
  aria-label="Display and card variant, three column on lg breakpoint example"
>
  <div class="pf-v6-c-card">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Name</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-v6-c-card">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Namespace</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">
        <a href="#">mary-test</a>
      </div>
    </dd>
  </div>
  <div class="pf-v6-c-card">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Labels</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">example</div>
    </dd>
  </div>
</dl>

```

### Display and card variant, horizontal, modified term width

```html
<dl
  class="pf-v6-c-description-list pf-m-2-col-on-lg pf-m-display-lg pf-m-horizontal"
  aria-label="Display and card variant, horizontal, modified term width example"
  style="--pf-v6-c-description-list__term--width: 10ch;"
>
  <div class="pf-v6-c-card">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Name</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-v6-c-card">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Namespace</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">
        <a href="#">mary-test</a>
      </div>
    </dd>
  </div>
  <div class="pf-v6-c-card">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__text">Labels</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">example</div>
    </dd>
  </div>
</dl>

```

<!-- ## Auto term with is only supported in FF currently

### Horizontal 2 col auto term width
```hbs
{{> description-list__example 
description-list--aria-label="Horizontal 2 column auto term width example" description-list--modifier="pf-m-horizontal pf-m-auto-term-widths pf-m-2-col"}}
``` -->

## With icons

### Icons on terms

```html
<dl class="pf-v6-c-description-list" aria-label="Icons on terms example">
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__term-icon">
        <i class="fas fa-cube" aria-hidden="true"></i>
      </span>
      <span
        class="pf-v6-c-description-list__text"
      >This is a long description that should wrap to multiple lines in cases where the viewport is quite narrow.</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__term-icon">
        <i class="fas fa-book" aria-hidden="true"></i>
      </span>
      <span class="pf-v6-c-description-list__text">Namespace</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">
        <a href="#">mary-test</a>
      </div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__term-icon">
        <i class="fas fa-key" aria-hidden="true"></i>
      </span>
      <span class="pf-v6-c-description-list__text">Labels</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">example</div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__term-icon">
        <i class="fas fa-globe" aria-hidden="true"></i>
      </span>
      <span class="pf-v6-c-description-list__text">Pod selector</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">
        <button class="pf-v6-c-button pf-m-inline pf-m-link" type="button">
          <span class="pf-v6-c-button__icon pf-m-start">
            <i class="fas fa-plus-circle" aria-hidden="true"></i>
          </span>
          <span class="pf-v6-c-button__text">app=MyApp</span>
        </button>
      </div>
    </dd>
  </div>
  <div class="pf-v6-c-description-list__group">
    <dt class="pf-v6-c-description-list__term">
      <span class="pf-v6-c-description-list__term-icon">
        <i class="fas fa-flag" aria-hidden="true"></i>
      </span>
      <span class="pf-v6-c-description-list__text">Annotation</span>
    </dt>
    <dd class="pf-v6-c-description-list__description">
      <div class="pf-v6-c-description-list__text">2 Annotations</div>
    </dd>
  </div>
</dl>

```

## Documentation

### Accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-label` | `.pf-v6-c-description-list` | Provides an accessible title for the description list. **Required** |
| `tabindex="0"` | `.pf-v6-c-description-list__text.pf-m-help-text` | Inserts the `.pf-v6-c-description-list__text` into the tab order of the page so that it is focusable. **Required when the element is clickable** |

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-description-list` | `<dl>` | Initiates the description list component. **Required** |
| `.pf-v6-c-description-list__group` | `<div>` | Initiates a description list component group. **Required** |
| `.pf-v6-c-description-list__term` | `<dt>` | Initiates a description list component term. **Required** |
| `.pf-v6-c-description-list__description` | `<dd>` | Initiates a description list component description. **Required** |
| `.pf-v6-c-description-list__text` | `<span>`, `<div>` | Initiates a description list component text element. Use a `<span>` when a child of `.pf-v6-c-description-list__term`. **Required** |
| `.pf-v6-c-description-list__term-icon` | `<span>` | Initiates a description list component term icon element. |
| `.pf-m-compact` | `.pf-v6-c-description-list` | Modifies the description list for compact horizontal and vertical spacing. |
| `.pf-m-display-lg` | `.pf-v6-c-description-list` | Modifies the description list to have large display styling. |
| `.pf-m-display-2xl` | `.pf-v6-c-description-list` | Modifies the description list to have 2xl display styling. |
| `.pf-m-fluid` | `.pf-v6-c-description-list.pf-m-horizontal` | Modifies the description list term width to be fluid. |
| `.pf-m-help-text` | `.pf-v6-c-description-list__text` | Indicates there is more information available for the description list component term text. |
| `.pf-m-horizontal{-on-[sm, md, lg, xl, 2xl]}` | `.pf-v6-c-description-list` | Modifies the description list component term and description pair to a horizontal layout. |
| `.pf-m-vertical{-on-[sm, md, lg, xl, 2xl]}` | `.pf-v6-c-description-list` | Modifies the description list component term and description pair to a vertical layout. |
| `.pf-m-fill-columns` | `.pf-v6-c-description-list` | Modifies the description list groups to fill columns from top to bottom, instead of rows from left to right. |
| `.pf-m-auto-column-widths` | `.pf-v6-c-description-list` | Modifies the description list to format automatically. |
| `.pf-m-inline-grid` | `.pf-v6-c-description-list` | Modifies the description list display to inline-grid. |
| `.pf-m-{1,2,3}-col{-on-[sm, md, lg, xl, 2xl]}` | `.pf-v6-c-description-list` | Modifies the description list number of columns. |
| `--pf-v6-c-description-list--GridTemplateColumns--min{-on-[breakpoint]}: {width}` | `.pf-v6-c-description-list` | Modifies the min value of the `grid-template-columns` declaration at optional [breakpoint](/tokens/all-patternfly-tokens). |
| `--pf-v6-c-description-list--m-horizontal__term--width{-on-[breakpoint]}: {width}` | `.pf-v6-c-description-list.pf-m-horizontal` | Modifies the description list term width at optional [breakpoint](/tokens/all-patternfly-tokens). |

<!-- | `.pf-m-order[0-12]{-on-[breakpoint]}` | `.pf-v6-c-description-list__group` | Modifies the order of the flex layout element. |
| `.pf-m-order-first{-on-[breakpoint]}` | `.pf-v6-c-description-list__group` | Modifies the order of the flex layout element to -1. |
| `.pf-m-order-last{-on-[breakpoint]}` | `..pf-v6-c-description-list__group` | Modifies the order of the flex layout element to $limit + 1. | -->
