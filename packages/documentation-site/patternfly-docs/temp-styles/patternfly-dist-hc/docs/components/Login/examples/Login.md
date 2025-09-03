---
id: Login page
section: components
cssPrefix: pf-v6-c-login
wrapperTag: div
---## Examples

### Basic

```html isFullscreen
<div
  class="pf-v6-c-background-image"
  style="--pf-v6-c-background-image--BackgroundImage: url(/assets/images/pf-background.svg)"
></div>
<div class="pf-v6-c-login">
  <div class="pf-v6-c-login__container">
    <header class="pf-v6-c-login__header">
      <img
        class="pf-v6-c-brand"
        src="/assets/images/PF-IconLogo.svg"
        alt="PatternFly Logo"
        style="--pf-v6-c-brand--Height:48px;"
      />
    </header>
    <main class="pf-v6-c-login__main">
      <header class="pf-v6-c-login__main-header">
        <h1 class="pf-v6-c-title pf-m-3xl">Log in to your account</h1>
        <p
          class="pf-v6-c-login__main-header-desc"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </header>
      <div class="pf-v6-c-login__main-body">
        <form class="pf-v6-c-form" novalidate>
          <div class="pf-v6-c-form__helper-text" aria-live="polite">
            <div class="pf-v6-c-helper-text pf-m-hidden">
              <div class="pf-v6-c-helper-text__item pf-m-error" id="-helper">
                <span class="pf-v6-c-helper-text__item-icon">
                  <i class="fas fa-fw fa-exclamation-circle" aria-hidden="true"></i>
                </span>
                <span
                  class="pf-v6-c-helper-text__item-text"
                >Invalid login credentials.</span>
              </div>
            </div>
          </div>
          <div class="pf-v6-c-form__group"><label class="pf-v6-c-form__label" for="login-demo-form-username">
              <span class="pf-v6-c-form__label-text">Username</span>&nbsp;<span
                class="pf-v6-c-form__label-required"
                aria-hidden="true"
              >&#42;</span></label>

            <span class="pf-v6-c-form-control pf-m-required">
              <input
                required
                input="true"
                type="text"
                id="login-demo-form-username"
                name="login-demo-form-username"
              />
            </span>
          </div>
          <div class="pf-v6-c-form__group"><label class="pf-v6-c-form__label" for="login-demo-form-password">
              <span class="pf-v6-c-form__label-text">Password</span>&nbsp;<span
                class="pf-v6-c-form__label-required"
                aria-hidden="true"
              >&#42;</span></label>

            <span class="pf-v6-c-form-control pf-m-required">
              <input
                required
                type="password"
                id="login-demo-form-password"
                name="login-demo-form-password"
              />
            </span>
          </div>
          <div class="pf-v6-c-form__group">
            <div class="pf-v6-c-check">
              <input
                class="pf-v6-c-check__input"
                type="checkbox"
                id="login-demo-checkbox"
                name="login-demo-checkbox"
              />

              <label
                class="pf-v6-c-check__label"
                for="login-demo-checkbox"
              >Keep me logged in for 30 days.</label>
            </div>
          </div>
          <div class="pf-v6-c-form__group pf-m-action">
            <button
              class="pf-v6-c-button pf-m-block pf-m-primary"
              type="submit"
            >
              <span class="pf-v6-c-button__text">Log in</span>
            </button>
          </div>
        </form>
      </div>

      <footer class="pf-v6-c-login__main-footer">
        <ul class="pf-v6-c-login__main-footer-links" role="list">
          <li class="pf-v6-c-login__main-footer-links-item">
            <button
              class="pf-v6-c-button pf-m-plain"
              type="button"
              aria-label="Log in with Google"
            >
              <span class="pf-v6-c-button__icon">
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 488 512"
                  class="pf-v6-svg"
                >
                  <path
                    d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                  />
                </svg>
              </span>
            </button>
          </li>
          <li class="pf-v6-c-login__main-footer-links-item">
            <button
              class="pf-v6-c-button pf-m-plain"
              type="button"
              aria-label="Log in with Github"
            >
              <span class="pf-v6-c-button__icon">
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 496 512"
                  class="pf-v6-svg"
                >
                  <path
                    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                  />
                </svg>
              </span>
            </button>
          </li>
          <li class="pf-v6-c-login__main-footer-links-item">
            <button
              class="pf-v6-c-button pf-m-plain"
              type="button"
              aria-label="Log in with Dropbox"
            >
              <span class="pf-v6-c-button__icon">
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 528 512"
                  class="pf-v6-svg"
                >
                  <path
                    d="M264.4 116.3l-132 84.3 132 84.3-132 84.3L0 284.1l132.3-84.3L0 116.3 132.3 32l132.1 84.3zM131.6 395.7l132-84.3 132 84.3-132 84.3-132-84.3zm132.8-111.6l132-84.3-132-83.6L395.7 32 528 116.3l-132.3 84.3L528 284.8l-132.3 84.3-131.3-85z"
                  />
                </svg>
              </span>
            </button>
          </li>
          <li class="pf-v6-c-login__main-footer-links-item">
            <button
              class="pf-v6-c-button pf-m-plain"
              type="button"
              aria-label="Log in with Facebook"
            >
              <span class="pf-v6-c-button__icon">
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                  class="pf-v6-svg"
                >
                  <path
                    d="M448 56.7v398.5c0 13.7-11.1 24.7-24.7 24.7H309.1V306.5h58.2l8.7-67.6h-67v-43.2c0-19.6 5.4-32.9 33.5-32.9h35.8v-60.5c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9h-58.4v67.6h58.4V480H24.7C11.1 480 0 468.9 0 455.3V56.7C0 43.1 11.1 32 24.7 32h398.5c13.7 0 24.8 11.1 24.8 24.7z"
                  />
                </svg>
              </span>
            </button>
          </li>
          <li class="pf-v6-c-login__main-footer-links-item">
            <button
              class="pf-v6-c-button pf-m-plain"
              type="button"
              aria-label="Log in with Gitlab"
            >
              <span class="pf-v6-c-button__icon">
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                  class="pf-v6-svg"
                >
                  <path
                    d="M29.782 199.732L256 493.714 8.074 309.699c-6.856-5.142-9.712-13.996-7.141-21.993l28.849-87.974zm75.405-174.806c-3.142-8.854-15.709-8.854-18.851 0L29.782 199.732h131.961L105.187 24.926zm56.556 174.806L256 493.714l94.257-293.982H161.743zm349.324 87.974l-28.849-87.974L256 493.714l247.926-184.015c6.855-5.142 9.711-13.996 7.141-21.993zm-85.404-262.78c-3.142-8.854-15.709-8.854-18.851 0l-56.555 174.806h131.961L425.663 24.926z"
                  />
                </svg>
              </span>
            </button>
          </li>
        </ul>
        <div class="pf-v6-c-login__main-footer-band">
          <p class="pf-v6-c-login__main-footer-band-item">
            Need an account?
            <a href="https://www.patternfly.org/">Sign up.</a>
          </p>
          <p class="pf-v6-c-login__main-footer-band-item">
            <a href="#">Forgot username or password?</a>
          </p>
        </div>
      </footer>
    </main>
    <footer class="pf-v6-c-login__footer">
      <p>This is placeholder text only. Use this area to place any information or introductory message about your application that may be relevant to users.</p>
      <ul class="pf-v6-c-list pf-m-inline" role="list">
        <li>
          <a href="#">Terms of use</a>
        </li>
        <li>
          <a href="#">Help</a>
        </li>
        <li>
          <a href="#">Privacy policy</a>
        </li>
      </ul>
    </footer>
  </div>
</div>

```

