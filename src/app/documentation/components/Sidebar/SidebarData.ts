interface MenuItem {
  label: string;
  href?: string;
  isTitle?: boolean;
  subItems?: Array<{ label: string; href: string }>;
}

export const menuData: MenuItem[] = [
  {
    label: "Overview",
    href: "/documentation",
  },
  {
    label: "What is Blue Boost Bot?",
    href: "/documentation/introduction",
  },
  {
    label: "Learn",
    isTitle: true,
  },
  {
    label: "Product & platform",
    subItems: [
      { label: "How to get started", href: "/documentation/table-of-contents/getting-started" },
      { label: "MetaTrader 5", href: "/documentation/table-of-contents/platforms" },
      { label: "What automation does", href: "/documentation/table-of-contents/algorithmic-trading" },
      { label: "Forex and leverage", href: "/documentation/table-of-contents/what-is-forex" },
    ],
  },
  {
    label: "Operations & safety",
    subItems: [
      { label: "Keep MT5 running", href: "/documentation/infrastructure/virtual-private-server" },
      { label: "Stay secure", href: "/documentation/infrastructure/cybersecurity-and-scams" },
      { label: "Broker checklist", href: "/documentation/best-brokers" },
      { label: "Useful resources", href: "/documentation/table-of-contents/resources" },
    ],
  },
  {
    label: "Support & policies",
    isTitle: true,
  },
  {
    label: "Help center",
    href: "/documentation/assistance-and-policies/help-center",
  },
  {
    label: "Terms",
    href: "/documentation/assistance-and-policies/terms-and-conditions",
  },
  {
    label: "About us",
    href: "/documentation/about-us",
  },
  {
    label: "Contact support",
    href: "/documentation/contact",
  },
];
