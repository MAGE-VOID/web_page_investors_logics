import { createBrowserRouter } from "react-router-dom";
import RootLayout from "@/app/layout";
import ProductsPage from "@/app/products/page";
import NotFound from "@/app/not-found";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    handle: { title: "Investors Logics — Trading tools, with intent" },
    children: [
      { index: true, Component: ProductsPage },
      {
        path: "contact",
        handle: { title: "Enquire about Blue Boost Bot · Investors Logics" },
        lazy: async () => ({ Component: (await import("@/app/contact/page")).default }),
      },
      {
        path: "documentation",
        handle: { title: "Product guides · Investors Logics" },
        lazy: async () => ({ Component: (await import("@/app/documentation/page")).default }),
      },
      {
        path: "legal",
        handle: { title: "Terms & risk · Investors Logics" },
        lazy: async () => ({ Component: (await import("@/app/legal/page")).default }),
      },
      { path: "*", Component: NotFound, handle: { title: "Page not found · Investors Logics" } },
    ],
  },
]);
