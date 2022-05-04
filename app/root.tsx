import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  NavLink,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation, useOutlet } from "react-router-dom";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  const outlet = useOutlet();

  const variants = {
    hidden: { opacity: 1 },
    enter: { opacity: 1 },
    exit: { opacity: 1 },
    // hidden: { opacity: 1, x: -200, y: 0 },
    // enter: { opacity: 1, x: 0, y: 0 },
    // exit: { opacity: 0, x: 0, y: -100 },
  };

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <header>
          <nav style={{ position: "absolute", bottom: "10%" }}>
            <NavLink to="/start" style={{ marginRight: "20px" }}>
              Start
            </NavLink>
            <NavLink to="/finish">Finish</NavLink>
          </nav>
        </header>
        <AnimatePresence exitBeforeEnter initial={false}>
          <motion.main
            key={useLocation().key}
            // initial={{ x: "0", opacity: 0, width: "60vw" }}
            // animate={{ x: "0", opacity: 1, width: "200vw" }}
            // exit={{ x: "0", opacity: 1, width: "60vw" }}
            variants={variants}
            initial="hidden"
            animate="enter"
            exit="exit"
            transition={{ type: "linear" }}
          >
            {outlet}
          </motion.main>
        </AnimatePresence>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
