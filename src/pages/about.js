import React from "react";
import g from "glamorous";
import { rhythm } from "../utils/typography";
import avatar from "../images/harum_avatar.jpg";

export default () => (
  <div>
    <p>
      <g.Img
        height='130px'
        src={avatar}
        alt='Putu Harum Bawa'
        margin={rhythm(0.25)}
        float='left'
      />
      Hello. My name is Putu Harum Bawa. I am from Bali, but currently working in
      Jakarta, Indonesia. I currently work at <a href="https://www.bukalapak.com/">Bukalapak</a> as Front End Developer since August 2015.
    </p>

    <p>I believe that the best way to learn is to teach about what we have learned. Whether we teach other or teach our self by making a note, a blog or other medium. In this blog I try to
    explain and rewrite what I have learned. I really apreciated feedback and discussion from you.</p>

    <p>I try to write my posts on English to practice my written English. I also want to
    write it on Bahasa after I have posted several blog post.</p>

    <p>You can find me on Github and several social media. Here they are:</p>

    <ul>
    <li><a href="https://github.com/harum">Github</a></li>
    <li><a href="https://twitter.com/harumbawa">Twitter</a></li>
    <li><a href="https://www.instagram.com/harum_bawa/">Instagram</a></li>
    <li><a href="https://web.facebook.com/dark.heroem">Facebook</a></li>
    </ul>
  </div>
);
