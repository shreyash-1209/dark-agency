import { Footer } from "@/components/Footer";
import { Layout } from "@/components/Layout";
import { Skeleton } from "@/components/ui/skeleton";
import { Toaster } from "@/components/ui/sonner";
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { Suspense, lazy } from "react";

export type IndexSearch = { category?: string };

function validateIndexSearch(search: Record<string, unknown>): IndexSearch {
  return {
    category: typeof search.category === "string" ? search.category : undefined,
  };
}

const HomePage = lazy(() =>
  import("./pages/HomePage").then((m) => ({ default: m.HomePage })),
);
const ProjectDetailPage = lazy(() =>
  import("./pages/ProjectDetailPage").then((m) => ({
    default: m.ProjectDetailPage,
  })),
);

const rootRoute = createRootRoute({
  component: () => (
    <>
      <Layout>
        <Suspense
          fallback={
            <div className="pt-24 container mx-auto px-6">
              <Skeleton className="h-96 w-full" />
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </Layout>
      <Footer />
      <Toaster theme="dark" position="bottom-right" />
    </>
  ),
});

export const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  validateSearch: validateIndexSearch,
  component: () => <HomePage />,
});

const projectRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/project/$id",
  component: () => <ProjectDetailPage />,
});

const routeTree = rootRoute.addChildren([indexRoute, projectRoute]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
