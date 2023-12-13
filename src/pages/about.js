import React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const About = ({data}) => {
    const {owner, company} = data.site.siteMetadata.introduction;
    return (
        <Layout>
            <Seo title="About" />
            <h1>About the business</h1>
            <p>{`${company} is an everyday convenience store where I, ${owner}, work.`}</p>
            <p>{`At ${company}, we sell wide range of products: from fuel to food.`}</p>
            <div style={{maxWidth: `300px`, marginBottom: `1.45rem`}}>
                <StaticImage
                    src="../images/image.jpg"
                    width={300}
                    quality={95}
                    formats={["auto","webp","avif"]}
                    alt="A Gatsby Icon"
                    style={{marginBottom: `1.45rem`}}
                />
            </div>
            <Link to="/">Home</Link>
        </Layout>
    )
}

export default About

export const query = graphql`
query {
    site {
        siteMetadata {
            introduction {
                owner
                company
            }
        }
    }
}
`