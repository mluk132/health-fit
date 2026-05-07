'use client'

import { useState } from 'react'
import Link from 'next/link'
import { HeartIcon, FireIcon, BoltIcon, ClockIcon, PlusIcon } from '@heroicons/react/24/outline'

export default function WorkoutPage() {
  const [workouts, setWorkouts] = useState([
    { id: 1, name: 'Morning Run', type: 'Cardio', duration: 30, calories: 280, date: 'Today' },
    { id: 2, name: 'Upper Body', type: 'Strength', duration: 45, calories: 320, date: 'Yesterday' },
  ])

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <HeartIcon className="h-8 w-8 text-green-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Health Fit
              </span>
            </Link>
            <div className="flex items-center space-x-6">
              <Link href="/workout" className="text-green-600 font-medium">Workout</Link>
              <Link href="/nutrition" className="text-gray-700 hover:text-green-600 transition-colors">Nutrition</Link>
              <Link href="/progress" className="text-gray-700 hover:text-green-600 transition-colors">Progress</Link>
              <Link href="/profile" className="text-gray-700 hover:text-green-600 transition-colors">Profile</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-12">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold mb-2">Workout Tracker</h1>
              <p className="text-gray-600">Log and track your fitness activities</p>
            </div>
            <button className="btn btn-primary bg-gradient-to-r from-green-600 to-blue-600">
              <PlusIcon className="h-5 w-5 mr-2" />
              Log Workout
            </button>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="card p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600">This Week</span>
                <BoltIcon className="h-5 w-5 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-green-600">12</div>
              <div className="text-sm text-gray-500">Workouts</div>
            </div>
            <div className="card p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600">Total Time</span>
                <ClockIcon className="h-5 w-5 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-blue-600">8.5</div>
              <div className="text-sm text-gray-500">Hours</div>
            </div>
            <div className="card p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600">Calories</span>
                <FireIcon className="h-5 w-5 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-orange-600">3,240</div>
              <div className="text-sm text-gray-500">Burned</div>
            </div>
            <div className="card p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600">Streak</span>
                <HeartIcon className="h-5 w-5 text-pink-600" />
              </div>
              <div className="text-3xl font-bold text-pink-600">12</div>
              <div className="text-sm text-gray-500">Days</div>
            </div>
          </div>

          <div className="card p-6">
            <h2 className="text-2xl font-bold mb-6">Recent Workouts</h2>
            <div className="space-y-4">
              {workouts.map(workout => (
                <div key={workout.id} className="p-4 border border-gray-200 rounded-lg hover:border-green-300 transition-colors">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-lg">{workout.name}</h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mt-2">
                        <span className="px-2 py-1 bg-green-100 text-green-700 rounded">{workout.type}</span>
                        <span className="flex items-center gap-1">
                          <ClockIcon className="h-4 w-4" />
                          {workout.duration} min
                        </span>
                        <span className="flex items-center gap-1">
                          <FireIcon className="h-4 w-4" />
                          {workout.calories} cal
                        </span>
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">{workout.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
