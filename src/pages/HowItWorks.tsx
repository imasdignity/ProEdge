import React from 'react';
import { UserPlus, Target, Play, TrendingUp, CheckCircle, Trophy, Shield, Goal, Compass, Crosshair } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      step: 1,
      title: 'Choose Your Position',
      description: 'Select your primary position (Defender, Goalkeeper, Midfielder, or Striker) to get specialized training programs.',
      icon: UserPlus,
      color: 'bg-blue-500',
      details: [
        'Position-specific skill assessment',
        'Role-based training focus',
        'Specialized program recommendations',
        'Position requirements analysis'
      ]
    },
    {
      step: 2,
      title: 'Take Skill Assessment',
      description: 'Complete our comprehensive assessment to determine your current skill level within your chosen position.',
      icon: Target,
      color: 'bg-green-500',
      details: [
        'Position-specific skill evaluation',
        'Physical fitness baseline',
        'Technical ability assessment',
        'Automatic level placement'
      ]
    },
    {
      step: 3,
      title: 'Start 4-Day Training',
      description: 'Begin your structured 4-day weekly training program designed for home practice with all necessary components.',
      icon: Play,
      color: 'bg-purple-500',
      details: [
        'Physical training sessions',
        'Stamina & endurance building',
        'Technical skill development',
        'Position-specific drills'
      ]
    },
    {
      step: 4,
      title: 'Track Your Progress',
      description: 'Monitor your improvement across all training components with detailed analytics and performance metrics.',
      icon: TrendingUp,
      color: 'bg-orange-500',
      details: [
        'Physical fitness tracking',
        'Technical skill progression',
        'Stamina improvement metrics',
        'Position mastery indicators'
      ]
    },
    {
      step: 5,
      title: 'Complete Level Programs',
      description: 'Master all training programs in your current level, including physical, technical, and position-specific components.',
      icon: CheckCircle,
      color: 'bg-red-500',
      details: [
        'All 6 position-specific programs',
        'Physical conditioning goals',
        'Technical skill benchmarks',
        'Stamina requirements met'
      ]
    },
    {
      step: 6,
      title: 'Advance to Next Level',
      description: 'Progress to the next skill level with more challenging programs and advanced position-specific training.',
      icon: Trophy,
      color: 'bg-indigo-500',
      details: [
        'Automatic level progression',
        'Advanced training programs',
        'Increased physical demands',
        'Elite position skills'
      ]
    }
  ];

  const positions = [
    {
      position: 'Defender',
      icon: Shield,
      color: 'bg-red-500',
      focus: 'Defensive mastery and leadership',
      components: [
        'Defensive positioning and marking',
        'Tackling and interception techniques',
        'Aerial duel training',
        'Physical strength and core stability',
        'Communication and leadership skills',
        'Recovery and sprint training'
      ]
    },
    {
      position: 'Goalkeeper',
      icon: Goal,
      color: 'bg-yellow-500',
      focus: 'Shot-stopping and distribution',
      components: [
        'Shot-stopping techniques',
        'Cross handling and command',
        'Distribution and passing',
        'Agility and reaction training',
        'Specialized goalkeeper fitness',
        'Mental preparation and focus'
      ]
    },
    {
      position: 'Midfielder',
      icon: Compass,
      color: 'bg-green-500',
      focus: 'Playmaking and game control',
      components: [
        'Passing accuracy and vision',
        'First touch and ball control',
        'Dribbling and press resistance',
        'Cardiovascular endurance',
        'Box-to-box movement training',
        'Game intelligence development'
      ]
    },
    {
      position: 'Striker',
      icon: Crosshair,
      color: 'bg-blue-500',
      focus: 'Goal-scoring and finishing',
      components: [
        'Finishing and shooting technique',
        'Movement and positioning',
        'First touch in tight spaces',
        'Speed and acceleration training',
        'Physical conditioning for battles',
        'Mental preparation for pressure'
      ]
    }
  ];

  const trainingSchedule = [
    {
      day: 'Day 1',
      focus: 'Technical Skills',
      color: 'bg-blue-500',
      activities: [
        'First touch training',
        'Position-specific drills',
        'Ball control exercises',
        'Core strength training'
      ]
    },
    {
      day: 'Day 2',
      focus: 'Physical Training',
      color: 'bg-green-500',
      activities: [
        'Strength training',
        'Speed & agility drills',
        'Stamina building',
        'Flexibility work'
      ]
    },
    {
      day: 'Day 3',
      focus: 'Position Mastery',
      color: 'bg-purple-500',
      activities: [
        'Role-specific training',
        'Tactical understanding',
        'Decision making drills',
        'Mental preparation'
      ]
    },
    {
      day: 'Day 4',
      focus: 'Match Preparation',
      color: 'bg-orange-500',
      activities: [
        'Game situation practice',
        'Finishing/position skills',
        'Match fitness training',
        'Recovery techniques'
      ]
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              How Position-Specific Training Works
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Our comprehensive system combines position-specific training with physical conditioning, 
              stamina building, and technical skill development in structured 4-day home programs.
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
                <div className="lg:w-1/2">
                  <div className="flex items-center mb-6">
                    <div className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center mr-4`}>
                      <step.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-500 mb-1">Step {step.step}</div>
                      <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                    </div>
                  </div>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    {step.description}
                  </p>
                  <ul className="space-y-3">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:w-1/2">
                  <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <step.icon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-500">Step {step.step} Visual</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Position-Specific Training */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Position-Specific Training Components
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Each position has specialized training components designed to develop role-specific skills and attributes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {positions.map((position, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className={`${position.color} w-16 h-16 rounded-full flex items-center justify-center mr-4`}>
                    <position.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{position.position}</h3>
                    <p className="text-gray-600">{position.focus}</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {position.components.map((component, compIndex) => (
                    <div key={compIndex} className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>{component}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4-Day Training Schedule */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              4-Day Home Training Schedule
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Structured weekly training plan combining physical training, technical skills, and position-specific development.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trainingSchedule.map((day, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <div className={`${day.color} w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <span className="text-white font-bold">{index + 1}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">{day.day}</h3>
                <p className="text-center font-medium mb-4" style={{color: day.color.replace('bg-', '').replace('-500', '')}}>{day.focus}</p>
                <ul className="space-y-2">
                  {day.activities.map((activity, actIndex) => (
                    <li key={actIndex} className="text-sm text-gray-600 flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Components */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Complete Training System
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Every program includes comprehensive components for complete player development
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Trophy className="h-8 w-8 text-red-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Physical Training</h3>
              <p className="text-gray-600">
                Strength, conditioning, and fitness development tailored to your position's demands.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-green-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Stamina Training</h3>
              <p className="text-gray-600">
                Endurance and cardiovascular training to maintain performance throughout matches.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Technical Skills</h3>
              <p className="text-gray-600">
                First touch, dribbling, and fundamental skills essential for all positions.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-purple-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Position Mastery</h3>
              <p className="text-gray-600">
                Specialized skills and tactics specific to your chosen position on the field.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Start Your Position Training?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Choose your position and begin your specialized 4-day home training program today. 
            Build the skills, strength, and stamina needed to excel in your role.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg w-full sm:w-auto transition-colors duration-200">
              Choose Your Position
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-lg font-semibold text-lg w-full sm:w-auto transition-all duration-200 backdrop-blur-sm">
              View Training Programs
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;