/**
 * ASTRA Engine v1.6.0 — Citation Interface Contract
 */

export interface IAstraCitation {
  citationId: string;
  sourceSlug: string;
  title: string;
  sectionHeading?: string;
  chunkId: string;
  url: string;
}
