'use client'

import Link from 'next/link'
import { HeartIcon, ClockIcon, FireIcon } from '@heroicons/react/24/outline'

export default function RecipesPage() {
  const recipes = [
    { id: 1, name: 'Protein Smoothie Bowl', time: '10 min', calories: 350, protein: 25, icon: '🥤', difficulty: 'Easy' },
    { id: 2, name: 'Grilled Chicken Salad', time: '20 min', calories: 420, protein: 35, icon: '🥗', difficulty: 'Easy' },
    { id: 3, name: 'Quinoa Power Bowl', time: '30 min', calories: 480, protein: 18, icon: '🍲', difficulty: 'Medium' },
    { id: 4, name: 'Salmon & Veggies', time: '25 min', calories: 520, protein: 40, icon: '🐟', difficulty: 'Medium' },
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
            <h1 className="text-5xl font-bold mb-4">Healthy Recipes</h1>
            <p className="text-xl text-gray-600">Delicious meals to fuel your fitness journey</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {recipes.map(recipe => (
              <div key={recipe.id} className="card overflow-hidden hover-lift cursor-pointer">
                <div className="h-48 bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center text-8xl">
                  {recipe.icon}
                </div>
                <div className="p-6">
                  <div className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm mb-3">
                    {recipe.difficulty}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{recipe.name}</h3>
                  <div className="grid grid-cols-3 gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                      <ClockIcon className="h-4 w-4" />
                      {recipe.time}
                    </div>
                    <div className="flex items-center gap-1">
                      <FireIcon className="h-4 w-4" />
                      {recipe.calories} cal
                    </div>
                    <div>
                      💪 {recipe.protein}g protein
                    </div>
                  </div>
                  <button className="btn btn-primary w-full">View Recipe</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
