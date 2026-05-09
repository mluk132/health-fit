'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { HeartIcon, FireIcon, BoltIcon, ClockIcon, PlusIcon } from '@heroicons/react/24/outline'
import { api, Workout } from '@/lib/api'

export default function WorkoutPage() {
  const [workouts, setWorkouts] = useState<Workout[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [stats, setStats] = useState<any>(null)

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    try {
      const [workoutsData, statsData] = await Promise.all([
        api.getWorkouts(),
        api.getWorkoutStats()
      ])
      setWorkouts(workoutsData)
      setStats(statsData)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load data')
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const today = new Date()
    const yesterday = new Date(today)
    yesterday.setDate(yesterday.getDate() - 1)
    
    if (date.toDateString() === today.toDateString()) return 'Today'
    if (date.toDateString() === yesterday.toDateString()) return 'Yesterday'
    return date.toLocaleDateString()
  }

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
            <Link href="/create" className="btn btn-primary bg-gradient-to-r from-green-600 to-blue-600">
              <PlusIcon className="h-5 w-5 mr-2" />
              Log Workout
            </Link>
          </div>

          {loading && (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
              <p className="mt-4 text-gray-600">Loading workouts...</p>
            </div>
          )}

          {error && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-800 mb-6">
              {error}
            </div>
          )}

          {!loading && !error && (
            <>
              <div className="grid md:grid-cols-4 gap-6 mb-8">
                <div className="card p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-600">Total Workouts</span>
                    <BoltIcon className="h-5 w-5 text-green-600" />
                  </div>
                  <div className="text-3xl font-bold text-green-600">
                    {stats?.total_workouts || 0}
                  </div>
                  <div className="text-sm text-gray-500">All time</div>
                </div>
                <div className="card p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-600">Total Time</span>
                    <ClockIcon className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-blue-600">
                    {stats?.total_minutes ? Math.round(stats.total_minutes / 60) : 0}
                  </div>
                  <div className="text-sm text-gray-500">Hours</div>
                </div>
                <div className="card p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-600">Calories</span>
                    <FireIcon className="h-5 w-5 text-orange-600" />
                  </div>
                  <div className="text-3xl font-bold text-orange-600">
                    {stats?.total_calories ? Math.round(stats.total_calories) : 0}
                  </div>
                  <div className="text-sm text-gray-500">Burned</div>
                </div>
                <div className="card p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-600">Avg Duration</span>
                    <HeartIcon className="h-5 w-5 text-pink-600" />
                  </div>
                  <div className="text-3xl font-bold text-pink-600">
                    {stats?.avg_duration ? Math.round(stats.avg_duration) : 0}
                  </div>
                  <div className="text-sm text-gray-500">Minutes</div>
                </div>
              </div>

              <div className="card p-6">
                <h2 className="text-2xl font-bold mb-6">Recent Workouts</h2>
                {workouts.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-gray-600 mb-4">No workouts logged yet.</p>
                    <Link href="/create" className="inline-block px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl hover:shadow-lg transition-all">
                      Log Your First Workout
                    </Link>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {workouts.map(workout => (
                      <div key={workout.id} className="p-4 border border-gray-200 rounded-lg hover:border-green-300 transition-colors">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-semibold text-lg">{workout.name}</h3>
                            <div className="flex items-center gap-4 text-sm text-gray-600 mt-2">
                              {workout.type && (
                                <span className="px-2 py-1 bg-green-100 text-green-700 rounded">{workout.type}</span>
                              )}
                              {workout.duration_minutes && (
                                <span className="flex items-center gap-1">
                                  <ClockIcon className="h-4 w-4" />
                                  {workout.duration_minutes} min
                                </span>
                              )}
                              {workout.calories_burned && (
                                <span className="flex items-center gap-1">
                                  <FireIcon className="h-4 w-4" />
                                  {workout.calories_burned} cal
                                </span>
                              )}
                            </div>
                          </div>
                          <span className="text-sm text-gray-500">{formatDate(workout.date)}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
