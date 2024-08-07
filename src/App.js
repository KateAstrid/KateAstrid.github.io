import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFan, faCircle, faUserAlt, faBriefcase, faCertificate, faSchool, faHome, faPhone, faMailBulk } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import { faGithub, faLinkedin, faDev, faInstagram } from '@fortawesome/free-brands-svg-icons';

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

const LeftTitle = ({ title }) => {
  return (
    <div className='section_title'>
      <FontAwesomeIcon icon={faCircle} className='icon_circle' />
      <div>{title}</div>
      <FontAwesomeIcon icon={faCircle} className='icon_circle' />
    </div>
  );
};


const Contacts = () => {
  return (
    <React.Fragment>
      <div className='line_description'>
      <FontAwesomeIcon icon={faHome} size='20' className='contact_icon'/>
        <span className='grey'>
          Amsterdam, The Netherlands
        </span>
      </div>
      <div className='line_description'>
      <FontAwesomeIcon icon={faPhone} size='20' className='contact_icon'/>
        <span className='grey'>
          +31620681510
        </span>
      </div>
      <div className='line_description'>
      <FontAwesomeIcon icon={faMailBulk} size='20' className='contact_icon'/>
        <span className='grey'>
          rational.astrid@gmail.com
        </span>
      </div>
      <div className='line_description'>
      <FontAwesomeIcon icon={faLinkedin} size='20' className='contact_icon'/>
        <a className='grey' href='https://www.linkedin.com/in/kate-astrid/'>
          kate-astrid
        </a>
      </div>
      <div className='line_description'>
      <FontAwesomeIcon icon={faGithub} size='20' className='contact_icon'/>
        <a className='grey' href='https://github.com/KateAstrid'>
          KateAstrid
        </a>
      </div>
      <div className='line_description'>
      <FontAwesomeIcon icon={faDev} size='20' className='contact_icon'/>
        <a className='grey' href='https://dev.to/kate_astrid'>
          kate_astrid
        </a>
      </div>
      <div className='line_description'>
      <FontAwesomeIcon icon={faInstagram} size='20' className='contact_icon'/>
        <a className='grey' href='https://www.instagram.com/rational.astrid/'>
          @rational.astrid
        </a>
      </div>
    </React.Fragment>
  );
};


const LeftColumn = () => {
  return (
    <div className='left_column'>
      <LeftTitle title='CONTACTS' />
      <div className='contacts'>
        <Contacts />
      </div>

    </div>
  );
};

const education = [
  ['2010', 'Bachelor of Technical Translation'],
  ['2011', 'Bachelor of Land Management and Cadastres'],
  ['2013', 'Master of Land Management and Cadastres']
];

const ListOfEducation = () => {
  return (
    <ul className='education_list'>
      {education.map(([year, degree]) => (
        <li key={year} className='grey'>
          {year}, <span className='degree'>{degree}</span>
        </li>
      ))}
    </ul>
  );
};

