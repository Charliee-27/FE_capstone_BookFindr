import React from "react";
import Accordion from "./Accordion";

const FAQ = () => {
  return (
    <div className="container p-4 bg-white rounded-lg">
      <Accordion
        title="Do you have books suitable for kids?"
        answer="Your answer is on the way please give us a moment."
      />
      <Accordion
        title="Do you offer Printing Services for the books or is it read online?"
        answer="Your answer is on the way please give us a moment."
      />
      <Accordion 
        title="If I can read offline, why do I need to sign in?" 
        answer="Your answer is on the way please give us a moment." 
      />
      <Accordion 
        title="What do we do in case we need an Audio book?" 
        answer="Your answer is on the way please give us a moment." 
      />
      <Accordion 
        title="What is your privacy policy?" 
        answer="Your answer is on the way please give us a moment." 
      />
    </div>
  );
};

export default FAQ;
