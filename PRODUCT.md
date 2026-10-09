# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

The primary customer is a self-directed retail investor who already understands the basics of Forex and MetaTrader 5, has capital they can afford to risk, and wants a systematic way to automate an existing trading workflow. The product is not positioned for people seeking guaranteed returns or investment advice.

## Product Purpose

The website presents purchase and rental options for the compiled Blue Boost Bot `.ex5` Expert Advisor. Its main job is to help a qualified visitor understand the product at a public level, compare the proposed rental periods or ask about purchase terms, and find installation, risk, and support documentation. The current frontend prepares email enquiries; it does not collect payments or activate licenses.

Success means a visitor can make an informed licensing decision without the website exposing the private strategy or implying guaranteed performance.

## Positioning

Blue Boost Bot is a rules-based Expert Advisor for MetaTrader 5 developed by Investors Logics. It turns defined market criteria into a repeatable flow of evaluation, execution, and monitoring. The public product value is disciplined automation and operational clarity; the strategy, parameters, and optimization method remain proprietary.

## Operating Context

The intended customer journey is:

1. Understand what the Expert Advisor does and does not do.
2. Confirm MetaTrader 5, broker, and personal risk suitability.
3. Choose a proposed rental period or request the purchase conditions by email.
4. Confirm the final price, access terms, payment method, delivery and activation details before making any payment. Direct checkout may be offered only once a real payment provider is connected.
5. Receive the compiled file, activation instructions, and access to public documentation.
6. Install and evaluate the product in a controlled environment before considering live capital.

## Commercial Proposal

The user confirmed that Blue Boost Bot will be offered for both purchase and rental. The exact distinction between these modes is not yet settled. Purchase pricing, access duration and other purchase conditions must be confirmed; do not infer lifetime access, source-code ownership or automatic renewals.

The user delegated the launch offer and pricing structure for design purposes. Proposed rental plans are:

- 30-day rental license: USD 59.
- 90-day rental license: USD 149. This is the primary rental offer.
- 365-day rental license: USD 399.

Rental grants access to the compiled `.ex5` for the agreed period. Purchase enquiries have no published price or access duration until those terms are confirmed. Neither option offers the source code or ownership of the underlying strategy. Checkout must be presented as direct payment only after a real payment provider is connected.

Open implementation decisions:

- the exact difference between purchase and rental, including purchase price and access duration;
- payment provider and supported payment methods;
- technical license binding and activation workflow;
- delivery timing and automation;
- refund, renewal, transfer, and support policies;
- taxes, invoices, and countries where the product may be sold.

Until these decisions are implemented, the interface must label purchase actions honestly and must not simulate a completed payment.

## Capabilities and Constraints

- Compiled Expert Advisor for MetaTrader 5.
- Rules-based, deterministic automation for the Forex market.
- Multi-instrument capability at a public level, subject to the configured broker environment.
- Internal testing and operational-observability capabilities.
- Purchase and rental are the confirmed commercial modes; only the rental periods and proposed prices are currently defined.
- No source code, strategy formulas, parameters, optimization data, or private backtest results may appear on the website.
- No profitability, win-rate, safety, broker-universality, artificial-intelligence, or guaranteed-performance claims may be made without reviewed evidence and explicit approval.
- The website is a Next.js App Router/React frontend with server-rendered content and small interactive client components. Payment processing and license fulfillment are not yet evidenced in this repository.

## Brand Commitments

- Company name: Investors Logics.
- Product name: Blue Boost Bot.
- Existing Investors Logics wordmark and logo assets should remain recognizable.
- The frontend must express an original Investors Logics identity, not imitate ValeryTrading.
- Product language must be precise, sober, and transparent about leveraged-trading risk.
- Private strategy details are a hard confidentiality boundary.

## Evidence on Hand

- Public product context: `BLUE_BOOST_BOT_SYSTEM_CONTEXT.md`.
- Existing logo assets under `public/Logos/`.
- Current Next.js marketing and documentation routes under `app/`. The former Vite implementation under `src/` is retained as inactive reference code.
- No approved performance results, testimonials, audited accounts, customer counts, certifications, or payment-provider integration are present. Future work must not fabricate them.

## Temporary Catalog

The eight research tools in `data/products.ts` are editable fictional concepts requested for the frontend design. Their names, descriptions, diagrams, prices and USD 99 collection are illustrative, not available products or commercial commitments. They are separate from Blue Boost Bot, the actual compiled Expert Advisor.

Every concept preview must disclose its simulated nature. The sample pricing comparison must never be interpreted as a real discount or checkout. Preserve these boundaries when replacing the placeholders with approved product data.

## Product Principles

1. Make the commercial offer understandable before asking for payment.
2. Sell access to software, never the promise of investment returns.
3. Keep the strategy private while making requirements, risks, terms, and support clear.
4. Never represent an unconnected checkout or unverified capability as operational.
5. Help customers evaluate suitability before they use live capital.

## Accessibility & Inclusion

The website must support keyboard navigation, visible focus, readable contrast, reduced motion, responsive layouts from 320 px upward, and plain-language risk communication. Financial knowledge must not be assumed beyond the clearly stated customer prerequisites.
