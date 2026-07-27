---
title: "GeM Reverse Auction (RA) Rules and Bidding Strategies"
description: "Master the GeM Reverse Auction process. Understand auto-decrement thresholds, timeline extensions, and pricing strategies."
slug: "reverse-auction-rules"
category: "GeM Bidding"
tags: ["Reverse Auction", "GeM RA", "Pricing Strategy"]
author: "SahayakAI Team"
published: "2026-07-16"
updated: "2026-07-16"
readingTime: "5 mins"
reviewer: "CTO Office"
layout: "SpokeArticle"
cta: "Try Free AI Tool"
keyTakeaways:
  - "Reverse auctions are triggered automatically based on buyer criteria."
  - "Sellers must bid below the current L1 by at least the minimum decrement percentage."
  - "Bidding within the last 10 minutes extends the auction timeline."
faqs:
  - q: "What is the auto-extension rule in GeM Reverse Auctions?"
    a: "If a seller places a bid within the final 10 minutes of the auction, the RA is automatically extended by 10 minutes."
  - q: "What is the minimum decrement value?"
    a: "It is the minimum amount or percentage by which a seller must reduce their bid below the current lowest bid. The percentage is predefined by the system."
relatedTools:
  - "l1-margin-calculator"
relatedArticles:
  - "gem-bidding-rules-handbook"
  - "gem-bidding-fees"
---

A Reverse Auction (RA) on GeM is an online phase where qualified sellers compete in real-time to offer the lowest price. Understanding the mechanics of RA is crucial to secure high-value contracts.

---

## Important Compliance Disclaimer

Before starting, please note that SahayakAI is an independent, private technology platform. We are **not affiliated with, authorized, or officially connected** with the Government e-Marketplace (GeM Portal) or the Government of India. The official portal is hosted at [https://gem.gov.in](https://gem.gov.in). Use this manual for educational guidance, and always verify current criteria on the official site.

---

## Reverse Auction Workflow

1.  **Technical Qualification:** Only sellers who pass the initial technical evaluation can participate in the RA.
2.  **Auction Start:** The system opens the RA dashboard, displaying the current lowest bid (without revealing seller identities).
3.  **Active Bidding:** Sellers input lower prices. Each bid must be less than the current lowest price by at least the specified minimum decrement.
4.  **Auto-Extension:** The auction continues until no new bids are received within the final 10-minute window.

---

## Rules and Parameters

*   **RA Duration:** Typically 2 hours, but auto-extensions can keep the auction active for several hours.
*   **H1 Seller Elimination:** In some bids, the highest bidder (H1) at the start of the evaluation phase is eliminated from participating in the RA to accelerate competitive price matching.

---

## Winning Bidding Strategies

*   **Calculate Your Floor Price:** Never bid below your cost threshold. Factor in GeM transaction charges and logistics before bidding.
*   **Patience is Key:** Monitor the bidding patterns in the initial hour, and place your optimized bids closer to the deadline to avoid driving prices down too quickly.
