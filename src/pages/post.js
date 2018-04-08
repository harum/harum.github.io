import React from "react";
import g from "glamorous";
import Link from "gatsby-link";
import PostTitle from "../components/postTitle"

import { rhythm } from "../utils/typography";

export default ({ data }) => {
  return (
    <div>
      <g.H1 display={"inline-block"} borderBottom={"1px solid"}>
        My Amazing Post
      </g.H1>
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
            <g.H3 marginBottom={rhythm(1 / 4)}>
              {node.frontmatter.title}{" "}
              <g.Span color="#BBB">- {node.frontmatter.date}</g.Span>
            </g.H3>
            <p>{node.excerpt}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};
