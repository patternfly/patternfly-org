---
title: Colors
section: styles
hideTOC: true
showTitle: true
---
import { Alert, Gallery, GalleryItem, Grid, GridItem, AlertActionCloseButton } from '@patternfly/react-core';
import { Link } from 'gatsby';
import './colors.css';


## Theme colors

<Grid className="colors-theme--light grid-modifier" gutter="md">
  <GridItem xs={12}>
    <h3>Primary default</h3>
  </GridItem>
  <GridItem span={12} lg={7} className="grid-modifier-first">
    <Grid>
      <GridItem span={4} xl={3}>
        <div className="colors-theme--color-primary-100"></div>
      </GridItem>
      <GridItem span={8}>
        <h3>#0066CC</h3>
        <p>Global CSS variable</p>
        <code>--pf-global--primary-color--100</code>
      </GridItem>
    </Grid>
  </GridItem>
  <GridItem span={12} lg={7} className="grid-modifier-third">
    <Grid>
      <GridItem span={4} xl={3}>
        <div className="colors-theme--color-primary-200"></div>
      </GridItem>
      <GridItem span={8}>
        <h3>#004080</h3>
        <p>Global CSS variable</p>
        <code>--pf-global--primary-color--200</code>
      </GridItem>
    </Grid>
  </GridItem>
  <GridItem span={12} lg={5} rowSpan={2} className="grid-modifier-four">
    <Grid className="colors-in-context" style={{
      padding: "16px 32px",
      backgroundColor: "#fff"
    }}>
      <GridItem span={12}>
        <h3>Colors in context</h3>
        <button class="pf-c-button pf-m-primary pf-u-mt-sm pf-u-mb-md">See what's possible</button>
        <p>This call-to-action uses default PatternFly 4 colors. The active state button takes --pf-global--primary-color--100. On a hover, the color adjusts to --pf-global--primary-color--200.</p>
      </GridItem>
    </Grid>
  </GridItem>
</Grid>

<Grid className="colors-theme--light grid-modifier" gutter="md" style={{marginTop: '32px'}}>
  <GridItem xs={12}>
    <h3>Secondary default</h3>
  </GridItem>
  <GridItem span={12} lg={7} className="grid-modifier-first">
    <Grid>
      <GridItem span={4} xl={3}>
        <div className="colors-theme--color-secondary-100"></div>
      </GridItem>
      <GridItem span={8}>
        <h3>#72767B</h3>
        <p>Global CSS variable</p>
        <code>--pf-global--secondary-color--100</code>
      </GridItem>
    </Grid>
  </GridItem>
  <GridItem span={12} lg={5} rowSpan={2} className="grid-modifier-four">
    <Grid className="colors-in-context" style={{
      padding: "16px 32px",
      backgroundColor: "#fff"
    }}>
      <GridItem span={12}>
        <h3>Colors in context</h3>
        <div class="pf-c-chip pf-u-mr-xs pf-u-mb-xs">
          <span class="pf-c-chip__text" id="chip_one">
            Chip
          </span>
          <button class="pf-c-button pf-m-plain" aria-labelledby="remove_chip_one chip_one" aria-label="Remove" id="remove_chip_one">
            <i class="fas fa-times-circle" aria-hidden="true"></i>
          </button>
        </div>
        <div class="pf-c-chip">
          <span class="pf-c-chip__text" id="chip_two">
            Really long Chip that goes on and on
          </span>
          <button class="pf-c-button pf-m-plain" aria-labelledby="remove_chip_two chip_two" aria-label="Remove" id="remove_chip_two">
            <i class="fas fa-times-circle" aria-hidden="true"></i>
          </button>
        </div>
        <p>This Chip uses default PatternFly 4 colors. The border uses --pf-global--secondary-color--100.</p>
      </GridItem>
    </Grid>
  </GridItem>
</Grid>

<h2>Typography colors</h2>

