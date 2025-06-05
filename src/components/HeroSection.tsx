
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, BookOpen, Users, Trophy, GraduationCap } from 'lucide-react';

const HeroSection = ({ onAuthAction }: { onAuthAction: (action: 'signin' | 'signup') => void }) => {
  return (
    <section id="home" className="pt-32 pb-20 gradient-bg relative overflow-hidden">
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-200/30 dark:bg-purple-800/30 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-purple-300/20 dark:bg-purple-700/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-purple-400/25 dark:bg-purple-600/25 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-100 to-purple-200 dark:from-purple-900/30 dark:to-purple-800/30 text-purple-700 dark:text-purple-300 text-sm font-medium border border-purple-200 dark:border-purple-700 smooth-scale">
              <GraduationCap className="w-4 h-4 mr-2" />
              Transform Your Educational Experience
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 bg-clip-text text-transparent">
                Revolutionize
              </span>
              <br />
              Education with{' '}
              <span className="bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 bg-clip-text text-transparent">
                Edcato
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg">
              Comprehensive Learning Management System for admins, teachers, and parents. 
              Streamline education with powerful tools for fee management, attendance tracking, 
              curriculum planning, and seamless communication.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => onAuthAction('signup')}
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white shadow-lg hover:shadow-xl apple-button group px-8 py-6 text-lg font-medium"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-purple-300 dark:border-purple-700 text-purple-700 dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-900/30 apple-button group px-8 py-6 text-lg font-medium"
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                Watch Demo
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-12">
              <div className="text-center group smooth-scale">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">50K+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Students</div>
              </div>
              <div className="text-center group smooth-scale">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">1K+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Educators</div>
              </div>
              <div className="text-center group smooth-scale">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">200+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Institutions</div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Enhanced Floating Cards */}
          <div className="relative animate-slide-in-right">
            <div className="relative w-full h-96 lg:h-[600px]">
              {/* Main Card - Interactive Learning */}
              <div className="absolute top-0 right-0 w-80 h-72 apple-card p-8 animate-float smooth-scale">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center">
                    <BookOpen className="h-7 w-7 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">Interactive Learning</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Engaging content & assessments</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="h-3 bg-purple-100 dark:bg-purple-900/30 rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full animate-pulse"></div>
                  </div>
                  <div className="h-3 bg-purple-100 dark:bg-purple-900/30 rounded-full overflow-hidden">
                    <div className="h-full w-1/2 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                  </div>
                  <div className="h-3 bg-purple-100 dark:bg-purple-900/30 rounded-full overflow-hidden">
                    <div className="h-full w-5/6 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
                  </div>
                </div>
              </div>
              
              {/* Collaboration Card */}
              <div className="absolute bottom-20 left-0 w-72 h-56 apple-card p-6 animate-float smooth-scale" style={{ animationDelay: '1s' }}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100">Collaboration Hub</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Connect & communicate</p>
                  </div>
                </div>
                <div className="flex -space-x-2 mb-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full border-3 border-white dark:border-gray-800 flex items-center justify-center text-white text-xs font-medium"
                    >
                      {String.fromCharCode(65 + i)}
                    </div>
                  ))}
                  <div className="w-10 h-10 bg-gray-300 dark:bg-gray-600 rounded-full border-3 border-white dark:border-gray-800 flex items-center justify-center">
                    <span className="text-xs text-gray-600 dark:text-gray-300 font-medium">+12</span>
                  </div>
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Online now: 24 students, 3 teachers</div>
              </div>
              
              {/* Achievement Card */}
              <div className="absolute top-40 left-12 w-56 h-40 apple-card p-5 animate-float smooth-scale" style={{ animationDelay: '2s' }}>
                <div className="flex items-center mb-3">
                  <Trophy className="h-10 w-10 text-yellow-500" />
                  <div className="ml-3">
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100">Achievement</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Course Completed!</p>
                  </div>
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">Mathematics - Advanced Level</div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">A+</span>
                  </div>
                  <span className="ml-2 text-sm font-medium text-green-600 dark:text-green-400">95% Score</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
