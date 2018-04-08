import React from "react";
import g from "glamorous";
import { css } from "glamor";
import Link from "gatsby-link";
import logo from "../images/logo.svg";
import { rhythm } from "../utils/typography";
import Avatar from "../components/avatar"

const linkStyle = css({ float: `right` });

export default ({ children, data }) => (
  <g.Div
    margin='0 auto'
    maxWidth={700}
    padding={rhythm(2)}
    paddingTop={rhythm(1.5)}
    display="grid"
    gridTemplateRows="auto 1fr auto"
    gridTemplateColumns="100%"
  >
    <g.Header
      marginBottom={rhythm(0.5)}
      flex='1 0 auto'
    >
      <div
        width='100%'
        display='table'
      >
        <Link to={`/`}
          className={css({
            display: 'table-cell',
            verticalAlign: 'middle',
            fontStyle: 'normal',
          })}
        >
          <g.Div
            display='flex'
            alignItems='center'
          >
            <g.Img
              height='30px'
              marginBottom='0'
              src={logo}
              alt="lego-lotus-logo"
              paddingRight={rhythm(0.25)}
            />
            <g.Span
              fontStyle='normal'
            >
              {data.site.siteMetadata.title}
            </g.Span>
          </g.Div>
        </Link>
        <g.Nav
          display='table-cell'
          verticalAlign='middle'
        >
          <Link className={linkStyle} to={`/about/`}>
            About me
          </Link>
        </g.Nav>
      </div>
    </g.Header>
    <main>
      {children()}
    </main>
    <g.Footer
      flexShrink='0'
    >
      <Avatar />
    </g.Footer>
  </g.Div>
);

// export const query = graphql`
//   query LayoutQuery {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `
