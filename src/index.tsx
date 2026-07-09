import "@scss/root.scss";

import type { ReactNode } from "react";

import { createRoot } from "react-dom/client";

import ErrorBoundary from "./components/Error-Boundary/Error-Boundary.component";
import { Routes, Route } from "./hooks/use-react-router/use-react-router.hook";
import { ReactStorageProvider } from "./hooks/use-react-storage/use-storage.hook";

import Home from "@page/Home/Page.page";

function App(): ReactNode {
  return(
    <main>
      <Routes>
        <Route path="/" children={<Home/>}/>
      </Routes>
    </main>
  );
};

createRoot(document.body)
  .render(
    <ErrorBoundary>
      <Routes>
        <ReactStorageProvider storages={{}}>
          <App/>
        </ReactStorageProvider>
      </Routes>
    </ErrorBoundary>
  );  