### Invalid

```html isFullscreen
<div
  class="pf-v6-c-background-image"
  style="--pf-v6-c-background-image--BackgroundImage: url(/assets/images/pf-background.svg)"
></div>
<div class="pf-v6-c-login">
  <div class="pf-v6-c-login__container">
    <header class="pf-v6-c-login__header">
      <img
        class="pf-v6-c-brand"
        src="/assets/images/PF-IconLogo.svg"
        alt="PatternFly Logo"
        style="--pf-v6-c-brand--Height:48px;"
      />
    </header>
    <main class="pf-v6-c-login__main">
      <header class="pf-v6-c-login__main-header">
        <h1 class="pf-v6-c-title pf-m-3xl">Log in to your account</h1>
        <p
          class="pf-v6-c-login__main-header-desc"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </header>
      <div class="pf-v6-c-login__main-body">
        <form class="pf-v6-c-form" novalidate>
          <div class="pf-v6-c-form__helper-text" aria-live="polite">
            <div class="pf-v6-c-helper-text">
              <div class="pf-v6-c-helper-text__item pf-m-error" id="-helper">
                <span class="pf-v6-c-helper-text__item-icon">
                  <i class="fas fa-fw fa-exclamation-circle" aria-hidden="true"></i>
                </span>
                <span
                  class="pf-v6-c-helper-text__item-text"
                >Invalid login credentials.</span>
              </div>
            </div>
          </div>
          <div class="pf-v6-c-form__group"><label
              class="pf-v6-c-form__label"
              for="invalid-login-demo-form-username"
            >
              <span class="pf-v6-c-form__label-text">Username</span>&nbsp;<span
                class="pf-v6-c-form__label-required"
                aria-hidden="true"
              >&#42;</span></label>

            <span class="pf-v6-c-form-control pf-m-required pf-m-error">
              <input
                required
                type="text"
                id="invalid-login-demo-form-username"
                name="invalid-login-demo-form-username"
                aria-invalid="true"
              />
              <span class="pf-v6-c-form-control__utilities">
                <span class="pf-v6-c-form-control__icon pf-m-status">
                  <i class="fas fa-exclamation-circle" aria-hidden="true"></i>
                </span>
              </span>
            </span>
          </div>
          <div class="pf-v6-c-form__group"><label
              class="pf-v6-c-form__label"
              for="invalid-login-demo-form-password"
            >
              <span class="pf-v6-c-form__label-text">Password</span>&nbsp;<span
                class="pf-v6-c-form__label-required"
                aria-hidden="true"
              >&#42;</span></label>

            <span class="pf-v6-c-form-control pf-m-required pf-m-error">
              <input
                required
                type="password"
                id="invalid-login-demo-form-password"
                name="invalid-login-demo-form-password"
                aria-invalid="true"
              />
              <span class="pf-v6-c-form-control__utilities">
                <span class="pf-v6-c-form-control__icon pf-m-status">
                  <i class="fas fa-exclamation-circle" aria-hidden="true"></i>
                </span>
              </span>
            </span>
          </div>
          <div class="pf-v6-c-form__group">
            <div class="pf-v6-c-check">
              <input
                class="pf-v6-c-check__input"
                type="checkbox"
                id="invalid-login-demo-checkbox"
                name="invalid-login-demo-checkbox"
              />

              <label
                class="pf-v6-c-check__label"
                for="invalid-login-demo-checkbox"
              >Keep me logged in for 30 days.</label>
            </div>
          </div>
          <div class="pf-v6-c-form__group pf-m-action">
            <button
              class="pf-v6-c-button pf-m-block pf-m-primary"
              type="submit"
            >
              <span class="pf-v6-c-button__text">Log in</span>
            </button>
          </div>
        </form>
      </div>

      <footer class="pf-v6-c-login__main-footer">
        <ul class="pf-v6-c-login__main-footer-links" role="list">
          <li class="pf-v6-c-login__main-footer-links-item">
            <button
              class="pf-v6-c-button pf-m-plain"
              type="button"
              aria-label="Log in with Google"
            >
              <span class="pf-v6-c-button__icon">
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 488 512"
                  class="pf-v6-svg"
                >
                  <path
                    d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                  />
                </svg>
              </span>
            </button>
          </li>
          <li class="pf-v6-c-login__main-footer-links-item">
            <button
              class="pf-v6-c-button pf-m-plain"
              type="button"
              aria-label="Log in with Github"
            >
              <span class="pf-v6-c-button__icon">
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 496 512"
                  class="pf-v6-svg"
                >
                  <path
                    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                  />
                </svg>
              </span>
            </button>
          </li>
          <li class="pf-v6-c-login__main-footer-links-item">
            <button
              class="pf-v6-c-button pf-m-plain"
              type="button"
              aria-label="Log in with Dropbox"
            >
              <span class="pf-v6-c-button__icon">
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 528 512"
                  class="pf-v6-svg"
                >
                  <path
                    d="M264.4 116.3l-132 84.3 132 84.3-132 84.3L0 284.1l132.3-84.3L0 116.3 132.3 32l132.1 84.3zM131.6 395.7l132-84.3 132 84.3-132 84.3-132-84.3zm132.8-111.6l132-84.3-132-83.6L395.7 32 528 116.3l-132.3 84.3L528 284.8l-132.3 84.3-131.3-85z"
                  />
                </svg>
              </span>
            </button>
          </li>
          <li class="pf-v6-c-login__main-footer-links-item">
            <button
              class="pf-v6-c-button pf-m-plain"
              type="button"
              aria-label="Log in with Facebook"
            >
              <span class="pf-v6-c-button__icon">
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                  class="pf-v6-svg"
                >
                  <path
                    d="M448 56.7v398.5c0 13.7-11.1 24.7-24.7 24.7H309.1V306.5h58.2l8.7-67.6h-67v-43.2c0-19.6 5.4-32.9 33.5-32.9h35.8v-60.5c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9h-58.4v67.6h58.4V480H24.7C11.1 480 0 468.9 0 455.3V56.7C0 43.1 11.1 32 24.7 32h398.5c13.7 0 24.8 11.1 24.8 24.7z"
                  />
                </svg>
              </span>
            </button>
          </li>
          <li class="pf-v6-c-login__main-footer-links-item">
            <button
              class="pf-v6-c-button pf-m-plain"
              type="button"
              aria-label="Log in with Gitlab"
            >
              <span class="pf-v6-c-button__icon">
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                  class="pf-v6-svg"
                >
                  <path
                    d="M29.782 199.732L256 493.714 8.074 309.699c-6.856-5.142-9.712-13.996-7.141-21.993l28.849-87.974zm75.405-174.806c-3.142-8.854-15.709-8.854-18.851 0L29.782 199.732h131.961L105.187 24.926zm56.556 174.806L256 493.714l94.257-293.982H161.743zm349.324 87.974l-28.849-87.974L256 493.714l247.926-184.015c6.855-5.142 9.711-13.996 7.141-21.993zm-85.404-262.78c-3.142-8.854-15.709-8.854-18.851 0l-56.555 174.806h131.961L425.663 24.926z"
                  />
                </svg>
              </span>
            </button>
          </li>
        </ul>
        <div class="pf-v6-c-login__main-footer-band">
          <p class="pf-v6-c-login__main-footer-band-item">
            Need an account?
            <a href="https://www.patternfly.org/">Sign up.</a>
          </p>
          <p class="pf-v6-c-login__main-footer-band-item">
            <a href="#">Forgot username or password?</a>
          </p>
        </div>
      </footer>
    </main>
    <footer class="pf-v6-c-login__footer">
      <p>This is placeholder text only. Use this area to place any information or introductory message about your application that may be relevant to users.</p>
      <ul class="pf-v6-c-list pf-m-inline" role="list">
        <li>
          <a href="#">Terms of use</a>
        </li>
        <li>
          <a href="#">Help</a>
        </li>
        <li>
          <a href="#">Privacy policy</a>
        </li>
      </ul>
    </footer>
  </div>
</div>

```

