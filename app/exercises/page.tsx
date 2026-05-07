'use client'

import Link from 'next/link'
import { HeartIcon, BoltIcon, FireIcon } from '@heroicons/react/24/outline'

export default function ExercisesPage() {
  const exercises = [
    { id: 1, name: 'Push-ups', category: 'Strength', difficulty: 'Beginner', calories: 50, icon: '💪' },
    { id: 2, name: 'Squats', category: 'Strength', difficulty: 'Beginner', calories: 60, icon: '🦵' },
    { id: 3, name: 'Running', category: 'Cardio', difficulty: 'All Levels', calories: 300, icon: '🏃' },
    { id: 4, name: 'Plank', category: 'Core', difficulty: 'Intermediate', calories: 40, icon: '🧘' },
    { id: 5, name: 'Burpees', category: 'Full Body', difficulty: 'Advanced', calories: 100, icon: '🔥' },
    { id: 6, name: 'Yoga Flow', category: 'Flexibility', difficulty: 'All Levels', calories: 150, icon: '🧘‍♀️' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <HeartIcon className="h-8 w-8 text-green-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Health Fit</span>
            </Link>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-12">
        <div className="container-custom">
          <div className="flex items-center gap-3 mb-8">
            <BoltIcon className="h-10 w-10 text-green-600" />
            <div>
              <h1 className="text-4xl font-bold">Exercise Library</h1>
              <p className="text-gray-600">Browse exercises with instructions and videos</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {exercises.map(exercise => (
              <div key={exercise.id} className="card p-6 hover-lift cursor-pointer">
                <div className="text-6xl mb-4 text-center">{exercise.icon}</div>
                <div className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm mb-3">
                  {exercise.category}
                </div>
                <h3 className="text-xl font-bold mb-2">{exercise.name}</h3>
                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <span>{exercise.difficulty}</span>
                  <span className="flex items-center gap-1">
                    <FireIcon className="h-4 w-4" />
                    {exercise.calories} cal
                  </span>
                </div>
                <button className="btn btn-primary w-full">View Details</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
