import React from "react";
import { Accordion } from "flowbite-react";

const Accordian = () => {
  return (
    <div className="w-full h-full flex px-32 pt-10 items-start">
      <Accordion
        className="font-sf_sb"
        collapseAll
        style={{
          width: "60vw",
        }}
        aria-expanded
      >
        <Accordion.Panel
          style={{
            border: "solid",
            
          }}
        >
          <Accordion.Title>
            Can education flashcards be used for all age groups?
          </Accordion.Title>

          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Yes, education flashcards can be tailored to different age groups
              and learning levels. There are flashcards designed for
              preschoolers, elementary school students, high school students,
              and even for college-level and adult learners.
            </p>
          </Accordion.Content>
        </Accordion.Panel>

        <Accordion.Panel className=" transition-all duration-700 ease-in-out">
          <Accordion.Title>How do education flashcards work?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Education flashcards work by presenting a question or prompt on
              one side and the corresponding answer or information on the other.
              Users can review the cards repeatedly, reinforcing their memory
              and enhancing learning through repetition.
            </p>
          </Accordion.Content>
        </Accordion.Panel>

        <Accordion.Panel>
          <Accordion.Title>
            Can education flashcards be used for test preparation?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Absolutely. Flashcards are an excellent tool for test preparation,
              allowing students to review key concepts, terms, and facts. They
              provide a quick and focused way to reinforce knowledge before
              exams.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
};

export default Accordian;
