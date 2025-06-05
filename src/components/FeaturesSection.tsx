
import { Shield, Heart, GraduationCap, CreditCard, Calendar, MessageSquare, FileText, MapPin, Users, BookOpen, ClipboardList, BarChart3 } from 'lucide-react';

const roleFeatures = {
  admin: [
    {
      icon: CreditCard,
      title: 'Fee Management',
      description: 'Comprehensive fee collection, tracking, and automated payment reminders with detailed financial reports.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Calendar,
      title: 'Attendance Tracking',
      description: 'Real-time attendance monitoring with automated alerts for students and parents.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: BarChart3,
      title: 'Transaction Management',
      description: 'Complete financial transaction oversight with audit trails and reporting capabilities.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: BookOpen,
      title: 'Curriculum Management',
      description: 'Design, update, and manage curriculum across all grades and subjects efficiently.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Users,
      title: 'User Management',
      description: 'Centralized management of students, teachers, and staff with role-based permissions.',
      color: 'from-red-500 to-red-600'
    }
  ],
  parent: [
    {
      icon: CreditCard,
      title: 'Fee Management',
      description: 'View fee structure, make payments online, and access payment history and receipts.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: BarChart3,
      title: 'Progress Reports',
      description: 'Detailed academic reports, assessment results, and performance analytics for your child.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Calendar,
      title: 'Attendance Monitoring',
      description: 'Real-time attendance updates and notifications about your child\'s presence in school.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: MessageSquare,
      title: 'Parent-Teacher Chat',
      description: 'Direct communication channel with teachers for discussions about your child\'s progress.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: FileText,
      title: 'Documents Access',
      description: 'Access important documents, certificates, and school communications digitally.',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: MapPin,
      title: 'Bus Tracking',
      description: 'Real-time school bus location tracking for student safety and peace of mind.',
      color: 'from-yellow-500 to-yellow-600'
    }
  ],
  teacher: [
    {
      icon: BookOpen,
      title: 'Lesson Plans',
      description: 'Create, organize, and share comprehensive lesson plans with multimedia resources.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: ClipboardList,
      title: 'Leave Management',
      description: 'Approve student leave requests and manage your own leave applications efficiently.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: BarChart3,
      title: 'Grade Assignment',
      description: 'Assign marks, create assessments, and generate detailed performance reports.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Calendar,
      title: 'Attendance Management',
      description: 'Mark attendance quickly with digital tools and generate attendance reports.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: FileText,
      title: 'Class Portfolio',
      description: 'Maintain digital portfolios of student work and class achievements.',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: MessageSquare,
      title: 'Student Communication',
      description: 'Direct messaging with students and parents for academic discussions.',
      color: 'from-yellow-500 to-yellow-600'
    }
  ]
};

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-transparent dark:from-purple-900/10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="synectiks-badge mb-6 text-sm">
            Powered by SYNECTIKS Technology
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 bg-clip-text text-transparent">
              Features for Everyone
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Tailored solutions for administrators, teachers, and parents to create a comprehensive 
            educational ecosystem that enhances learning outcomes and streamlines operations.
          </p>
        </div>

        {/* Admin Features */}
        <div className="mb-20">
          <div className="flex items-center justify-center mb-12 animate-slide-in-left">
            <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mr-4">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Admin Dashboard</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {roleFeatures.admin.map((feature, index) => (
              <div
                key={index}
                className="apple-card p-8 group smooth-scale animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                
                <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                  {feature.title}
                </h4>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Parent Features */}
        <div className="mb-20">
          <div className="flex items-center justify-center mb-12 animate-slide-in-left">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Parent Portal</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {roleFeatures.parent.map((feature, index) => (
              <div
                key={index}
                className="apple-card p-8 group smooth-scale animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                
                <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                  {feature.title}
                </h4>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Teacher Features */}
        <div>
          <div className="flex items-center justify-center mb-12 animate-slide-in-left">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mr-4">
              <GraduationCap className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Teacher Hub</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roleFeatures.teacher.map((feature, index) => (
              <div
                key={index}
                className="apple-card p-8 group smooth-scale animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                
                <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                  {feature.title}
                </h4>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
