import { LinksFunction } from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useHref,
  useLocation,
  useNavigate,
} from "@remix-run/react";

import tailwindCssHref from "./tailwind.css?url";
import { NextUIProvider, Tab, Tabs } from "@nextui-org/react";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: tailwindCssHref },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <NextUIProvider
          navigate={(...props) => {
            console.log("client nav");
            navigate(...props);
          }}
          useHref={useHref}
        >
          {children}
          <ScrollRestoration />
          <Scripts />
        </NextUIProvider>
      </body>
    </html>
  );
}

export default function App() {
  return (
    <div className="flex w-full h-full flex-col justify-center items-center gap-2 max-w-[400]">
      <main>
        <Outlet />
      </main>
    </div>
  );
}
