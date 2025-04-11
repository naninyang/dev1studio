import React, { useEffect, useState } from 'react';
import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styled from '@emotion/styled';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { DateProps, DescriptionProps, PrintProps, ResumeData } from '@/types';
import AnchorLink from '@/components/Anchor';
import { rem } from '@/styles/designSystem';
import { Container, ServicePage } from '@/styles/serviceSystem';
import MiscLeft from '@/images/misc/MiscLeft';
import styles from '@/styles/print.module.sass';

const Avatar = styled.div({
  width: rem(100),
  height: rem(100),
  borderRadius: rem(100),
  overflow: 'hidden',
});

const Resume: NextPage<PrintProps> = ({ mdx, resume }) => {
  const [resumeData, setResumeData] = useState<ResumeData>({ data: {} });

  useEffect(() => {
    setResumeData({ data: resume });
  }, [resume]);

  const careerDescription = (value: number | undefined): string => {
    switch (value) {
      case 1:
        return '1년 미만';
      case 2:
        return '1년 이상 3년 미만';
      case 3:
        return '3년 이상 5년 미만';
      case 4:
        return '5년 이상 10년 미만';
      case 5:
        return '10년 이상';
      default:
        return '경험 미선택';
    }
  };

  function RenderDescription({ description }: DescriptionProps) {
    if (description.includes('\n')) {
      return (
        <p>
          {description.split('\n').map((line: string, index: number) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </p>
      );
    } else {
      return <p>{description}</p>;
    }
  }

  function RenderActivityTime({ activity }: { activity: DateProps }) {
    const defaultEndTime = '18:00';
    const endTime = activity.end_time || defaultEndTime;

    if (activity.start_date === activity.end_date) {
      return (
        <time>
          {activity.start_date} {activity.start_time && activity.start_time}
          {' ~ '}
          {endTime}
        </time>
      );
    }

    if (!activity.end_date && !activity.end_time) {
      return (
        <time>
          {activity.start_date}
          {' ~ '}
          {'활동 중'}
        </time>
      );
    }

    if (activity.start_time && !activity.end_time) {
      return (
        <time>
          {activity.start_date} {activity.start_time && activity.start_time}
          {' ~ '}
          {endTime}
        </time>
      );
    }

    if (!activity.start_time && activity.end_time) {
      return (
        <time>
          {activity.start_date}
          {' ~ '}
          {activity.end_date}
        </time>
      );
    }

    return (
      <time>
        {activity.start_date} {activity.start_time && activity.start_time}
        {' ~ '}
        {activity.end_date && !activity.end_time ? `${activity.end_date}` : `${activity.end_date} ${activity.end_time}`}
      </time>
    );
  }

  const handleClose = () => {
    if (typeof window !== 'undefined') {
      window.close();
    }
  };

  return (
    <ServicePage>
      {resumeData.data ? (
        <Container className={styles['print-only']}>
          <Head>
            {resumeData.data.username_show ? <title>{resumeData.data.username} 이력서</title> : <title>이력서</title>}
          </Head>
          <button type="button" className="close-button" onClick={handleClose}>
            <MiscLeft style={{ width: `${16 / 16}rem`, height: `${16 / 16}rem` }} />
            <span>이전화면으로</span>
          </button>
          <h1>이력서</h1>
          <blockquote>
            <p>
              사용하실 때는 웹브라우저의 <code>인쇄</code> 기능을 사용해 주세요.
            </p>
            <pre>
              <code>Mac: command + p / Win: ctrl + p</code>
            </pre>
          </blockquote>
          {(resumeData.data?.essays?.length ?? 0) > 0 &&
            resumeData.data.essays &&
            resumeData.data.essays[0] &&
            resumeData.data.essays[0].show &&
            resumeData.data.username_show && (
              <section className={styles.essay}>
                <div className={styles['essay-header']}>
                  {resumeData.data.essays[0].avatar_path && (
                    <Avatar>
                      <Image src={resumeData.data.essays[0].avatar_path} alt="사진" width="100" height="100" />
                    </Avatar>
                  )}
                  <div className={styles['essay-header-summary']}>
                    <h2>{resumeData.data.essays[0].eng_name}</h2>
                    <h3>{resumeData.data.essays[0].eng_occupation}</h3>
                  </div>
                </div>
                {(resumeData.data?.references?.length ?? 0) > 0 && (
                  <div className={styles.reference}>
                    <ul>
                      {resumeData.data?.references?.[0].github && (
                        <li className={styles.github}>
                          <AnchorLink
                            href={`https://github.com/${resumeData.data?.references?.[0].github}`}
                          >{`/${resumeData.data?.references?.[0].github}`}</AnchorLink>
                        </li>
                      )}
                      {resumeData.data?.references?.[0].velog && (
                        <li className={styles.velog}>
                          <AnchorLink
                            href={`https://velog.io/@${resumeData.data?.references?.[0].velog}`}
                          >{`@${resumeData.data?.references?.[0].velog}`}</AnchorLink>
                        </li>
                      )}
                      {resumeData.data?.references?.[0].instagram && (
                        <li className={styles.instagram}>
                          <AnchorLink
                            href={`https://www.instagram.com/${resumeData.data?.references?.[0].instagram}`}
                          >{`/${resumeData.data?.references?.[0].instagram}`}</AnchorLink>
                        </li>
                      )}
                      {resumeData.data?.references?.[0].twitter && (
                        <li className={styles.twitter}>
                          <AnchorLink
                            href={`https://twitter.com/${resumeData.data?.references?.[0].twitter}`}
                          >{`/${resumeData.data?.references?.[0].twitter}`}</AnchorLink>
                        </li>
                      )}
                      {resumeData.data?.references?.[0].facebook && (
                        <li className={styles.facebook}>
                          <AnchorLink
                            href={`https://www.facebook.com/${resumeData.data?.references?.[0].facebook}`}
                          >{`/${resumeData.data?.references?.[0].facebook}`}</AnchorLink>
                        </li>
                      )}
                      {resumeData.data?.references?.[0].leadme && (
                        <li className={styles.leadme}>
                          <AnchorLink
                            href={`https://www.leadme.today/@${resumeData.data?.references?.[0].leadme}`}
                          >{`@${resumeData.data?.references?.[0].leadme}`}</AnchorLink>
                        </li>
                      )}
                      {resumeData.data?.references?.[0].brunch && (
                        <li className={styles.brunch}>
                          <AnchorLink
                            href={`https://brunch.co.kr/@${resumeData.data?.references?.[0].brunch}`}
                          >{`@${resumeData.data?.references?.[0].brunch}`}</AnchorLink>
                        </li>
                      )}
                      {resumeData.data?.references?.[0].tistory && (
                        <li className={styles.tistory}>
                          <AnchorLink
                            href={`https://${resumeData.data?.references?.[0].tistory}.tistory.com`}
                          >{`${resumeData.data?.references?.[0].tistory}.tistory.com`}</AnchorLink>
                        </li>
                      )}
                      {resumeData.data?.references?.[0].pinterest && (
                        <li className={styles.pinterest}>
                          <AnchorLink
                            href={`https://www.pinterest.co.kr/${resumeData.data?.references?.[0].pinterest}`}
                          >{`/${resumeData.data?.references?.[0].pinterest}`}</AnchorLink>
                        </li>
                      )}
                      {resumeData.data?.references?.[0].linkedin && (
                        <li className={styles.linkedin}>
                          <AnchorLink
                            href={`https://kr.linkedin.com/in/${encodeURIComponent(
                              resumeData.data?.references?.[0].linkedin,
                            )}`}
                          >{`in/${encodeURIComponent(resumeData.data?.references?.[0].linkedin)}`}</AnchorLink>
                        </li>
                      )}
                      {resumeData.data?.references?.[0].dribble && (
                        <li className={styles.dribble}>
                          <AnchorLink
                            href={`https://dribbble.com/${resumeData.data?.references?.[0].dribble}`}
                          >{`/${resumeData.data?.references?.[0].dribble}`}</AnchorLink>
                        </li>
                      )}
                      {resumeData.data?.references?.[0].postype && (
                        <li className={styles.postype}>
                          <AnchorLink
                            href={`https://${resumeData.data?.references?.[0].postype}.postype.com`}
                          >{`${resumeData.data?.references?.[0].postype}.postype.com`}</AnchorLink>
                        </li>
                      )}
                      {resumeData.data?.references?.[0].blog && (
                        <li className={styles.blog}>
                          <AnchorLink href={`${encodeURIComponent(resumeData.data?.references?.[0].blog)}`}>
                            {resumeData.data?.references?.[0].blog}
                          </AnchorLink>
                        </li>
                      )}
                      {resumeData.data?.references?.[0].homepage && (
                        <li className={styles.homepage}>
                          <AnchorLink href={`${encodeURIComponent(resumeData.data?.references?.[0].homepage)}`}>
                            {resumeData.data?.references?.[0].homepage}
                          </AnchorLink>
                        </li>
                      )}
                    </ul>
                  </div>
                )}
                <h4>
                  {resumeData.data.essays[0].title} {resumeData.data.username} 입니다
                </h4>
                <div className={styles['essay-bio']}>{mdx && <MDXRemote {...mdx} />}</div>
              </section>
            )}
          <section className={styles.profile}>
            <h2>인적사항</h2>
            <dl>
              {resumeData.data.username_show && (
                <>
                  <dt>성명</dt>
                  <dd>{resumeData.data.username}</dd>
                </>
              )}
              {resumeData.data.username_show && (
                <>
                  <dt>이메일</dt>
                  <dd>{resumeData.data.email}</dd>
                </>
              )}
              {resumeData.data.address && (
                <>
                  <dt>주소</dt>
                  <dd>{resumeData.data.address}</dd>
                </>
              )}
              {resumeData.data.telephone && (
                <>
                  <dt>연락처</dt>
                  <dd>{resumeData.data.telephone}</dd>
                </>
              )}
              {resumeData.data.veteran && (
                <>
                  <dt>보훈대상</dt>
                  <dd>{resumeData.data.veteran}</dd>
                </>
              )}
              {resumeData.data.disability && (
                <>
                  <dt>장애대상</dt>
                  <dd>{resumeData.data.disability}</dd>
                </>
              )}
            </dl>
          </section>
          {(resumeData.data?.military_services?.length ?? 0) > 0 &&
            resumeData.data.military_services &&
            resumeData.data.military_services[0].military_show && (
              <section className={styles.militery}>
                <h2>병역사항</h2>
                <dl>
                  <dt>병역여부</dt>
                  <dd>{resumeData.data.military_services[0].military_stats ? '군필' : '미필'}</dd>
                  {resumeData.data.military_services[0].military_stats === false ? (
                    <>
                      <dt>면제 사유</dt>
                      <dd>
                        {resumeData.data.military_services[0].conscription_exemption
                          ? resumeData.data.military_services[0].conscription_exemption
                          : '면제사유 미입력'}
                      </dd>
                    </>
                  ) : (
                    <>
                      <dt>군별</dt>
                      <dd>
                        {resumeData.data.military_services[0].military_group
                          ? resumeData.data.military_services[0].military_group
                          : '-'}
                      </dd>
                      <dt>병과</dt>
                      <dd>
                        {resumeData.data.military_services[0].branch
                          ? resumeData.data.military_services[0].branch
                          : '-'}
                      </dd>
                      <dt>계급</dt>
                      <dd>
                        {resumeData.data.military_services[0].rank ? resumeData.data.military_services[0].rank : '-'}
                      </dd>
                      <dt>병역</dt>
                      <dd>
                        {resumeData.data.military_services[0].discharge
                          ? resumeData.data.military_services[0].discharge
                          : '-'}
                      </dd>
                      <dt>복무기간</dt>
                      <dd>
                        {resumeData.data.military_services[0].start_date
                          ? resumeData.data.military_services[0].start_date
                          : '?'}
                        {' ~ '}
                        {resumeData.data.military_services[0].end_date
                          ? resumeData.data.military_services[0].end_date
                          : '복무 중'}
                      </dd>
                    </>
                  )}
                </dl>
              </section>
            )}
          {(resumeData.data?.educations?.length ?? 0) > 0 && (
            <section className={styles.education}>
              <h2>학력사항</h2>
              <ul className={styles.array}>
                {resumeData.data?.educations
                  ?.sort((a, b) => (a.start_date ?? '').localeCompare(b.start_date ?? ''))
                  .map((education) => (
                    <li key={education.id}>
                      <p>
                        <strong>
                          {education.school} {education.major} {education.degree} {education.stats}
                        </strong>{' '}
                        <span>
                          {education.start_date} ~ {education.end_date}
                        </span>
                      </p>
                      <dl>
                        <dt>분류</dt>
                        <dd>{education.category}</dd>
                      </dl>
                      {education.degree_num && (
                        <dl>
                          <dt>학위등록번호</dt>
                          <dd>{education.degree_num}</dd>
                        </dl>
                      )}
                    </li>
                  ))}
              </ul>
            </section>
          )}
          {(resumeData.data?.certificates?.length ?? 0) > 0 && (
            <section className={styles.certificate}>
              <h2>자격증</h2>
              <dl>
                {resumeData.data?.certificates
                  ?.sort((a, b) => (a.issue_date ?? '').localeCompare(b.issue_date ?? ''))
                  .map((certificate) => (
                    <div key={certificate.id}>
                      <div>
                        <dt>자격증명</dt>
                        <dd>{certificate.certificate_name}</dd>
                      </div>
                      <div>
                        <dt>발행처</dt>
                        <dd>{certificate.organization}</dd>
                      </div>
                      <div>
                        <dt>자격증번호</dt>
                        <dd>{certificate.certificate_num}</dd>
                      </div>
                      <div>
                        <dt>발행일자</dt>
                        <dd>{certificate.issue_date}</dd>
                      </div>
                    </div>
                  ))}
              </dl>
            </section>
          )}
          {(resumeData.data?.languages?.length ?? 0) > 0 && (
            <section className={styles.language}>
              <h2>외국어능력</h2>
              <dl>
                {resumeData.data?.languages
                  ?.sort((a, b) => {
                    const aPoint = a.point ?? 0;
                    const bPoint = b.point ?? 0;
                    if (aPoint !== bPoint) {
                      return bPoint - aPoint;
                    }
                    return (a.lang_name ?? '').localeCompare(b.lang_name ?? '');
                  })
                  .map((language) => (
                    <div key={language.id}>
                      <div>
                        <dt>외국어명</dt>
                        <dd>{language.lang_name}</dd>
                      </div>
                      <div>
                        <dt>시험명</dt>
                        <dd>{language.exam_name}</dd>
                      </div>
                      <div>
                        <dt>점수</dt>
                        <dd>{language.point} 점</dd>
                      </div>
                    </div>
                  ))}
              </dl>
            </section>
          )}
          {(resumeData.data?.awards?.length ?? 0) > 0 && (
            <section className={styles.award}>
              <h2>수상기록</h2>
              <dl>
                {resumeData.data?.awards
                  ?.sort((a, b) => (a.issue_date ?? '').localeCompare(b.issue_date ?? ''))
                  .map((award) => (
                    <div key={award.id}>
                      <div>
                        <dt>수상명</dt>
                        <dd>{award.award_name}</dd>
                      </div>
                      <div>
                        <dt>수상내용</dt>
                        <dd>{award.description}</dd>
                      </div>
                      <div>
                        <dt>발행기관</dt>
                        <dd>{award.organization}</dd>
                      </div>
                      <div>
                        <dt>취득일</dt>
                        <dd>{award.issue_date}</dd>
                      </div>
                    </div>
                  ))}
              </dl>
            </section>
          )}
          {(resumeData.data?.skills?.length ?? 0) > 0 && (
            <section className={styles.skill}>
              <h2>보유기술</h2>
              <dl className={styles.array}>
                {resumeData.data?.skills
                  ?.sort((a, b) => {
                    const aSkill_level = a.skill_level ?? 0;
                    const bSkill_level = b.skill_level ?? 0;
                    if (aSkill_level !== bSkill_level) {
                      return bSkill_level - aSkill_level;
                    }
                    const aSkill_career = a.skill_career ?? 0;
                    const bSkill_career = b.skill_career ?? 0;
                    return bSkill_career - aSkill_career;
                  })
                  .map((skill) => (
                    <div key={skill.id}>
                      <div>
                        <dt>기술명</dt>
                        <dd>{skill.skill_name}</dd>
                      </div>
                      <div>
                        <dt>숙련도</dt>
                        <dd>
                          {skill.skill_level === 1 && (
                            <span>
                              <i className={styles.circle} />
                              <i />
                              <i />
                              <i />
                              <i />
                            </span>
                          )}
                          {skill.skill_level === 2 && (
                            <span>
                              <i className={styles.circle} />
                              <i className={styles.circle} />
                              <i />
                              <i />
                              <i />
                            </span>
                          )}
                          {skill.skill_level === 3 && (
                            <span>
                              <i className={styles.circle} />
                              <i className={styles.circle} />
                              <i className={styles.circle} />
                              <i />
                              <i />
                            </span>
                          )}
                          {skill.skill_level === 4 && (
                            <span>
                              <i className={styles.circle} />
                              <i className={styles.circle} />
                              <i className={styles.circle} />
                              <i className={styles.circle} />
                              <i />
                            </span>
                          )}
                          {skill.skill_level === 5 && (
                            <span>
                              <i className={styles.circle} />
                              <i className={styles.circle} />
                              <i className={styles.circle} />
                              <i className={styles.circle} />
                              <i className={styles.circle} />
                            </span>
                          )}
                        </dd>
                      </div>
                      <div>
                        <dt>경험</dt>
                        <dd>{careerDescription(skill.skill_career)}</dd>
                      </div>
                    </div>
                  ))}
              </dl>
            </section>
          )}
          {(resumeData.data?.activities?.length ?? 0) > 0 && (
            <section className={styles.activity}>
              <h2>대외활동</h2>
              <dl>
                {resumeData.data?.activities
                  ?.sort((a, b) => (b.start_date ?? '').localeCompare(a.start_date ?? ''))
                  .map((activity) => (
                    <div key={activity.id}>
                      <div className={styles['activity-info']}>
                        <dt>{activity.organization}</dt>
                        <dd>
                          {activity.position} / {activity.classification}
                          <span>{activity.description}</span>
                          <RenderActivityTime activity={activity} />
                        </dd>
                      </div>
                    </div>
                  ))}
              </dl>
            </section>
          )}
          {(resumeData.data?.careers?.length ?? 0) > 0 && (
            <section className={styles.career}>
              <h2>경력사항</h2>
              <dl>
                {resumeData.data?.careers
                  ?.sort((a, b) => (b.start_date ?? '').localeCompare(a.start_date ?? ''))
                  .map((career) => (
                    <div key={`career-${career.id}`}>
                      <div className={styles['career-item']}>
                        <dt>{career.org_name}</dt>
                        <dd>
                          <span>
                            {career.team} / {career.role}
                          </span>{' '}
                          {career.occupation}{' '}
                          {career.description && <RenderDescription description={career.description} />}
                          <time>
                            {career.start_date} ~ {career.end_date}
                          </time>
                        </dd>
                      </div>
                      {career.projects.length > 0 && (
                        <div className={styles['project-list']}>
                          {career.projects
                            .sort((a, b) => (b.start_date ?? '').localeCompare(a.start_date ?? ''))
                            .map((project) => (
                              <div key={`project-${career.id}-${project.id}`} className={styles['project-item']}>
                                <dt>{project.project_name}</dt>
                                <dd>
                                  <time>
                                    {project.start_date} ~ {project.end_date}
                                  </time>
                                  {project.description && <RenderDescription description={project.description} />}
                                </dd>
                              </div>
                            ))}
                        </div>
                      )}
                    </div>
                  ))}
              </dl>
            </section>
          )}
        </Container>
      ) : (
        <p className={styles.loading}>
          <span>이력서 불러오는 중</span>
          <i />
        </p>
      )}
    </ServicePage>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/resume`);
  const resume = await response.json();
  const mdxSource = resume.essays?.[0]?.bio;

  if (!mdxSource) {
    return { props: { resume } };
  }

  const mdx = await serialize(mdxSource);

  return { props: { mdx, resume } };
};

export default Resume;
