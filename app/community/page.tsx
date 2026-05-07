'use client'

import Link from 'next/link'
import { HeartIcon, UserGroupIcon, HeartIcon as LikeIcon, ChatBubbleLeftIcon } from '@heroicons/react/24/outline'

export default function CommunityPage() {
  const posts = [
    { id: 1, user: 'Mike Fitness', content: 'Just completed my 100th workout! 💪', likes: 245, comments: 18, time: '2h ago', avatar: '🏋️' },
    { id: 2, user: 'Sarah Runner', content: 'New PR on my 5K run today!', likes: 189, comments: 12, time: '5h ago', avatar: '🏃‍♀️' },
    { id: 3, user: 'Emma Yoga', content: 'Morning yoga session was amazing', likes: 312, comments: 24, time: '1d ago', avatar: '🧘‍♀️' },
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
        <div className="container-custom max-w-3xl">
          <div className="flex items-center gap-3 mb-8">
            <UserGroupIcon className="h-10 w-10 text-green-600" />
            <div>
              <h1 className="text-4xl font-bold">Fitness Community</h1>
              <p className="text-gray-600">Share your journey and get motivated</p>
            </div>
          </div>

          <div className="space-y-4">
            {posts.map(post => (
              <div key={post.id} className="card p-6">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{post.avatar}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-bold">{post.user}</span>
                      <span className="text-gray-400">·</span>
                      <span className="text-sm text-gray-500">{post.time}</span>
                    </div>
                    <p className="text-gray-900 mb-4">{post.content}</p>
                    <div className="flex items-center gap-6 text-gray-600">
                      <button className="flex items-center gap-2 hover:text-green-600 transition-colors">
                        <LikeIcon className="h-5 w-5" />
                        {post.likes}
                      </button>
                      <button className="flex items-center gap-2 hover:text-green-600 transition-colors">
                        <ChatBubbleLeftIcon className="h-5 w-5" />
                        {post.comments}
                      </button>
                    </div>
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
