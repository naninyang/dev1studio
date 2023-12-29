import React, { useEffect, useState } from 'react';
import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styled from '@emotion/styled';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { DateProps, DescriptionProps, ResumeData } from '@/types';
import AnchorLink from '@/components/AnchorLink';
import { rem } from '@/styles/designSystem';
import { Container, ServicePage } from '@/styles/serviceSystem';
import styles from '@/styles/print.module.sass';

const Avatar = styled.div({
  width: rem(100),
  height: rem(100),
  borderRadius: rem(100),
  overflow: 'hidden',
});

type PrintProps = {
  mdx?: MDXRemoteSerializeResult;
};

const Print: NextPage<PrintProps> = ({ mdx }) => {
  const [resumeData, setResumeData] = useState<ResumeData>({});

  useEffect(() => {
    const fetchResume = async () => {
      try {
        const response = await fetch('/api/profile');
        const data = await response.json();
        setResumeData(data);
      } catch (error) {
        console.error('Failed to fetch resume:', error);
      }
    };

    fetchResume();
  }, []);

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

  return (
    <ServicePage>
      <Container className={styles['print-only']}>
        <Head>{resumeData.username_show ? <title>{resumeData.username} 이력서</title> : <title>이력서</title>}</Head>
        <h1>이력서</h1>
        <blockquote>
          <p>
            사용하실 때는 웹브라우저의 <code>인쇄</code> 기능을 사용해 주세요.{' '}
            <pre>
              <code>Mac: command + p / Win: ctrl + p</code>
            </pre>
          </p>
          <AnchorLink href="/dev1studio">이전 화면으로 이동</AnchorLink>
        </blockquote>
        {(resumeData?.essays?.length ?? 0) > 0 &&
          resumeData.essays &&
          resumeData.essays[0] &&
          resumeData.essays[0].show &&
          resumeData.username_show && (
            <section className={styles.essay}>
              <div className={styles['essay-header']}>
                {resumeData.essays[0].avatar_path && (
                  <Avatar>
                    <Image src={resumeData.essays[0].avatar_path} alt="사진" width="100" height="100" />
                  </Avatar>
                )}
                <div className={styles['essay-header-summary']}>
                  <h2>{resumeData.essays[0].eng_name}</h2>
                  <h3>{resumeData.essays[0].eng_occupation}</h3>
                </div>
              </div>
              {(resumeData?.references?.length ?? 0) > 0 && (
                <div className={styles.reference}>
                  <ul>
                    {resumeData?.references?.[0].github && (
                      <li className={styles.github}>
                        <AnchorLink
                          href={`https://github.com/${resumeData?.references?.[0].github}`}
                        >{`/${resumeData?.references?.[0].github}`}</AnchorLink>
                      </li>
                    )}
                    {resumeData?.references?.[0].velog && (
                      <li className={styles.velog}>
                        <AnchorLink
                          href={`https://velog.io/@${resumeData?.references?.[0].velog}`}
                        >{`@${resumeData?.references?.[0].velog}`}</AnchorLink>
                      </li>
                    )}
                    {resumeData?.references?.[0].instagram && (
                      <li className={styles.instagram}>
                        <AnchorLink
                          href={`https://www.instagram.com/${resumeData?.references?.[0].instagram}`}
                        >{`/${resumeData?.references?.[0].instagram}`}</AnchorLink>
                      </li>
                    )}
                    {resumeData?.references?.[0].twitter && (
                      <li className={styles.twitter}>
                        <AnchorLink
                          href={`https://twitter.com/${resumeData?.references?.[0].twitter}`}
                        >{`/${resumeData?.references?.[0].twitter}`}</AnchorLink>
                      </li>
                    )}
                    {resumeData?.references?.[0].facebook && (
                      <li className={styles.facebook}>
                        <AnchorLink
                          href={`https://www.facebook.com/${resumeData?.references?.[0].facebook}`}
                        >{`/${resumeData?.references?.[0].facebook}`}</AnchorLink>
                      </li>
                    )}
                    {resumeData?.references?.[0].leadme && (
                      <li className={styles.leadme}>
                        <AnchorLink
                          href={`https://www.leadme.today/@${resumeData?.references?.[0].leadme}`}
                        >{`@${resumeData?.references?.[0].leadme}`}</AnchorLink>
                      </li>
                    )}
                    {resumeData?.references?.[0].brunch && (
                      <li className={styles.brunch}>
                        <AnchorLink
                          href={`https://brunch.co.kr/@${resumeData?.references?.[0].brunch}`}
                        >{`@${resumeData?.references?.[0].brunch}`}</AnchorLink>
                      </li>
                    )}
                    {resumeData?.references?.[0].tistory && (
                      <li className={styles.tistory}>
                        <AnchorLink
                          href={`https://${resumeData?.references?.[0].tistory}.tistory.com`}
                        >{`${resumeData?.references?.[0].tistory}.tistory.com`}</AnchorLink>
                      </li>
                    )}
                    {resumeData?.references?.[0].pinterest && (
                      <li className={styles.pinterest}>
                        <AnchorLink
                          href={`https://www.pinterest.co.kr/${resumeData?.references?.[0].pinterest}`}
                        >{`/${resumeData?.references?.[0].pinterest}`}</AnchorLink>
                      </li>
                    )}
                    {resumeData?.references?.[0].linkedin && (
                      <li className={styles.linkedin}>
                        <AnchorLink
                          href={`https://kr.linkedin.com/in/${encodeURIComponent(
                            resumeData?.references?.[0].linkedin,
                          )}`}
                        >{`in/${encodeURIComponent(resumeData?.references?.[0].linkedin)}`}</AnchorLink>
                      </li>
                    )}
                    {resumeData?.references?.[0].dribble && (
                      <li className={styles.dribble}>
                        <AnchorLink
                          href={`https://dribbble.com/${resumeData?.references?.[0].dribble}`}
                        >{`/${resumeData?.references?.[0].dribble}`}</AnchorLink>
                      </li>
                    )}
                    {resumeData?.references?.[0].postype && (
                      <li className={styles.postype}>
                        <AnchorLink
                          href={`https://${resumeData?.references?.[0].postype}.postype.com`}
                        >{`${resumeData?.references?.[0].postype}.postype.com`}</AnchorLink>
                      </li>
                    )}
                    {resumeData?.references?.[0].blog && (
                      <li className={styles.blog}>
                        <AnchorLink href={`${encodeURIComponent(resumeData?.references?.[0].blog)}`}>
                          {resumeData?.references?.[0].blog}
                        </AnchorLink>
                      </li>
                    )}
                    {resumeData?.references?.[0].homepage && (
                      <li className={styles.homepage}>
                        <AnchorLink href={`${encodeURIComponent(resumeData?.references?.[0].homepage)}`}>
                          {resumeData?.references?.[0].homepage}
                        </AnchorLink>
                      </li>
                    )}
                  </ul>
                </div>
              )}
              <h4>
                {resumeData.essays[0].title} {resumeData.username} 입니다
              </h4>
              <div className={styles['essay-bio']}>{mdx && <MDXRemote {...mdx} />}</div>
            </section>
          )}
        <section className={styles.profile}>
          <h2>인적사항</h2>
          <dl>
            {resumeData.username_show && (
              <>
                <dt>성명</dt>
                <dd>{resumeData.username}</dd>
              </>
            )}
            {resumeData.username_show && (
              <>
                <dt>이메일</dt>
                <dd>{resumeData.email}</dd>
              </>
            )}
            {resumeData.address && (
              <>
                <dt>주소</dt>
                <dd>{resumeData.address}</dd>
              </>
            )}
            {resumeData.telephone && (
              <>
                <dt>연락처</dt>
                <dd>{resumeData.telephone}</dd>
              </>
            )}
            {resumeData.veteran && (
              <>
                <dt>보훈대상</dt>
                <dd>{resumeData.veteran}</dd>
              </>
            )}
            {resumeData.disability && (
              <>
                <dt>장애대상</dt>
                <dd>{resumeData.disability}</dd>
              </>
            )}
          </dl>
        </section>
        {(resumeData?.military_services?.length ?? 0) > 0 &&
          resumeData.military_services &&
          resumeData.military_services[0].military_show && (
            <section className={styles.militery}>
              <h2>병역사항</h2>
              <dl>
                <dt>병역여부</dt>
                <dd>{resumeData.military_services[0].military_stats ? '군필' : '미필'}</dd>
                {resumeData.military_services[0].military_stats === false ? (
                  <>
                    <dt>면제 사유</dt>
                    <dd>
                      {resumeData.military_services[0].conscription_exemption
                        ? resumeData.military_services[0].conscription_exemption
                        : '면제사유 미입력'}
                    </dd>
                  </>
                ) : (
                  <>
                    <dt>군별</dt>
                    <dd>
                      {resumeData.military_services[0].military_group
                        ? resumeData.military_services[0].military_group
                        : '-'}
                    </dd>
                    <dt>병과</dt>
                    <dd>{resumeData.military_services[0].branch ? resumeData.military_services[0].branch : '-'}</dd>
                    <dt>계급</dt>
                    <dd>{resumeData.military_services[0].rank ? resumeData.military_services[0].rank : '-'}</dd>
                    <dt>병역</dt>
                    <dd>
                      {resumeData.military_services[0].discharge ? resumeData.military_services[0].discharge : '-'}
                    </dd>
                    <dt>복무기간</dt>
                    <dd>
                      {resumeData.military_services[0].start_date ? resumeData.military_services[0].start_date : '?'}
                      {' ~ '}
                      {resumeData.military_services[0].end_date ? resumeData.military_services[0].end_date : '복무 중'}
                    </dd>
                  </>
                )}
              </dl>
            </section>
          )}
        {(resumeData?.educations?.length ?? 0) > 0 && (
          <section className={styles.education}>
            <h2>학력사항</h2>
            <ul className={styles.array}>
              {resumeData?.educations
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
        {(resumeData?.certificates?.length ?? 0) > 0 && (
          <section className={styles.certificate}>
            <h2>자격증</h2>
            <dl>
              {resumeData?.certificates
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
        {(resumeData?.languages?.length ?? 0) > 0 && (
          <section className={styles.language}>
            <h2>외국어능력</h2>
            <dl>
              {resumeData?.languages
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
        {(resumeData?.awards?.length ?? 0) > 0 && (
          <section className={styles.award}>
            <h2>수상기록</h2>
            <dl>
              {resumeData?.awards
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
        {(resumeData?.skills?.length ?? 0) > 0 && (
          <section className={styles.skill}>
            <h2>보유기술</h2>
            <dl className={styles.array}>
              {resumeData?.skills
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
        {(resumeData?.activities?.length ?? 0) > 0 && (
          <section className={styles.activity}>
            <h2>대외활동</h2>
            <dl>
              {resumeData?.activities
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
        {(resumeData?.careers?.length ?? 0) > 0 && (
          <section className={styles.career}>
            <h2>경력사항</h2>
            <dl>
              {resumeData?.careers
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
    </ServicePage>
  );
};

export const getServerSideProps: GetServerSideProps<PrintProps> = async (context) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/profile`);
  const data = await response.json();
  const mdxSource = data.essays?.[0]?.bio;

  if (!mdxSource) {
    return { props: {} };
  }

  const mdx = await serialize(mdxSource);

  return { props: { mdx } };
};

export default Print;
