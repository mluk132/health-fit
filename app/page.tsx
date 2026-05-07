'use client'

import Link from 'next/link'
import { 
  HeartIcon,
  FireIcon,
  ChartBarIcon,
  TrophyIcon,
  ClockIcon,
  BoltIcon
} from '@heroicons/react/24/outline'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <HeartIcon className="h-8 w-8 text-green-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Health Fit
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/workout" className="text-gray-700 hover:text-green-600 transition-colors">Workout</Link>
              <Link href="/nutrition" className="text-gray-700 hover:text-green-600 transition-colors">Nutrition</Link>
              <Link href="/progress" className="text-gray-700 hover:text-green-600 transition-colors">Progress</Link>
              <Link href="/login" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
                Login
              </Link>
              <Link href="/register" className="btn btn-primary bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
                Sign Up Free
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Fitness Dashboard Style */}
      <section className="pt-32 pb-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-6">
                <HeartIcon className="h-4 w-4" />
                Join 500K+ Active Users
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Transform Your <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">Health & Fitness</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Track workouts, monitor nutrition, achieve your goals. Get personalized insights and progress tracking that actually works.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/register" className="btn btn-primary bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-lg px-8 py-4">
                  Start Free Trial
                </Link>
                <Link href="/workout" className="btn btn-secondary text-lg px-8 py-4">
                  View Demo
                </Link>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="card p-4 text-center">
                  <FireIcon className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">10M+</div>
                  <div className="text-xs text-gray-600">Workouts Logged</div>
                </div>
                <div className="card p-4 text-center">
                  <TrophyIcon className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">95%</div>
                  <div className="text-xs text-gray-600">Success Rate</div>
                </div>
                <div className="card p-4 text-center">
                  <BoltIcon className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">24/7</div>
                  <div className="text-xs text-gray-600">Tracking</div>
                </div>
              </div>
            </div>
            <div className="card p-8 bg-gradient-to-br from-green-50 to-blue-50">
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                  <div>
                    <div className="text-sm text-gray-600">Today's Calories</div>
                    <div className="text-2xl font-bold text-green-600">1,240 / 2,000</div>
                  </div>
                  <FireIcon className="h-12 w-12 text-orange-600" />
                </div>
                <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                  <div>
                    <div className="text-sm text-gray-600">Workout Streak</div>
                    <div className="text-2xl font-bold text-blue-600">12 Days</div>
                  </div>
                  <TrophyIcon className="h-12 w-12 text-yellow-600" />
                </div>
                <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                  <div>
                    <div className="text-sm text-gray-600">Weight Progress</div>
                    <div className="text-2xl font-bold text-purple-600">-5 lbs</div>
                  </div>
                  <ChartBarIcon className="h-12 w-12 text-purple-600" />
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-24 container-custom">
            <Link href="/workout" className="card p-8 hover-lift cursor-pointer group">
              <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors">
                <FireIcon className="h-7 w-7 text-green-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Workout Tracker</h3>
              <p className="text-gray-600 leading-relaxed">
                Log exercises with sets, reps, and weight. Track progress with visual charts and personalized workout plans.
              </p>
            </Link>

            <Link href="/nutrition" className="card p-8 hover-lift cursor-pointer group">
              <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <ChartBarIcon className="h-7 w-7 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Nutrition Planner</h3>
              <p className="text-gray-600 leading-relaxed">
                Track meals, calories, and macros. Get personalized meal plans and nutrition insights for optimal health.
              </p>
            </Link>

            <Link href="/progress" className="card p-8 hover-lift cursor-pointer group">
              <div className="w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors">
                <TrophyIcon className="h-7 w-7 text-purple-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Progress Dashboard</h3>
              <p className="text-gray-600 leading-relaxed">
                Monitor body metrics, weight trends, and fitness goals. Celebrate milestones and track your transformation.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="animate-fade-in">
              <div className="text-5xl font-bold text-green-600 mb-2">500K+</div>
              <div className="text-gray-600 text-lg">Active Users</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-5xl font-bold text-blue-600 mb-2">10M+</div>
              <div className="text-gray-600 text-lg">Workouts Logged</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-5xl font-bold text-purple-600 mb-2">95%</div>
              <div className="text-gray-600 text-lg">Goal Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Start Your Fitness Journey Today
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join thousands who have transformed their health with personalized tracking and insights.
          </p>
          <button className="btn bg-white text-green-600 hover:bg-gray-100 text-lg px-8 py-4">
            Get Started Free
          </button>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <HeartIcon className="h-6 w-6 text-green-400" />
                <span className="text-white font-bold">Health Fit</span>
              </div>
              <p className="text-sm">Transform your health and fitness.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Features</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/workout" className="hover:text-white transition-colors">Workout</Link></li>
                <li><Link href="/nutrition" className="hover:text-white transition-colors">Nutrition</Link></li>
                <li><Link href="/progress" className="hover:text-white transition-colors">Progress</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Guides</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            © 2026 Health Fit. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
