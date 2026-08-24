# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

The primary customer is a self-directed retail investor who already understands the basics of Forex and MetaTrader 5, has capital they can afford to risk, and wants a systematic way to automate an existing trading workflow. The product is not positioned for people seeking guaranteed returns or investment advice.

## Product Purpose

The website sells time-limited access to the compiled Blue Boost Bot `.ex5` Expert Advisor. Its main job is to help a qualified visitor understand the product at a public level, choose a license duration, pay directly, receive clear activation guidance, and find installation, risk, and support documentation.

Success means a visitor can make an informed licensing decision without the website exposing the private strategy or implying guaranteed performance.

## Positioning

Blue Boost Bot is a rules-based Expert Advisor for MetaTrader 5 developed by Investors Logics. It turns defined market criteria into a repeatable flow of evaluation, execution, and monitoring. The public product value is disciplined automation and operational clarity; the strategy, parameters, and optimization method remain proprietary.

## Operating Context

The intended customer journey is:

1. Understand what the Expert Advisor does and does not do.
2. Confirm MetaTrader 5, broker, and personal risk suitability.
3. Select a time-limited `.ex5` license.
4. Complete direct payment through a checkout provider.
5. Receive the compiled file, activation instructions, and access to public documentation.
6. Install and evaluate the product in a controlled environment before considering live capital.

## Commercial Proposal

The user delegated the launch offer and pricing structure for design purposes. Proposed plans are:

- 30-day license: USD 59.
- 90-day license: USD 149. This is the primary offer.
- 365-day license: USD 399.

The customer purchases a right to use the compiled `.ex5` for the selected term, not the source code or underlying strategy. Checkout must be presented as direct payment only after a real payment provider is connected.

Open implementation decisions:

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
- Time-limited commercial access is the primary business model.
- No source code, strategy formulas, parameters, optimization data, or private backtest results may appear on the website.
- No profitability, win-rate, safety, broker-universality, artificial-intelligence, or guaranteed-performance claims may be made without reviewed evidence and explicit approval.
- The website is currently a Vite/React frontend. Payment processing and license fulfillment are not yet evidenced in this repository.

## Brand Commitments

- Company name: Investors Logics.
- Product name: Blue Boost Bot.
- Existing Investors Logics wordmark and logo assets should remain recognizable.
- Product language must be precise, sober, and transparent about leveraged-trading risk.
- Private strategy details are a hard confidentiality boundary.

## Evidence on Hand

- Public product context: `BLUE_BOOST_BOT_SYSTEM_CONTEXT.md`.
- Existing logo assets under `public/Logos/`.
- Current Vite/React marketing and documentation routes under `src/app/`.
- No approved performance results, testimonials, audited accounts, customer counts, certifications, or payment-provider integration are present. Future work must not fabricate them.

## Product Principles

1. Make the commercial offer understandable before asking for payment.
2. Sell access to software, never the promise of investment returns.
3. Keep the strategy private while making requirements, risks, terms, and support clear.
4. Never represent an unconnected checkout or unverified capability as operational.
5. Help customers evaluate suitability before they use live capital.

## Accessibility & Inclusion

The website must support keyboard navigation, visible focus, readable contrast, reduced motion, responsive layouts from 320 px upward, and plain-language risk communication. Financial knowledge must not be assumed beyond the clearly stated customer prerequisites.
