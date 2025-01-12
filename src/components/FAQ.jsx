import React from "react";
import Accordion from "./Accordion";

const FAQ = () => {
  return (
    <div className="p-4 bg-white rounded-lg">
      <Accordion
        title="Do you Do you have books suitable for kids"
        answer="Your answer is on the way please give us a moment"
      />
      <Accordion
        title="Do you offer Printing Services of the books or its read online"
        answer="Your answer is on the way please give us a moment"
      />
      <Accordion 
        title="If can Read offline why do we need to sign in" 
        answer="Your answer is on the way please give us a moment" 
    />
     <Accordion 
        title="What do we do incase we need an Audio book" 
        answer="Your answer is on the way please give us a moment" 
    />
     <Accordion 
        title="What is your privacy policy" 
        answer="Your answer is on the way please give us a moment" 
    />
    </div>
  );
};

export default FAQ;