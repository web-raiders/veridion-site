/**
 * Shared service definitions. Single source of truth for service titles,
 * URLs, teasers, and capability copy used across:
 *   - Home (services section)
 *   - Services index page
 *   - Each service detail page (sidebar cross-link)
 *   - Footer (Information column)
 *
 * Content originates from .claude/site-content.md (extracted from the live WP site).
 */

export type ServiceSlug =
  | 'commodity-sourcing'
  | 'development-finance'
  | 'market-intelligence'

export interface Service {
  slug: ServiceSlug
  title: string
  shortTitle: string
  to: string
  tagline: string
  teaser: string
  heroIntro: string
}

export const SERVICES: Service[] = [
  {
    slug: 'commodity-sourcing',
    title: 'Commodity Sourcing & Trade Facilitation',
    shortTitle: 'Commodity Sourcing',
    to: '/services/commodity-sourcing',
    tagline: 'Source what you need. Move what you produce.',
    teaser:
      'We help businesses source high-quality commodities from trusted global suppliers — ensuring competitive pricing, supply reliability, and strategic procurement support.',
    heroIntro:
      'Empower your procurement decisions with expert-led consulting solutions. At VRT, we partner with organizations to enhance sourcing efficiency, reduce costs, and build more resilient supply chains.',
  },
  {
    slug: 'development-finance',
    title: 'Development Finance Advisory',
    shortTitle: 'Development Finance',
    to: '/services/development-finance',
    tagline: 'Structure. Fund. Settle.',
    teaser:
      'Specialized financial solutions that enhance liquidity, manage market risks, and support seamless, compliant transactions in complex energy markets.',
    heroIntro:
      'We understand that access to reliable financial instruments is essential for scaling operations, securing large transactions, and executing cross-border deals. Our financial services are designed to support organizations at every stage — from initial project scoping to final funding disbursement.',
  },
  {
    slug: 'market-intelligence',
    title: 'Market Intelligence & Risk Advisory',
    shortTitle: 'Market Intelligence',
    to: '/services/market-intelligence',
    tagline: 'Read the market. Manage the risk.',
    teaser:
      'Our expansive global network connects clients with trusted partners, suppliers, and markets worldwide — enabling efficient operations and scalable growth.',
    heroIntro:
      "Our strength lies in our reach. We've built a powerful global network of suppliers, logistics partners, and infrastructure providers to ensure our clients receive seamless, reliable service — no matter where they operate. From shipping lanes to supplier relationships, we turn global complexity into streamlined performance.",
  },
]

export function getServiceBySlug(slug: ServiceSlug): Service {
  const s = SERVICES.find((s) => s.slug === slug)
  if (!s) throw new Error(`Unknown service slug: ${slug}`)
  return s
}
