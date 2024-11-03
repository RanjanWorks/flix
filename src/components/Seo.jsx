import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({ title, description, image, url }) => {
  return (
    <Helmet>
      <html lang="en" />
      <title>{title ? `${title} | MySite` : "Ranjan's Flix"}</title>
      <meta name="description" content={description || " Free Movie Downloads | Download Movies Online | Movie Downloader"} />
      <meta property="og:title" content={title || "Ranjan's Flix"} />
      <meta property="og:description" content={description || " Free Movie Downloads | Download Movies Online | Movie Downloader"} />
      <meta property="og:image" content={image || "https://opengraph.b-cdn.net/production/images/06254822-67bc-4bbb-ab08-95bd363a2de5.png?token=xYcYh95vsTwp3oycYg8m3kYHFFl4MAvrlrOo-nCSGz8&height=600&width=1200&expires=33266469698"} />
      <meta property="og:url" content={url || window.location.href} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || "Ranjan's Flix"} />
      <meta name="twitter:description" content={description || " Free Movie Downloads | Download Movies Online | Movie Downloader"} />
      <meta name="twitter:image" content={image || "https://opengraph.b-cdn.net/production/images/06254822-67bc-4bbb-ab08-95bd363a2de5.png?token=xYcYh95vsTwp3oycYg8m3kYHFFl4MAvrlrOo-nCSGz8&height=600&width=1200&expires=33266469698"} />
    </Helmet>
  );
};

export default SEO;
