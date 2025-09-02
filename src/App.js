import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFan, faCircle, faUserAlt, faBriefcase, faHouseUser, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faDev, faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './App.css';

const Header = () => {
  return (
    <div className='header'>
      <div>KATE ASTRID</div>
      <div className='icon'>
        <FontAwesomeIcon icon={faFan} className='spinner' />
      </div>
    </div>
  );
};

const GeneralDescription = () => {
  return (
    <div className='general_description'>
      <div className='line_description'>
        <FontAwesomeIcon icon={faHouseUser} style={{ marginRight: '8px' }} />
        Amsterdam, The Netherlands
      </div>
      <div className='line_description'>
        <FontAwesomeIcon icon={faPhone} style={{ marginRight: '8px' }} />
        +31620681510
      </div>
      <div className='line_description'>
        <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '8px' }} />
        rational.astrid@gmail.com
      </div>
      <div className='line_description'>
        <FontAwesomeIcon icon={faLinkedin} style={{ marginRight: '8px' }} />
        <a href="https://linkedin.com/in/kate-astrid" className='grey'>kate-astrid</a>
      </div>
      <div className='line_description'>
        <FontAwesomeIcon icon={faGithub} style={{ marginRight: '8px' }} />
        <a href="https://github.com/KateAstrid" className='grey'>KateAstrid</a>
      </div>
      <div className='line_description'>
        <FontAwesomeIcon icon={faDev} style={{ marginRight: '8px' }} />
        <a href="https://dev.to/kate_astrid" className='grey'>kate_astrid</a>
      </div>
      <div className='line_description'>
        <FontAwesomeIcon icon={faInstagram} style={{ marginRight: '8px' }} />
        <a href="https://instagram.com/rational.astrid" className='grey'>@rational.astrid</a>
      </div>
    </div>
  );
};

const BasicInfo = () => {
  return (
    <div className='basic_info'>
      <div className='subtitle'>
        • DETAILS •
      </div>
        <GeneralDescription />
    </div>
  );
};

const education = [
  ['2010', 'Bachelor of Technical Translation'],
  ['2011', 'Bachelor of Land Management and Cadasters'],
  ['2013', 'Master of Land Management and Cadasters']
];

const ListOfEducation = () => {
  return (
    <ul>
      {education.map(([year, degree]) => (
        <li key={year} className='grey'>
          {year}, <span className='degree'>{degree}</span>
        </li>
      ))}
    </ul>
  );
};

const Interests = () => {
  return (
    <div className='interests'>
      <div className='subtitle'>
        • INTERESTS •
      </div>
        <div className='line_description'>
          photography, art, quantum physics,<br />
          math, cognitive science
        </div>
    </div>
  );
};

