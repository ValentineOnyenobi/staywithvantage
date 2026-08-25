import { createFileRoute } from "@tanstack/react-router";
import { Audiences, Statement, Trust } from "@/components/site/Sections";

const title = "About StayWithVantage — You run the property, we make it easier";
const description =
  "StayWithVantage supports your operation with vetted staff, consistent reporting and coordinated systems — for hotels, serviced apartments, short-lets and commercial properties.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <Statement />
      <Trust />
      <Audiences />
    </>
  );
}
