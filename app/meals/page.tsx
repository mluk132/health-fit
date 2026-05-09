'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { HeartIcon, ClockIcon, CalendarIcon, FireIcon, PlusIcon } from '@heroicons/react/24/outline'
import { api, Meal } from '@/lib/api'

export default function MealsPage() {
  const [meals, setMeals] = useState<Meal[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [stats, setStats] = useState<any>(null)

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    try {
      const [mealsData, statsData] = await Promise.all([
        api.getMeals(),
        api.getMealStats()
      ])
      setMeals(mealsData)
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

  const getMealTypeColor = (type?: string) => {
    switch (type?.toLowerCase()) {
      case 'breakfast': return 'bg-yellow-100 text-yellow-700'
      case 'lunch': return 'bg-green-100 text-green-700'
      case 'dinner': return 'bg-blue-100 text-blue-700'
      case 'snack': return 'bg-purple-100 text-purple-700'
      default: return 'bg-gray-100 text-gray-700'
    }
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
              <Link href="/workout" className="text-gray-700 hover:text-green-600 transition-colors">Workout</Link>
              <Link href="/meals" className="text-green-600 font-medium">Nutrition</Link>
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
              <h1 className="text-4xl font-bold mb-2">Nutrition Tracker</h1>
              <p className="text-gray-600">Track your meals and nutrition</p>
            </div>
            <Link href="/create-meal" className="btn btn-primary bg-gradient-to-r from-green-600 to-blue-600">
              <PlusIcon className="h-5 w-5 mr-2" />
              Log Meal
            </Link>
          </div>

          {loading && (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
              <p className="mt-4 text-gray-600">Loading meals...</p>
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
                    <span className="text-gray-600">Total Meals</span>
                    <HeartIcon className="h-5 w-5 text-green-600" />
                  </div>
                  <div className="text-3xl font-bold text-green-600">
                    {stats?.total_meals || 0}
                  </div>
                  <div className="text-sm text-gray-500">Logged</div>
                </div>
                <div className="card p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-600">Avg Calories</span>
                    <FireIcon className="h-5 w-5 text-orange-600" />
                  </div>
                  <div className="text-3xl font-bold text-orange-600">
                    {stats?.avg_calories ? Math.round(stats.avg_calories) : 0}
                  </div>
                  <div className="text-sm text-gray-500">Per meal</div>
                </div>
                <div className="card p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-600">Protein</span>
                    <span className="text-2xl">🥩</span>
                  </div>
                  <div className="text-3xl font-bold text-red-600">
                    {stats?.avg_protein ? Math.round(stats.avg_protein) : 0}g
                  </div>
                  <div className="text-sm text-gray-500">Average</div>
                </div>
                <div className="card p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-600">Carbs</span>
                    <span className="text-2xl">🍞</span>
                  </div>
                  <div className="text-3xl font-bold text-amber-600">
                    {stats?.avg_carbs ? Math.round(stats.avg_carbs) : 0}g
                  </div>
                  <div className="text-sm text-gray-500">Average</div>
                </div>
              </div>

              <div className="card p-6">
                <h2 className="text-2xl font-bold mb-6">Recent Meals</h2>
                {meals.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-gray-600 mb-4">No meals logged yet.</p>
                    <Link href="/create-meal" className="inline-block px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl hover:shadow-lg transition-all">
                      Log Your First Meal
                    </Link>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {meals.map(meal => (
                      <div key={meal.id} className="p-4 border border-gray-200 rounded-lg hover:border-green-300 transition-colors">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="font-semibold text-lg">{meal.name}</h3>
                              {meal.meal_type && (
                                <span className={`px-2 py-1 rounded text-xs ${getMealTypeColor(meal.meal_type)}`}>
                                  {meal.meal_type}
                                </span>
                              )}
                            </div>
                            <div className="flex items-center gap-4 text-sm text-gray-600">
                              {meal.calories && (
                                <span className="flex items-center gap-1">
                                  <FireIcon className="h-4 w-4" />
                                  {meal.calories} cal
                                </span>
                              )}
                              {meal.protein && (
                                <span>Protein: {meal.protein}g</span>
                              )}
                              {meal.carbs && (
                                <span>Carbs: {meal.carbs}g</span>
                              )}
                              {meal.fats && (
                                <span>Fats: {meal.fats}g</span>
                              )}
                            </div>
                          </div>
                          <span className="text-sm text-gray-500">{formatDate(meal.date)}</span>
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
