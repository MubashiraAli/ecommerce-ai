import { useState } from "react";

function AIAssistant() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleAsk = () => {
    const q = question.toLowerCase();

    if (q.includes("phone")) {
      setAnswer(
        "📱 Recommended: iPhone, Samsung Galaxy, Redmi Note series."
      );
    } else if (q.includes("laptop")) {
      setAnswer(
        "💻 Recommended: MacBook Air, Dell XPS, Lenovo ThinkPad."
      );
    } else if (q.includes("beauty")) {
      setAnswer(
        "💄 Recommended: Beauty products from our Beauty category."
      );
    } else {
      setAnswer(
        "🤖 Sorry, I couldn't find a recommendation. Try asking about phones, laptops, or beauty products."
      );
    }
  };

  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "40px auto",
        padding: "20px",
      }}
    >
      <h1>🤖 AI Shopping Assistant</h1>

      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask me anything..."
        style={{
          width: "100%",
          padding: "12px",
          marginTop: "15px",
        }}
      />

      <button
        onClick={handleAsk}
        style={{
          marginTop: "15px",
          padding: "10px 20px",
          background: "black",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Ask AI
      </button>

      {answer && (
        <div
          style={{
            marginTop: "20px",
            padding: "15px",
            background: "#f5f5f5",
            borderRadius: "8px",
          }}
        >
          {answer}
        </div>
      )}
    </div>
  );
}

export default AIAssistant;