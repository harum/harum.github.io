import React from "react";
import g from "glamorous";
import { rhythm } from "../utils/typography";

export default ({ title, date, timeToRead, compact = false }) => {
  const postTitle = compact ?
    (
      <g.H3 marginBottom={rhythm(0)}>
        { title }
      </g.H3>
    )
    : (
      <g.H1 marginBottom={rhythm(0)}>
        { title }
      </g.H1>
    )

  const space = compact ? 0.25 : 1

  return (
    <g.Div marginBottom={rhythm(space)}>
      {postTitle}
      <g.Span
        color="#BBB"
        fontSize={rhythm(0.5)}
      >
        {date} | {timeToRead} minutes reading
      </g.Span>
    </g.Div>
  );
};
