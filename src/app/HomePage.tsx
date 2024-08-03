import React from 'react';
import Link from 'next/link';
import shibaImg from '../assets/shiba.jpg'; // Asegúrate de que la ruta sea correcta
import './HomePage.css';

const courses = [
  {
    id: 1,
    title: 'Blockchain Basics',
    level: 'Beginner',
    lessons: 20,
    duration: '3hrs',
    description: 'Learn how blockchains work, smart contracts, and how to sign your first transaction.',
    exams: 1,
  },
  {
    id: 2,
    title: 'Solidity Smart Contract Development',
    level: 'Beginner',
    lessons: 59,
    duration: '5hrs',
    description: 'Start here if you’re new to writing smart contracts! Learn Solidity from industry-leading experts.',
    exams: 2,
  },
  {
    id: 3,
    title: 'Foundry Fundamentals',
    level: 'Intermediate',
    lessons: 103,
    duration: '10hrs',
    description: 'Learn advanced web3 development concepts like Chainlink, oracles, and more.',
    exams: 3,
  },
];

const HomePage: React.FC = () => {
  return (
    <div className="homepage">
      <header className="header">
        <h1 className="logo">Incentify</h1>
        <div className="search-login">
          <input type="text" placeholder="Search courses" className="search-input" />
          <Link href="/login">
            <button className="login-button">Log in</button>
          </Link>
        </div>
      </header>
      <main>
        <h2 className="title">Hands-on courses for all levels</h2>
        <p className="subtitle">
          Learn blockchain fundamentals, smart contract development, and the auditing skills you need, online at your own pace. From blockchain concepts, essentials to Solidity, security, and web3 DevOps.
        </p>
        <div className="courses">
          {courses.map((course) => (
            <div key={course.id} className="course-card">
              <img src={shibaImg} alt="Course" className="course-image" />
              <div className="course-content">
                <h3>{course.title}</h3>
                <p className="level">{course.level}</p>
                <p>{course.description}</p>
                <p>{course.lessons} lessons</p>
                <p>{course.duration}</p>
                <p>Exams: {course.exams}</p>
                <Link href={`/CourseDetailPage`}>
                  <button className="course-button">Ir a curso</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default HomePage;
