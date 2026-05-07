'use client'

import { useState } from 'react'
import Link from 'next/link'
import { HeartIcon, ChartBarIcon, TrophyIcon, ArrowTrendingUpIcon } from '@heroicons/react/24/outline'

export default function ProgressPage() {
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
              <Link href="/nutrition" className="text-gray-700 hover:text-green-600 transition-colors">Nutrition</Link>
              <Link href="/progress" className="text-green-600 font-medium">Progress</Link>
              <Link href="/profile" className="text-gray-700 hover:text-green-600 transition-colors">Profile</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-12">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-2">Progress Dashboard</h1>
          <p className="text-gray-600 mb-8">Track your fitness journey</p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="card p-6">
              <h2 className="text-2xl font-bold mb-4">Weight Progress</h2>
              <div className="h-64 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <ChartBarIcon className="h-16 w-16 text-green-600 mx-auto mb-2" />
                  <p className="text-gray-600">Weight trend chart</p>
                  <div className="mt-4">
                    <div className="text-3xl font-bold text-green-600">185 lbs</div>
                    <div className="text-sm text-green-500 mt-1">↓ 5 lbs this month</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card p-6">
              <h2 className="text-2xl font-bold mb-4">Workout Frequency</h2>
              <div className="h-64 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <ArrowTrendingUpIcon className="h-16 w-16 text-blue-600 mx-auto mb-2" />
                  <p className="text-gray-600">Activity chart</p>
                  <div className="mt-4">
                    <div className="text-3xl font-bold text-blue-600">45</div>
                    <div className="text-sm text-gray-600 mt-1">Workouts this month</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card p-6">
            <h2 className="text-2xl font-bold mb-6">Achievements</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-4 bg-yellow-50 rounded-lg">
                <TrophyIcon className="h-12 w-12 text-yellow-600 mb-3" />
                <h3 className="font-bold text-lg mb-1">12 Day Streak</h3>
                <p className="text-sm text-gray-600">Keep it up!</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <TrophyIcon className="h-12 w-12 text-green-600 mb-3" />
                <h3 className="font-bold text-lg mb-1">45 Workouts</h3>
                <p className="text-sm text-gray-600">Strong start!</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <TrophyIcon className="h-12 w-12 text-blue-600 mb-3" />
                <h3 className="font-bold text-lg mb-1">5 lbs Lost</h3>
                <p className="text-sm text-gray-600">Great progress!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
