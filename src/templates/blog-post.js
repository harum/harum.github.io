import React from "react";
import PostTitle from "../components/postTitle"

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div>
      <PostTitle
        title={post.frontmatter.title}
        date={post.frontmatter.date}
        timeToRead={post.timeToRead}
      />
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
      }
      timeToRead
    }
  }
`;
