'use client'

import Link from 'next/link'
import { HeartIcon, TrophyIcon, UserGroupIcon, ClockIcon } from '@heroicons/react/24/outline'

export default function ChallengesPage() {
  const challenges = [
    { id: 1, name: '30-Day Plank Challenge', participants: 12500, duration: '30 days', difficulty: 'Intermediate', icon: '💪' },
    { id: 2, name: '10K Steps Daily', participants: 8900, duration: '7 days', difficulty: 'Beginner', icon: '👟' },
    { id: 3, name: 'Yoga Every Day', participants: 15200, duration: '21 days', difficulty: 'All Levels', icon: '🧘' },
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
            <TrophyIcon className="h-10 w-10 text-yellow-600" />
            <div>
              <h1 className="text-4xl font-bold">Fitness Challenges</h1>
              <p className="text-gray-600">Join challenges and compete with others</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map(challenge => (
              <div key={challenge.id} className="card p-6 hover-lift cursor-pointer">
                <div className="text-6xl mb-4 text-center">{challenge.icon}</div>
                <div className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm mb-3">
                  {challenge.difficulty}
                </div>
                <h3 className="text-xl font-bold mb-3">{challenge.name}</h3>
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-2">
                    <ClockIcon className="h-4 w-4" />
                    {challenge.duration}
                  </div>
                  <div className="flex items-center gap-2">
                    <UserGroupIcon className="h-4 w-4" />
                    {challenge.participants.toLocaleString()} participants
                  </div>
                </div>
                <button className="btn btn-primary w-full">Join Challenge</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
