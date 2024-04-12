import React from "react";
import PropTypes from "prop-types";

import P1 from "./P1.png";
import P2 from "./P2.png";
import P3 from "./P3.png";
import P4 from "./P4.png";
import Image from "next/image";

const Project = ({ title, image, description, technologies, link }) => (
  <div className="col-span-1 px-4 border border-gray-300 rounded-lg shadow-md">
    <div className="text-xl font-semibold py-3">{title}</div>
    <Image src={image} className="mx-auto" alt={title} width={300} height={300} />
    <div className="text-sm italic">{technologies}</div>
    <div className="text-lg py-4">{description}</div>

      {link}


  </div>
);

Project.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  technologies: PropTypes.string.isRequired,
  link: PropTypes.element.isRequired,
};

const IntroProjects = () => (
  <>
    <section>
      <div className="text-4xl font-black text-left mx-4 md:mx-0 ">
        These are some projects I got involved in while learning how to program.
      </div>
      <div className="text-xlg text-left py-7 mx-4 md:mx-0">
        I am a lifelong learner, and for me, there is no better way to learn than through hands-on work.
        Each project is a valuable experience. Seeing something coming out of the black screens of the IDE is
        something magical.
      </div>
    </section>
    <div className="grid grid-cols-4 gap-8 mx-4 md:mx-0">
      <Project
        title="Black Jack Game"
        image={P1}
        description="I was able to create a Black Game. I could learn a lot about the Java language on this project. I learned how to implement interfaces and how to override and customize panels... Also, on this project, I had to work with some previous code, so learning how to investigate private classes and work with them was something remarkable."
        technologies="Java"



      />
      <Project
        title="Website Wireframe"
        image={P3}
        description="On this project, I had the opportunity to learn a bit more about UX and use it to wireframe a tailored website."
        technologies="Whimsical"
        link={
          <a href="https://whimsical.com/M2xuJZuNDHihuPBs7EsKcH" class="flex items-center">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="mr-2 {{ IsDarkMode ? 'fill-white' : 'fill-gray-800' }}"
            style={{ marginTop: '8px', marginBottom: '8px' }}
          >
            <path
              d="M12.232 4.232C12.7009 3.76309 13.3369 3.49967 14 3.49967C14.6631 3.49967 15.2991 3.76309 15.768 4.232C16.2369 4.7009 16.5003 5.33687 16.5003 6C16.5003 6.66312 16.2369 7.29909 15.768 7.768L14.543 8.992C14.4064 9.13351 14.3309 9.323 14.3327 9.51965C14.3345 9.7163 14.4135 9.90437 14.5526 10.0434C14.6917 10.1824 14.8799 10.2611 15.0765 10.2628C15.2732 10.2644 15.4626 10.1887 15.604 10.052L16.828 8.828C17.5566 8.07359 17.9598 7.06318 17.9507 6.01439C17.9416 4.9656 17.5209 3.96235 16.7793 3.22072C16.0376 2.47909 15.0344 2.05841 13.9856 2.0493C12.9368 2.04019 11.9264 2.44336 11.172 3.172L8.172 6.172C7.78234 6.56169 7.47741 7.02769 7.27633 7.54078C7.07525 8.05386 6.98236 8.60296 7.00349 9.15364C7.02462 9.70432 7.1593 10.2447 7.3991 10.7409C7.6389 11.237 7.97863 11.6783 8.397 12.037C8.54832 12.1633 8.74329 12.225 8.93974 12.2087C9.13618 12.1924 9.31831 12.0994 9.44671 11.9498C9.57512 11.8002 9.63948 11.6061 9.62587 11.4095C9.61226 11.2128 9.52178 11.0294 9.374 10.899C9.11221 10.6749 8.89958 10.3991 8.74945 10.0889C8.59932 9.77874 8.51494 9.44087 8.50161 9.09653C8.48827 8.75218 8.54627 8.4088 8.67196 8.08794C8.79766 7.76708 8.98832 7.47566 9.232 7.232L12.232 4.232Z"
              class="fill-current"
            />
            <path
              d="M11.603 7.963C11.4517 7.83667 11.2567 7.77499 11.0603 7.7913C10.8638 7.80762 10.6817 7.90062 10.5533 8.05018C10.4249 8.19975 10.3605 8.39385 10.3741 8.5905C10.3877 8.78716 10.4782 8.97055 10.626 9.101C10.8878 9.32509 11.1004 9.60089 11.2506 9.91107C11.4007 10.2213 11.4851 10.5591 11.4984 10.9035C11.5117 11.2478 11.4537 11.5912 11.328 11.9121C11.2023 12.2329 11.0117 12.5243 10.768 12.768L7.768 15.768C7.2991 16.2369 6.66313 16.5003 6 16.5003C5.33688 16.5003 4.70091 16.2369 4.232 15.768C3.7631 15.2991 3.49967 14.6631 3.49967 14C3.49967 13.3369 3.7631 12.7009 4.232 12.232L5.457 11.008C5.59356 10.8665 5.66907 10.677 5.66726 10.4803C5.66546 10.2837 5.5865 10.0956 5.44738 9.95664C5.30825 9.81764 5.12011 9.73886 4.92346 9.73724C4.72681 9.73563 4.53739 9.81131 4.396 9.948L3.172 11.172C2.78996 11.541 2.48523 11.9824 2.2756 12.4704C2.06596 12.9584 1.95562 13.4833 1.951 14.0144C1.94639 14.5455 2.04759 15.0722 2.24872 15.5638C2.44984 16.0554 2.74685 16.502 3.12242 16.8776C3.498 17.2531 3.9446 17.5502 4.43619 17.7513C4.92777 17.9524 5.45449 18.0536 5.98561 18.049C6.51673 18.0444 7.04161 17.934 7.52962 17.7244C8.01764 17.5148 8.45902 17.21 8.828 16.828L11.828 13.828C12.2177 13.4383 12.5226 12.9723 12.7237 12.4592C12.9247 11.9461 13.0176 11.397 12.9965 10.8464C12.9754 10.2957 12.8407 9.75531 12.6009 9.25913C12.3611 8.76296 12.0214 8.32169 11.603 7.963Z"
              class="fill-current"
            />
          </svg>
          <span class="mr-2">Whimsical.com</span>
        </a>
        }
      />
      <Project
        title="Embedded Scenarios"
        image={P2}
        description="On this project, I had to embeds the a java scene within itself. I could learn a lot about Swig on this project, as long as how to draw and rescale scenes."
        technologies="Java"

      />
      <Project
        title="Digital Portfolio Template"
        image={P4}
        description="I worked with a group on GitHub to create a Digital Portfolio template. The Portfolio has many features, including a Theme Switcher to Dark mode. On this portfolio, we used something pre-made on Figma, and I loved using this website to investigate designs"
        technologies="Next and Tailwind"

      />
    </div>
  </>
);

export default IntroProjects;
