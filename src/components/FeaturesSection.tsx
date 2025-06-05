
import { BookOpen, Users, BarChart3, Video, MessageSquare, Award } from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    title: 'Interactive Courses',
    description: 'Create and deliver engaging multimedia courses with interactive content, quizzes, and assignments.',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: Users,
    title: 'Collaborative Learning',
    description: 'Foster teamwork with group projects, discussion forums, and peer-to-peer learning opportunities.',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboard',
    description: 'Track student progress, identify learning gaps, and make data-driven educational decisions.',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Video,
    title: 'Virtual Classrooms',
    description: 'Conduct live sessions, webinars, and virtual office hours with integrated video conferencing.',
    color: 'from-red-500 to-red-600'
  },
  {
    icon: MessageSquare,
    title: 'Real-time Communication',
    description: 'Stay connected with instant messaging, announcements, and feedback systems.',
    color: 'from-yellow-500 to-yellow-600'
  },
  {
    icon: Award,
    title: 'Certification & Badges',
    description: 'Motivate learners with digital certificates, badges, and achievement tracking systems.',
    color: 'from-indigo-500 to-indigo-600'
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
              Powerful Features
            </span>
            <br />
            for Modern Education
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Everything you need to create, manage, and deliver exceptional learning experiences 
            in one comprehensive platform.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 hover:shadow-xl transition-all duration-300 animate-scale-in border border-gray-200 dark:border-gray-700"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
