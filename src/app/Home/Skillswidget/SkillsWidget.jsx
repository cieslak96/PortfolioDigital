import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";

import Js from "./Js.png";
import Html from "./Html.png";
import Css from "./Css.png";

const SkillsWidget = ({ title, content, skills }) => {
  // Find the maximum proficiency level
  const maxProficiency = Math.max(...skills.map((skill) => skill.proficiency));

  return (
    <section
      data-testid="skillsWidget"
      className=" px-4 font-sans skills-widget p-5 border border-gray-300 rounded-lg shadow-md"
    >
      <h2 data-testid="workWidgetTitle" className="flex items-center text-xl font-bold">
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="{{IsDarkMode ? 'stroke-white' : 'stroke-gray-800'}}"
        >
          <path
            d="M3.75 13.5L14.25 2.25L12 10.5H20.25L9.75 21.75L12 13.5H3.75Z"
            className="stroke-current"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <div className="px-2">{title}</div>
      </h2>
      <p className="mb-6">{content}</p>
      <ul>
        {skills.map((skill, index) => (
          <li key={`skill-${index}`} className="flex items-center mb-4">
            <Image src={skill.icon} alt={`${skill.organization} Skill Icon`} width={60} height={60} />
            <div className="flex flex-col ml-4 ">
              <h3 className="font-semibold">{skill.name}</h3>
              <div className="bg-gray-200 h-4 w-48 border border-gray-300  mt-1 ">
                <div
                  className="bg-teal-400 h-full "
                  style={{ width: `${(skill.proficiency / maxProficiency) * 100}%` }}
                ></div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

SkillsWidget.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      proficiency: PropTypes.number.isRequired,
    })
  ),
};

SkillsWidget.defaultProps = {
  skills: [],
};

const skills = [
  { name: "HTML", proficiency: 90, icon: Html },
  { name: "CSS", proficiency: 80, icon: Css },
  { name: "JavaScript", proficiency: 100, icon: Js },
];

function App() {
  return (
    <>
      <SkillsWidget title={"Skills"} content={"Web Development is a passion"} skills={skills} />
    </>
  );
}

export default App;
