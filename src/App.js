import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFan,
  faCircle,
  faUser,
  faBriefcase,
  faHouseUser,
  faPhone,
  faEnvelope,
  faMicrophone,
  faHandshake
} from '@fortawesome/free-solid-svg-icons';
import { faDev, faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './App.css';

const iconGap = { marginRight: '8px' };

const ExternalLink = ({ href, className = 'grey', children }) => (
  <a href={href} className={className} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

const SectionHeader = ({ icon, education, children }) => (
  <div className={education ? 'section_title education' : 'section_title'}>
    <FontAwesomeIcon icon={icon} className="icon_profile" />
    <div>{children}</div>
  </div>
);

const Header = () => (
  <div className="header">
    <div>KATE ASTRID</div>
    <div className="icon">
      <FontAwesomeIcon icon={faFan} className="spinner" />
    </div>
  </div>
);

const contactRows = [
  { key: 'place', icon: faHouseUser, content: 'Amsterdam, The Netherlands' },
  { key: 'phone', icon: faPhone, content: '+31620681510' },
  { key: 'email', icon: faEnvelope, content: 'rational.astrid@gmail.com' },
  {
    key: 'linkedin',
    icon: faLinkedin,
    content: <ExternalLink href="https://linkedin.com/in/kate-astrid">kate-astrid</ExternalLink>
  },
  {
    key: 'github',
    icon: faGithub,
    content: <ExternalLink href="https://github.com/KateAstrid">KateAstrid</ExternalLink>
  },
  {
    key: 'devto',
    icon: faDev,
    content: <ExternalLink href="https://dev.to/kate_astrid">kate_astrid</ExternalLink>
  },
  {
    key: 'instagram',
    icon: faInstagram,
    content: <ExternalLink href="https://instagram.com/rational.astrid">@rational.astrid</ExternalLink>
  }
];

const GeneralDescription = () => (
  <div className="general_description">
    {contactRows.map(({ key, icon, content }) => (
      <div key={key} className="line_description">
        <FontAwesomeIcon icon={icon} style={iconGap} />
        {content}
      </div>
    ))}
  </div>
);

const BasicInfo = () => (
  <div className="basic_info">
    <div className="subtitle">• DETAILS •</div>
    <GeneralDescription />
  </div>
);

const publicationSections = [
  {
    heading: 'Engineering & Developer Experience',
    items: [
      ['From Chaos to Clarity: Fixing Our Monorepo', 'https://dev.to/epilot/from-chaos-to-clarity-fixing-our-monorepo-2bih'],
      ['How to Maintain the Performance of a React Application on a Daily Basis', 'https://dev.to/epilot/how-to-maintain-the-performance-of-a-react-application-on-a-daily-basis-304k']
    ]
  },
  {
    heading: 'Systems Thinking & Developer Mindset',
    items: [
      ['Ten Obstacles to Systems Thinking', 'https://dev.to/kate_astrid/ten-obstacles-to-systems-thinking-540l'],
      ['Common Cognitive Biases That May Affect Us as Developers', 'https://dev.to/kate_astrid/common-cognitive-biases-that-may-affect-us-as-developers-1gkm'],
      ['Have You Heard About the Anterior Midcingulate Cortex?', 'https://dev.to/kate_astrid/have-you-heard-about-the-anterior-midcingulate-cortex-4dcd']
    ]
  },
  {
    heading: 'Talks',
    items: [
      ['Why Clean Code Matters', 'https://www.youtube.com/watch?v=faipEVXSkHk'],
      ['Why Performance-Driven Development Matters', 'https://www.youtube.com/watch?v=8VarnpkdQJ4&t=1012s']
    ]
  }
];

const education = [
  ['2010', 'Bachelor of Technical Translation'],
  ['2011', 'Bachelor of Land Management and Cadasters'],
  ['2013', 'Master of Land Management and Cadasters']
];

const ListOfEducation = () => (
  <ul>
    {education.map(([year, degree]) => (
      <li key={year} className="grey">
        {year}, <span className="degree">{degree}</span>
      </li>
    ))}
  </ul>
);

const Interests = () => (
  <div className="interests">
    <div className="subtitle">• INTERESTS •</div>
    <div className="line_description">
      photography, art, mathematics,
      <br />
      quantum physics, cognitive science
    </div>
  </div>
);

const jobs = [
  {
    key: 'cogram',
    name: 'Senior Product Engineer at "Cogram"',
    city: 'Berlin, Germany',
    date: '12.2025-present · 5 mos',
    intros: [
      "Founded in 2021, Cogram is the leading AI platform for architects, engineers, and builders. We're a deeply technical, focused team. We iterate quickly and work closely with customers—with a sharp eye for real problems and the discipline to solve them."
    ],
    tech: null,
    bullets: [
      'Built and iterated on product features in a small, highly technical team, with a strong focus on clarity and simplicity.',
      'Worked across the entire stack, contributing to both product direction and technical implementation.',
      'Regularly hosted weekly meetings, retrospectives, and knowledge-sharing sessions, improving shared understanding across the team.',
      'Contributed to a culture of open discussion and continuous learning in a fast-moving startup environment.'
    ]
  },
  {
    key: 'epilot',
    name: 'Software engineer in "epilot GmbH"',
    city: 'Cologne, Germany',
    date: '05.2023-11.2025 · 2 yrs 6 mos',
    intros: [
      'The cloud platform for utilities, grid operators and solution providers. Supports the energy transition, optimizes and scales sales, service, grid and implementation processes.'
    ],
    tech: 'Used technologies: TypeScript, ReactJs, Vite, Vitest, Playwright, AWS, CSS modules',
    bullets: [
      'Led the infrastructural transformation of one of our important front-end repositories by changing build tools and the monorepo setup, helping teams deliver faster (switched from Craco, tsup, tsdx, and tsx to Vite).',
      'Led a multi-month effort to remove MUI and migrate to a custom styling system based on design tokens and lightweight primitives, significantly reducing bundle size and improving performance',
      'Implemented end-to-end testing into CI/CD pipeline using Playwright, migrated unit tests from Jest to Vitest.',
      'Collaborated in several cross-team projects in customer-facing features, security, and design systems.',
      'Hosted company demos, onboarded new developers, organized team building activities, participated in podcasts, etc.'
    ]
  },
  {
    key: 'superside',
    name: 'Software engineer in "Superside"',
    city: 'Wilmington, USA',
    date: '11.2022-05.2023 · 6 mos',
    intros: [
      '"Superside" is an American leading Creative-as-a-Service (CaaS) company that helps brands get great design and creative done at scale.'
    ],
    tech: 'Used technologies: TypeScript, ReactJs, ReactQuery, Jest',
    bullets: [
      'Improved frontend performance and maintainability through refactoring and modern patterns.',
      'Worked closely with design and backend teams to deliver user-facing features.'
    ]
  },
  {
    key: 'lingwing',
    name: 'Frontend Tech Lead',
    city: 'Tbilisi, Georgia · Part-time',
    date: 'Jul 2022 - Apr 2023 · 10 mos',
    intros: [
      '"Lingwing" is a language web application that allows user to study multiple languages.'
    ],
    tech: 'Used technologies: TypeScript, ReactJs, NextJS',
    bullets: [
      'Analyzed and selected appropriate libraries and tools for each project to speed up development and improve user experience.',
      'Mentored junior developers and delivered training sessions, upskilling the team and fostering a culture of continuous learning.',
    ]
  },
  {
    key: 'otravo',
    name: 'Software developer at "Otravo"',
    city: 'Amsterdam, The Netherlands',
    date: '07.2021-11.2022 · 1 yr 4 mos',
    intros: [
      '"Otravo" is a European travel organization. It owns a website that is an aggregator of travel packages.'
    ],
    tech: 'Used technologies: TypeScript, ReactJs, NextJS, ClojureJs',
    bullets: [
      'Upgraded the front-end architecture from ClojureJs to TS, resulting in improved performance and user experience.',
      'Mentored junior developers, helped them grow, and enabled successful project delivery.',
    ]
  },
  {
    key: 'smartan',
    name: 'Front end developer at "SmartAn" LLC',
    city: 'Moscow, Russia',
    date: '12.2020-06.2021 · 7 mos',
    intros: [
      '"SmartAn" LLC is the first startup company in Russia that aggregates data for risk managers.'
    ],
    tech: 'Used technologies: TypeScript, ReactJs, Redux, NextJS',
    bullets: [
      "Developed the frontend of Smartan's platform from scratch, leading to its successful entry into an American accelerator as the sole frontend developer on the team.",
      'Collaborated with stakeholders to design and improve all pages, resulting in a visually appealing and user-friendly platform.'
    ]
  },
  {
    key: 'opora',
    name: 'Front end developer at "Opora" LLC',
    city: 'Moscow, Russia',
    date: '08.2018-12.2020 · 2 yrs 4 mos',
    intros: ['"Opora" LLC is a leader in producing and selling medical equipment in Russia.'],
    tech: 'Used technologies: PHP, YII, JavaScript, VueJs',
    bullets: [
      'Developed and maintained frontend for two websites, serving both legal entities and individuals.',
      'Collaborated with the PHP backend team to optimize website performance and user experience.',
    ]
  }
];

const certificates = [
  {
    name: 'AWS Cloud Quest: Serverless Developer',
    issued: 'Issued Mar 2024',
    url: 'https://www.credly.com/badges/e81cc81a-6033-4526-ac70-c0a0f9fd5a76/linked_in_profile'
  },
  {
    name: 'AWS Cloud Quest: Solutions Architect',
    issued: 'Issued Feb 2024',
    url: 'https://www.credly.com/badges/8ec27ea7-3fd9-446f-96b6-a841355f9d1d/linked_in_profile'
  },
  {
    name: 'AWS Cloud Quest: Cloud Practitioner',
    issued: 'Issued Dec 2023',
    url: 'https://www.credly.com/badges/5381a9b1-1029-4747-a3f2-361002492bfe/linked_in_profile'
  },
  {
    name: 'Datadog 101: Developer',
    issued: 'Issued Feb 2024',
    url: 'https://learn.datadoghq.com/certificates/mdj4xmnwcy'
  }
];

const JobHistory = () =>
  jobs.map((job) => (
    <React.Fragment key={job.key}>
      <div className="job_title">
        <div className="job_name">{job.name}</div>
        <div className="grey job_city">{job.city}</div>
      </div>
      <div className="grey job_date">{job.date}</div>
      {job.intros.map((text, i) => (
        <div key={i} className="description">
          {text}
        </div>
      ))}
      {job.tech ? <div className="description">{job.tech}</div> : null}
      {job.bullets.length > 0 ? (
        <ul>
          {job.bullets.map((text, i) => (
            <li key={i}>{text}</li>
          ))}
        </ul>
      ) : null}
    </React.Fragment>
  ));

const App = () => (
  <div className="container">
    <Header />
    <div className="columns">
      <BasicInfo />
      <Interests />
    </div>

    <div className="main">
      <SectionHeader icon={faUser} education={false}>
        ABOUT ME
      </SectionHeader>
      <div className="description">Motivated, curious, and always asking &quot;why&quot;.</div>
      <div className="description">
        I started in cartography and geodesy, moved into fashion photography, and I&apos;ve worked in
        software development since 2018.
      </div>
      <div className="description">
        Across all of these, one thing stayed constant: breaking down complex systems and making them
        easier to understand.
      </div>
      <div className="description">
        Today, I&apos;m particularly interested in improving developer experience, simplifying technical
        concepts, and helping others navigate complex systems.
      </div>

      <SectionHeader icon={faMicrophone} education>
        PUBLICATIONS & SPEAKING
      </SectionHeader>
      <div className="publications_groups">
        {publicationSections.map(({ heading, items }) => (
          <React.Fragment key={heading}>
            <div className="publications_subheading">{heading}</div>
            <ul>
              {items.map(([title, url]) => (
                <li key={url}>
                  <ExternalLink href={url}>{title}</ExternalLink>
                </li>
              ))}
            </ul>
          </React.Fragment>
        ))}
      </div>

      <SectionHeader icon={faBriefcase} education>
        EMPLOYMENT HISTORY
      </SectionHeader>
      <JobHistory />

      <SectionHeader icon={faCircle} education>
        CERTIFICATES
      </SectionHeader>
      <div className="description">
        {certificates.map((c) => (
          <div key={c.url} className="education_title">
            <ExternalLink href={c.url} className="description job_name grey">
              {c.name}
            </ExternalLink>
            <span className="grey job_city">{c.issued}</span>
          </div>
        ))}
      </div>

      <SectionHeader icon={faHandshake} education>
        VOLUNTEERING
      </SectionHeader>
      <div className="job_title">
        <ExternalLink
          href="https://adplist.org/mentors/kate-astrid"
          className="description job_name grey"
        >
          Mentor at ADPList
        </ExternalLink>
        <div className="grey job_city">2023–present</div>
      </div>
      <div className="description">
        Mentoring people in web development and personal growth, helping them build careers in tech
        and feel more confident.
      </div>

      <SectionHeader icon={faHouseUser} education>
        EDUCATION
      </SectionHeader>
      <div className="education_title">
        <div className="description job_name">Voronezh State Agricultural University</div>
        <div className="grey job_city">Voronezh, Russia</div>
      </div>
      <ListOfEducation />
    </div>
  </div>
);

export default App;
