import React from 'react';
import MainPageWrapper from './hooks/MainPageWrapper';
import { DUMMY_COURSES } from './data/coursesData';

// بيانات شريط التقدم العلوي (حساب تجريبي)
const DUMMY_PROGRESS = {
  totalCompleted: DUMMY_COURSES.reduce((s, c) => s + (c.completedLessons || 0), 0),
  totalLessons: DUMMY_COURSES.reduce((s, c) => s + (c.totalLessons || 0), 0),
};

export default function Home() {
  return (
    <MainPageWrapper
      courses={DUMMY_COURSES}
      progress={DUMMY_PROGRESS}
    />
  );
}