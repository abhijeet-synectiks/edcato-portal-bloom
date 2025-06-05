
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, BookOpen, Users, Trophy } from 'lucide-react';

const HeroSection = ({ onAuthAction }: { onAuthAction: (action: 'signin' | 'signup') => void }) => {
  return (
    <section className="pt-32 pb-20 gradient-bg">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-medium">
              🚀 Transform Your Learning Experience
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                Revolutionize
              </span>
              <br />
              Education with{' '}
              <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                Edcato
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Empower students, teachers, and institutions with our cutting-edge Learning Management System. 
              Create engaging courses, track progress, and build a thriving educational community.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => onAuthAction('signup')}
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-purple-300 dark:border-purple-700 text-purple-700 dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-900/30 group"
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">50K+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">1K+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Educators</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">200+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Institutions</div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Floating Cards */}
          <div className="relative animate-slide-in-right">
            <div className="relative w-full h-96 lg:h-[500px]">
              {/* Main Card */}
              <div className="absolute top-0 right-0 w-80 h-64 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 animate-float">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-3">
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100">Interactive Learning</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Engaging content</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="h-2 bg-purple-100 dark:bg-purple-900/30 rounded-full">
                    <div className="h-full w-3/4 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full"></div>
                  </div>
                  <div className="h-2 bg-purple-100 dark:bg-purple-900/30 rounded-full">
                    <div className="h-full w-1/2 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full"></div>
                  </div>
                </div>
              </div>
              
              {/* Secondary Card */}
              <div className="absolute bottom-16 left-0 w-64 h-48 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-4 animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <div className="ml-2">
                    <h4 className="font-medium text-gray-900 dark:text-gray-100">Collaboration</h4>
                  </div>
                </div>
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full border-2 border-white dark:border-gray-800"
                    />
                  ))}
                  <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full border-2 border-white dark:border-gray-800 flex items-center justify-center">
                    <span className="text-xs text-gray-600 dark:text-gray-300">+5</span>
                  </div>
                </div>
              </div>
              
              {/* Achievement Card */}
              <div className="absolute top-32 left-8 w-48 h-32 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4 animate-float" style={{ animationDelay: '2s' }}>
                <div className="flex items-center">
                  <Trophy className="h-8 w-8 text-yellow-500" />
                  <div className="ml-2">
                    <h4 className="font-medium text-gray-900 dark:text-gray-100">Achievement</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Course Completed!</p>
                  </div>
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
