import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFan, faCircle, faUserAlt, faBriefcase, faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import './App.css';

const Header = () => {
    return (
        <div className="header">
            <div>CATHERINE ASTRID</div>
            <div className="icon">
                <FontAwesomeIcon icon={faFan} className="spinner"/>
            </div>
        </div>
    )
}

const LeftTitle = ({ title }) => {
    return (
        <div className="section_title parts_title">
            <FontAwesomeIcon icon={faCircle} className="icon_circle"/>
            <div>{title}</div>
            <FontAwesomeIcon icon={faCircle} className="icon_circle"/>
        </div>
    )
};

const generalDescription = [
    'Amsterdam, The Netherlands',
    'rational.astrid@gmail.com',
    '+31620681510',
]

const GeneralDescription = () => {
    return (
        <React.Fragment>
            {generalDescription.map(element => {
                return (
                    <React.Fragment key={element}>
                        <div className="line_description">{element}</div>
                    </React.Fragment>
                )
            })}
            <div>GitHub: <a className="grey" href="https://github.com/KateAstrid">KateAstrid</a></div>
        </React.Fragment>
    )
};

const LeftColumn = () => {
    return (
        <div className="left_column">
            <img src="ava.jpg" alt="here has to be a pic" />
            <LeftTitle title="DETAILS" />
            <div className="parts_description media">
                <GeneralDescription />
            </div>
            <div className="subcolumns">
                <div className="left_subcolumn">
                    <LeftTitle title="SKILLS" />
                    <div className="parts_description">
                        <div className="line_description">JavaScript, TypeScript, PHP, ReactJs, Redux, VueJs, Material-UI, Yii, HTML, CSS, Git, Docker</div>
                    </div>
                </div>
                <div className="right_subcolumn">
                    <LeftTitle title="INTERESTS" />
                    <div className="parts_description">
                        <div className="line_description">photography, art, quantum physics, math, cognitive science</div>
                    </div>
                </div>
            </div>
        </div>
    )
};

const education = [
    ['2010', 'Bachelor of Technical Translation'],
    ['2011', 'Bachelor of Land Management and Cadastres'],
    ['2013', 'Master of Land Management and Cadastres'],
];

const ListOfEducation = () => {
    return (
        <ul className="education_list">
            {education.map(([year, degree]) => {
                return (
                    <div className="education_row" key={year}>
                        <li className="grey">{year}</li>
                        <div className="degree">{degree}</div>
                    </div>
                )
            })}
        </ul>
    )
};

const RightColumn = () => {
    return (
        <div className="right_column">
            <div className="section_title">
                <FontAwesomeIcon icon={faUserAlt} className="icon_profile"/>
                <div>ABOUT ME</div>
            </div>

            <div className="main_text">
                <div>From 2011 to 2015, I worked in the area of land cadastre, cartography, and geodesy. 
                    I was involved in digitizing maps and constructing multi-story monolithic buildings, 
                    working on site as a geodesist. I enjoyed the work and how useful it felt to society and hoped to 
                    make a great career there. But unfortunately, the construction industry in Russia turned out to be 
                    heavy with corruption and sexism, so I decided to change my profession. I always enjoyed physics 
                    and applying it to the world, so I decided to put my knowledge of optics and natural phenomena to 
                    become a photographer.
                </div>
                <div className="description">I taught myself all main photography principles such as color, light, 
                    and composition, and worked as a fashion photographer for five years until December 2019. 
                    My works were featured in magazines, and photography exhibitions in Europe. 
                    Despite that, further growth in photography depended too much on the subjective tastes of people 
                    and connections, and too little on applying knowledge to produce a great picture. 
                    A software engineer friend has inspired me to apply my knowledge of science and visual arts to a 
                    perfect fit: frontend development.
                </div>
                <div className="description">Starting from January 2020, I have been studying a growing stack of 
                    frontend technologies every day. By August I've already taught myself enough JavaScript, React, 
                    Redux, and other libraries and tools to get my first job as a middle software engineer. 
                    Since then I have learned a lot about real world codebases and team work.
                </div>
                <div className="description">Despite not having a lot of experience in IT, 
                    I have acquired a lot of desirable work qualities on my career journey:
                </div>
                <ul>
                    <li>coming from building construction, where mistakes may cost people lives, 
                        I have a high level of responsibility and discipline;</li>
                    <li>working with individuals while being a photographer taught me how to communicate effectively, 
                        make people comfortable, and understand their requirements, which is extremely valuable when 
                        collaborating with team members in IT.</li>
                </ul>
            </div>

            <div className="section_title">
                <FontAwesomeIcon icon={faBriefcase} className="icon_profile"/>
                <div>EMPLOYMENT HISTORY</div>
            </div>

            <div className="main_text">
                <div className="job_title">
                    <div className="job_name">Front end developer at "Opora" LLC</div>
                    <div className="grey job_city">Moscow, Russia</div> 
                </div>
                <div className="grey job_date">09.2020-12.2020</div>
                <div className="description">"Opora" LLC is a leader in producing and selling medical equipment in Russia.</div>
                <div className="description">As a first job, this vacancy turned out to be a tough nut to crack. 
                    I was supposed to work only on frontend in React, but in fact all frontend code was written in Vue.js 
                    templates which were generated by a PHP backend <span role="img" aria-label="face">😑</span>. I had to study a lot in progress including reading 
                    and occasionally modifying backend as well. During my time at the company, 
                    I converted all SASS to SCSS; refactored half of the existing frontend codebase while working on 
                    related tasks; successfully proposed to change the OS from Windows to Linux in the entire development 
                    department; found and fixed multiple pre-existing production bugs, including one which made it 
                    impossible to buy anything through the mobile version of the site. I also suggested to work on 
                    technical debt and to use more consistent Agile practices, such as properly planning big tasks and 
                    pair programming.
                </div>
                <div className="description">My core activities included:
                    <ul>
                        <li>development and maintenance front end of two company sites - one for legal entities, one for individuals;</li> 
                        <li>helping with PHP backend;</li>
                        <li>improving internal admin site;</li>
                        <li>rewriting legacy code. </li> 
                    </ul>
                </div>

                <div className="job_title">
                    <div className="job_name">Front end developer at "SmartAn" LLC</div>
                    <div className="grey job_city">Moscow, Russia</div>
                </div>
                <div className="grey job_date">01.2021-05.2021</div>
                <div className="description">"SmartAn" LLC is the first startup company in Russia which 
                    aggregates data for risk managers.  </div>
                <div className="description">Being the only frontend developer in the company, I created a 
                    frontend for the platform from scratch right up to the platform's entry to the American accelerator. 
                    The site was a single page application built with React and Redux using customized MaterialUI 
                    components. It’s purpose was to display complex financial information so I have learned a lot 
                    implementing the required pages and components. I have also supported internationalization, 
                    integrated it with HTTP backend, made proposals to backend developers to make API more consistent, 
                    and suggested design corrections to better comply with principles of UX/UI.
                </div>
            </div>

            <div className="section_title">
                <FontAwesomeIcon icon={faUserGraduate} className="icon_profile"/>
                <div>EDUCATION</div>
            </div>

            <div className="main_text">
                <div className="job_title">
                    <div className="job_name">Voronezh State Agricultural University</div>
                    <div className="grey job_city">Voronezh, Russia</div>
                </div>
                <ListOfEducation />
            </div>
        </div>
    )
};

const App = () => {
    return (
        <div className="container">
            <Header />
            <div className="columns">
                <LeftColumn />
                <RightColumn />
            </div>
        </div>
    );
};

export default App;
