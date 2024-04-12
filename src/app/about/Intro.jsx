/* eslint-disable react/no-unescaped-entities */
import React from "react";

export const metadata = {
  title: "Portfolio - About",
  description: "The about page of my portfolio.",
};
export default function IntroAbout() {
  return (
    <div className="flex flex-col justify-start items-start max-w-1380 h-1412 p-6 ">
      <div className="hidden w-full h-112 bg-white bg-opacity-90 rounded-full"></div>

      <h1 className="w-full h-30 text-4xl tracking-tight font-bold ">CS Student, thalassophile, doer...</h1>

      <p className="w-full h-42 text-base p-4 ">
        I am an International student from Brazil who loves programming. I feel devotion to the sea. I do not care about
        paying the price to get things I really want done.
      </p>

      <p className="w-full h-42 text-base p-4">
        There are many adjectives and many things to describe myself. Between those many, I chose to talk about myself through
        a song. This song is called "Serenissima" by a Brazilian 80s band called Legiao Urbana. Bellow there is the
        English translation for its lyrics.`
      </p>

      <p className="w-full h-42 text-base p-4">
        <em>"I'm a sentimental animal <br></br>I easily get attached to whoever awakens my desire <br></br>Try to make me do what I don't want to do
        <br></br>And you'll soon see what happens<br></br> I think I understand what you wanted to tell me <br></br>Still, there are other things<br></br> I
        got my balance by courting insanity <br></br>Everything is lost but there are possibilities <br></br>We had something in mind, you changed
        the plans<br></br> We had a plan, you changed your mind<br></br> It's gone, it's gone - maybe another day <br></br>Before I used to dream, now I
        don't even sleep<br></br> When was it the first time that we compete?<br></br> What no one realizes is what everyone knows<br></br> I don't
        understand terrorism,<br></br> we used to talk about friendship <br></br>I'm no longer interested in what I feel <br></br>I don't believe
        in anything other than what I doubt<br></br> You expect answers that I don't have <br></br>I'm not going to fight about it<br></br> I'll
        even think twice if you want to stay<br></br>My green orange tree, why is it so silver? <br></br>Was it the moon from that night,
        from the serene dawn?<br></br> I have a silly smile, like a hiccup <br></br>As the chaos moves on with all the calm in the world"
      </em></p>


    </div>
  );
}
