'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  HeartIcon,
  FireIcon,
  ChartBarIcon,
  TrophyIcon,
  Cog6ToothIcon,
  BoltIcon,
  ClockIcon
, HeartIcon } from '@heroicons/react/24/outline'

export default function ProfilePage() {
  const [user] = useState({
    name: 'Mike Fitness',
    email: 'mike@example.com',
    joinedDate: 'January 2026',
    goal: 'Build Muscle',
    avatar: '💪'
  })

  const [stats] = useState({
    workouts: 45,
    calories: 32500,
    streak: 12,
    weight: '185 lbs'
  })

  const [recentWorkouts] = useState([
    { id: 1, name: 'Upper Body Strength', duration: '45 min', calories: 320, date: 'Today' },
    { id: 2, name: 'Cardio HIIT', duration: '30 min', calories: 280, date: 'Yesterday' },
    { id: 3, name: 'Leg Day', duration: '60 min', calories: 450, date: '2 days ago' },
  ])

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Navigation */}
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
              <Link href="/workout" className="text-gray-700 hover:text-green-600 transition-colors">Workout</Link>
              <Link href="/nutrition" className="text-gray-700 hover:text-green-600 transition-colors">Nutrition</Link>
              <Link href="/profile" className="text-green-600 font-medium">Profile</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-12">
        <div className="container-custom">
          {/* Profile Header */}
          <div className="card p-8 mb-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center text-6xl">
                  {user.avatar}
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-3xl font-bold mb-2">{user.name}</h1>
                    <p className="text-gray-600 mb-1">{user.email}</p>
                    <p className="text-sm text-gray-500">Joined {user.joinedDate}</p>
                    <div className="mt-2 inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                      Goal: {user.goal}
                    </div>
                  </div>
                  <Link href="/settings" className="btn btn-secondary">
                    <Cog6ToothIcon className="h-5 w-5 mr-2" />
                    Settings
                  </Link>
                </div>
                <div className="flex gap-4 mt-6">
                  <Link href="/workout" className="btn btn-primary bg-gradient-to-r from-green-600 to-blue-600">
                    <BoltIcon className="h-5 w-5 mr-2" />
                    Start Workout
                  </Link>
                  <button className="btn btn-secondary">Edit Profile</button>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="card p-6 hover-lift">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600">Workouts</span>
                <BoltIcon className="h-5 w-5 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-green-600">{stats.workouts}</div>
              <div className="text-sm text-gray-500 mt-1">This month</div>
            </div>
            <div className="card p-6 hover-lift">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600">Calories Burned</span>
                <FireIcon className="h-5 w-5 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-orange-600">{stats.calories.toLocaleString()}</div>
              <div className="text-sm text-gray-500 mt-1">Total</div>
            </div>
            <div className="card p-6 hover-lift">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600">Streak</span>
                <TrophyIcon className="h-5 w-5 text-yellow-600" />
              </div>
              <div className="text-3xl font-bold text-yellow-600">{stats.streak}</div>
              <div className="text-sm text-gray-500 mt-1">Days</div>
            </div>
            <div className="card p-6 hover-lift">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600">Current Weight</span>
                <ChartBarIcon className="h-5 w-5 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-blue-600">{stats.weight}</div>
              <div className="text-sm text-green-500 mt-1">↓ 5 lbs</div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Recent Workouts */}
            <div className="md:col-span-2">
              <div className="card p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold">Recent Workouts</h2>
                  <Link href="/workout" className="text-green-600 hover:text-green-700 text-sm font-medium">
                    View All →
                  </Link>
                </div>
                <div className="space-y-4">
                  {recentWorkouts.map(workout => (
                    <div key={workout.id} className="p-4 border border-gray-200 rounded-lg hover:border-green-300 transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold">{workout.name}</h3>
                        <span className="text-sm text-gray-500">{workout.date}</span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <ClockIcon className="h-4 w-4" />
                          {workout.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <FireIcon className="h-4 w-4" />
                          {workout.calories} cal
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Progress Chart */}
              <div className="card p-6 mt-6">
                <h2 className="text-2xl font-bold mb-4">Weight Progress</h2>
                <div className="h-48 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <ChartBarIcon className="h-16 w-16 text-green-600 mx-auto mb-2" />
                    <p className="text-gray-600">Progress chart visualization</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="card p-6 mb-6">
                <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
                <div className="space-y-3">
                  <Link href="/workout" className="block p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                    <div className="flex items-center gap-3">
                      <BoltIcon className="h-5 w-5 text-green-600" />
                      <span className="font-medium">Log Workout</span>
                    </div>
                  </Link>
                  <Link href="/nutrition" className="block p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                    <div className="flex items-center gap-3">
                      <FireIcon className="h-5 w-5 text-blue-600" />
                      <span className="font-medium">Track Meal</span>
                    </div>
                  </Link>
                  <Link href="/goals" className="block p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                    <div className="flex items-center gap-3">
                      <TrophyIcon className="h-5 w-5 text-purple-600" />
                      <span className="font-medium">Set Goals</span>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="card p-6">
                <h2 className="text-xl font-bold mb-4">Achievements</h2>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-xl">
                      🏆
                    </div>
                    <div>
                      <div className="font-medium">Consistency King</div>
                      <div className="text-sm text-gray-600">12 day streak</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-xl">
                      💪
                    </div>
                    <div>
                      <div className="font-medium">Strong Start</div>
                      <div className="text-sm text-gray-600">45 workouts</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-xl">
                      🔥
                    </div>
                    <div>
                      <div className="font-medium">Calorie Crusher</div>
                      <div className="text-sm text-gray-600">30K+ burned</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
