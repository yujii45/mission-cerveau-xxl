import React, { useState } from "react";

const questions = [
  { type: "qcm", question: "Combien font 7 x 6 ?", options: ["36", "42", "48", "52"], answer: "42" },
  { type: "text", question: "Quel est le synonyme de 'rapide' ?", answer: "vite" },
  { type: "qcm", question: "Complète : Le chien ___ dans le jardin.", options: ["joue", "jouer", "jouait", "joués"], answer: "joue" },
  { type: "text", question: "Quelle est la capitale de l'Italie ?", answer: "rome" },
  { type: "qcm", question: "Trouve l'intrus : pomme, banane, voiture, fraise", options: ["pomme", "banane", "voiture", "fraise"], answer: "voiture" }
];

export default function MissionCerveau() {
  const [step, setStep] = useState(0);
  const [input, setInput] = useState("");
  const [score, setScore] = useState(0);
  const current = questions[step];

  const handleSubmit = () => {
    const cleanedInput = input.trim().toLowerCase();
    if ((current.type === "text" && cleanedInput === current.answer) ||
        (current.type === "qcm" && cleanedInput === current.answer.toLowerCase())) {
      setScore(score + 1);
    }
    setInput("");
    setStep(step + 1);
  };

  if (step >= questions.length) {
    return <div style={{ padding: 20, textAlign: "center" }}><h1>Bravo !</h1><p>Score final : {score} / {questions.length}</p></div>;
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>{current.question}</h2>
      {current.type === "qcm" ? (
        current.options.map((opt, idx) => (
          <button key={idx} onClick={() => { setInput(opt); handleSubmit(); }} style={{ display: "block", margin: "10px 0" }}>{opt}</button>
        ))
      ) : (
        <div>
          <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Votre réponse" />
          <button onClick={handleSubmit}>Valider</button>
        </div>
      )}
    </div>
  );
}