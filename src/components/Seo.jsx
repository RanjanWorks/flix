import React, { useEffect } from "react";

const SEO = ({ title, description, image, url }) => {
  useEffect(() => {
    document.title = title ? `${title} | Ranjan's Flix` : "Ranjan's Flix";
    const metaTags = [
      { name: "description", content: description || "Free Movie Downloads | Download Movies Online | Movie Downloader" },
      { property: "og:title", content: title || "Ranjan's Flix" },
      { property: "og:description", content: description || "Free Movie Downloads | Download Movies Online | Movie Downloader" },
      { property: "og:image", content: image || "https://opengraph.b-cdn.net/production/images/06254822-67bc-4bbb-ab08-95bd363a2de5.png?token=xYcYh95vsTwp3oycYg8m3kYHFFl4MAvrlrOo-nCSGz8&height=600&width=1200&expires=33266469698" },
      { property: "og:url", content: url || window.location.href },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title || "Ranjan's Flix" },
      { name: "twitter:description", content: description || "Free Movie Downloads | Download Movies Online | Movie Downloader" },
      { name: "twitter:image", content: image || "https://opengraph.b-cdn.net/production/images/06254822-67bc-4bbb-ab08-95bd363a2de5.png?token=xYcYh95vsTwp3oycYg8m3kYHFFl4MAvrlrOo-nCSGz8&height=600&width=1200&expires=33266469698" },
    ];

    // Update each meta tag
    metaTags.forEach(({ name, property, content }) => {
      let tag = document.head.querySelector(`meta[${name ? 'name' : 'property'}="${name || property}"]`);
      
      if (!tag) {
        tag = document.createElement("meta");
        document.head.appendChild(tag);
      }
      
      if (name) tag.name = name;
      if (property) tag.setAttribute("property", property);
      tag.content = content;
    });
  }, [title, description, image, url]);

  return null; // No visible output is required
};

export default SEO;
