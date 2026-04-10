import { ReactNode } from "react";

interface SchemaMarkupProps {
  schema: Record<string, any>;
}

interface WebPageSchemaProps {
  title: string;
  description: string;
  url: string;
}

interface LocalBusinessSchemaProps {
  name: string;
  description?: string;
  url: string;
  phone?: string;
  areaServed?: string[];
}

/**
 * Generic schema markup component for rendering JSON-LD scripts.
 */
export default function SchemaMarkup({ schema }: SchemaMarkupProps): ReactNode {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * WebPage schema for SEO.
 */
export function WebPageSchema({
  title,
  description,
  url,
}: WebPageSchemaProps): ReactNode {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description: description,
    url: url,
  };

  return <SchemaMarkup schema={schema} />;
}

/**
 * LocalBusiness schema for location-based content.
 */
export function LocalBusinessSchema({
  name,
  description,
  url,
  phone,
  areaServed,
}: LocalBusinessSchemaProps): ReactNode {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: name,
    ...(description && { description: description }),
    url: url,
    ...(phone && { telephone: phone }),
    ...(areaServed && {
      areaServed: areaServed.map((area) => ({
        "@type": "City",
        name: area,
      })),
    }),
  };

  return <SchemaMarkup schema={schema} />;
}
