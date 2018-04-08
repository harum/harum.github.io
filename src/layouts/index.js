import React from "react";
import { rhythm } from "../utils/typography";
import g from "glamorous";
import Avatar from "../components/avatar"
import BlogHeader from "../components/header"
import BlogFooter from "../components/footer"

export default ({ children, data }) => (
  <g.Div
    margin='0 auto'
    maxWidth={700}
    padding={rhythm(2)}
    paddingTop={rhythm(1.5)}
    paddingBottom={rhythm(1.5)}

    display='grid'
    gridTemplateColumns='1fr'
    gridTemplateRows='auto 1fr auto'
    minHeight='100%'
  >
    <g.Header>
      <BlogHeader
        title={data.site.siteMetadata.title}
      />
    </g.Header>
    <g.Main>
      {children()}
    </g.Main>
    <g.Footer>
      <BlogFooter />
    </g.Footer>
  </g.Div>
);

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
