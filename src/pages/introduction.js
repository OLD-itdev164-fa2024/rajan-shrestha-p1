import React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Introduction = ({data}) => {
    const {owner, company, location } = data.site.siteMetadata.introduction;
    //const formattedLocation = `${owner}, ${company}, ${location}`

    return (
        <Layout>
            <Seo title="Home" />
            <h1>Introduction</h1>
            <p>Please visit our store at: </p>
            
            <div>{owner}</div>
            <div>{company}</div>
            <div>{location}</div>
            <div style={{maxWidth: `300px`, marginBottom: `1.45rem`}}>
            <StaticImage
                src="../images/Builidng.jpg"
                width={900}
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt="A Fuel Image"
                style={{marginBottom: `1.45rem`}}
                />
            </div>
            <Link to="/">Home</Link>
        </Layout>
    )
}

export default Introduction

export const query = graphql`
    query {
        site {
            siteMetadata {
                introduction {
                    owner
                    company
                    location
                }
            }
        }
    }
`