<Grid className="colors-theme--light grid-modifier" gutter="md">
  <GridItem xs={12}>
    <h3>Text</h3>
  </GridItem>
  <GridItem span={12} lg={7} className="grid-modifier-first">
    <Grid>
      <GridItem span={4} xl={3}>
        <div className="colors-theme--color-text-100"></div>
      </GridItem>
      <GridItem span={8}>
        <h3>#151515</h3>
        <p>Global CSS variable</p>
        <code>--pf-global--Color--100</code>
      </GridItem>
    </Grid>
  </GridItem>

  <GridItem span={12} lg={7} className="grid-modifier-third">
    <Grid>
      <GridItem span={4} xl={3}>
        <div className="colors-theme--color-text-200"></div>
      </GridItem>
      <GridItem span={8}>
        <h3>#72767B</h3>
        <p>Global CSS variable</p>
        <code>--pf-global--Color--200</code>
      </GridItem>
    </Grid>
  </GridItem>
  <GridItem span={12} lg={7} className="grid-modifier-second">
    <Grid>
      <GridItem span={4} xl={3}>
        <div className="colors-theme--color-text-300"></div>
      </GridItem>
      <GridItem span={8}>
        <h3>#393F44</h3>
        <p>Global CSS variable</p>
        <code>--pf-global--Color--300</code>
      </GridItem>
    </Grid>
  </GridItem>
    <GridItem xs={12} lg={5} rowSpan={2} className="grid-modifier-four">
    <Grid className="colors-in-context" style={{
      padding: "16px 32px",
      backgroundColor: "#fff"
    }}>
      <GridItem span={12}>
        <h3>Colors in context</h3>
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
        <p>Body text should be Overpass Regular at 16px. It should have leading of 24px because of it’s relative line-height of 1.5.</p>
      </GridItem>
    </Grid>
  </GridItem>
  <GridItem span={12} className="grid-modifier-five">
    Learn more about <Link to="/design-guidelines/styles/typography">typography styles</Link>.
  </GridItem>
</Grid>

<Grid className="colors-theme--light grid-modifier" gutter="md" style={{marginTop: '32px'}}>
  <GridItem xs={12}>
    <h3>Links</h3>
  </GridItem>
  <GridItem span={12} lg={7} className="grid-modifier-first">
    <Grid>
      <GridItem span={4} xl={3}>
        <div className="colors-theme--color-link-text"></div>
      </GridItem>
      <GridItem span={8}>
        <h3>#0066CC</h3>
        <p>Global CSS variable</p>
        <code>--pf-global--link--Color</code>
      </GridItem>
    </Grid>
  </GridItem>
  <GridItem span={12} lg={7} className="grid-modifier-third">
    <Grid>
      <GridItem span={4} xl={3}>
        <div className="colors-theme--color-link-hover"></div>
      </GridItem>
      <GridItem span={8}>
        <h3>#004080</h3>
        <p>Global CSS variable</p>
        <code>--pf-global--link--Color--hover</code>
      </GridItem>
    </Grid>
  </GridItem>
    <GridItem span={12} lg={5} rowSpan={2} className="grid-modifier-four">
    <Grid className="colors-in-context" style={{
      padding: "16px 32px",
      backgroundColor: "#fff"
    }}>
      <GridItem span={12}>
        <h3>Colors in context</h3>
        <p>Body text should be Overpass Regular at 16px. <a href="#" className="pf-m-link">This is a link in-content</a>. It should have leading of 24px because of its relative line-height of 1.5.
        </p>
      </GridItem>
    </Grid>
  </GridItem>
</Grid>

<Grid className="colors-theme--light grid-modifier" gutter="md" style={{marginTop: '32px'}}>
  <GridItem xs={12}>
    <h3>Icons</h3>
  </GridItem>
  <GridItem span={12} lg={7} className="grid-modifier-first">
    <Grid>
      <GridItem span={4} xl={3}>
        <div className="colors-theme--color-icons"></div>
      </GridItem>
      <GridItem span={8}>
        <h3>#72767B</h3>
        <p>Global CSS variable</p>
        <code>--pf-global--icon--Color--light</code>
      </GridItem>
    </Grid>
  </GridItem>
  <GridItem span={12} lg={5} className="grid-modifier-four">
    <Grid className="colors-in-context" style={{
      padding: "16px 32px",
      backgroundColor: "#fff"
    }}>
      <GridItem span={12}>
        <h3>Colors in context</h3>
        <p>Icon color is #72767B unless used in an alert.</p>
      </GridItem>
    </Grid>
  </GridItem>
  <GridItem span={12} className="grid-modifier-third">
    Learn more about <Link to="/design-guidelines/styles/icons" className="pf-m-link">icons</Link>.
  </GridItem>
