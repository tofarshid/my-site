import './../styles/layout.scss';
import { EducationContent } from './educatinContent';
import { SectionHeading } from './sectionHeading';
import { CareerHeading } from './careerHeading';
import { CareerDesc } from './careerDesc';
import {
    deptOfCustomerService,
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
                    <p className="m-0">
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
                    <p className="m-0">
                        HTML, CSS, SASS XML, JSON, .NET, JavaScript, TypeScript,
                        Node, React/x, Vue/x
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
                            duration="10+ Yrs"
                        />
                        <CareerDesc list={simpleIdeas} />

                        <CareerHeading
                            jobTitle="Senior Developer"
                            orgTitle="Revenue NSW, Australia"
                            fromAndTo="Jul 2022 - Jun 2024"
                            duration="2.5 Yrs"
                        />
                        <CareerDesc list={revenueNSW} />

                        <CareerHeading
                            jobTitle="Senior Frontend Engineer"
                            orgTitle="Department of Customer Service NSW, Australia"
                            fromAndTo="Nov 2021 - Apr 2022"
                            duration="6 months"
                        />
                        <CareerDesc list={deptOfCustomerService} />

                        <CareerHeading
                            jobTitle="Full Stack Developer"
                            orgTitle="TAFE NSW, Australia"
                            fromAndTo="Jun 2019 - Oct 2021"
                            duration="6 months"
                        />
                        <CareerDesc list={TAFENSW} />
                    </div>
                </div>
                <div className="col">
                    <SectionHeading title="Early Career 2006 - 2014" />
                    <p>
                        Senior Programmer, Senior Analyst Programmer, Analyst
                        Programmer, Database Developer
                    </p>
                </div>
                <div className="col" style={{ marginBottom: '150px' }}>
                    <small>References available on Request</small>
                </div>
            </div>
        </div>
    );
};
