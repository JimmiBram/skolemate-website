import { useEffect } from "react";

interface SEOProps {
  title: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  articlePublishedTime?: string;
  articleAuthor?: string;
}

export const useSEO = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage,
  ogType = "website",
  articlePublishedTime,
  articleAuthor,
}: SEOProps) => {
  useEffect(() => {
    // Update title
    document.title = title;

    // Helper to update or create meta tag
    const setMetaTag = (name: string, content: string, property = false) => {
      const attr = property ? "property" : "name";
      let element = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement;
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attr, name);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // Helper to update or create link tag
    const setLinkTag = (rel: string, href: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
      if (!element) {
        element = document.createElement("link");
        element.setAttribute("rel", rel);
        document.head.appendChild(element);
      }
      element.setAttribute("href", href);
    };

    if (description) {
      setMetaTag("description", description);
      setMetaTag("og:description", description, true);
    }

    if (keywords) {
      setMetaTag("keywords", keywords);
    }

    if (canonicalUrl) {
      setLinkTag("canonical", canonicalUrl);
    }

    setMetaTag("og:title", title, true);
    setMetaTag("og:type", ogType, true);

    if (ogImage) {
      setMetaTag("og:image", ogImage, true);
    }

    if (articlePublishedTime) {
      setMetaTag("article:published_time", articlePublishedTime, true);
    }

    if (articleAuthor) {
      setMetaTag("article:author", articleAuthor, true);
    }
  }, [title, description, keywords, canonicalUrl, ogImage, ogType, articlePublishedTime, articleAuthor]);
};
