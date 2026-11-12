import { Helmet } from "react-helmet-async";

export const SITE_URL = "https://www.depotcovers.co.ke";
export const SITE_NAME = "Depot Covers Company (DCC)";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og/dcc-cover.jpg`;

interface SEOProps {
  title: string;
  description: string;
  /** Route path, e.g. "/services". Used for the canonical + og:url. */
  path: string;
  image?: string;
  type?: "website" | "article";
  noindex?: boolean;
  /** Optional JSON-LD object injected into the page head. */
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

export default function SEO({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  type = "website",
  noindex = false,
  jsonLd,
}: SEOProps) {
  const url = `${SITE_URL}${path === "/" ? "/" : path}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={title} />
      <meta property="og:locale" content="en_KE" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
}
