
import { CheckCircle, Users, Award, Target } from 'lucide-react';

const AboutSection = () => {
  const achievements = [
    { number: '50,000+', label: 'Active Students', icon: Users },
    { number: '1,000+', label: 'Certified Teachers', icon: Award },
    { number: '200+', label: 'Partner Schools', icon: Target },
    { number: '99.9%', label: 'System Uptime', icon: CheckCircle }
  ];

  const values = [
    {
      title: 'Innovation in Education',
      description: 'Leveraging cutting-edge technology to transform traditional learning methodologies and create engaging educational experiences.'
    },
    {
      title: 'Collaborative Learning',
      description: 'Fostering an environment where students, teachers, and parents work together to achieve educational excellence.'
    },
    {
      title: 'Data-Driven Insights',
      description: 'Providing actionable analytics and insights to help educators make informed decisions about student progress.'
    },
    {
      title: 'Accessibility & Inclusion',
      description: 'Ensuring our platform is accessible to all learners, regardless of their background or learning abilities.'
    }
  ];

  return (
    <section id="about" className="py-24 gradient-bg relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-32 h-32 bg-purple-300/20 dark:bg-purple-700/20 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-purple-400/25 dark:bg-purple-600/25 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="synectiks-badge mb-6">
            About SYNECTIKS
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 bg-clip-text text-transparent">
              Transforming Education
            </span>
            <br />
            <span className="text-gray-900 dark:text-gray-100">Since 2020</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            SYNECTIKS has been at the forefront of educational technology, developing innovative solutions 
            that bridge the gap between traditional learning and modern digital experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-in-left">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Our Mission & Vision
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              At SYNECTIKS, we believe that every student deserves access to quality education. 
              Our mission is to democratize learning by providing institutions with powerful, 
              user-friendly tools that enhance educational outcomes and streamline administrative processes.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              We envision a world where technology seamlessly integrates with education, 
              making learning more engaging, accessible, and effective for students worldwide.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-6">
              {achievements.map((achievement, index) => (
                <div 
                  key={index} 
                  className="apple-card p-6 text-center smooth-scale animate-scale-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <achievement.icon className="h-8 w-8 text-purple-600 dark:text-purple-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                    {achievement.number}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                    {achievement.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6 animate-slide-in-right">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
              Our Core Values
            </h3>
            {values.map((value, index) => (
              <div 
                key={index} 
                className="apple-card p-6 smooth-scale animate-scale-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                      {value.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
            Built by Education Experts
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our team consists of experienced educators, technology professionals, and UX designers 
            who understand the unique challenges facing modern educational institutions. Together, 
            we're committed to creating solutions that truly make a difference in the learning experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
