
import { Button } from '@/components/ui/button';
import { CheckCircle, Star } from 'lucide-react';

const PricingSection = ({ onAuthAction }: { onAuthAction: (action: 'signin' | 'signup') => void }) => {
  const plans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small schools and institutions getting started',
      features: [
        'Up to 100 students',
        'Basic attendance tracking',
        'Fee management',
        'Parent communication',
        'Email support',
        'Mobile app access'
      ],
      recommended: false,
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing schools with advanced needs',
      features: [
        'Up to 500 students',
        'Advanced analytics',
        'Curriculum management',
        'Bus tracking',
        'Teacher collaboration tools',
        'Priority support',
        'Custom branding',
        'API access'
      ],
      recommended: true,
      color: 'from-purple-500 to-purple-600'
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large institutions requiring maximum flexibility',
      features: [
        'Unlimited students',
        'Advanced reporting',
        'Multi-campus support',
        'Custom integrations',
        'Dedicated account manager',
        '24/7 phone support',
        'Training & onboarding',
        'SLA guarantee'
      ],
      recommended: false,
      color: 'from-gray-700 to-gray-800'
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 to-transparent dark:from-purple-900/10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="synectiks-badge mb-6">
            Transparent Pricing
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 bg-clip-text text-transparent">
              Choose Your Plan
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Flexible pricing options designed to grow with your institution. 
            Start free and upgrade when you're ready.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`apple-card relative smooth-scale animate-scale-in ${
                plan.recommended 
                  ? 'ring-2 ring-purple-500 dark:ring-purple-400 scale-105' 
                  : ''
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-2 rounded-full flex items-center text-sm font-medium">
                    <Star className="h-4 w-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {plan.description}
                  </p>
                  
                  <div className="flex items-baseline justify-center mb-6">
                    <span className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                      {plan.price}
                    </span>
                    <span className="text-gray-600 dark:text-gray-400 ml-2">
                      {plan.period}
                    </span>
                  </div>
                  
                  <Button
                    onClick={() => onAuthAction('signup')}
                    className={`w-full py-6 text-lg font-medium apple-button ${
                      plan.recommended
                        ? 'bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                  >
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                  </Button>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">
                    What's included:
                  </h4>
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16 animate-fade-in">
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            All plans include a 30-day free trial. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="flex items-center text-gray-600 dark:text-gray-400">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
              Cancel anytime
            </div>
            <div className="flex items-center text-gray-600 dark:text-gray-400">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
              24/7 customer support
            </div>
            <div className="flex items-center text-gray-600 dark:text-gray-400">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
              Free migration assistance
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
