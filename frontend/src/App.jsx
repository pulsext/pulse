import React from 'react'
import './styles/globals.css'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <nav className="bg-white dark:bg-slate-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-primary font-caviche">Pulse</h1>
            <div className="space-x-4">
              <button className="px-4 py-2 rounded-lg bg-primary text-white hover:bg-secondary transition-colors">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center">
          <h2 className="text-5xl font-bold mb-6 font-caviche text-slate-900 dark:text-white">
            Where Creativity Meets Community
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto font-caviche">
            Pulse is a premium social blogging platform designed for creators and communities to share, discover, and connect.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white dark:bg-slate-700 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">📸</div>
              <h3 className="text-2xl font-bold mb-4 font-caviche">Image Posts</h3>
              <p className="text-slate-600 dark:text-slate-300 font-caviche">Share beautiful image galleries with captions and hashtags</p>
            </div>
            
            <div className="bg-white dark:bg-slate-700 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-2xl font-bold mb-4 font-caviche">Social Network</h3>
              <p className="text-slate-600 dark:text-slate-300 font-caviche">Connect with creators and build your community</p>
            </div>
            
            <div className="bg-white dark:bg-slate-700 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-4 font-caviche">Real-time Updates</h3>
              <p className="text-slate-600 dark:text-slate-300 font-caviche">Get instant notifications and live feed updates</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-slate-900 text-white mt-20 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center font-caviche">
          <p>&copy; 2026 Pulse. Where Creativity Meets Community ✨</p>
        </div>
      </footer>
    </div>
  )
}

export default App