### Show password

```html isFullscreen
<div
  class="pf-v6-c-background-image"
  style="--pf-v6-c-background-image--BackgroundImage: url(/assets/images/pf-background.svg)"
></div>
<div class="pf-v6-c-login">
  <div class="pf-v6-c-login__container">
    <header class="pf-v6-c-login__header">
      <img
        class="pf-v6-c-brand"
        src="/assets/images/PF-IconLogo.svg"
        alt="PatternFly Logo"
        style="--pf-v6-c-brand--Height:48px;"
      />
    </header>
    <main class="pf-v6-c-login__main">
      <header class="pf-v6-c-login__main-header">
        <h1 class="pf-v6-c-title pf-m-3xl">Log in to your account</h1>
        <p
          class="pf-v6-c-login__main-header-desc"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </header>
      <div class="pf-v6-c-login__main-body">
        <form class="pf-v6-c-form" novalidate>
          <div class="pf-v6-c-form__helper-text" aria-live="polite">
            <div class="pf-v6-c-helper-text pf-m-hidden">
              <div class="pf-v6-c-helper-text__item pf-m-error" id="-helper">
                <span class="pf-v6-c-helper-text__item-icon">
                  <i class="fas fa-fw fa-exclamation-circle" aria-hidden="true"></i>
                </span>
                <span
                  class="pf-v6-c-helper-text__item-text"
                >Invalid login credentials.</span>
              </div>
            </div>
          </div>
          <div class="pf-v6-c-form__group"><label class="pf-v6-c-form__label" for="login-demo-form-username">
              <span class="pf-v6-c-form__label-text">Username</span>&nbsp;<span
                class="pf-v6-c-form__label-required"
                aria-hidden="true"
              >&#42;</span></label>

            <span class="pf-v6-c-form-control pf-m-required">
              <input
                required
                type="text"
                id="login-demo-form-username"
                name="login-demo-form-username"
              />
            </span>
          </div>
          <div class="pf-v6-c-form__group"><label class="pf-v6-c-form__label" for="login-demo-form-password">
              <span class="pf-v6-c-form__label-text">Password</span>&nbsp;<span
                class="pf-v6-c-form__label-required"
                aria-hidden="true"
              >&#42;</span></label>

            <div class="pf-v6-c-input-group">
              <span class="pf-v6-c-form-control pf-m-required">
                <input
                  required
                  type="password"
                  id="login-demo-form-password"
                  name="login-demo-form-password"
                  value="abcd1234"
                />
              </span>

              <button
                class="pf-v6-c-button pf-m-control"
                type="button"
                aria-label="Show password"
              >
                <span class="pf-v6-c-button__icon pf-m-start">
                  <i class="fas fa-eye" aria-hidden="true"></i>
                </span>
              </button>
            </div>
          </div>
          <div class="pf-v6-c-form__group">
            <div class="pf-v6-c-check">
              <input
                class="pf-v6-c-check__input"
                type="checkbox"
                id="login-demo-checkbox"
                name="login-demo-checkbox"
              />

              <label
                class="pf-v6-c-check__label"
                for="login-demo-checkbox"
              >Keep me logged in for 30 days.</label>
            </div>
          </div>
          <div class="pf-v6-c-form__group pf-m-action">
            <button
              class="pf-v6-c-button pf-m-block pf-m-primary"
              type="submit"
            >
              <span class="pf-v6-c-button__text">Log in</span>
            </button>
          </div>
        </form>
      </div>

      <footer class="pf-v6-c-login__main-footer">
        <ul class="pf-v6-c-login__main-footer-links" role="list">
          <li class="pf-v6-c-login__main-footer-links-item">
            <button
              class="pf-v6-c-button pf-m-plain"
              type="button"
              aria-label="Log in with Google"
            >
              <span class="pf-v6-c-button__icon">
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 488 512"
                  class="pf-v6-svg"
                >
                  <path
                    d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                  />
                </svg>
              </span>
            </button>
          </li>
          <li class="pf-v6-c-login__main-footer-links-item">
            <button
              class="pf-v6-c-button pf-m-plain"
              type="button"
              aria-label="Log in with Github"
            >
              <span class="pf-v6-c-button__icon">
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 496 512"
                  class="pf-v6-svg"
                >
                  <path
                    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                  />
                </svg>
              </span>
            </button>
          </li>
          <li class="pf-v6-c-login__main-footer-links-item">
            <button
              class="pf-v6-c-button pf-m-plain"
              type="button"
              aria-label="Log in with Dropbox"
            >
              <span class="pf-v6-c-button__icon">
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 528 512"
                  class="pf-v6-svg"
                >
                  <path
                    d="M264.4 116.3l-132 84.3 132 84.3-132 84.3L0 284.1l132.3-84.3L0 116.3 132.3 32l132.1 84.3zM131.6 395.7l132-84.3 132 84.3-132 84.3-132-84.3zm132.8-111.6l132-84.3-132-83.6L395.7 32 528 116.3l-132.3 84.3L528 284.8l-132.3 84.3-131.3-85z"
                  />
                </svg>
              </span>
            </button>
          </li>
          <li class="pf-v6-c-login__main-footer-links-item">
            <button
              class="pf-v6-c-button pf-m-plain"
              type="button"
              aria-label="Log in with Facebook"
            >
              <span class="pf-v6-c-button__icon">
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                  class="pf-v6-svg"
                >
                  <path
                    d="M448 56.7v398.5c0 13.7-11.1 24.7-24.7 24.7H309.1V306.5h58.2l8.7-67.6h-67v-43.2c0-19.6 5.4-32.9 33.5-32.9h35.8v-60.5c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9h-58.4v67.6h58.4V480H24.7C11.1 480 0 468.9 0 455.3V56.7C0 43.1 11.1 32 24.7 32h398.5c13.7 0 24.8 11.1 24.8 24.7z"
                  />
                </svg>
              </span>
            </button>
          </li>
          <li class="pf-v6-c-login__main-footer-links-item">
            <button
              class="pf-v6-c-button pf-m-plain"
              type="button"
              aria-label="Log in with Gitlab"
            >
              <span class="pf-v6-c-button__icon">
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                  class="pf-v6-svg"
                >
                  <path
                    d="M29.782 199.732L256 493.714 8.074 309.699c-6.856-5.142-9.712-13.996-7.141-21.993l28.849-87.974zm75.405-174.806c-3.142-8.854-15.709-8.854-18.851 0L29.782 199.732h131.961L105.187 24.926zm56.556 174.806L256 493.714l94.257-293.982H161.743zm349.324 87.974l-28.849-87.974L256 493.714l247.926-184.015c6.855-5.142 9.711-13.996 7.141-21.993zm-85.404-262.78c-3.142-8.854-15.709-8.854-18.851 0l-56.555 174.806h131.961L425.663 24.926z"
                  />
                </svg>
              </span>
            </button>
          </li>
        </ul>
        <div class="pf-v6-c-login__main-footer-band">
          <p class="pf-v6-c-login__main-footer-band-item">
            Need an account?
            <a href="https://www.patternfly.org/">Sign up.</a>
          </p>
          <p class="pf-v6-c-login__main-footer-band-item">
            <a href="#">Forgot username or password?</a>
          </p>
        </div>
      </footer>
    </main>
    <footer class="pf-v6-c-login__footer">
      <p>This is placeholder text only. Use this area to place any information or introductory message about your application that may be relevant to users.</p>
      <ul class="pf-v6-c-list pf-m-inline" role="list">
        <li>
          <a href="#">Terms of use</a>
        </li>
        <li>
          <a href="#">Help</a>
        </li>
        <li>
          <a href="#">Privacy policy</a>
        </li>
      </ul>
    </footer>
  </div>
</div>

```

