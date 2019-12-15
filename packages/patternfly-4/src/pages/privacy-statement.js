import React from 'react';
import { SideNavLayout } from 'gatsby-theme-patternfly-org/layouts';
import { PageSection, PageSectionVariants } from '@patternfly/react-core';
import './privacy-statement.css';

const PrivacyStatement = ({ location }) => (
  <SideNavLayout location={location} hideSideNav>
    <PageSection
      variant={PageSectionVariants.light}
      className="ws-section ws-privacy-policy pf-c-content"
    >
      <h1 className="pf-u-mb-lg ws-title">Privacy Statement for the PatternFly Project</h1>
      <hr/>

      <h2 className="pf-u-mb-lg ws-title">Scope of This Notice</h2>
      <hr/>

      <p className="ws-mdx-p">This Privacy Statement is intended to describe the PatternFly project’s privacy practices and provide information about the choices you have regarding the ways in which information collected by the PatternFly Project is used and disclosed. For convenience, the PatternFly Project is referred to in this document as "PatternFly".</p>

      <h2 className="pf-u-mb-lg ws-title">Our Commitment to Privacy</h2>
      <hr/>

      <p className="ws-mdx-p">At PatternFly, your privacy is important to us. To better protect your privacy, we have provided this Statement explaining our information practices and the choices you can make about the way your personal information is collected, used and disclosed. To make this Statement easy to find, we have made it available on our homepage and at every location where personally-identifiable information may be requested.</p>

      <h2 className="pf-u-mb-lg ws-title">The Information We Collect</h2>
      <hr/>

      <p className="ws-mdx-p">This Privacy Statement applies to all information collected by or submitted to PatternFly, including personal data. "Personal data" is data that can be used to identify an individual.
      PatternFly collects personal data when:</p>
      <ul>
        <li>you create a user account on our forum;</li>
        <li>you participate in surveys and evaluations;</li>
        <li>you submit questions or comments to us.</li>
      </ul>
      <p className="ws-mdx-p">PatternFly may also collect personal data from individuals (with their consent) at conventions, trade shows and expositions.
      The types of personal data collected may include (but are not limited to):</p>
      <ul>
        <li>your first and last name;</li>
        <li>your title and your company's name;</li>
        <li>your country code;</li>
        <li>your e-mail address;</li>
        <li>your telephone number;</li>
        <li>any other identifier that permits PatternFly to make physical or online contact with you;</li>
        <li>any information that PatternFly collects online from you and maintains in association with your account, such as:</li>
        <li>your IP address</li>
        <li>the location of your IP address</li>
        <li>your language preference,</li>
        <li>your timezone,</li>
        <li>Your GitHub username</li>
        <li>your affiliation(s).</li>
      </ul>

      <h2 className="pf-u-mb-lg ws-title">Publicly Available Personal Data</h2>
      <hr/>

      <p className="ws-mdx-p">In keeping with the open nature and spirit of PatternFly, some personal data attached to PatternFly accounts is made public by default. Specifically:</p>
      <ul>
        <li>your first and last name;</li>
        <li>your country code;</li>
        <li>your e-mail address;</li>
        <li>your language preference;</li>
        <li>your SSH public key;</li>
        <li>your timezone;</li>
        <li>your geographic coordinates (if defined);</li>
        <li>your affiliations (if defined).</li>
      </ul>

      <p className="ws-mdx-p">If you wish for this information to be kept private, you can opt-out of displaying this information publicly in your <a href="https://forum.patternfly.org/">PatternFly</a> forum account preferences. If you choose to opt-out, PatternFly will still have access to this information, but it will not be displayed to others, and will be considered Private. The only exception to this is for your email address, which may still be visible in some PatternFly services such as Bugzilla.</p>

      <h2 className="pf-u-mb-lg ws-title">Using (Processing) Your Personal Data</h2>
      <hr/>

      <p className="ws-mdx-p">PatternFly uses the personal data you provide to:</p>
      <ul>
        <li>create and maintain your accounts;</li>
        <li>identify and authenticate you;</li>
        <li>attribute data and content you produce directly and indirectly in our public-facing services;</li>
        <li>answer your questions;</li>
        <li>send you information;</li>
        <li>for research activities, including the production of statistical reports (such aggregated information is not used to contact the subjects of the report);</li>
        <li>send you surveys.</li>
      </ul>
      <p className="ws-mdx-p">We also use this personal data to provide you with information related to your account and the products or services you acquire from us, to better understand your needs and interests, to improve our service, to personalize communications, and to comply with or fulfill any contractual obligations to you. It is in PatternFly’s legitimate business interests to provide you with the information, communications, and services you request; to create a public record of the data and content produced by PatternFly’s services; and to maintain the integrity of that data and content for historical, scientific, and research purposes.</p>

      <h2 className="pf-u-mb-lg ws-title">Sharing Your Personal Data</h2>
      <hr/>

      <p className="ws-mdx-p">Unless you consent, PatternFly will never process or share the personal data you provide to us except as described below.</p>
      <p className="ws-mdx-p">PatternFly may disclose your personal data to third parties under any of the following circumstances:</p>

      <ul>
        <li>Your publicly available personal data in the PatternFly account system, as described above, is accessible by anyone unless you, as the account holder, opt out as already described in this Privacy Statement.</li>
        <li>As required to provide service, and for e-mail housing (as a consequence of uses already described in this Privacy Statement). It is in PatternFly’s legitimate business interest to provide all users an accurate record of data and content provided by PatternFly’s services, and to maintain the integrity of that data and content for historical, scientific, and research purposes. This data and content may include but is not limited to email, code changes, comments, and artifacts.</li>
        <li>As required by law (such as responding to a valid subpoena, warrant, audit, or agency action, or to prevent fraud).</li>
        <li>For research activities, including the production of statistical reports (such aggregated information is used to describe our services and is not used to contact the subjects of the report).</li>
      </ul>
        
      <h2 className="pf-u-mb-lg ws-title">Receiving E-Mail</h2>
      <hr/>

      <p className="ws-mdx-p">PatternFly may send you e-mail about your account, to inform you of important upcoming PatternFly events (e.g. elections), or in response to your questions. For your protection, PatternFly may contact you in the event that we find an issue that requires your immediate attention. PatternFly processes your personal data in these cases to fulfill and comply with its contractual obligations to you, to provide the services you have requested, and to ensure the security of your account.</p>

      <h2 className="pf-u-mb-lg ws-title">Cookies and Other Browser Information</h2>
      <hr/>

      <p className="ws-mdx-p">PatternFly's online services automatically capture IP addresses. We use IP addresses to help diagnose problems with our servers, to administer our website, and to help ensure the security of your interaction with our services. Your IP address is used to help identify you and your location, in order to provide you data and content from our services as quickly as possible. It is in PatternFly’s legitimate business interest to maximize the efficiency and effectiveness of its services for all users.</p>
      <p className="ws-mdx-p">As part of offering and providing customizable and personalized services, PatternFly uses cookies to store and sometimes track information about you. A cookie is a small amount of data that is sent to your browser from a Web server and stored on your computer's hard drive. All sections of [Community Website] where you are prompted to log in or that are customizable require your browser to accept cookies.
      Generally, we use cookies to:</p>
      
      <ol>
        <li>Remind us of who you are and to access your account information (stored on our computers) in order to provide a better and more personalized service. This cookie is set when you register or "sign in" and is modified when you "sign out" of our services.</li>
        <li>Estimate audience size. Each browser accessing PatternFly is given a unique cookie that is used to determine the extent of repeat usage and usage by a registered user versus by an unregistered user.</li>
        <li>Measure certain traffic patterns, which areas of PatternFly's network of websites you have visited, and your visiting patterns in the aggregate. We use this research to understand how our user's habits are similar or different from one another so that we can make each new experience on [Community Website] a better one. We may use this information to better personalize the content, banners, and promotions you and other users will see on our sites.</li>
      </ol>
      
      <p className="ws-mdx-p">If you do not want your personal information to be stored by cookies, you can configure your browser so that it always rejects these cookies or asks you each time if you accept them or not. However, you must understand that the use of cookies may be necessary to provide certain services, and choosing to reject cookies will reduce the performance and functionality of the site. Your browser documentation includes instructions explaining how to enable, disable or delete cookies at the browser level (usually located in the “Help”, “Tools” or “Edit” facility).</p>
      
      <h2 className="pf-u-mb-lg ws-title">Our Commitment to Data Security</h2>
      <hr/>

      <p className="ws-mdx-p">PatternFly trains its administrators on our privacy policy guidelines and makes our privacy policy available to our partners. Our website uses Secure Socket Layer (SSL) technology, which encrypts your personal data when you send your personal information on our website. In addition, PatternFly and its partners enter into confidentiality agreements which require that care and precautions be taken to prevent loss, misuse, or disclosure of your personal data.</p>
      
      <h2 className="pf-u-mb-lg ws-title">Public Forums Reminder</h2>
      <hr/>
      
      <p className="ws-mdx-p">PatternFly often makes chat rooms, forums, mailing lists, message boards, and/or news groups available to its users. Please remember that any information that is disclosed in these areas becomes public information. Exercise caution when deciding to disclose your personal data. Although we value individual ideas and encourage free expression, PatternFly reserves the right to take necessary action to preserve the integrity of these areas, such as removing any posting that is vulgar or inappropriate. It is in PatternFly’s legitimate business interests to provide all users an accurate record of data and content provided in the public forums it maintains and uses; to maintain the integrity of that data and content for historical, scientific, and research purposes; and to provide an environment for the free exchange of ideas relevant and constructive to the development and propagation of open source software.</p>
      
      <h2 className="pf-u-mb-lg ws-title">Our Commitment to Children's Online Privacy</h2>
      <hr/>

      <p className="ws-mdx-p">Out of special concern for children's privacy, PatternFly does not knowingly accept online personal information from children under the age of 13. PatternFly does not knowingly allow children under the age of 13 to become registered members of our sites. PatternFly does not knowingly collect or solicit personal information about children under 13.
      In the event that PatternFly ever decides to expand its intended site audience to include children under the age of 13, those specific web pages will, in accordance with the requirements of the Children's Online Privacy Protection Act (COPPA), be clearly identified and provide an explicit privacy notice addressed to children under 13. In addition, PatternFly will provide an appropriate mechanism to obtain parental approval, allow parents to subsequently make changes to or request removal of their children's personal information, and provide access to any other information as required by law.</p>
      
      <h2 className="pf-u-mb-lg ws-title">About Links to Other Sites</h2>
      <hr/>

      <p className="ws-mdx-p">This site contains links to other sites. PatternFly does not control the information collection of sites that can be reached through links from www.patternfly.org. If you have questions about the data collection procedures of linked sites, please contact these sites directly.</p>
      
      <h2 className="pf-u-mb-lg ws-title">Your Rights and Choices in the EEA</h2>
      <hr/>

      <p className="ws-mdx-p">Where the EU General Data Protection Regulation 2016/679 (“GDPR”) applies to the processing of your personal data, especially when you access the website from a country in the European Economic Area (“EEA”), you have the following rights, subject to some limitations, against PatternFly:</p>
      
      <ul class="ws-rights-choices">
        <li>The right to access your personal data;</li>
        <li>The right to rectify the personal data we hold about you;</li>
        <li>The right to erase your personal data;</li>
        <li>The right to restrict our use of your personal data;</li>
        <li>The right to object to our use of your personal data;</li>
        <li>The right to receive your personal data in a usable electronic format and transmit it to a third party (also known as the right of data portability); and</li>
        <li>The right to lodge a complaint with your local data protection authority.</li>
      </ul>

      <p className="ws-mdx-p">If you would like to exercise any of these rights, you may do so via our Personal Data Request Form. Please understand, however, the rights enumerated above are not absolute in all cases.</p>
      <p className="ws-mdx-p">Where the GDPR applies, you also have the right to withdraw any consent you have given to uses of your personal data. If you wish to withdraw consent that you have previously provided to PatternFly, you may do so via our Personal Data Request Form. However, the withdrawal of consent will not affect the lawfulness of processing based on consent before its withdrawal.</p>
      
      <h2 className="pf-u-mb-lg ws-title">[Optional] How to Access, Modify or Update Your Information</h2>
      <hr/>

      <p className="ws-mdx-p">PatternFly gives you the ability to access, modify or update your personal data at any time. You may log in and make changes to your login information (change your password), your contact information, your general preferences and your personalization settings. If necessary, you may also contact us and describe the changes you want made to the personal data you have previously provided using the Personal Data Requests Form.</p>
      <p className="ws-mdx-p">If you wish to remove your personal data from PatternFly, you may contact us using the Personal Data Requests Form and request that we remove this information from the PatternFly Account System. Other locations where you may have used your personal data as an identifier (e.g. Bugzilla comments, list postings in the archives, wiki change history, and spec changelogs) will not be altered.</p>
      
      <h2 className="pf-u-mb-lg ws-title">How to Contact Us</h2>
      <hr/>

      <p className="ws-mdx-p">If you have any questions about any of these practices or PatternFly's use of your personal information, please feel free to contact us on any of the channels listed on this page: <a href="https://www.patternfly.org/v4/get-in-touch">https://www.patternfly.org/v4/get-in-touch</a>.</p>
      <p className="ws-mdx-p">PatternFly will work with you to resolve any concerns you may have about this Statement.</p>
      
      <h2 className="pf-u-mb-lg ws-title">Changes to this Privacy Statement</h2>
      <hr/>
      
      <p className="ws-mdx-p">PatternFly reserves the right to change this Privacy Statement from time to time. If we do make changes, the revised Privacy Statement will be posted on the main project’s website. A notice will be posted on our homepage for 30 days whenever this privacy statement is changed in a material way.</p>
      <p className="ws-mdx-p">This Privacy Statement was last amended on September 27, 2019.</p>

    </PageSection>
  </SideNavLayout>
);

export default PrivacyStatement;
