import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function IndexPage() {
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`scampitown`, `tom styan`]}
      />

      <section className="text-center">
          <iframe src="https://indd.adobe.com/embed/8e6a39d1-6158-412b-8841-a35ec05f7505?startpage=1&allowFullscreen=false"
                  className="iframe w-full h-screen" frameBorder="0" allowFullScreen=""></iframe>
      </section>
    </Layout>
  );
}

export default IndexPage;
