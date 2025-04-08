import './../styles/layout.scss';
import { EducationContent } from './educatinContent';
import { Header } from './header';
import { SectionHeading } from './sectionHeading';

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
                    <p>
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
            </div>
        </div>
    );
};
