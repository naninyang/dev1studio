import { Client as NotionClient } from '@notionhq/client';
import { isFullPage } from '@notionhq/client';

const notion = new NotionClient({ auth: process.env.NOTION_API_KEY });
const notionSitesID = process.env.NOTION_SITES_ID || '';
const notionPortfolioID = process.env.NOTION_PORTFOLIO_ID || '';
const notionPortfolioSiteID = process.env.NOTION_PORTFOLIO_SITE_ID || '';
const notionJasopeID = process.env.NOTION_JASOPE_ID || '';

export type NotionFile = {
  name: string;
  type: 'file' | 'external';
  file?: {
    url: string;
    expiry_time: string;
  };
  external?: {
    url: string;
  };
};

type NotionSite = {
  id: string;
  siteName: string;
  siteShort: string;
  siteUrl: string;
  siteKoName: string;
  siteKoUrl: string;
  desc: string;
  skill: string[];
  timestamp: string[];
  order: number;
};

type NotionPortfolio = {
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

type NotionPortfolioSite = {
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

type NotionJasope = {
  id: string;
  name: string;
  kor: string;
  one: string;
  company: string;
  desc: string;
  thumbnail: NotionFile[];
  job: string;
  skill: string[];
};

export async function fetchSites(): Promise<NotionSite[]> {
  const response = await notion.databases.query({
    database_id: notionSitesID,
    sorts: [{ property: 'order', direction: 'ascending' }],
  });

  return response.results.filter(isFullPage).map((page): NotionSite => {
    const p = page.properties as unknown as {
      siteName: { type: 'title'; title: { plain_text: string }[] };
      siteUrl: { type: 'rich_text'; rich_text: { plain_text: string }[] };
      siteShort: { type: 'rich_text'; rich_text: { plain_text: string }[] };
      siteKoName: { type: 'rich_text'; rich_text: { plain_text: string }[] };
      siteKoUrl: { type: 'rich_text'; rich_text: { plain_text: string }[] };
      desc: { type: 'rich_text'; rich_text: { plain_text: string }[] };
      skill: { type: 'multi_select'; multi_select: { name: string }[] };
      timestamp: { type: 'multi_select'; multi_select: { name: string }[] };
      order: { type: 'number'; number: number };
    };

    return {
      id: page.id,
      siteName: p.siteName.title[0]?.plain_text || '',
      siteShort: p.siteShort.rich_text[0]?.plain_text || '',
      siteUrl: p.siteUrl.rich_text[0]?.plain_text || '',
      siteKoName: p.siteKoName.rich_text[0]?.plain_text || '',
      siteKoUrl: p.siteKoUrl.rich_text[0]?.plain_text || '',
      desc: p.desc.rich_text[0]?.plain_text || '',
      skill: p.skill.multi_select.map((s) => s.name),
      timestamp: p.timestamp.multi_select.map((s) => s.name),
      order: p.order.number ?? 0,
    };
  });
}

export async function fetchPortfolio(): Promise<NotionPortfolio[]> {
  const response = await notion.databases.query({
    database_id: notionPortfolioID,
    sorts: [{ property: 'term', direction: 'ascending' }],
  });

  return response.results.filter(isFullPage).map((page): NotionPortfolio => {
    const p = page.properties as unknown as {
      name: { type: 'title'; title: { plain_text: string }[] };
      project: { type: 'rich_text'; rich_text: { plain_text: string }[] };
      term: {
        type: 'date';
        date: {
          start: string;
          end: string | null;
          time_zone: string | null;
        } | null;
      };
      client: { type: 'rich_text'; rich_text: { plain_text: string }[] };
      agency: { type: 'rich_text'; rich_text: { plain_text: string }[] };
      position: { type: 'select'; select: { name: string } | null };
      outsourcing: { type: 'checkbox'; checkbox: boolean };
      role: { type: 'multi_select'; multi_select: { name: string }[] };
      skill: { type: 'multi_select'; multi_select: { name: string }[] };
      version: { type: 'multi_select'; multi_select: { name: string }[] };
    };

    return {
      id: page.id,
      name: p.name.title[0]?.plain_text || '',
      project: p.project.rich_text[0]?.plain_text || '',
      term: p.term.date
        ? {
            start: p.term.date.start,
            end: p.term.date.end,
          }
        : null,
      client: p.client.rich_text[0]?.plain_text || '',
      agency: p.agency.rich_text[0]?.plain_text || '',
      position: p.position.select?.name || '',
      outsourcing: p.outsourcing.checkbox ? true : false,
      role: p.role.multi_select.map((s) => s.name),
      skill: p.skill.multi_select.map((s) => s.name),
      version: p.version.multi_select.map((s) => s.name),
    };
  });
}

export async function fetchPortfolioSite(): Promise<NotionPortfolioSite[]> {
  const response = await notion.databases.query({
    database_id: notionPortfolioSiteID,
    sorts: [{ property: 'term', direction: 'ascending' }],
  });

  return response.results.filter(isFullPage).map((page): NotionPortfolioSite => {
    const p = page.properties as unknown as {
      name: { type: 'title'; title: { plain_text: string }[] };
      project: { type: 'rich_text'; rich_text: { plain_text: string }[] };
      term: {
        type: 'date';
        date: {
          start: string;
          end: string | null;
          time_zone: string | null;
        } | null;
      };
      company: { type: 'rich_text'; rich_text: { plain_text: string }[] };
      outsourcing: { type: 'checkbox'; checkbox: boolean };
      role: { type: 'multi_select'; multi_select: { name: string }[] };
      skill: { type: 'multi_select'; multi_select: { name: string }[] };
      version: { type: 'multi_select'; multi_select: { name: string }[] };
      url: { type: 'rich_text'; rich_text: { plain_text: string }[] };
      desc: { type: 'rich_text'; rich_text: { plain_text: string }[] };
    };

    return {
      id: page.id,
      name: p.name.title[0]?.plain_text || '',
      project: p.project.rich_text[0]?.plain_text || '',
      term: p.term.date
        ? {
            start: p.term.date.start,
            end: p.term.date.end,
          }
        : null,
      company: p.company.rich_text[0]?.plain_text || '',
      outsourcing: p.outsourcing.checkbox ? true : false,
      role: p.role.multi_select.map((s) => s.name),
      skill: p.skill.multi_select.map((s) => s.name),
      version: p.version.multi_select.map((s) => s.name),
      url: p.url.rich_text[0]?.plain_text || '',
      desc: p.desc.rich_text[0]?.plain_text || '',
    };
  });
}

export async function fetchJasope(): Promise<NotionJasope[]> {
  const response = await notion.databases.query({
    database_id: notionJasopeID,
  });

  return response.results.filter(isFullPage).map((page): NotionJasope => {
    const p = page.properties as unknown as {
      name: { type: 'title'; title: { plain_text: string }[] };
      kor: { type: 'rich_text'; rich_text: { plain_text: string }[] };
      one: { type: 'rich_text'; rich_text: { plain_text: string }[] };
      company: { type: 'rich_text'; rich_text: { plain_text: string }[] };
      desc: { type: 'rich_text'; rich_text: { plain_text: string }[] };
      thumbnail: { type: 'files'; files: NotionFile[] };
      job: { type: 'rich_text'; rich_text: { plain_text: string }[] };
      skill: { type: 'multi_select'; multi_select: { name: string }[] };
    };

    return {
      id: page.id,
      name: p.name.title[0]?.plain_text || '',
      kor: p.kor.rich_text[0]?.plain_text || '',
      one: p.one.rich_text[0]?.plain_text || '',
      company: p.company.rich_text[0]?.plain_text || '',
      desc: p.desc.rich_text[0]?.plain_text || '',
      thumbnail: p.thumbnail.files || [],
      job: p.job.rich_text[0]?.plain_text || '',
      skill: p.skill.multi_select.map((s) => s.name),
    };
  });
}
