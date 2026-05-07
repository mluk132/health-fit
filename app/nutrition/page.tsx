'use client'

import { useState } from 'react'
import Link from 'next/link'
import { HeartIcon, FireIcon, PlusIcon } from '@heroicons/react/24/outline'

export default function NutritionPage() {
  const [meals, setMeals] = useState([
    { id: 1, name: 'Breakfast', items: 'Oatmeal, Banana, Coffee', calories: 350, time: '8:00 AM' },
    { id: 2, name: 'Lunch', items: 'Chicken Salad, Water', calories: 450, time: '12:30 PM' },
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
              <Link href="/workout" className="text-gray-700 hover:text-green-600 transition-colors">Workout</Link>
              <Link href="/nutrition" className="text-green-600 font-medium">Nutrition</Link>
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
              <p className="text-gray-600">Track your meals and calories</p>
            </div>
            <button className="btn btn-primary bg-gradient-to-r from-green-600 to-blue-600">
              <PlusIcon className="h-5 w-5 mr-2" />
              Log Meal
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="card p-6">
              <div className="text-sm text-gray-600 mb-2">Calories Today</div>
              <div className="text-3xl font-bold text-green-600 mb-2">800</div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: '40%' }}></div>
              </div>
              <div className="text-sm text-gray-500 mt-1">800 / 2000 cal</div>
            </div>
            <div className="card p-6">
              <div className="text-sm text-gray-600 mb-2">Protein</div>
              <div className="text-3xl font-bold text-blue-600 mb-2">45g</div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '30%' }}></div>
              </div>
              <div className="text-sm text-gray-500 mt-1">45 / 150g</div>
            </div>
            <div className="card p-6">
              <div className="text-sm text-gray-600 mb-2">Water</div>
              <div className="text-3xl font-bold text-cyan-600 mb-2">4</div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-cyan-600 h-2 rounded-full" style={{ width: '50%' }}></div>
              </div>
              <div className="text-sm text-gray-500 mt-1">4 / 8 glasses</div>
            </div>
          </div>

          <div className="card p-6">
            <h2 className="text-2xl font-bold mb-6">Today's Meals</h2>
            <div className="space-y-4">
              {meals.map(meal => (
                <div key={meal.id} className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-lg">{meal.name}</h3>
                      <p className="text-gray-600 mt-1">{meal.items}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <FireIcon className="h-4 w-4 text-orange-600" />
                        <span className="text-sm font-medium">{meal.calories} calories</span>
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">{meal.time}</span>
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
