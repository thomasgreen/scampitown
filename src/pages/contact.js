import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function ContactPage() {
    return (
        <Layout>
            <SEO
                title="Contact"
                keywords={[`scampitown`, `tom styan`]}
            />
            <section className="flex flex-col md:flex-row items-center md:w-4/5 m-auto h-full md:my-3 py-10 bg-white">
                <form className="mx-auto md:w-2/3 md:flex-wrap md:justify-between"
                      action="https://formspree.io/tomgreen135@gmail.com" method="POST">

                    <h1 className="text-4xl font-serif mb-4">Contact</h1>

                    <p className="text-grey-600 mb-4 font-serif">Contact me at <a href="mailto:Scampitowncomics@gmail.com">Scampitowncomics@gmail.com</a> or use
                        the form below.</p>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-6 leading-tight"
                        id="first-name"
                        type="text"
                        placeholder="Name"
                        name="Name"
                        aria-label="name"
                        required
                    />

                    <input type="email"
                           className="appearance-none block bg-gray-200 mb-6 px-3 py-2 rounded-md text-gray-700 w-full rounded"
                           id="email"
                           placeholder="Email"
                           name="Email"
                           aria-label="email"
                           required
                    />

                    <textarea
                        className="appearance-none bg-gray-200 mb-6 px-3 py-2 rounded-md text-gray-700 w-full rounded shadow-none"
                        placeholder="Message"
                        rows="8"
                        id="message"
                        aria-label="message"
                        required
                        name="Message"
                    />

                    <button
                        className="border-b-4 border-gray-900 hover:border-gray-600 bg-gray-800 hover:bg-gray-500 font-bold px-4 py-2 rounded text-sm text-white float-right">
                        Submit
                    </button>
                </form>
            </section>
        </Layout>
    );
}

export default ContactPage;
