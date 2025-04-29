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
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with{' '}
                    </p>
                </div>
                <div className="col">
                    <SectionHeading title={'Education'} />
                    <EducationContent />
                </div>
                <div className="col">
                    <SectionHeading title={'Competencies'} />
                    <p className="m-0">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with
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
            </div>
        </div>
    );
};
