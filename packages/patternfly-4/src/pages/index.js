import React from 'react';
import './index.scss';
import packageJson from '../../package.json';
import { Button } from 'reactstrap';

export default ({data, props}) =>
  (
    <div className="h-100 wpf-page">

      <div className="d-flex section dark-bg">
        <div className="p-5">
          <div className="mt-3 mb-3 logo"></div>
          <div className="pt-3 pb-3 hero-title">Build better experiences with repeatable, scalable design.</div>
          <div className="pt-3 pb-3 large-text">PatternFly is a design system for enterprise web applications, built and supported by a collaborative community of designers and developers.</div>
          <div className="pt-3 pb-3">Version: {packageJson.version}</div>
          <div>
            <span className="pr-3 large-text">Get Started for</span>
            <Button className="m-3" size="lg">Developers</Button>{' '}
            <Button className="m-3" size="lg">Designers</Button>{' '}
          </div>
        </div>
        <img src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"></img>
      </div>

      <div className="p-5 section light-bg">
        <div className="pt-3 pb-3 hero-title text-center">This is who we are.</div>
        <div className="pt-3 pb-3 large-text">PatternFly is an open source UI framework that offers code, patterns, styles, and community support to promote consistent design and delightful user experiences.</div>
        <div className="container-fluid p-3">
          <div className="row">
            <div className="col text-center">
              <img src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"></img>
              <div className="pt-3 sub-header">Modular & Flexible</div>
              <div className="pt-3 pb-3 body-text">Arrange self-contained components in any number of ways to build a variety of applications and interfaces.</div>
            </div>
            <div className="col text-center">
              <img src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"></img>
              <div className="pt-3 sub-header">Accessible Design</div>
              <div className="pt-3 pb-3 body-text">Take advantage of accessible markup and guidance, because building applications that work for everyone is just the right thing to do.</div>
            </div>
            <div className="col text-center">
              <img src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"></img>
              <div className="pt-3 sub-header">Built for teams, built to scale</div>
              <div className="pt-3 pb-3 body-text">Enable consistency and unify teams. PatternFly 4 is built to support both designers and developers, making it easier than ever to translate wireframes into pixel-perfect user experiences.</div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-5 section light-bg">
        <div className="pt-3 pb-3 hero-title">Meet PatternFly 4.</div>
        <div className="pt-3 pb-3 large-text">PatternFly is an open source UI framework that offers code, patterns, styles, and community support to promote consistent design and delightful user experiences.</div>
        <div className="container-fluid p-3">
          <div className="row pt-5 pb-5">
            <div className="col">
              <h3>Stay grounded with Foundations.</h3>
              <h5>Foundations provide you with guidelines to follow to make the most of PatternFly 4. Get acquainted with our approach to accessibility, content, style, and more.</h5>
              <Button color="link" className="">Explore Foundations -></Button>{' '}
            </div>
            <div className="col">
              <img src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"></img>
            </div>
          </div>
          <div className="row pt-5 pb-5">
            <div className="col">
              <img src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"></img>
            </div>
            <div className="col">
              <h3>Start building with Components.</h3>
              <h5>Components are the building blocks of the PatternFly design system. Mix and match components to create the solution that works best for your use case.</h5>
              <Button color="link" className="">Explore Components -></Button>{' '}
            </div>
          </div>
          <div className="row pt-5 pb-5">
            <div className="col">
              <h3>Get going with Prototypes.</h3>
              <h5>Prototypes are full page application experiences made up of multiple components. Prototypes should give users a strong vision for robust experiences they can create using PatternFly 4. Prototypes are not partial experiences like modals.</h5>
              <Button color="link" className="">Explore Prototypes -></Button>{' '}
            </div>
            <div className="col">
              <img src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"></img>
            </div>
          </div>
        </div>
      </div>

      <div className="p-5 text-center section dark-bg">
        <h2 className="p-4">Ready to contribute to PatternFly?</h2>
        <h3 className="p-4">PatternFly 4 is a community that thrives off of people like you contributing. To learn how to get started contributing, check out our Contribute page.</h3>
        <Button color="primary" className="">Get Started</Button>{' '}
      </div>

    </div>
  );
