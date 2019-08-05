import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import {Link} from "gatsby";

function IndexPage() {
    return (
        <Layout>
            <SEO
                title="Home"
                keywords={[`scampitown`, `tom styan`]}
            />

            <div className="flex items-center justify-center h-screen">

                <div className="text-white font-bold font-serif p-10 text-4xl hover:underline"
                    <Link to="/scampitown">
                        <span className="tracking-tight">Welcome to Scampitown</span>
                    </Link>
                </div>

            </div>
        </Layout>
    );
}

export default IndexPage;
