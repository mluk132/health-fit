'use client'

import Link from 'next/link'
import { HeartIcon, ClockIcon, CalendarIcon } from '@heroicons/react/24/outline'

export default function MealsPage() {
  const mealPlans = [
    { id: 1, name: 'Weight Loss Plan', calories: 1800, meals: 4, duration: '7 days', icon: '⚖️' },
    { id: 2, name: 'Muscle Gain Plan', calories: 2500, meals: 5, duration: '7 days', icon: '💪' },
    { id: 3, name: 'Balanced Diet', calories: 2000, meals: 4, duration: '7 days', icon: '🥗' },
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
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-5xl font-bold mb-4">Meal Plans</h1>
            <p className="text-xl text-gray-600">Personalized nutrition plans for your goals</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {mealPlans.map(plan => (
              <div key={plan.id} className="card p-6 hover-lift cursor-pointer">
                <div className="text-6xl mb-4 text-center">{plan.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-center">{plan.name}</h3>
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex items-center justify-between">
                    <span>Daily Calories</span>
                    <span className="font-semibold">{plan.calories}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Meals per Day</span>
                    <span className="font-semibold">{plan.meals}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Duration</span>
                    <span className="font-semibold">{plan.duration}</span>
                  </div>
                </div>
                <button className="btn btn-primary w-full">Start Plan</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
