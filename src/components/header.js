import Link from "gatsby-link";
import { rhythm } from "../utils/typography";
import g from "glamorous";
import logo from "../images/logo.svg";
import { css } from "glamor";

export default ({ title }) => (
  <g.Div
    width='100%'
    display='table'
    paddingBottom={rhythm(1)}
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
          { title }
        </g.Span>
      </g.Div>
    </Link>
    <g.Nav
      display='table-cell'
      verticalAlign='middle'
      textAlign='right'
    >
      <Link to={`/about/`}>
        About me
      </Link>
    </g.Nav>
  </g.Div>
);
