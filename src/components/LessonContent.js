import React, { useState, useEffect } from 'react';

const LessonContent = ({ lessonData }) => {
  const [currentSection, setCurrentSection] = useState(0); // Track current section

  // Fetch additional lesson data if needed (e.g., audio files)
  useEffect(() => {
    // Implement logic to fetch additional data based on lessonData
  }, [lessonData]);

  const handleNextSection = () => {
    if (currentSection < lessonData.sections.length - 1) {
      setCurrentSection(currentSection + 1);
    }
  };

  const handlePrevSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  const renderSectionContent = () => {
    const currentLesson = lessonData.sections[currentSection];
    switch (currentLesson.type) {
      case 'vocabulary':
        return (
          <div>
            <h2>Vocabulary</h2>
            <ul>
              {currentLesson.words.map((word) => (
                <li key={word.id}>
                  <span>{word.english}</span> - <span>{word.translation}</span>
                  <audio src={word.audio} controls />
                </li>
              ))}
            </ul>
          </div>
        );
      case 'grammar':
        return (
          <div>
            <h2>Grammar</h2>
            <p>{currentLesson.explanation}</p>
            {currentLesson.examples && (
              <div>
                <h3>Examples</h3>
                <ul>
                  {currentLesson.examples.map((example) => (
                    <li key={example.id}>{example.text}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        );
      case 'exercise':
        // Implement rendering logic for interactive exercises
        return <div>Exercise Content</div>;
      default:
        return null;
    }
  };

  return (
    <div className="lesson-content">
      <h1>{lessonData.title}</h1>
      <div className="navigation">
        <button onClick={handlePrevSection} disabled={currentSection === 0}>
          Previous
        </button>
        <button onClick={handleNextSection}>Next</button>
      </div>
      <div className="content">{renderSectionContent()}</div>
    </div>
  );
};

export default LessonContent;
