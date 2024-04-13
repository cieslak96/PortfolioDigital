import React from "react";
import PropTypes from "prop-types";

const ArticleCard = () => {
  const articles = [
    {
      date: "Feb. 13, 2019",
      title: "The Secret History of Women in Coding",
      content: "Computer programming once had much better gender balance than it does today. What went wrong?",
      link: "https://www.nytimes.com/2019/02/13/magazine/women-coding-computer-programming.html",
    },

    {
      date: "DEC 13, 2022",
      title: "Learn Coding on Your Own: How to Teach Yourself Coding",
      content:
        "Learning coding on your own can be a great way to start your coding journey. As a self-taught programmer, you will pick up new skills, gain access to the best tech jobs, improve your salary, and make yourself a more valuable employee no matter what industry you work for. If you’re wondering how to learn coding by yourself, keep reading.",
      link: "https://careerkarma.com/blog/how-to-learn-coding-by-yourself/",
    },
    {
      date: "Jun 24, 2020",
      title: "Young Black Women Are Learning To Code Thanks To These Brazilians",
      content:
        "Meet Ester Borges Santos, a trailblazing force from Sao Paulo, Brazil, on a mission to shatter gender and racial barriers in STEM. In the face of Covid-19, she and her team at NGO Minas Programam launched a virtual haven for young black girls eager to dive into the world of technology. Their inspiring journey not only cultivates coding skills but also empowers a generation to defy stereotypes and claim their space in the realms of science and innovation. Join the movement as they pave the way for a brighter, more inclusive future in tech.",
      link: "https://www.forbes.com/sites/andrewwight/2020/06/24/young-black-women-are-learning-to-code-thanks-to-these-brazilians/?sh=5481454b3ef0",
    },
  ];

  if (!articles.length) {
    return <div>No article data</div>;
  }

  return (
    <div>
      {articles.map((article, index) => (
        <article
          key={index}
          data-testid={"articleCard"}
          className="flex flex-col p-6 border border-gray-300 rounded-lg w-full shadow-md mb-5  "
        >
          <div className="text-xs uppercase text-gray-600 dark:text-gray-300 border-l-4 border-gray-300 pl-2">
            <time data-testid={"articleCardDate"}>{article.date}</time>
            <h2 className="text-2xl capitalize my-4 font-bold" data-testid={"articleCardTitle"}>
              {article.title}
            </h2>
          </div>
          <p
            className="text-base text-gray-700 dark:text-white leading-relaxed mb-4"
            data-testid={"articleCardContent"}
          >
            {article.content}
          </p>
          <a
            className="text-base font-bold text-teal-400 hover:underline"
            data-testid={"articleCardLink"}
            href={article.link}
          >
            Read More
          </a>
        </article>
      ))}
    </div>
  );
};

export default ArticleCard;
