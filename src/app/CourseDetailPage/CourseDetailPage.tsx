import React from 'react';
import Link from 'next/link';
import shibaImg from '../../assets/shiba.jpg'; // Asegúrate de que la ruta sea correcta
import './CourseDetailPage.css';

const CourseDetailPage = () => {

  // Datos de ejemplo del curso
  const course = {
    title: 'Blockchain Basics',
    description: 'Start where you’re comfortable! Learn how blockchains work, smart contracts, and how to sign your first transaction. Whether you’re new or are a seasoned developer, there’s something here for you.',
    image: shibaImg, // Usa la imagen importada
    units: [
      {
        title: 'Unidad 1',
        classes: ['Clase 1', 'Clase 2', 'Clase 3', 'Clase 4', 'Clase 5'],
      },
      {
        title: 'Unidad 2',
        classes: ['Clase 1', 'Clase 2', 'Clase 3', 'Clase 4', 'Clase 5'],
      },
      {
        title: 'Unidad 3',
        classes: ['Clase 1', 'Clase 2', 'Clase 3', 'Clase 4', 'Clase 5'],
      },
    ],
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      <Link href="/" className="text-2xl font-bold mb-6 block">Incentify</Link>
      <div className="flex flex-col md:flex-row md:space-x-8">
        <div className="md:w-2/3">
          <img src={course.image} alt={course.title} className="w-full rounded-lg mb-4" />
          <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
          <p className="mb-4">{course.description}</p>
          <div className="flex space-x-4">
            <button className="bg-gray-700 p-2 rounded-lg">Share course</button>
            <button className="bg-blue-500 p-2 rounded-lg">Share achievement</button>
          </div>
        </div>
        <div className="md:w-1/3 bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Contents</h2>
          {course.units.map((unit, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-xl font-bold mb-2">{unit.title}</h3>
              <ul className="list-disc list-inside ml-4">
                {unit.classes.map((className, i) => (
                  <React.Fragment key={i}>
                    <li className="mb-1">{className}</li>
                    {i === Math.floor(unit.classes.length / 2) - 1 && (
                      <li className="mb-1">
                        <Link href={`/QuizPage`} className="text-blue-500">
                          Quiz
                        </Link>
                      </li>
                    )}
                  </React.Fragment>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CourseDetailPage;
