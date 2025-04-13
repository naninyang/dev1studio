import { Client as NotionClient } from '@notionhq/client';
import { isFullPage } from '@notionhq/client';

const notion = new NotionClient({ auth: process.env.NOTION_API_KEY });
const notionDatabaseID = process.env.NOTION_DATABASE_ID || '';

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

export async function fetchSites(): Promise<NotionSite[]> {
  const response = await notion.databases.query({
    database_id: notionDatabaseID,
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
