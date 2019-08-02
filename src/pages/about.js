import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function AboutPage() {
    return (
        <Layout>
            <SEO
                title="About"
                keywords={[`scampitown`, `tom styan`]}
            />

            <section className="flex flex-col md:flex-row items-center md:w-4/5 m-auto h-full md:my-3 py-10 bg-white">
                    <p className="text-grey-200 w-10/12 md:w-1/2 md:m-auto md:text-2xl font-serif">
                        Scampitown is an interactive comic project that takes its inspiration from traditional
                        illustration and storytelling. Scampitown has attempted to take these inspirations and combine
                        them with the possibility’s technology has gifted us with. Enjoy spending your time looking
                        around the town and exploring the resident’s homes and personalities. The site will regularly be
                        updated with interesting new characters and a series of comics. Enjoy!

                    </p>
            </section>
        </Layout>
    );
}

export default AboutPage;
