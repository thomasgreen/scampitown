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

            <div className="flex items-center justify-center h-screen">

                <div className="text-white font-bold font-serif p-10 text-4xl hover:underline">
                    <a href="/scampitown">Welcome to Scampitown</a>
                </div>

            </div>
        </Layout>
    );
}

export default IndexPage;