const RightColumn = () => {
  return (
    <div className='right_column'>
      <LeftTitle title='INTERESTS' />
      <div className='description'>
        <div className='line_description'>
          photography, art, quantum physics, math, cognitive science
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className='container'>
      <Header />
      <div className='columns'>
        <LeftColumn />
        <RightColumn />
      </div>

      <div className='main'>
        <div className='section_title'>
          <FontAwesomeIcon icon={faUserAlt} className='icon_profile' />
          <div>ABOUT ME</div>
        </div>
        <div className='description'>
          A motivated self-learner dedicated to developing clean, concise, and robust code.
          Continuously eager to expand and improve my skill set, demonstrating a strong commitment to ongoing personal and professional development.
        </div>
        <div className='description'>My way:</div>
        <ul>
          <li>four years in cartography and geodesy;</li>
          <li>five years in fashion photography;</li>
          <li>since 2018 - deep in software development.</li>
        </ul>

        <div className='section_title education'>
          <FontAwesomeIcon icon={faBriefcase} className='icon_profile' />
          <div>EMPLOYMENT HISTORY</div>
        </div>

        <div className='job_title'>
          <div className='job_name'>Software engineer in "epilot GmbH"</div>
          <div className='grey job_city'>Cologne, North Rhine-Westphalia, Germany</div>
        </div>
        <div className='grey job_date'>05.2023-present</div>
        <div className='description'>
          The cloud platform for utilities, grid operators and solution providers. Supports the energy transition, optimizes and scales sales, service, grid and implementation processes.
        </div>
        <div className='description'>Used technologies: TypeScript, ReactJs, AWS, Playwright, Jest</div>
        <ul>
          <li>
            Crafting scalable front-end solutions that improved system flexibility and reliability.
          </li>
          <li>
            Leading the development of UI components, ensuring a consistent user experience and enhancing performance.
          </li>
          <li>
            Building no-code forms for effective data handling, improving user interaction and accuracy.
          </li>
          <li>Implementing end-to-end testing to ensure the reliability of applications, cutting down on issues after launch.</li>
          <li>
            Aiding in managing serverless backend solutions on AWS, enhancing system scalability and independence of maintenance.
          </li>
          <li>
            Streamlining package management in a monorepo setup, boosting build efficiency, and simplifying updates.
          </li>
          <li>
            Integrating CSS modules to unify styling approaches, enhancing both performance and developer ease of use.
          </li>
          <li>
            Working closely with UX designers, product managers, and backend developers to ensure seamless integration of front-end and back-end functionality.
          </li>
          <li>
            Continuously optimizing web applications for speed and efficiency, improving response times and user satisfaction.
          </li>
        </ul>

        <div className='job_title'>
          <div className='job_name'>Software engineer in "Superside"</div>
          <div className='grey job_city'>Wilmington, Delaware, USA</div>
        </div>
        <div className='grey job_date'>11.2022-05.2023</div>
        <div className='description'>
          "Superside" is an American leading Creative-as-a-Service (CaaS) company that helps brands
          get great design and creative done at scale.
        </div>
        <div className='description'>Used technologies: TypeScript, ReactJs, ReactQuery, Jest</div>
        <ul>
          <li>
            Refactoring existing code to improve maintainability and adherence to best practices.
          </li>
          <li>
            Implementing new features to enhance the user experience and add new functionality.
          </li>
          <li>
            Collaborating with other developers and designers to ensure that the frontend was
            aligned with project goals and objectives.
          </li>
          <li>Testing and debugging code thoroughly to ensure it was free from bugs and errors.</li>
          <li>
            Optimizing performance through techniques such as lazy loading, code splitting, and
            caching.
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
          <li>Rewriting code from Angular to React + TypeScript.</li>
          <li>Choosing libraries and tools that are appropriate for the project.</li>
          <li>Training and mentoring less experienced developers.</li>
          <li>Conducting regular code reviews and providing feedback to improve code quality.</li>
          <li>
            Working with the backend team to ensure seamless integration of front-end and back-end
            code.
          </li>
          <li>
            Working closely with project managers and stakeholders to ensure that the project meets
            its goals and is delivered on time and on budget.
          </li>
        </ul>

        <div className='job_title'>
          <div className='job_name'>Software developer at "Otravo"</div>
          <div className='grey job_city'>Amsterdam, the Netherlands</div>
        </div>
        <div className='grey job_date'>07.2021-11.2022</div>
        <div className='description'>
          "Otravo" is a European travel organization. It owns a website that is an aggregator of
          travel packages.
        </div>
        <div className='description'>Used technologies: TypeScript, ReactJs, NextJS, ClojureJs</div>
        <ul>
          <li>Rewriting almost the whole front end from ClojureJs to TS.</li>
          <li>Modularizing components using NextJs.</li>
          <li>Training junior developers.</li>
          <li>Refactoring legacy code.</li>
          <li>
            Regularly communicating with backend developers to successfully launch new pages of the
            site.
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
            Creating a frontend for the platform from scratch right up to the platform's entry to
            the American accelerator being the only frontend developer in the team.
          </li>
          <li>Implementing internationalization.</li>
          <li>Working on the design of all pages.</li>
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
            Working with the frontend of two company sites - one for legal entities, one for
            individuals;
          </li>
          <li>Helping with the PHP backend.</li>
          <li>Converting all SASS to SCSS.</li>
          <li>Rewriting an internal admin site.</li>
          <li>Rewriting legacy code. </li>
        </ul>

        <div className='section_title education'>
          <FontAwesomeIcon icon={faCertificate} className='icon_profile' />
          <div>CERTIFICATES</div>
        </div>

        <div className='job_title'>
          <div className='job_name'>AWS Cloud Quest: Serverless Developer
          </div>
          <div className='grey job_city'>Issued Mar 2024</div>
        </div>
        <a className='grey job_date' href="https://www.credly.com/badges/e81cc81a-6033-4526-ac70-c0a0f9fd5a76/linked_in_profile">show credentials</a>

        <div className='job_title'>
          <div className='job_name'>AWS Cloud Quest: Solutions Architect
          </div>
          <div className='grey job_city'>Issued Feb 2024</div>
        </div>
        <a className='grey job_date' href="https://www.credly.com/badges/8ec27ea7-3fd9-446f-96b6-a841355f9d1d/linked_in_profile">show credentials</a>

        <div className='job_title'>
          <div className='job_name'>AWS Cloud Quest: Cloud Practitioner
          </div>
          <div className='grey job_city'>Issued Dec 2023</div>
        </div>
        <a className='grey job_date' href="https://www.credly.com/badges/5381a9b1-1029-4747-a3f2-361002492bfe/linked_in_profile">show credentials</a>

        <div className='job_title'>
          <div className='job_name'>Datadog 101: Developer
          </div>
          <div className='grey job_city'>Issued Feb 2024</div>
        </div>
        <a className='grey job_date' href="https://learn.datadoghq.com/certificates/mdj4xmnwcy">show credentials</a>


        <div className='section_title education'>
          <FontAwesomeIcon icon={faSchool} className='icon_profile' />
          <div>EDUCATION</div>
        </div>

        <div className='job_title'>
          <div className='job_name'>Voronezh State Agricultural University
          </div>
          <div className='grey job_city'>Voronezh, Russia</div>
        </div>
        <ListOfEducation />
      </div>




    </div>
  );
};

export default App;
