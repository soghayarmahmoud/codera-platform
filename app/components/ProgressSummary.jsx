import React from 'react';

export default function ProgressSummary({ totalCompleted, totalLessons }) {
  // حساب النسبة المئوية
  const percentage = Math.floor((totalCompleted / totalLessons) * 100);

  return (
    <div className="bg-neutral-800 border border-neutral-700 rounded-2xl p-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-xl font-bold text-white mb-1">Your Progress</h2>
          <p className="text-neutral-400">
            {totalCompleted} of {totalLessons} lessons completed
          </p>
        </div>
        <span className="text-3xl font-bold text-blue-400">{percentage}%</span>
      </div>

      {/* شريط التقدم */}
      <div className="w-full bg-neutral-700 rounded-full h-2.5">
        <div 
          className="bg-green-500 h-2.5 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}