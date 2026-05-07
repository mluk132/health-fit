'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { HeartIcon, EnvelopeIcon, LockClosedIcon, UserIcon } from '@heroicons/react/24/outline'

export default function RegisterPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    fitnessGoal: '',
    activityLevel: '',
    focusAreas: [] as string[]
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const fitnessGoals = ['Lose Weight', 'Build Muscle', 'Improve Endurance', 'Stay Active', 'General Health']
  const activityLevels = ['Sedentary', 'Lightly Active', 'Moderately Active', 'Very Active']
  const focusOptions = ['Cardio', 'Strength Training', 'Flexibility', 'Nutrition', 'Mental Health', 'Sleep']

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (step < 2) {
      if (formData.password !== formData.confirmPassword) {
        setError('Passwords do not match')
        return
      }
      setStep(2)
      return
    }

    setError('')
    setLoading(true)

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if (response.ok) {
        router.push('/login?registered=true')
      } else {
        setError(data.error || 'Registration failed')
      }
    } catch (err) {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const toggleFocus = (focus: string) => {
    setFormData(prev => ({
      ...prev,
      focusAreas: prev.focusAreas.includes(focus)
        ? prev.focusAreas.filter(f => f !== focus)
        : [...prev.focusAreas, focus]
    }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center space-x-2">
            <HeartIcon className="h-12 w-12 text-green-600" />
            <span className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Health Fit
            </span>
          </Link>
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            {step === 1 ? 'Start your fitness journey' : 'Set your fitness goals'}
          </h2>
          <p className="mt-2 text-gray-600">
            {step === 1 ? 'Create your account' : 'Help us personalize your experience'}
          </p>
        </div>

        <div className="card p-8">
          {/* Progress Indicator */}
          <div className="flex items-center justify-center mb-6">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-green-600 text-white' : 'bg-gray-200'}`}>
              1
            </div>
            <div className={`w-16 h-1 ${step >= 2 ? 'bg-green-600' : 'bg-gray-200'}`}></div>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-green-600 text-white' : 'bg-gray-200'}`}>
              2
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                {error}
              </div>
            )}

            {step === 1 && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <div className="relative">
                    <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="input pl-10 w-full"
                      placeholder="Your name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <div className="relative">
                    <EnvelopeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="input pl-10 w-full"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                  <div className="relative">
                    <LockClosedIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="password"
                      required
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className="input pl-10 w-full"
                      placeholder="••••••••"
                      minLength={8}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
                  <div className="relative">
                    <LockClosedIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="password"
                      required
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                      className="input pl-10 w-full"
                      placeholder="••••••••"
                    />
                  </div>
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Primary Fitness Goal</label>
                  <select
                    required
                    value={formData.fitnessGoal}
                    onChange={(e) => setFormData({ ...formData, fitnessGoal: e.target.value })}
                    className="input w-full"
                  >
                    <option value="">Select your goal</option>
                    {fitnessGoals.map(goal => (
                      <option key={goal} value={goal}>{goal}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Current Activity Level</label>
                  <div className="grid grid-cols-2 gap-3">
                    {activityLevels.map(level => (
                      <button
                        key={level}
                        type="button"
                        onClick={() => setFormData({ ...formData, activityLevel: level })}
                        className={`py-3 px-4 rounded-lg border-2 transition-all ${
                          formData.activityLevel === level
                            ? 'border-green-600 bg-green-50 text-green-700'
                            : 'border-gray-200 hover:border-green-300'
                        }`}
                      >
                        {level}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Focus Areas (select all that apply)
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {focusOptions.map(focus => (
                      <button
                        key={focus}
                        type="button"
                        onClick={() => toggleFocus(focus)}
                        className={`py-2 px-3 rounded-lg border-2 text-sm transition-all ${
                          formData.focusAreas.includes(focus)
                            ? 'border-green-600 bg-green-50 text-green-700'
                            : 'border-gray-200 hover:border-green-300'
                        }`}
                      >
                        {focus}
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}

            <div className="flex gap-3">
              {step === 2 && (
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="flex-1 btn btn-secondary"
                >
                  Back
                </button>
              )}
              <button
                type="submit"
                disabled={loading}
                className="flex-1 btn btn-primary bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 disabled:opacity-50"
              >
                {loading ? 'Creating...' : step === 1 ? 'Continue' : 'Create Account'}
              </button>
            </div>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Link href="/login" className="font-medium text-green-600 hover:text-green-500">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