</Grid>

<h2>Alert statuses</h2>

<Grid className="colors-theme--light grid-modifier" gutter="md" style={{marginTop: '24px'}}>
  <GridItem xs={12}>
    <h3>Success</h3>
  </GridItem>
  <GridItem span={12} lg={7} className="grid-modifier-first">
    <Grid>
      <GridItem span={4} xl={3}>
        <div className="colors-theme--color-alerts--success"></div>
      </GridItem>
      <GridItem span={8}>
        <h3>#92D400</h3>
        <p>Global CSS variable</p>
        <code>--pf-global--success-color--100</code>
      </GridItem>
    </Grid>
  </GridItem>
  <GridItem span={12} lg={7} className="grid-modifier-third">
    <Grid>
      <GridItem span={4} xl={3}>
        <div className="colors-theme--color-alerts--success-icon"></div>
      </GridItem>
      <GridItem span={8}>
        <h3>#486B00</h3>
        <p>Global CSS variable</p>
        <code>--pf-global--success-color--200</code>
      </GridItem>
    </Grid>
  </GridItem>
  <GridItem span={12} lg={5} rowSpan={2} className="grid-modifier-four">
    <Grid className="colors-in-context" style={{
      padding: "16px 32px",
      backgroundColor: "#fff"
    }}>
      <GridItem span={12}>
        <h3>Colors in context</h3>
        <Alert
          variant="success"
          title="Success -- ipsum dolor sit ame"
          action={<AlertActionCloseButton onClose={this.hideAlertTwo} />}
        />
        <p className="pf-u-mt-lg">Success alert color: --pf-global--success-color--100</p>
        <p>Success alert icon color: --pf-global--success-color--200</p>
      </GridItem>
    </Grid>
  </GridItem>
</Grid>

<Grid className="colors-theme--light grid-modifier" gutter="md" style={{marginTop: '24px'}}>
  <GridItem xs={12}>
    <h3>Information</h3>
  </GridItem>
  <GridItem span={12} lg={7} className="grid-modifier-first">
    <Grid>
      <GridItem span={4} xl={3}>
        <div className="colors-theme--color-alerts--info"></div>
      </GridItem>
      <GridItem span={8}>
        <h3>#73BCF7</h3>
        <p>Global CSS variable</p>
        <code>--pf-global--info-color--100</code>
      </GridItem>
    </Grid>
  </GridItem>
  <GridItem span={12} lg={7} className="grid-modifier-third">
    <Grid>
      <GridItem span={4} xl={3}>
        <div className="colors-theme--color-alerts--info-icon"></div>
      </GridItem>
      <GridItem span={8}>
        <h3>#004368</h3>
        <p>Global CSS variable</p>
        <code>--pf-global--info-color--200</code>
      </GridItem>
    </Grid>
  </GridItem>
  <GridItem span={12} lg={5} rowSpan={2} className="grid-modifier-four">
    <Grid className="colors-in-context" style={{
      padding: "16px 32px",
      backgroundColor: "#fff"
    }}>
      <GridItem span={12}>
        <h3>Colors in context</h3>
        <Alert
          variant="info"
          title="Info -- ipsum dolor sit ame"
          action={<AlertActionCloseButton onClose={this.hideAlertTwo} />}
        />
        <p className="pf-u-mt-lg">Info alert color: --pf-global--info-color--100</p>
        <p>Info alert icon color: --pf-global--info-color--200</p>
      </GridItem>
    </Grid>
  </GridItem>
</Grid>

