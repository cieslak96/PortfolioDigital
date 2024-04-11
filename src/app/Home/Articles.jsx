import React from "react";
import PropTypes from "prop-types";

const ArticleCard = () => {
  const articles = [
    {
      date: "2022-01-01",
      title: "React Hooks: Understanding useState and useEffect",
      content:
        "Dive deep into two fundamental React hooks, useState and useEffect, with this article. Learn how to manage state and handle side effects in your React components using these hooks. The article also covers fetching data from APIs and handling asynchronous operations.",
      link: "https://www.robinwieruch.de/react-hooks-fetch-data",
    },
    {
      date: "2022-01-15",
      title: "React Testing Library: A Complete Guide",
      content:
        "Learn how to test your React components with React Testing Library. This article covers the fundamentals of testing React components, including rendering components, interacting with them, and making assertions. You will also learn how to test asynchronous operations and handle edge cases.",
      link: "https://www.robinwieruch.de/react-testing-library",
    },
    {
      date: "2022-02-01",
      title: "React Router: A Complete Guide",
      content:
        "Master React Router with this comprehensive guide. Learn how to set up routing in your React applications, including nested routes, route parameters, and programmatic navigation. The article also covers authentication and authorization, as well as protecting routes in your application.",
      link: "https://www.robinwieruch.de/react-router",
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
