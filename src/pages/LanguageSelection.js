import React, { useState } from 'react';

const LanguageSelection = () => {
  const [completedLessons, setCompletedLessons] = useState([]);

  const lessons = [
    { id: 1, title: 'Lesson 1' },
    { id: 2, title: 'Lesson 2' },
    { id: 3, title: 'Lesson 3' },
    // Add more lessons as needed
  ];

  const isLessonCompleted = (lessonId) => {
    return completedLessons.includes(lessonId);
  };

  const handleLessonClick = (lessonId) => {
    // Toggle lesson completion status
    const updatedCompletedLessons = completedLessons.includes(lessonId)
      ? completedLessons.filter((id) => id !== lessonId)
      : [...completedLessons, lessonId];
    setCompletedLessons(updatedCompletedLessons);
  };

  return (
    <div>
      <h1>Language Selection Page</h1>
      <div className="lessons-container">
        {lessons.map((lesson) => (
          <div
            key={lesson.id}
            className={`lesson ${isLessonCompleted(lesson.id) ? 'completed' : ''}`}
            onClick={() => handleLessonClick(lesson.id)}
          >
            <div className="circle" />
            <p>{lesson.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelection;