const App = () => {
  return (
    <div className='container'>
      <Header />
      <div className='columns'>
        <BasicInfo />
        <Interests />
      </div>

      <div className='main'>
        <div className='section_title'>
          <FontAwesomeIcon icon={faUserAlt} className='icon_profile' />
          <div>ABOUT ME</div>
        </div>
        <div className='description'>
          Motivated, dedicated, and always asking "why".
        </div>
        <div className='description'>My path:</div>
        <ul>
          <li>five years in cartography and geodesy;</li>
          <li>five years in fashion photography;</li>
          <li>since 2018 - deep in software development.</li>
        </ul>

        <div className='section_title education'>
          <FontAwesomeIcon icon={faBriefcase} className='icon_profile' />
          <div>EMPLOYMENT HISTORY</div>
        </div>
        <div className='job_title'>
          <div className='job_name'>Software engineer in "epilot GmbH"</div>
          <div className='grey job_city'>Cologne, Germany</div>
        </div>
        <div className='grey job_date'>05.2023-present</div>
        <div className='description'>
          The cloud platform for utilities, grid operators and solution providers.
          Supports the energy transition, optimizes and scales sales, service, grid and
          implementation processes.
        </div>
        <div className='description'>Used technologies: TypeScript, ReactJs, AWS, Playwright, Jest</div>
        <ul>
          <li>
            Crafting scalable front-end solutions that improved system flexibility
            and reliability.
          </li>
          <li>
            Leading the development of UI components, ensuring a consistent user
            experience and enhancing performance.
          </li>
          <li>
            Building no-code forms for effective data handling, improving user
            interaction and accuracy.
          </li>
          <li>
            Implementing end-to-end testing to ensure the reliability of
            applications, cutting down on issues after launch.
          </li>
          <li>
            Aiding in managing serverless backend solutions on AWS, enhancing system
            scalability and independence of maintenance.
          </li>
          <li>
            Streamlining package management in a monorepo setup, boosting build
            efficiency, and simplifying updates.
          </li>
          <li>
            Integrating CSS modules to unify styling approaches, enhancing both
            performance and developer ease of use.
          </li>
          <li>
            Working closely with UX designers, product managers, and backend
            developers to ensure seamless integration of front-end and back-end
          </li>
        </ul>
        <div className='job_title'>
          <div className='job_name'>Software engineer in "Superside"</div>
          <div className='grey job_city'>Wilmington, USA</div>
        </div>
        <div className='grey job_date'>11.2022-05.2023</div>
        <div className='description'>
          "Superside" is an American leading Creative-as-a-Service (CaaS) company that helps brands
          get great design and creative done at scale.
        </div>
        <div className='description'>Used technologies: TypeScript, ReactJs, ReactQuery, Jest</div>
        <ul>
          <li>
            Enhancing user experience and functionality by implementing new front-end features.
          </li>
          <li>
            Improving code maintainability and adhering to best practices by refactoring the
            existing codebase.
          </li>
          <li>
            Working collaboratively with developers and designers to align front-end development
            with project goals and objectives.
          </li>
          <li>Ensuring bug-free code through meticulous testing and debugging.</li>
          <li>
            Optimizing website performance via various techniques such as lazy loading, code
            splitting, and caching.
          </li>
        </ul>

        <div className='job_title'>
          <div className='job_name'>Frontend tech lead in "Lingwing" (part-time)</div>
          <div className='grey job_city'>Tbilisi, Georgia</div>
        </div>
        <div className='grey job_date'>08.2022-now</div>
        <div className='description'>
          "Lingwing" is a language web application that allows user to study multiple languages.
        </div>
        <div className='description'>Used technologies: TypeScript, ReactJs, NextJS</div>
        <ul>
          <li>
            Transforming LingWing's frontend by efficiently migrating Angular code to React +
            TypeScript.
          </li>
          <li>
            Analyzing and selecting appropriate libraries and tools for each project, boosting
            development efficiency and quality.
          </li>
          <li>
            Mentoring junior developers and delivered training sessions, upskilling the team and
            fostering a culture of continuous learning.
          </li>
          <li>
            Ensuring high-quality standards by conducting regular code reviews, providing
            constructive feedback, and implementing best practices.
          </li>
          <li>
            Fostering seamless collaboration with backend developers, resulting in the successful
            integration of front-end and back-end solutions.
          </li>
          <li>
            Collaborating with project managers and stakeholders, aligning all parties towards
            common goals and timely delivery within budget constraints.
          </li>
        </ul>

        <div className='job_title'>
          <div className='job_name'>Software developer at "Otravo"</div>
          <div className='grey job_city'>Amsterdam, Netherlands</div>
        </div>
        <div className='grey job_date'>07.2021-11.2022</div>
        <div className='description'>
          "Otravo" is a European travel organization. It owns a website that is an aggregator of
          travel packages.
        </div>
        <div className='description'>Used technologies: TypeScript, ReactJs, NextJS, ClojureJs</div>
        <ul>
          <li>
            Upgrading the front-end architecture from ClojureJs to TS, resulting in improved
            performance and user experience.
          </li>
          <li>
            Mentoring and training junior developers, promoting growth, and enabling successful
            project delivery.
          </li>
          <li>
            Implementing modularized components using NextJS, increasing development efficiency.
          </li>
          <li>
            Collaborating seamlessly with backend developers, contributing to launching new site
            pages on schedule.
          </li>
        </ul>

        <div className='job_title'>
          <div className='job_name'>Front end developer at "SmartAn" LLC</div>
          <div className='grey job_city'>Moscow, Russia</div>
        </div>
        <div className='grey job_date'>12.2020-06.2021</div>
        <div className='description'>
          "SmartAn" LLC is the first startup company in Russia that aggregates data for risk
          managers.
        </div>
        <div className='description'>Used technologies: TypeScript, ReactJs, Redux, NextJS</div>
        <ul>
          <li>
            Developing the frontend of Smartan's platform from scratch, leading to its successful
            entry into an American accelerator as the sole frontend developer on the team.
          </li>
          <li>
            Implementing internationalization features to enhance the user experience for a global
            audience.
          </li>
          <li>
            Collaborating with stakeholders to design and improve all pages, resulting in a visually
            appealing and user-friendly platform.
          </li>
        </ul>

        <div className='job_title'>
          <div className='job_name'>Front end developer at "Opora" LLC</div>
          <div className='grey job_city'>Moscow, Russia</div>
        </div>
        <div className='grey job_date'>08.2018-12.2020</div>
        <div className='description'>
          "Opora" LLC is a leader in producing and selling medical equipment in Russia.
        </div>
        <div className='description'>Used technologies: PHP, YII, JavaScript, VueJs</div>
        <ul>
          <li>
            Developing and maintaining frontend for two websites, serving both legal entities and
            individuals.
          </li>
          <li>
            Collaborating with the PHP backend team to optimize website performance and user
            experience.
          </li>
          <li>Streamlining the SCSS conversion process for improved workflow efficiency.</li>
          <li>
            Revamping the internal admin site, leading to increased productivity and streamlined
            processes.
          </li>
          <li>Modernizing outdated codebase through successful legacy code rewrite.</li>
        </ul>

        <div className='section_title education'>
          <FontAwesomeIcon icon={faHouseUser} className='icon_profile' />
          <div>EDUCATION</div>
        </div>
        <div className='education_title'>
          <div className='description job_name'>Voronezh State Agricultural University</div>
          <div className='grey job_city'>Voronezh, Russia</div>
        </div>
        <ListOfEducation />

        <div className='section_title education'>
          <FontAwesomeIcon icon={faCircle} className='icon_profile' />
          <div>CERTIFICATES</div>
        </div>
        <div className='description'>
          <div className='education_title'>
          <div className='description job_name'>AWS Cloud Quest: Serverless Developer</div>
            <span className='grey job_city'>Issued Mar 2024</span>
          </div>
          <a href="https://www.credly.com/badges/e81cc81a-6033-4526-ac70-c0a0f9fd5a76/linked_in_profile" className='grey'>show credentials</a>
          <div className='education_title'>
            <div className='description job_name'>AWS Cloud Quest: Solutions Architect</div>
            <span className='grey job_city'>Issued Feb 2024</span>
          </div>
          <a href="https://www.credly.com/badges/8ec27ea7-3fd9-446f-96b6-a841355f9d1d/linked_in_profile" className='grey'>show credentials</a>
          <div className='education_title'>
            <div className='description job_name'>AWS Cloud Quest: Cloud Practitioner</div>
            <span className='grey job_city'>Issued Dec 2023</span>     
          </div>
          <a href="https://www.credly.com/badges/5381a9b1-1029-4747-a3f2-361002492bfe/linked_in_profile" className='grey'>show credentials</a>
          <div className='education_title'>
            <div className='description job_name'>Datadog 101: Developer</div>
            <span className='grey job_city'>Issued Feb 2024</span>         
          </div>
          <a href="https://learn.datadoghq.com/certificates/mdj4xmnwcy" className='grey'>show credentials</a>
        </div>
      </div>
    </div>
  );
};

export default App;