### Hide password

```html isFullscreen
<div
  class="pf-v6-c-background-image"
  style="--pf-v6-c-background-image--BackgroundImage: url(/assets/images/pf-background.svg)"
></div>
<div class="pf-v6-c-login">
  <div class="pf-v6-c-login__container">
    <header class="pf-v6-c-login__header">
      <img
        class="pf-v6-c-brand"
        src="/assets/images/PF-IconLogo.svg"
        alt="PatternFly Logo"
        style="--pf-v6-c-brand--Height:48px;"
      />
    </header>
    <main class="pf-v6-c-login__main">
      <header class="pf-v6-c-login__main-header">
        <h1 class="pf-v6-c-title pf-m-3xl">Log in to your account</h1>
        <p
          class="pf-v6-c-login__main-header-desc"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </header>
      <div class="pf-v6-c-login__main-body">
        <form class="pf-v6-c-form" novalidate>
          <div class="pf-v6-c-form__helper-text" aria-live="polite">
            <div class="pf-v6-c-helper-text pf-m-hidden">
              <div class="pf-v6-c-helper-text__item pf-m-error" id="-helper">
                <span class="pf-v6-c-helper-text__item-icon">
                  <i class="fas fa-fw fa-exclamation-circle" aria-hidden="true"></i>
                </span>
                <span
                  class="pf-v6-c-helper-text__item-text"
                >Invalid login credentials.</span>
              </div>
            </div>
          </div>
          <div
            class="pf-v6-c-form__helper-text pf-m-error pf-m-hidden"
            aria-live="polite"
          >
            <i class="fas fa-exclamation-circle" aria-hidden="true"></i>
            Invalid login credentials.
          </div>
          <div class="pf-v6-c-form__group"><label class="pf-v6-c-form__label" for="login-demo-form-username">
              <span class="pf-v6-c-form__label-text">Username</span>&nbsp;<span
                class="pf-v6-c-form__label-required"
                aria-hidden="true"
              >&#42;</span></label>

            <span class="pf-v6-c-form-control pf-m-required">
              <input
                required
                type="text"
                id="login-demo-form-username"
                name="login-demo-form-username"
              />
            </span>
          </div>
          <div class="pf-v6-c-form__group"><label class="pf-v6-c-form__label" for="login-demo-form-password">
              <span class="pf-v6-c-form__label-text">Password</span>&nbsp;<span
                class="pf-v6-c-form__label-required"
                aria-hidden="true"
              >&#42;</span></label>

            <div class="pf-v6-c-input-group">
              <span class="pf-v6-c-form-control pf-m-required">
                <input
                  required
                  type="text"
                  id="login-demo-form-password"
                  name="login-demo-form-password"
                  value="abcd1234"
                />
              </span>

              <button
                class="pf-v6-c-button pf-m-control"
                type="button"
                aria-label="Hide password"
              >
                <span class="pf-v6-c-button__icon pf-m-start">
                  <i class="fas fa-eye-slash" aria-hidden="true"></i>
                </span>
              </button>
            </div>
          </div>
          <div class="pf-v6-c-form__group">
            <div class="pf-v6-c-check">
              <input
                class="pf-v6-c-check__input"
                type="checkbox"
                id="login-demo-checkbox"
                name="login-demo-checkbox"
              />

              <label
                class="pf-v6-c-check__label"
                for="login-demo-checkbox"
              >Keep me logged in for 30 days.</label>
            </div>
          </div>
          <div class="pf-v6-c-form__group pf-m-action">
            <button
              class="pf-v6-c-button pf-m-block pf-m-primary"
              type="submit"
            >
              <span class="pf-v6-c-button__text">Log in</span>
            </button>
          </div>
        </form>
      </div>

      <footer class="pf-v6-c-login__main-footer">
        <ul class="pf-v6-c-login__main-footer-links" role="list">
          <li class="pf-v6-c-login__main-footer-links-item">
            <button
              class="pf-v6-c-button pf-m-plain"
              type="button"
              aria-label="Log in with Google"
            >
              <span class="pf-v6-c-button__icon">
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 488 512"
                  class="pf-v6-svg"
                >
                  <path
                    d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                  />
                </svg>
              </span>
            </button>
          </li>
          <li class="pf-v6-c-login__main-footer-links-item">
            <button
              class="pf-v6-c-button pf-m-plain"
              type="button"
              aria-label="Log in with Github"
            >
              <span class="pf-v6-c-button__icon">
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 496 512"
                  class="pf-v6-svg"
                >
                  <path
                    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                  />
                </svg>
              </span>
            </button>
          </li>
          <li class="pf-v6-c-login__main-footer-links-item">
            <button
              class="pf-v6-c-button pf-m-plain"
              type="button"
              aria-label="Log in with Dropbox"
            >
              <span class="pf-v6-c-button__icon">
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 528 512"
                  class="pf-v6-svg"
                >
                  <path
                    d="M264.4 116.3l-132 84.3 132 84.3-132 84.3L0 284.1l132.3-84.3L0 116.3 132.3 32l132.1 84.3zM131.6 395.7l132-84.3 132 84.3-132 84.3-132-84.3zm132.8-111.6l132-84.3-132-83.6L395.7 32 528 116.3l-132.3 84.3L528 284.8l-132.3 84.3-131.3-85z"
                  />
                </svg>
              </span>
            </button>
          </li>
          <li class="pf-v6-c-login__main-footer-links-item">
            <button
              class="pf-v6-c-button pf-m-plain"
              type="button"
              aria-label="Log in with Facebook"
            >
              <span class="pf-v6-c-button__icon">
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                  class="pf-v6-svg"
                >
                  <path
                    d="M448 56.7v398.5c0 13.7-11.1 24.7-24.7 24.7H309.1V306.5h58.2l8.7-67.6h-67v-43.2c0-19.6 5.4-32.9 33.5-32.9h35.8v-60.5c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9h-58.4v67.6h58.4V480H24.7C11.1 480 0 468.9 0 455.3V56.7C0 43.1 11.1 32 24.7 32h398.5c13.7 0 24.8 11.1 24.8 24.7z"
                  />
                </svg>
              </span>
            </button>
          </li>
          <li class="pf-v6-c-login__main-footer-links-item">
            <button
              class="pf-v6-c-button pf-m-plain"
              type="button"
              aria-label="Log in with Gitlab"
            >
              <span class="pf-v6-c-button__icon">
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                  class="pf-v6-svg"
                >
                  <path
                    d="M29.782 199.732L256 493.714 8.074 309.699c-6.856-5.142-9.712-13.996-7.141-21.993l28.849-87.974zm75.405-174.806c-3.142-8.854-15.709-8.854-18.851 0L29.782 199.732h131.961L105.187 24.926zm56.556 174.806L256 493.714l94.257-293.982H161.743zm349.324 87.974l-28.849-87.974L256 493.714l247.926-184.015c6.855-5.142 9.711-13.996 7.141-21.993zm-85.404-262.78c-3.142-8.854-15.709-8.854-18.851 0l-56.555 174.806h131.961L425.663 24.926z"
                  />
                </svg>
              </span>
            </button>
          </li>
        </ul>
        <div class="pf-v6-c-login__main-footer-band">
          <p class="pf-v6-c-login__main-footer-band-item">
            Need an account?
            <a href="https://www.patternfly.org/">Sign up.</a>
          </p>
          <p class="pf-v6-c-login__main-footer-band-item">
            <a href="#">Forgot username or password?</a>
          </p>
        </div>
      </footer>
    </main>
    <footer class="pf-v6-c-login__footer">
      <p>This is placeholder text only. Use this area to place any information or introductory message about your application that may be relevant to users.</p>
      <ul class="pf-v6-c-list pf-m-inline" role="list">
        <li>
          <a href="#">Terms of use</a>
        </li>
        <li>
          <a href="#">Help</a>
        </li>
        <li>
          <a href="#">Privacy policy</a>
        </li>
      </ul>
    </footer>
  </div>
</div>

```

