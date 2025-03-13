import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";

const SEO = ({
  title,
  description,
  keywords,
  image,
  url,
  ogType = "website",
  schema,
}) => {
  const siteTitle = "Your Site Name"; // Replace with your site name
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;

  return (
    <Helmet>
      {/* Basic meta tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Open Graph meta tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      {url && <meta property="og:url" content={url} />}
      {image && <meta property="og:image" content={image} />}

      {/* Twitter Card meta tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}

      {/* Schema.org JSON-LD */}
      {schema && (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      )}

      {/* Accessibility meta tags */}
      <html lang="en" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string.isRequired,
  keywords: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
  ogType: PropTypes.string,
  schema: PropTypes.object,
};

export default SEO;