<Grid className="colors-theme--light grid-modifier" gutter="md" style={{marginTop: '24px'}}>
  <GridItem xs={12}>
    <h3>Warning</h3>
  </GridItem>
  <GridItem span={12} lg={7} className="grid-modifier-first">
    <Grid>
      <GridItem span={4} xl={3}>
        <div className="colors-theme--color-alerts--warning"></div>
      </GridItem>
      <GridItem span={8}>
        <h3>#f0AB00</h3>
        <p>Global CSS variable</p>
        <code>--pf-global--warning-color--100</code>
      </GridItem>
    </Grid>
  </GridItem>
  <GridItem span={12} lg={7} className="grid-modifier-third">
    <Grid>
      <GridItem span={4} xl={3}>
        <div className="colors-theme--color-alerts--warning-icon"></div>
      </GridItem>
      <GridItem span={8}>
        <h3>#795600</h3>
        <p>Global CSS variable</p>
        <code>--pf-global--warning-color--200</code>
      </GridItem>
    </Grid>
  </GridItem>
  <GridItem span={12} lg={5} rowSpan={2} className="grid-modifier-four">
    <Grid className="colors-in-context" style={{
      padding: "16px 32px",
      backgroundColor: "#fff"
    }}>
      <GridItem span={12}>
        <h3>Colors in context</h3>
        <Alert
          variant="warning"
          title="Warning -- ipsum dolor sit ame"
          action={<AlertActionCloseButton onClose={this.hideAlertTwo} />}
        />
        <p className="pf-u-mt-lg">Warning alert color: --pf-global--warning-color--100</p>
        <p>Warning alert icon color: --pf-global--warning-color--200</p>
      </GridItem>
    </Grid>
  </GridItem>
</Grid>

<Grid className="colors-theme--light grid-modifier" gutter="md" style={{marginTop: '24px'}}>
  <GridItem xs={12}>
    <h3>Danger</h3>
  </GridItem>
  <GridItem span={12} lg={7} className="grid-modifier-first">
    <Grid>
      <GridItem span={4} xl={3}>
        <div className="colors-theme--color-alerts--danger"></div>
      </GridItem>
      <GridItem span={8}>
        <h3>#C9190B</h3>
        <p>Global CSS variable</p>
        <code>--pf-global--danger-color--100</code>
      </GridItem>
    </Grid>
  </GridItem>
  <GridItem span={12} lg={7} className="grid-modifier-third">
    <Grid>
      <GridItem span={4} xl={3}>
        <div className="colors-theme--color-alerts--danger-icon"></div>
      </GridItem>
      <GridItem span={8}>
        <h3>#470000</h3>
        <p>Global CSS variable</p>
        <code>--pf-global--danger-color--300</code>
      </GridItem>
    </Grid>
  </GridItem>
  <GridItem span={12} lg={5} rowSpan={2} className="grid-modifier-four">
    <Grid className="colors-in-context" style={{
      padding: "16px 32px",
      backgroundColor: "#fff"
    }}>
      <GridItem span={12}>
        <h3>Colors in context</h3>
        <Alert
          variant="danger"
          title="Danger -- ipsum dolor sit ame"
          action={<AlertActionCloseButton onClose={this.hideAlertTwo} />}
        />
        <p className="pf-u-mt-lg">Danger/critical alert color: --pf-global--danger-color--100</p>
        <p>Danger/critical alert icon color: --pf-global--danger-color--300</p>
      </GridItem>
    </Grid>
  </GridItem>
</Grid>

## Contrast ratios
<p>
  <a href="https://www.w3.org/WAI/standards-guidelines/wcag/new-in-21/" target="_blank" className="pf-m-link">Level AA in the Web Content Accessibility Guildelines 2.1</a> requires a contrast ratio of at least 4.5:1 for normal text and 3:1 for large text, and a contrast ratio of at least 3:1 for graphics and user interface components (such as form input borders).
</p>

Check color contrast between background color and text color using a <a href="https://color.a11y.com/?wc3" target="_blank" className="pf-m-link">WCAG AA-compliance tool.</a>

Make sure that, on hover, link texts provides ample contrast from both background color and from the default state of link text.