### With language selector

```html isFullscreen
<div
  class="pf-v6-c-background-image"
  style="--pf-v6-c-background-image--BackgroundImage: url(/assets/images/pf-background.svg)"
></div>
<div class="pf-v6-c-login">
  <div class="pf-v6-c-login__container">
    <header class="pf-v6-c-login__header">
      <img
        class="pf-v6-c-brand"
        src="/assets/images/PF-IconLogo.svg"
        alt="PatternFly Logo"
        style="--pf-v6-c-brand--Height:48px;"
      />
    </header>
    <main class="pf-v6-c-login__main">
      <header class="pf-v6-c-login__main-header">
        <h1 class="pf-v6-c-title pf-m-3xl">Log in to your account</h1>
        <p
          class="pf-v6-c-login__main-header-desc"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div class="pf-v6-c-login__main-header-utilities">
          <button
            class="pf-v6-c-menu-toggle"
            type="button"
            aria-expanded="false"
            id="login-select"
          >
            <span class="pf-v6-c-menu-toggle__text">English</span>
            <span class="pf-v6-c-menu-toggle__controls">
              <span class="pf-v6-c-menu-toggle__toggle-icon">
                <i class="fas fa-caret-down fa-fw" aria-hidden="true"></i>
              </span>
            </span>
          </button>
        </div>
      </header>
      <div class="pf-v6-c-login__main-body">
        <form class="pf-v6-c-form" novalidate>
          <div class="pf-v6-c-form__helper-text" aria-live="polite">
            <div class="pf-v6-c-helper-text pf-m-hidden">
              <div class="pf-v6-c-helper-text__item pf-m-error" id="-helper">
                <span class="pf-v6-c-helper-text__item-icon">
                  <i class="fas fa-fw fa-exclamation-circle" aria-hidden="true"></i>
                </span>
                <span
                  class="pf-v6-c-helper-text__item-text"
                >Invalid login credentials.</span>
              </div>
            </div>
          </div>
          <div class="pf-v6-c-form__group"><label class="pf-v6-c-form__label" for="login-demo-form-username">
              <span class="pf-v6-c-form__label-text">Username</span>&nbsp;<span
                class="pf-v6-c-form__label-required"
                aria-hidden="true"
              >&#42;</span></label>

            <span class="pf-v6-c-form-control pf-m-required">
              <input
                required
                type="text"
                id="login-demo-form-username"
                name="login-demo-form-username"
              />
            </span>
          </div>
          <div class="pf-v6-c-form__group"><label class="pf-v6-c-form__label" for="login-demo-form-password">
              <span class="pf-v6-c-form__label-text">Password</span>&nbsp;<span
                class="pf-v6-c-form__label-required"
                aria-hidden="true"
              >&#42;</span></label>

            <span class="pf-v6-c-form-control pf-m-required">
              <input
                required
                type="password"
                id="login-demo-form-password"
                name="login-demo-form-password"
              />
            </span>
          </div>
          <div class="pf-v6-c-form__group">
            <div class="pf-v6-c-check">
              <input
                class="pf-v6-c-check__input"
                type="checkbox"
                id="login-demo-checkbox"
                name="login-demo-checkbox"
              />

              <label
                class="pf-v6-c-check__label"
                for="login-demo-checkbox"
              >Keep me logged in for 30 days.</label>
            </div>
          </div>
          <div class="pf-v6-c-form__group pf-m-action">
            <button
              class="pf-v6-c-button pf-m-block pf-m-primary"
              type="submit"
            >
              <span class="pf-v6-c-button__text">Log in</span>
            </button>
          </div>
        </form>
      </div>

      <footer class="pf-v6-c-login__main-footer">
        <ul class="pf-v6-c-login__main-footer-links" role="list">
          <li class="pf-v6-c-login__main-footer-links-item">
            <button
              class="pf-v6-c-button pf-m-plain"
              type="button"
              aria-label="Log in with Google"
            >
              <span class="pf-v6-c-button__icon">
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 488 512"
                  class="pf-v6-svg"
                >
                  <path
                    d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                  />
                </svg>
              </span>
            </button>
          </li>
          <li class="pf-v6-c-login__main-footer-links-item">
            <button
              class="pf-v6-c-button pf-m-plain"
              type="button"
              aria-label="Log in with Github"
            >
              <span class="pf-v6-c-button__icon">
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 496 512"
                  class="pf-v6-svg"
                >
                  <path
                    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                  />
                </svg>
              </span>
            </button>
          </li>
          <li class="pf-v6-c-login__main-footer-links-item">
            <button
              class="pf-v6-c-button pf-m-plain"
              type="button"
              aria-label="Log in with Dropbox"
            >
              <span class="pf-v6-c-button__icon">
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 528 512"
                  class="pf-v6-svg"
                >
                  <path
                    d="M264.4 116.3l-132 84.3 132 84.3-132 84.3L0 284.1l132.3-84.3L0 116.3 132.3 32l132.1 84.3zM131.6 395.7l132-84.3 132 84.3-132 84.3-132-84.3zm132.8-111.6l132-84.3-132-83.6L395.7 32 528 116.3l-132.3 84.3L528 284.8l-132.3 84.3-131.3-85z"
                  />
                </svg>
              </span>
            </button>
          </li>
          <li class="pf-v6-c-login__main-footer-links-item">
            <button
              class="pf-v6-c-button pf-m-plain"
              type="button"
              aria-label="Log in with Facebook"
            >
              <span class="pf-v6-c-button__icon">
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                  class="pf-v6-svg"
                >
                  <path
                    d="M448 56.7v398.5c0 13.7-11.1 24.7-24.7 24.7H309.1V306.5h58.2l8.7-67.6h-67v-43.2c0-19.6 5.4-32.9 33.5-32.9h35.8v-60.5c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9h-58.4v67.6h58.4V480H24.7C11.1 480 0 468.9 0 455.3V56.7C0 43.1 11.1 32 24.7 32h398.5c13.7 0 24.8 11.1 24.8 24.7z"
                  />
                </svg>
              </span>
            </button>
          </li>
          <li class="pf-v6-c-login__main-footer-links-item">
            <button
              class="pf-v6-c-button pf-m-plain"
              type="button"
              aria-label="Log in with Gitlab"
            >
              <span class="pf-v6-c-button__icon">
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                  class="pf-v6-svg"
                >
                  <path
                    d="M29.782 199.732L256 493.714 8.074 309.699c-6.856-5.142-9.712-13.996-7.141-21.993l28.849-87.974zm75.405-174.806c-3.142-8.854-15.709-8.854-18.851 0L29.782 199.732h131.961L105.187 24.926zm56.556 174.806L256 493.714l94.257-293.982H161.743zm349.324 87.974l-28.849-87.974L256 493.714l247.926-184.015c6.855-5.142 9.711-13.996 7.141-21.993zm-85.404-262.78c-3.142-8.854-15.709-8.854-18.851 0l-56.555 174.806h131.961L425.663 24.926z"
                  />
                </svg>
              </span>
            </button>
          </li>
        </ul>
        <div class="pf-v6-c-login__main-footer-band">
          <p class="pf-v6-c-login__main-footer-band-item">
            Need an account?
            <a href="https://www.patternfly.org/">Sign up.</a>
          </p>
          <p class="pf-v6-c-login__main-footer-band-item">
            <a href="#">Forgot username or password?</a>
          </p>
        </div>
      </footer>
    </main>
    <footer class="pf-v6-c-login__footer">
      <p>This is placeholder text only. Use this area to place any information or introductory message about your application that may be relevant to users.</p>
      <ul class="pf-v6-c-list pf-m-inline" role="list">
        <li>
          <a href="#">Terms of use</a>
        </li>
        <li>
          <a href="#">Help</a>
        </li>
        <li>
          <a href="#">Privacy policy</a>
        </li>
      </ul>
    </footer>
  </div>
</div>

```

