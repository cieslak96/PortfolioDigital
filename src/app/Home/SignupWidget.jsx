"use client";
import React, { useState } from "react";
import PropTypes from "prop-types";

const SignupWidget = ({ title, content, simulateNetworkRequestTime }) => {
  // State to manage the email input and messages
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [busy, setBusy] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);
  async function handleSubmit(e) {
    e.preventDefault();
    if (!validateEmail(email)) {
      setIsValidEmail(false);
      return;
    }
    setIsValidEmail(true);
    try {
      setBusy(true);
      // Wait for the specified time (simulating a network request)
      await new Promise((resolve) => setTimeout(resolve, simulateNetworkRequestTime));
      setMessage(`Thanks for subscribing, ${email}!`);
      setIsSubscribed(true);
    } finally {
      setBusy(false);
    }
  }

  // Function to validate email
  const validateEmail = (email) => {
    // Basic email validation logic
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  };

  return (
    <form
      data-testid={"signupWidget"}
      className={"font-sans signup-widget p-6 border border-gray-300 rounded-lg shadow-md "}
      onSubmit={handleSubmit}
      autoComplete={"false"}
    >
      <div data-testid={"signupWidgetTitle"} className="font-semibold item-center flex">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M21.75 6.75V17.25C21.75 17.8467 21.5129 18.419 21.091 18.841C20.669 19.2629 20.0967 19.5 19.5 19.5H4.5C3.90326 19.5 3.33097 19.2629 2.90901 18.841C2.48705 18.419 2.25 17.8467 2.25 17.25V6.75M21.75 6.75C21.75 6.15326 21.5129 5.58097 21.091 5.15901C20.669 4.73705 20.0967 4.5 19.5 4.5H4.5C3.90326 4.5 3.33097 4.73705 2.90901 5.15901C2.48705 5.58097 2.25 6.15326 2.25 6.75M21.75 6.75V6.993C21.75 7.37715 21.6517 7.75491 21.4644 8.0903C21.2771 8.42569 21.0071 8.70754 20.68 8.909L13.18 13.524C12.8252 13.7425 12.4167 13.8582 12 13.8582C11.5833 13.8582 11.1748 13.7425 10.82 13.524L3.32 8.91C2.99292 8.70854 2.72287 8.42669 2.53557 8.0913C2.34827 7.75591 2.24996 7.37815 2.25 6.994V6.75"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="stroke-current"
          />
        </svg>
        <div className="px-2">{title}</div>
      </div>
      {isSubscribed && (
        <p data-testid={"signupWidgetMessage"} className={"message"}>
          {message}
        </p>
      )}
      {!isSubscribed && (
        <>
          <p data-testid={"signupWidgetContent"} className="dark:text-gray-400">
            {content}
          </p>
          <div className={"input-row"}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              data-testid="signupWidgetInput"
              required
              disabled={busy}
              className={`block w-full border border-gray-300 rounded-md py-2 px-3 mb-3 placeholder-gray-400 dark:bg-gray-800 ${
                !isValidEmail && "border-red-500"
              }`}
            />
            {/* Error message for invalid email */}
            {!isValidEmail && <p className="error">Please enter a valid email address.</p>}
            <button
              type="submit"
              data-testid="signupWidgetButton"
              disabled={busy}
              className="w-full bg-black text-white rounded-md py-2 px-4 dark:shadow-lg dark:border dark:bg-gray-700 dark:hover:bg-gray-800 dark:hover:font-semibold hover:bg-gray-700 hover:font-semibold"
            >
              {busy ? "Joining..." : "Join"}
            </button>
          </div>
        </>
      )}
    </form>
  );
};

SignupWidget.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  simulateNetworkRequestTime: PropTypes.number,
};

SignupWidget.defaultProps = { simulateNetworkRequestTime: 2000 };

function App() {
  return (
    <>
      <SignupWidget
        title={"Stay up to date"}
        content={"Get notified when I publish something new, and unsubscribe at any time."}
      />
    </>
  );
}

export default App;
