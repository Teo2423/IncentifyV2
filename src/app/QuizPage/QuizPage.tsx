import React from 'react';
import Link from 'next/link';
import './QuizPage.css';

const QuizPage: React.FC = () => {
  return (
    <div className="quiz-container">
      <header className="quiz-header">
        <h1 className="quiz-logo">Incentify</h1>
      </header>
      <main className="quiz-main">
        <h2 className="quiz-title">Quiz for Unit 1</h2>
        <form className="quiz-form">
          <div className="quiz-question">
            <h3>What is Blockchain?</h3>
            <label>
              <input type="radio" name="q1" value="database" /> A database
            </label>
            <label>
              <input type="radio" name="q1" value="cryptocurrency" /> A cryptocurrency
            </label>
            <label>
              <input type="radio" name="q1" value="protocol" /> A protocol
            </label>
            <label>
              <input type="radio" name="q1" value="all_of_the_above" /> All of the above
            </label>
          </div>
          <div className="quiz-question">
            <h3>What is Solidity?</h3>
            <label>
              <input type="radio" name="q2" value="programming_language" /> A programming language
            </label>
            <label>
              <input type="radio" name="q2" value="protocol" /> A protocol
            </label>
            <label>
              <input type="radio" name="q2" value="blockchain" /> A blockchain
            </label>
            <label>
              <input type="radio" name="q2" value="database" /> A database
            </label>
          </div>
          <button type="submit" className="quiz-submit">Enviar</button>
        </form>
      </main>
    </div>
  );
};

export default QuizPage;
