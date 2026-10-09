export const licensePlans = [
  {
    id: "30-days",
    days: 30,
    price: 59,
    name: "Monthly",
    description: "Our shortest rental term.",
    featured: false,
  },
  {
    id: "90-days",
    days: 90,
    price: 149,
    name: "Quarterly",
    description: "A longer term without a full-year commitment.",
    featured: true,
  },
  {
    id: "365-days",
    days: 365,
    price: 399,
    name: "Yearly",
    description: "A full year of access to Blue Boost Bot.",
    featured: false,
  },
] as const;

export const productFeatures = [
  {
    title: "Analyzes the market",
    text: "Checks conditions across compatible Forex instruments against its programmed trading criteria.",
  },
  {
    title: "Places trades",
    text: "Sends orders through MetaTrader 5 when its trading conditions are met.",
  },
  {
    title: "Manages positions",
    text: "Handles open trades according to predefined rules while you monitor your account.",
  },
] as const;

export const licenseIncludes = [
  "Blue Boost Bot for MT5 (.ex5)",
  "Software access under the agreed terms",
  "Installation and setup documentation",
] as const;

export const productQuestions = [
  {
    question: "Can I buy or rent Blue Boost Bot?",
    answer: "You can enquire about a purchase or choose a proposed rental period. Purchase pricing, access duration and conditions need confirmation. Both options concern the compiled .ex5 software for your own MetaTrader 5 account, not a signal subscription or account management. Source code and ownership of the strategy are not included.",
  },
  {
    question: "Will it work with my broker?",
    answer: "Your broker must support MetaTrader 5, and its account conditions and Forex instruments must be compatible with the bot. Compatibility is not universal. Contact us with your broker name and account type before purchasing; do not send account credentials.",
  },
  {
    question: "Do I need to keep MetaTrader 5 running?",
    answer: "Yes. The bot needs a running, connected MetaTrader 5 environment to analyze the market and manage trades. You can use a compatible computer or VPS. You remain responsible for monitoring the platform and your account.",
  },
  {
    question: "How do I request the bot and arrange activation?",
    answer: "Choose a rental period or open a purchase enquiry, then prepare an email request. Confirm the final price, access terms, payment, delivery and activation details before paying. Rental prices are proposals; purchase pricing is not yet published. This website does not collect payments or activate licenses.",
  },
  {
    question: "How long does access last?",
    answer: "For rental, the proposed periods are 30, 90 or 365 days, with the same Expert Advisor in each. If you prefer to buy, we’ll discuss the access duration and license conditions with you. In either case, you can review the activation date, expiry and any renewal terms before paying.",
  },
  {
    question: "Is trading capital included in the price?",
    answer: "No. The license price covers the software, not a deposit into your trading account. Broker fees, margin requirements and any hosting costs are separate. The license price is not a recommended trading balance.",
  },
  {
    question: "Does the bot guarantee a profit?",
    answer: "No. Automated Forex trading can result in a partial or total loss of capital. Start on a demo account to understand the setup, and keep monitoring your account. Demo or historical results do not guarantee future performance.",
  },
] as const;

export const contactEmail = "investorslogics@gmail.com";
