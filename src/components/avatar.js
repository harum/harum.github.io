import React from "react";
import g from "glamorous";
import avatar from "../images/harum_avatar.jpg";
import { rhythm } from "../utils/typography";

const ListItem = g.li({
  margin: `${rhythm(0)}`,
  lineHeight: '1.2rem'
})

export default () => (
  <g.Div
    display='flex'
    alignItems='center'
  >
    <g.Img
      height='75px'
      marginBottom='0'
      src={avatar}
      alt='Putu Harum Bawa'
      borderRadius='50%'
      paddingRight={rhythm(0.25)}
    />
    <g.Span
      fontStyle='normal'
    >
      <g.Ul
        listStyle='none'
        margin='0'
      >
        <ListItem>Putu Harum Bawa</ListItem>
        <ListItem>Front End Developer</ListItem>
        <ListItem><a href="https://github.com/harum">github.com/harum</a></ListItem>
      </g.Ul>
    </g.Span>
  </g.Div>
);
