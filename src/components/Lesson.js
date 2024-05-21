import React, { useState, useContext } from 'react';
import { ProgressContext } from '../ProgressContext'; // Import ProgressContext
import LessonContent from './components/LessonContent'; // Import LessonContent

const Lessons = () => {
  const [completedLessons, setCompletedLessons] = useState([]);
  const { progress, updateProgress } = useContext(ProgressContext); // Access context

  const units = [
    {
      id: 1,
      title: 'Unit 1',
      lessons: [
        { id: 1, title: 'Lesson 1.1' },
        { id: 2, title: 'Lesson 1.2' },
        { id: 3, title: 'Lesson 1.3' },
      ],
    },
    {
      id: 2,
      title: 'Unit 2',
      lessons: [
        { id: 4, title: 'Lesson 2.1' },
        { id: 5, title: 'Lesson 2.2' },
      ],
    },
    // Add more units and lessons as needed
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

  const handleLessonCompleted = (lessonId) => {
    // Update progress upon lesson completion (optional)
    updateProgress && updateProgress(lessonId); // Update context if available
  };

  return (
    <div>
      <h1>Lessons Page</h1>
      <div className="units-container">
        {units.map((unit) => (
          <div key={unit.id} className="unit">
            <h2>{unit.title}</h2>
            <div className="lessons-container">
              {unit.lessons.map((lesson) => (
                <div
                  key={lesson.id}
                  className={`lesson ${isLessonCompleted(lesson.id) ? 'completed' : ''}`}
                  onClick={() => handleLessonClick(lessonId)}
                >
                  <p>{lesson.title}</p>
                  <div className="completion-circles">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <div
                        key={index}
                        className={`circle ${index < completedLessons.length ? 'completed' : ''}`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* Render LessonContent if a lesson is clicked */}
      {completedLessons.length > 0 && <LessonContent lessonData={units.flatMap((unit) => unit.lessons).find((lesson) => completedLessons.includes(lesson.id))} onLessonCompleted={handleLessonCompleted} />}
    </div>
  );
};

export default Lessons;
