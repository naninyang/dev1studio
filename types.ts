import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export interface PrintProps {
  mdx?: MDXRemoteSerializeResult;
  resume: {
    username?: string;
    username_show?: boolean;
    email?: string;
    email_show?: boolean;
    address?: string;
    telephone?: string;
    veteran?: string;
    disability?: string;
    references?: Reference[];
    military_services?: military_service[];
    educations?: education[];
    certificates?: certificate[];
    languages?: language[];
    awards?: award[];
    skills?: skill[];
    activities?: activity[];
    careers?: career[];
    essays?: essay[];
  };
}

export type ResumeData = {
  data: {
    username?: string;
    username_show?: boolean;
    email?: string;
    email_show?: boolean;
    address?: string;
    telephone?: string;
    veteran?: string;
    disability?: string;
    references?: Reference[];
    military_services?: military_service[];
    educations?: education[];
    certificates?: certificate[];
    languages?: language[];
    awards?: award[];
    skills?: skill[];
    activities?: activity[];
    careers?: career[];
    essays?: essay[];
  };
};

export type Reference = {
  github?: string;
  velog?: string;
  instagram?: string;
  twitter?: string;
  facebook?: string;
  leadme?: string;
  brunch?: string;
  tistory?: string;
  pinterest?: string;
  linkedin?: string;
  dribble?: string;
  postype?: string;
  blog?: string;
  homepage?: string;
};

export type military_service = {
  military_stats?: boolean;
  military_show?: boolean;
  conscription_exemption?: string;
  military_group?: string;
  branch?: string;
  rank?: string;
  discharge?: string;
  start_date?: string;
  end_date?: string;
};

export type education = {
  id?: number;
  school?: string;
  major?: string;
  category?: string;
  record?: string;
  degree?: string;
  degree_num?: string;
  stats?: string;
  start_date?: string;
  end_date?: string;
};

export type certificate = {
  id?: number;
  certificate_name?: string;
  organization?: string;
  certificate_num?: string;
  issue_date?: string;
};

export type language = {
  id?: number;
  lang_name?: string;
  exam_name?: string;
  point?: number;
};

export type award = {
  id?: number;
  award_name?: string;
  description?: string;
  organization?: string;
  issue_date?: string;
};

export type skill = {
  id?: number;
  skill_name?: string;
  skill_level?: number;
  skill_career?: number;
};

export type activity = {
  id?: number;
  organization?: string;
  position?: string;
  description?: string;
  classification?: string;
  start_date?: string;
  start_time?: string;
  end_date?: string;
  end_time?: string;
};

export type career = {
  id?: number;
  org_name?: string;
  team?: string;
  start_date?: string;
  end_date?: string;
  occupation?: string;
  role?: string;
  description?: string;
  projects: [project];
};

export type project = {
  id?: number;
  project_name?: string;
  start_date?: string;
  end_date?: string;
  description?: string;
};

export type essay = {
  id?: number;
  username_show?: boolean;
  avatar_path?: string;
  eng_name?: string;
  eng_occupation?: string;
  title?: string;
  show?: boolean;
};

export type DescriptionProps = {
  description: string;
};

export type DateProps = {
  start_date?: string;
  start_time?: string;
  end_date?: string;
  end_time?: string;
};

export type Portfolio = {
  id: string;
  name: string;
  project: string;
  term: {
    start: string;
    end: string | null;
  } | null;
  client: string;
  agency: string;
  position: string;
  outsourcing: boolean;
  role: string[];
  skill: string[];
  version: string[];
};

export type PortfolioSite = {
  id: string;
  name: string;
  project: string;
  term: {
    start: string;
    end: string | null;
  } | null;
  company: string;
  outsourcing: boolean;
  role: string[];
  skill: string[];
  version: string[];
  url: string;
  desc: string;
};
