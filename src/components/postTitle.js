import React from "react";
import g from "glamorous";
import { rhythm } from "../utils/typography";

export default ({ title, date }) =>
  <g.Div marginBottom={rhythm(0.25)}>
    <g.H3 marginBottom={rhythm(0)}>
      { title }
    </g.H3>
    <g.Span
      color="#BBB"
      fontSize={rhythm(0.5)}
    >
      { date }
    </g.Span>
  </g.Div>
