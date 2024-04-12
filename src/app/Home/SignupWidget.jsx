"use client";
import React, { useState } from "react";
import PropTypes from "prop-types";

const SignupWidget = ({ title, content, simulateNetworkRequestTime }) => {
  // State to manage the phone number input and messages
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [busy, setBusy] = useState(false);
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!validatePhoneNumber(phoneNumber)) {
      setIsValidPhoneNumber(false);
      return;
    }
    setIsValidPhoneNumber(true);
    try {
      setBusy(true);
      // Wait for the specified time (simulating a network request)
      await new Promise((resolve) => setTimeout(resolve, simulateNetworkRequestTime));
      setMessage(`Thanks for subscribing, ${phoneNumber}!`);
      setIsSubscribed(true);
    } finally {
      setBusy(false);
    }
  }

  // Function to validate phone number
  const validatePhoneNumber = (phoneNumber) => {
    // Basic phone number validation logic
    const regex = /^\d{10}$/; // Assuming a 10-digit phone number
    return regex.test(phoneNumber);
  };

  return (
    <form
      data-testid={"signupWidget"}
      className={"font-sans signup-widget p-6 border border-gray-300 rounded-lg shadow-md "}
      onSubmit={handleSubmit}
      autoComplete={"false"}
    >
      <div data-testid={"signupWidgetTitle"} className="font-semibold item-center flex">
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
      d="M4.752 6.524C3.684 7.53 2.06 10.862 4.11 16.133L3 21l4.273-1.51c2.905 1.258 8.844 1.972 12.22-3.064 3.16-4.715.823-9.525-2.18-11.749-2.06-1.526-5.793-2.735-10.51-.251-.456 2.042-.59 6.638 2.692 9.525 4.101 3.608 7.349 1.846 8.032.587l-2.82-1.636-1.41 1.258c-1.04-.363-3.256-1.51-3.802-3.189l.94-1.258L9.238 6.9c-.299.084-1.004.365-1.431.818"
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
          <p data-testid={"signupWidgetContent"} className="dark:text-gray-400 text-sm">
            {content}
          </p>
          <div className={"input-row"}>
            <input
              type="tel" // Change type to "tel" for phone number input
              placeholder="Enter your phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              data-testid="signupWidgetInput"
              required
              disabled={busy}
              className={`block w-full border border-gray-300 rounded-md py-2 px-3 mb-3 placeholder-gray-400 dark:bg-gray-800 ${
                !isValidPhoneNumber && "border-red-500"
              }`}
            />
            {/* Error message for invalid phone number */}
            {!isValidPhoneNumber && <p className="error">Please enter a valid phone number.</p>}
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
        title={"Let`s keep in touch"}
        content={"Let me add you as my WhatsApp contact. This is the better way to contact me, and you will also be able to see my updates"}
      />
    </>
  );
}

export default App;
