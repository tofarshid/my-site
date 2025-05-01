import './../styles/layout.scss';
import { EducationContent } from './educatinContent';
import { SectionHeading } from './sectionHeading';
import { CareerHeading } from './careerHeading';
import { CareerDesc } from './careerDesc';
import {
    AEC,
    deptOfCustomerService,
    DeptOfEducation1,
    DeptOfEducation2,
    Equifax,
    KPMG,
    Optus,
    revenueNSW,
    simpleIdeas,
    TAFENSW,
} from './careerList';
export const Content = () => {
    return (
        <div className="py-3">
            <div className="row row-cols-1 g-4">
                <div className="col">
                    <SectionHeading title={'Professional Profile'} />
                    <p>
                        Senior Developer who has significantly contributed to
                        overall success of teams and projects engaged in
                        solution delivery. Retained for successive contract
                        renewals and extensions over ten years by Australian
                        government departments, employs cutting edge technology
                        and project management skills across the full
                        development lifecycle of web apps, mentoring and
                        supporting team members.
                    </p>
                    <p>
                        With a user-focused engineering approach and high
                        commitment to quality, is a proactive and critical
                        thinker, delivering results on time and within budget
                        while optimising resources, technology and processes.
                    </p>
                </div>
                <div className="col">
                    <SectionHeading title={'Education'} />
                    <EducationContent />
                </div>
                <div className="col">
                    <SectionHeading title={'Competencies'} />
                    <p>
                        Project Management, Agile Principles and Practice, Scrum
                        and Kanban Methodologies, Team Empowerment / Mentoring,
                        Cross Functional Collaboration, Problem Solving, Risk
                        Management/ Compliance, Analyses of Client Requirements,
                        Customer Focus/User Experience
                    </p>
                    <p>
                        HTML, CSS, SASS, XML, JSON, .NET, JavaScript,
                        TypeScript, PowerShell, Node, React/x, Vue/x, Storybook,
                        Angular, Redux, Tailwind, Bootstrap, Draw.io, Sketch,
                        Vector, Service Now, Jira, Fogbugz, Bamboo
                    </p>
                </div>
                <div className="col">
                    <SectionHeading
                        title={'Career Summary, Contracts and Projects'}
                    />
                    <div className="d-flex flex-column">
                        <CareerHeading
                            jobTitle="JavaScript Developer"
                            orgTitle="simpleideas.com.au"
                            fromAndTo="Jun 2016 - Current"
                            duration="9 Yrs"
                        />
                        <CareerDesc list={simpleIdeas} />

                        <CareerHeading
                            jobTitle="Senior Developer"
                            orgTitle="Revenue NSW, Australia"
                            fromAndTo="Jul 2022 - Jun 2024"
                            duration="2 Yrs"
                        />
                        <CareerDesc list={revenueNSW} />

                        <CareerHeading
                            jobTitle="Sr Frontend Engineer"
                            orgTitle="Service NSW"
                            fromAndTo="Nov 2021 - Apr 2022"
                            duration="6 months"
                        />
                        <CareerDesc list={deptOfCustomerService} />

                        <CareerHeading
                            jobTitle="Full Stack Developer"
                            orgTitle="TAFE NSW, Australia"
                            fromAndTo="Jun 2019 - Oct 2021"
                            duration="2.5 Yrs"
                        />
                        <CareerDesc list={TAFENSW} />

                        <CareerHeading
                            jobTitle="Full Stack Developer"
                            orgTitle="KPMG, Australia"
                            fromAndTo="Feb 2019 - Apr 2019"
                            duration="3 months"
                        />
                        <CareerDesc list={KPMG} />

                        <CareerHeading
                            jobTitle="Web Application Developer"
                            orgTitle="Department of Education, NSW, Australia"
                            fromAndTo="Jul 2018 - Dec 2018"
                            duration="6 months"
                        />
                        <CareerDesc list={DeptOfEducation1} />

                        <CareerHeading
                            jobTitle="Full Stack Developer"
                            orgTitle="Equifax, Australia"
                            fromAndTo="Oct 2017 - Mar 2018"
                            duration="6 months"
                        />
                        <CareerDesc list={Equifax} />

                        <CareerHeading
                            jobTitle="Frontend Web Developer"
                            orgTitle="Department of Education, NSW, Australia"
                            fromAndTo="Feb 2017 - Aug 2017"
                            duration="7 months"
                        />
                        <CareerDesc list={DeptOfEducation2} />

                        <CareerHeading
                            jobTitle="Web Developer"
                            orgTitle="Australian Electorate Commission, ACT, Australia"
                            fromAndTo="Aug 2016 - Jan 2017"
                            duration="6 months"
                        />
                        <CareerDesc list={AEC} />

                        <CareerHeading
                            jobTitle="Automation Engineer"
                            orgTitle="Optus, Australia"
                            fromAndTo="Nov 2015 - Jul 2016"
                            duration="9 months"
                        />
                        <CareerDesc list={Optus} />
                    </div>
                </div>
                <div className="col" style={{ marginBottom: '150px' }}>
                    <SectionHeading title="Early Career 2006 - 2014" />
                    <p>
                        Senior Programmer, Senior Analyst Programmer, Analyst
                        Programmer, Database Developer
                    </p>
                </div>
            </div>
        </div>
    );
};
