import React from "react";
import Link from "gatsby-link";
import g from "glamorous";
import { rhythm } from "../utils/typography";
import PostTitle from "../components/postTitle"

export default ({ data }) =>
  <div>
    <h1>
      Posts
    </h1>
    <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div key={node.id}>
        <Link
          to={node.fields.slug}
          css={{ textDecoration: 'none', color: 'inherit' }}
        >
          <PostTitle
            title={node.frontmatter.title}
            date={node.frontmatter.date}
          />
          <p>{node.excerpt}</p>
        </Link>
      </div>
    ))}
  </div>

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
