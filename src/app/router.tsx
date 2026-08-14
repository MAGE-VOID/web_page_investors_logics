import { createBrowserRouter } from "react-router-dom";

import ContactPage from "@/app/contact/page";
import NotFoundPage from "@/app/NotFoundPage";
import AboutUsPage from "@/app/documentation/about-us/page";
import HelpCenterPage from "@/app/documentation/assistance-and-policies/help-center/page";
import TermsAndConditionsPage from "@/app/documentation/assistance-and-policies/terms-and-conditions/page";
import BestBrokersPage from "@/app/documentation/best-brokers/page";
import DocumentationLayout from "@/app/documentation/components/DocumentationLayout";
import DocumentationContactPage from "@/app/documentation/contact/page";
import CybersecurityAndScamsPage from "@/app/documentation/infrastructure/cybersecurity-and-scams/page";
import VirtualPrivateServerPage from "@/app/documentation/infrastructure/virtual-private-server/page";
import IntroductionPage from "@/app/documentation/introduction/page";
import DocumentationPage from "@/app/documentation/page";
import AlgorithmicTradingPage from "@/app/documentation/table-of-contents/algorithmic-trading/page";
import GettingStartedPage from "@/app/documentation/table-of-contents/getting-started/page";
import PlatformsPage from "@/app/documentation/table-of-contents/platforms/page";
import ResourcesPage from "@/app/documentation/table-of-contents/resources/page";
import WhatIsForexPage from "@/app/documentation/table-of-contents/what-is-forex/page";
import HomePage from "@/app/page";
import ProductsPage from "@/app/products/page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/products",
    element: <ProductsPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/documentation",
    element: <DocumentationLayout />,
    children: [
      { index: true, element: <DocumentationPage /> },
      { path: "introduction", element: <IntroductionPage /> },
      { path: "table-of-contents/what-is-forex", element: <WhatIsForexPage /> },
      {
        path: "table-of-contents/algorithmic-trading",
        element: <AlgorithmicTradingPage />,
      },
      { path: "table-of-contents/getting-started", element: <GettingStartedPage /> },
      { path: "table-of-contents/platforms", element: <PlatformsPage /> },
      { path: "table-of-contents/resources", element: <ResourcesPage /> },
      {
        path: "infrastructure/virtual-private-server",
        element: <VirtualPrivateServerPage />,
      },
      {
        path: "infrastructure/cybersecurity-and-scams",
        element: <CybersecurityAndScamsPage />,
      },
      { path: "best-brokers", element: <BestBrokersPage /> },
      { path: "about-us", element: <AboutUsPage /> },
      {
        path: "assistance-and-policies/help-center",
        element: <HelpCenterPage />,
      },
      {
        path: "assistance-and-policies/terms-and-conditions",
        element: <TermsAndConditionsPage />,
      },
      { path: "contact", element: <DocumentationContactPage /> },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
