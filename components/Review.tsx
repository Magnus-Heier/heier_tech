"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const GOOGLE_REVIEW_URL = "https://search.google.com/local/writereview?placeid=ChIJ9VI_91tvQUYRmncplB35st4";

export default function Review() {
  const [rating, setRating] = useState<number>(0);
  const [hoveredRating, setHoveredRating] = useState<number>(0);
  const [message, setMessage] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleStarClick = (value: number) => {
    setRating(value);
    
    // If 4 or 5 stars, redirect to Google review
    if (value === 4 || value === 5) {
      window.open(GOOGLE_REVIEW_URL, "_blank");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating > 0 && rating <= 3 && message.trim()) {
      // Here you would typically send the feedback to your backend
      console.log("Feedback submitted:", { rating, message });
      setSubmitted(true);
      // Reset form after a delay
      setTimeout(() => {
        setRating(0);
        setMessage("");
        setSubmitted(false);
      }, 3000);
    }
  };

  return (
    <section id="review" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
            Leave a Review
          </h2>
          <p className="text-lg text-gray-600">
            Share your experience with us
          </p>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label className="text-base font-semibold text-gray-900 mb-3 block">
                  Rating *
                </Label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((value) => {
                    const isFilled = value <= (hoveredRating || rating);
                    return (
                      <button
                        key={value}
                        type="button"
                        onClick={() => handleStarClick(value)}
                        onMouseEnter={() => setHoveredRating(value)}
                        onMouseLeave={() => setHoveredRating(0)}
                        className="transition-transform hover:scale-110 focus:outline-none"
                        aria-label={`Rate ${value} star${value !== 1 ? 's' : ''}`}
                      >
                        <Star
                          className={`w-10 h-10 ${
                            isFilled
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          } transition-colors`}
                        />
                      </button>
                    );
                  })}
                  {rating > 0 && (
                    <span className="ml-4 text-lg font-semibold text-gray-700">
                      {rating} {rating === 1 ? "star" : "stars"}
                    </span>
                  )}
                </div>
                {rating === 4 || rating === 5 ? (
                  <p className="mt-3 text-sm text-gray-600">
                    Thank you! We&apos;ve opened Google Reviews for you to leave your feedback.
                  </p>
                ) : null}
              </div>

              {rating > 0 && rating <= 3 && (
                <div>
                  <Label htmlFor="message" className="text-base font-semibold text-gray-900 mb-2 block">
                    Tell us how we can improve *
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Please share your feedback..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    className="w-full resize-none"
                    required
                  />
                </div>
              )}

              {rating > 0 && rating <= 3 && (
                <Button
                  type="submit"
                  disabled={!message.trim()}
                  className="w-full sm:w-auto bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Send
                </Button>
              )}
            </form>
          ) : (
            <div className="text-center py-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Thank You!
              </h3>
              <p className="text-gray-600">
                Your review has been submitted successfully.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