## Documentation

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-login` | `<div>` | Initializes the login component. **Required**|
| `.pf-v6-c-login__container` | `<div>` | Positions the login component content. **Required**|
| `.pf-v6-c-login__header` | `<header>` | Positions the login header. **Required**|
| `.pf-v6-c-login__header .pf-v6-c-brand` | `<img>` | Creates a brand image inside of login header. **Required** |
| `.pf-v6-c-login__main` | `<main>` | Positions the login main area. **Required** |
| `.pf-v6-c-login__main-header` | `<header>` | Creates the header of the main area. **Required** |
| `.pf-v6-c-login__main-header .pf-v6-c-title` | `<h1>,<h2>,<h3>,<h4>,<h5>,<h6>` | Creates a title in the main header area. **Required** |
| `.pf-v6-c-login__main-header-desc` | `<p>` | Creates the description in the main area header. |
| `.pf-v6-c-login__main-header-utilities` | `<div>` | Creates a utilities section in the main header area. **Note:** For use with a language selector menu. |
| `.pf-v6-c-login__main-body` | `<div>` | Creates the body of the main area. **Required** |
| `.pf-v6-c-login__main-body .pf-v6-c-form` | `<form>` | Creates the login form in the main body area. **Required**|
| `.pf-v6-c-login__main-body .pf-v6-c-form .pf-v6-c-form-helper-text` | `<form>` | Creates the error messages shown when the form has errors. When not active, apply `.pf-m-hidden`. **Required** |
| `.pf-v6-c-login__main-footer` | `<footer>` | Creates the footer of the main area. **Required** |
| `.pf-v6-c-login__main-footer-links` | `<ul>` | Creates a list of links in the main footer. **Required** |
| `.pf-v6-c-login__main-footer-links-item` | `<li>` | Creates proper spacing for links in the main footer. **Required** |
| `.pf-v6-c-login__main-footer-links-item-link` | `<a>` | Creates link in links list in footer. **Required** |
| `.pf-v6-c-login__main-footer-band` | `<div>` | Styles a band in the footer. |
| `.pf-v6-c-login__main-footer-band-item` | `<p>` | Adds information to the band in the footer. |
| `.pf-v6-c-login__footer` | `<footer>` | Positions the login footer. **Required** |
| `.pf-v6-c-login__footer .pf-v6-c-list` | `<ul>` | Creates a list of links in the login footer. **Required** |
