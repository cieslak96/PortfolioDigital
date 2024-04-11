import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";

import Microsoft from "./Microsoft.png";
import Spotify from "./Spotify.png";
import Slack from "./Slack.png";
import Audible from "./Audible.png";

const WorkWidget = ({ title, content, experiences }) => {
  return (
    <div
      data-testid="workWidget"
      className="font-sans flex-grow max-w-screen-md  p-5 border border-gray-300 rounded-lg shadow-md"
    >
      <h2 data-testid="workWidgetTitle" className="flex text-xl font-bold items-center ">
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="{{IsDarkMode ? 'stroke-white' : 'stroke-gray-800'}}"
        >
          <path
            d="M18.25 12.15V16.4C18.25 17.494 17.463 18.436 16.378 18.58C14.291 18.857 12.162 19 10 19C7.838 19 5.709 18.857 3.622 18.58C2.537 18.436 1.75 17.494 1.75 16.4V12.15M18.25 12.15C18.4875 11.9436 18.6774 11.6883 18.8069 11.4016C18.9364 11.1149 19.0022 10.8036 19 10.489V6.706C19 5.625 18.232 4.691 17.163 4.531C16.0303 4.36142 14.8919 4.23234 13.75 4.144M18.25 12.15C18.056 12.315 17.83 12.445 17.577 12.53C15.1332 13.3408 12.5748 13.7528 10 13.75C7.352 13.75 4.805 13.321 2.423 12.53C2.17626 12.4479 1.94773 12.3189 1.75 12.15M1.75 12.15C1.51255 11.9436 1.32256 11.6883 1.1931 11.4016C1.06364 11.1149 0.997764 10.8036 1 10.489V6.706C1 5.625 1.768 4.691 2.837 4.531C3.9697 4.36142 5.10809 4.23233 6.25 4.144M13.75 4.144V3.25C13.75 2.65326 13.5129 2.08097 13.091 1.65901C12.669 1.23705 12.0967 1 11.5 1H8.5C7.90326 1 7.33097 1.23705 6.90901 1.65901C6.48706 2.08097 6.25 2.65326 6.25 3.25V4.144M13.75 4.144C11.2537 3.95108 8.74628 3.95108 6.25 4.144M10 10.75H10.008V10.758H10V10.75Z"
            class="stroke-current"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="px-2">{title}</div>
      </h2>
      <p data-testid="workWidgetContent" className="text-gray-400">
        {content}
      </p>
      <ul className="mt-4">
        {experiences.map((experience, index) => (
          <li key={index} data-testid={`workWidgetItem${index}`} className="flex items-center py-2">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <Image src={experience.logo} alt={`${experience.organization} Logo`} width={40} height={40} />
            </div>
            <div className="ml-3 flex-grow">
              <h3 data-testid={`workWidgetItemTitle${index}`} className="text-base font-bold">
                {experience.organization}
              </h3>
              <div className="flex justify-between items-center text-xs text-gray-400">
                <p data-testid={`workWidgetItemContent${index}`} className="mr-2">
                  {experience.jobTitle}
                </p>
                <div>{experience.endYear ? `${experience.startYear} - ${experience.endYear}` : "current"}</div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

WorkWidget.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  experiences: PropTypes.arrayOf(
    PropTypes.shape({
      logo: PropTypes.string.isRequired,
      organization: PropTypes.string.isRequired,
      jobTitle: PropTypes.string.isRequired,
      startYear: PropTypes.number.isRequired,
      endYear: PropTypes.number,
    })
  ),
};

WorkWidget.defaultProps = {
  experiences: [],
};

const App = () => {
  return (
    <div className="flex justify-center">
      <div className="max-w-screen-md">
        <WorkWidget
          title={"Work"}
          content={"loren vrjngsllsnrk"}
          experiences={[
            {
              logo: Slack,
              organization: "Slack",
              jobTitle: "SOFTWARE ENGINEER",
              startYear: 2016,
              endYear: null,
            },
            {
              logo: Spotify,
              organization: "Spotify",
              jobTitle: "SOFTWARE ENGINEER",
              startYear: 2014,
              endYear: 2015,
            },
            {
              logo: Microsoft,
              organization: "Microsoft",
              jobTitle: "SOFTWARE ENGINEER",
              startYear: 2012,
              endYear: 2013,
            },
            {
              logo: Audible,
              organization: "Audible",
              jobTitle: "SOFTWARE ENGINEER",
              startYear: 2010,
              endYear: 2011,
            },
          ]}
        />
      </div>
    </div>
  );
};

export default App;
