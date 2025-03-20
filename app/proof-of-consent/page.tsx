"use client";
import { useState } from "react";

export default function ProofOfConsent() {
  const [name, setName] = useState("");
  const [consent, setConsent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (consent) {
      try {
        const response = await fetch("/api/consent", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            consent,
            timestamp: new Date().toISOString(),
          }),
        });

        const data = await response.json();

        if (data.success) {
          alert("Thank you for providing your consent!");
          setName("");
          setConsent(false);
        } else {
          alert("Error saving consent. Please try again.");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("Error saving consent. Please try again.");
      }
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto mt-16">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              This form serves as proof of consent for data processing and
              communication purposes. By submitting this form, you acknowledge
              that you have read and understood our privacy policy and agree to
              the processing of your personal information.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="Enter your full name"
              />
            </div>

            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  type="checkbox"
                  id="consent"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  required
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 dark:border-gray-600"
                />
              </div>
              <div className="ml-3">
                <label
                  htmlFor="consent"
                  className="text-sm text-gray-700 dark:text-gray-300"
                >
                  I hereby provide my explicit consent for the processing of my
                  personal information
                </label>
              </div>
            </div>

            <button
              type="submit"
              disabled={!consent}
              className={`w-full py-2 px-4 rounded-md text-white font-medium ${
                consent
                  ? "bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              Submit Consent
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
