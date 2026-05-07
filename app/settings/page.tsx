'use client'

import Link from 'next/link'
import { HeartIcon, UserIcon, BellIcon, ShieldCheckIcon, Cog6ToothIcon } from '@heroicons/react/24/outline'

export default function SettingsPage() {
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
          <div className="flex items-center gap-3 mb-8">
            <Cog6ToothIcon className="h-10 w-10 text-green-600" />
            <h1 className="text-4xl font-bold">Settings</h1>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/settings/profile" className="card p-6 hover-lift cursor-pointer">
              <UserIcon className="h-8 w-8 text-green-600 mb-3" />
              <h3 className="text-xl font-bold mb-2">Profile Settings</h3>
              <p className="text-gray-600">Update your fitness profile and goals</p>
            </Link>

            <Link href="/settings/notifications" className="card p-6 hover-lift cursor-pointer">
              <BellIcon className="h-8 w-8 text-blue-600 mb-3" />
              <h3 className="text-xl font-bold mb-2">Notifications</h3>
              <p className="text-gray-600">Manage workout reminders and alerts</p>
            </Link>

            <Link href="/settings/privacy" className="card p-6 hover-lift cursor-pointer">
              <ShieldCheckIcon className="h-8 w-8 text-purple-600 mb-3" />
              <h3 className="text-xl font-bold mb-2">Privacy</h3>
              <p className="text-gray-600">Control your data and privacy settings</p>
            </Link>

            <Link href="/settings/units" className="card p-6 hover-lift cursor-pointer">
              <Cog6ToothIcon className="h-8 w-8 text-orange-600 mb-3" />
              <h3 className="text-xl font-bold mb-2">Units & Preferences</h3>
              <p className="text-gray-600">Set measurement units and preferences</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
