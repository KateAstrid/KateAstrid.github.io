import React from 'react';
import './App.css';

const Header = () => {
    return (
        <div className="header">
            <div>CATHERINE ASTRID</div>
            <div className="icon">
                <i className='fas fa-fan spinner' />
            </div>
        </div>
    )
}

const LeftTitle = ({ title }) => {
    return (
        <div className="section_title parts_title">
            <i class="fas fa-circle icon_circle"></i>
            <div>{title}</div>
            <i class="fas fa-circle icon_circle"></i>
        </div>
    )
};

const generalDescription = [
    ['Amsterdam, The Netherlands'],
    ['rational.astrid@gmail.com'],
    ['+31620681510'],
]

const GeneralDescription = () => {
    return (
        <React.Fragment>
            {generalDescription.map(element => {
                return (
                    <React.Fragment key="element">
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
                    <div className="education_row" key="year">
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
                <i class="fas fa-user-alt icon_profile"></i>
                <div>PROFILE</div>
            </div>

            <div className="main_text">
                <div>From 2011 to 2015, I worked in the area of land cadastre, cartography and geodesy: I was involved in digitizing maps and building 
                    multi-storey monolithic buildings.
                    After that, I changed my profile to fashion photography and until December 2019 worked closely with it. An internal 
                    engineer with understanding of composition, science of color and art
                    pushed me to change my profession towards programming at the beginning of January 2020.
                    Since then I have been studying a growing stack of front end technologies every day.
                </div>
                <div className="description">Why is it worth taking me to work despite the fact that I do not have a lot of experience?</div>
                <ul>
                    <li>My weaknesses are the inability to stop working and increased discipline.</li>
                    <li>I am in love with studying, and I am planning to do it until the end of my days gradually becoming 
                        an increasingly valuable employee.</li>
                    <li>I have a calm attitude to any features of a human nature.</li>
                </ul>
                <div>Being person, who likes to make things efficient, functional, and beautiful, I am intrested in IT and everything in its orbit.
                    Knowledge of mathematics, the scientific method and the desire to be a cool programmer help me with it.
                </div>
            </div>

            <div className="section_title">
                <i class="fas fa-briefcase icon_profile"></i>
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
                    It was assumed that I would work with React, but in fact all the code was written on PHP+VueJs, 
                    which I had to study in the process. During my time at the company, 
                    I converted all SASS to SCSS; refactored half of the existing front end base; 
                    succesfully proposed to change the OS from Windows to Linux in the entire development department; 
                    found and fixed multiple preexisting production bugs, including one which made impossible to buy goods through the mobile version of the site. 
                    I also suggested to work on technical debt and to use more consistent agile, such as 
                    brainstorming big challenges and pair programming.
                </div>
                <div className="description">My core activities included:
                    <ul>
                        <li>development and maintenance front end of two company sites - the first for legal entities, 
                            the second for individuals;</li> 
                        <li>helping with PHP back end;</li>
                        <li>work with legacy code.</li> 
                    </ul>
                </div>

                <div className="job_title">
                    <div className="job_name">Front end developer at "SmartAn" LLC</div>
                    <div className="grey job_city">Moscow, Russia</div>
                </div>
                <div className="grey job_date">01.2021-05.2021</div>
                <div className="description">"SmartAn" LLC is the first startup company in Russia for aggregation data for risk managers.</div>
                <div className="description">Being the only front end developer in a company, I created from scratch front end 
                    for the platform right up to the platform's entry to the American accelerator. I have implemented all the required 
                    libraries, including Redux and in18n; integrated the project with the backend using axios; 
                    and also helped backend developers to catch bugs and suggested correction of design projects to better 
                    comply with the principles of UX/UI
                </div>
            </div>

            <div className="section_title">
                <i class="fas fa-user-graduate icon_profile"></i>
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
