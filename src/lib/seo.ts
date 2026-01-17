import type { Metadata } from "next";

const baseUrl = new URL("https://www.drsmitbharatsolanki.com");

const defaultImage = {
  url: "/dr1.jpeg",
  width: 1200,
  height: 630,
  alt: "Dr. Smit Bharat Solanki",
};

type MetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  noIndex?: boolean;
};

export const buildMetadata = ({
  title,
  description,
  path,
  keywords = [],
  noIndex = false,
}: MetadataInput): Metadata => {
  const canonicalUrl = new URL(path, baseUrl).toString();

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "Dr. Smit Bharat Solanki",
      type: "website",
      images: [defaultImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [defaultImage.url],
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
        },
  };
};
