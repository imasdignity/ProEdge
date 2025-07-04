import React from 'react';
import { Check, Star, Zap, Trophy, Target, Crown, Shield, Goal, Compass, Crosshair } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Basic',
      price: '$29',
      period: '/month',
      description: 'Perfect for beginners starting their position-specific training',
      features: [
        'Access to Beginner level programs',
        'All 4 position-specific training',
        '4-day weekly training schedule',
        'Physical & stamina training',
        'Technical skills development',
        'Progress tracking',
        'Mobile app access',
        'Email support'
      ],
      levelAccess: ['Beginner'],
      positionAccess: ['All Positions'],
      buttonText: 'Start Basic',
      buttonStyle: 'bg-gray-600 hover:bg-gray-700',
      popular: false,
      icon: Trophy
    },
    {
      name: 'Pro',
      price: '$79',
      period: '/month',
      description: 'Complete position training across all skill levels',
      features: [
        'Access to all 4 levels',
        'All position-specific programs',
        '4-day training for each position',
        'Advanced physical conditioning',
        'Comprehensive stamina training',
        'Technical mastery programs',
        'Position-specific skill assessments',
        'Performance analytics',
        'Priority support',
        'Level completion certificates',
        'Legendary skills training',
        'Advanced video tutorials'
      ],
      levelAccess: ['Beginner', 'Intermediate', 'Advanced', 'Pro'],
      positionAccess: ['All Positions'],
      buttonText: 'Start Pro',
      buttonStyle: 'bg-blue-600 hover:bg-blue-700',
      popular: true,
      icon: Target
    },
    {
      name: 'Elite',
      price: '$149',
      period: '/month',
      description: 'Premium training with exclusive content and advanced features',
      features: [
        'Everything in Pro',
        'Exclusive legendary skills content',
        'Advanced performance analytics',
        'Personalized training recommendations',
        'Premium video content library',
        'Advanced skill assessments',
        'Elite training methodologies',
        'Exclusive training programs',
        'Priority customer support',
        'Early access to new content'
      ],
      levelAccess: ['All Levels', 'Elite Content'],
      positionAccess: ['All Positions + Premium Content'],
      buttonText: 'Start Elite',
      buttonStyle: 'bg-green-600 hover:bg-green-700',
      popular: false,
      icon: Crown
    }
  ];

  const positionPrograms = [
    {
      position: 'Defender',
      icon: Shield,
      color: 'bg-red-500',
      programs: [
        'Defensive Positioning',
        'Tackling Techniques',
        'Aerial Duels',
        'Leadership Training',
        'Physical Strength',
        'Recovery Runs'
      ]
    },
    {
      position: 'Goalkeeper',
      icon: Goal,
      color: 'bg-yellow-500',
      programs: [
        'Shot Stopping',
        'Distribution',
        'Cross Handling',
        'Command Training',
        'Agility & Reflexes',
        'Mental Preparation'
      ]
    },
    {
      position: 'Midfielder',
      icon: Compass,
      color: 'bg-green-500',
      programs: [
        'Passing & Vision',
        'First Touch',
        'Dribbling',
        'Box-to-Box Movement',
        'Stamina Training',
        'Game Intelligence'
      ]
    },
    {
      position: 'Striker',
      icon: Crosshair,
      color: 'bg-blue-500',
      programs: [
        'Clinical Finishing',
        'Movement & Positioning',
        'First Touch Control',
        'Speed Training',
        'Physical Conditioning',
        'Mental Toughness'
      ]
    }
  ];

  const trainingComponents = [
    {
      component: 'Physical Training',
      description: 'Position-specific strength and conditioning',
      included: 'All Plans',
      color: 'bg-red-500'
    },
    {
      component: 'Stamina Training',
      description: 'Endurance and cardiovascular development',
      included: 'All Plans',
      color: 'bg-green-500'
    },
    {
      component: 'Technical Skills',
      description: 'First touch, dribbling, and ball mastery',
      included: 'All Plans',
      color: 'bg-blue-500'
    },
    {
      component: '4-Day Schedule',
      description: 'Structured weekly training program',
      included: 'All Plans',
      color: 'bg-purple-500'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Position-Specific Training Plans
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Choose the perfect plan for your position and skill level. All plans include 4-day home training 
              with physical conditioning, stamina training, and position-specific skill development.
            </p>
          </div>
        </div>
      </section>

      {/* Position Programs Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What's Included for Each Position
            </h2>
            <p className="text-xl text-gray-600">
              Specialized training programs designed for your specific role on the field
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {positionPrograms.map((position, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 text-center">
                <div className={`${position.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <position.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{position.position}</h3>
                <div className="space-y-2">
                  {position.programs.map((program, progIndex) => (
                    <div key={progIndex} className="text-sm text-gray-600 bg-white rounded-lg py-2 px-3">
                      {program}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Components */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Complete Training System
            </h2>
            <p className="text-xl text-gray-600">
              Every plan includes these essential training components
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trainingComponents.map((component, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 text-center">
                <div className={`${component.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <Trophy className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{component.component}</h3>
                <p className="text-gray-600 mb-3">{component.description}</p>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  {component.included}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Monthly Plans */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Training Plan
            </h2>
            <p className="text-xl text-gray-600">
              All plans include position-specific training with physical conditioning and stamina development
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                  plan.popular ? 'ring-4 ring-blue-500 relative' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-blue-500 text-white px-4 py-2 rounded-full flex items-center space-x-1">
                      <Star className="h-4 w-4" />
                      <span className="font-medium">Most Popular</span>
                    </div>
                  </div>
                )}
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <plan.icon className="h-8 w-8 text-blue-600 mr-3" />
                    <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Level Access:</h4>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {plan.levelAccess.map((level, levelIndex) => (
                        <span
                          key={levelIndex}
                          className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {level}
                        </span>
                      ))}
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Position Access:</h4>
                    <div className="flex flex-wrap gap-2">
                      {plan.positionAccess.map((position, posIndex) => (
                        <span
                          key={posIndex}
                          className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {position}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition-colors duration-200 ${plan.buttonStyle}`}>
                    {plan.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Can I train for multiple positions?
              </h3>
              <p className="text-gray-600">
                Yes! All Pro and Elite plans include training for all four positions (Defender, Goalkeeper, Midfielder, Striker). 
                You can focus on your primary position while developing skills for other roles.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What equipment do I need for home training?
              </h3>
              <p className="text-gray-600">
                Most exercises require minimal equipment - just a football, some cones (or markers), and basic space. 
                We provide equipment alternatives for every drill to ensure you can train effectively at home.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How does the 4-day training schedule work?
              </h3>
              <p className="text-gray-600">
                Each week includes 4 focused training days: Technical Skills, Physical Training, Position Mastery, and Match Preparation. 
                Each session is 45-60 minutes and designed for home practice.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Can I switch positions during my training?
              </h3>
              <p className="text-gray-600">
                Absolutely! Pro and Elite members can access training for all positions at any time. 
                Many players benefit from understanding multiple positions to become more versatile athletes.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What is your cancellation policy?
              </h3>
              <p className="text-gray-600">
                You can cancel your subscription at any time through your account settings. Your access will continue 
                until the end of your current billing period. All sales are final and no refunds are provided.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Start Your Position-Specific Training Today
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Choose your position and skill level to begin specialized 4-day home training programs 
            that build physical strength, stamina, and position mastery.
          </p>
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Zap className="h-5 w-5 text-yellow-400" />
            <span className="text-blue-100">7-day free trial • All positions included</span>
          </div>
          <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200">
            Choose Your Position & Start Training
          </button>
        </div>
      </section>
    </div>
  );
};

export default Pricing;