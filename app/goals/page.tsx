'use client'

import Link from 'next/link'
import { HeartIcon, TrophyIcon, PlusIcon } from '@heroicons/react/24/outline'

export default function GoalsPage() {
  const goals = [
    { id: 1, title: 'Lose 10 lbs', current: 5, target: 10, unit: 'lbs', progress: 50, icon: '⚖️' },
    { id: 2, title: 'Run 5K', current: 3.2, target: 5, unit: 'km', progress: 64, icon: '🏃' },
    { id: 3, title: 'Workout Streak', current: 12, target: 30, unit: 'days', progress: 40, icon: '🔥' },
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
        <div className="container-custom max-w-4xl">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <TrophyIcon className="h-10 w-10 text-yellow-600" />
              <div>
                <h1 className="text-4xl font-bold">Fitness Goals</h1>
                <p className="text-gray-600">Track and achieve your targets</p>
              </div>
            </div>
            <button className="btn btn-primary">
              <PlusIcon className="h-5 w-5 mr-2" />
              New Goal
            </button>
          </div>

          <div className="space-y-6">
            {goals.map(goal => (
              <div key={goal.id} className="card p-6">
                <div className="flex items-start gap-4">
                  <div className="text-5xl">{goal.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3">{goal.title}</h3>
                    <div className="mb-3">
                      <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                        <span>{goal.current} / {goal.target} {goal.unit}</span>
                        <span className="font-semibold text-green-600">{goal.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div className="bg-gradient-to-r from-green-600 to-blue-600 h-3 rounded-full transition-all" style={{ width: `${goal.progress}%` }}></div>
                      </div>
                    </div>
                    <button className="btn btn-secondary btn-sm">Update Progress</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
