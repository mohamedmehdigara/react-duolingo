import React from 'react';
import Lesson from '../components/Lesson';

const Lessons = () => {
  const lessons = [
    { id: 1, title: 'Lesson 1' },
    { id: 2, title: 'Lesson 2' },
    { id: 3, title: 'Lesson 3' },
    // Add more lessons as needed
  ];

  return (
    <div>
      <h1>Lessons Page</h1>
      {lessons.map((lesson) => (
        <Lesson key={lesson.id} title={lesson.title} />
      ))}
    </div>
  );
};

export default Lessons;
