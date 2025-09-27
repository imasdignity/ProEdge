import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Target, Zap, Crown, CheckCircle, Users, Clock, Shield, Goal, Compass, Crosshair } from 'lucide-react';

const Programs = () => {
  const skillLevels = [
    {
      level: 'Beginner',
      title: 'Foundation Builder',
      description: 'Master the fundamentals of football with position-specific training at home',
      icon: Trophy,
      color: 'bg-green-500',
      duration: '8-12 weeks',
      sessions: '4 days per week',
      difficulty: 'Easy',
      athletes: '3,500+',
      positions: [
        {
          name: 'Defender',
          icon: Shield,
          programs: [
            'Basic Defensive Positioning',
            'Tackling Fundamentals',
            'Clearance Techniques',
            'Communication Skills',
            'Physical Strength Training',
            'Stamina Building'
          ]
        },
        {
          name: 'Goalkeeper',
          icon: Goal,
          programs: [
            'Basic Shot Stopping',
            'Catching Fundamentals',
            'Distribution Basics',
            'Positioning Training',
            'Reaction Time Drills',
            'Agility & Flexibility'
          ]
        },
        {
          name: 'Midfielder',
          icon: Compass,
          programs: [
            'First Touch Basics',
            'Simple Passing',
            'Ball Control Drills',
            'Vision Training',
            'Endurance Building',
            'Dribbling Fundamentals'
          ]
        },
        {
          name: 'Striker',
          icon: Crosshair,
          programs: [
            'Basic Finishing',
            'Movement in the Box',
            'First Touch Control',
            'Speed Training',
            'Shooting Technique',
            'Physical Conditioning'
          ]
        }
      ]
    },
    {
      level: 'Intermediate',
      title: 'Skill Developer',
      description: 'Build on your foundation with advanced position-specific techniques',
      icon: Target,
      color: 'bg-blue-500',
      duration: '10-14 weeks',
      sessions: '4 days per week',
      difficulty: 'Moderate',
      athletes: '4,200+',
      positions: [
        {
          name: 'Defender',
          icon: Shield,
          programs: [
            'Advanced Marking',
            'Interception Techniques',
            'Aerial Duels',
            'Build-up Play',
            'Core Strength Training',
            'Sprint Intervals'
          ]
        },
        {
          name: 'Goalkeeper',
          icon: Goal,
          programs: [
            'Advanced Shot Stopping',
            'Cross Handling',
            'Sweeper Keeper Skills',
            'Command of Area',
            'Plyometric Training',
            'Hand-Eye Coordination'
          ]
        },
        {
          name: 'Midfielder',
          icon: Compass,
          programs: [
            'Advanced Passing',
            'Through Ball Technique',
            'Press Resistance',
            'Box-to-Box Movement',
            'Cardiovascular Training',
            'Advanced Dribbling'
          ]
        },
        {
          name: 'Striker',
          icon: Crosshair,
          programs: [
            'Clinical Finishing',
            'Link-up Play',
            'Off-the-Ball Movement',
            'Counter-Attack Skills',
            'Explosive Power Training',
            'Advanced First Touch'
          ]
        }
      ]
    },
    {
      level: 'Advanced',
      title: 'Performance Enhancer',
      description: 'Master advanced position-specific skills for competitive play',
      icon: Zap,
      color: 'bg-purple-500',
      duration: '12-16 weeks',
      sessions: '4 days per week',
      difficulty: 'Challenging',
      athletes: '2,100+',
      positions: [
        {
          name: 'Defender',
          icon: Shield,
          programs: [
            'Tactical Defending',
            'Leadership & Organization',
            'Set Piece Defending',
            'Recovery Runs',
            'Functional Strength',
            'High-Intensity Training'
          ]
        },
        {
          name: 'Goalkeeper',
          icon: Goal,
          programs: [
            'Elite Shot Stopping',
            'Distribution Mastery',
            'Penalty Saving',
            'Game Reading',
            'Specialized Conditioning',
            'Mental Preparation'
          ]
        },
        {
          name: 'Midfielder',
          icon: Compass,
          programs: [
            'Playmaking Mastery',
            'Defensive Transitions',
            'Set Piece Delivery',
            'Game Intelligence',
            'Elite Endurance',
            'Technical Mastery'
          ]
        },
        {
          name: 'Striker',
          icon: Crosshair,
          programs: [
            'Elite Finishing',
            'Hold-up Play Mastery',
            'Pressing Triggers',
            'Penalty Taking',
            'Peak Physical Condition',
            'Match Preparation'
          ]
        }
      ]
    },
    {
      level: 'Pro',
      title: 'Elite Performer',
      description: 'Professional-level position-specific training for elite athletes',
      icon: Crown,
      color: 'bg-orange-500',
      duration: '16-20 weeks',
      sessions: '4 days per week',
      difficulty: 'Expert',
      athletes: '800+',
      positions: [
        {
          name: 'Defender',
          icon: Shield,
          programs: [
            'Elite Tactical Awareness',
            'Professional Defending',
            'Leadership Excellence',
            'Match Analysis',
            'Peak Physical Performance',
            'Injury Prevention'
          ]
        },
        {
          name: 'Goalkeeper',
          icon: Goal,
          programs: [
            'World-Class Technique',
            'Advanced Psychology',
            'Professional Distribution',
            'Elite Decision Making',
            'Goalkeeper-Specific Fitness',
            'Performance Analysis'
          ]
        },
        {
          name: 'Midfielder',
          icon: Compass,
          programs: [
            'Elite Playmaking',
            'Professional Vision',
            'Advanced Tactics',
            'Leadership Skills',
            'Elite Physical Conditioning',
            'Performance Optimization'
          ]
        },
        {
          name: 'Striker',
          icon: Crosshair,
          programs: [
            'World-Class Finishing',
            'Elite Movement',
            'Professional Mindset',
            'Advanced Tactics',
            'Peak Athletic Performance',
            'Goal Scoring Psychology'
          ]
        }
      ]
    }
  ];

  const trainingComponents = [
    {
      title: 'Physical Training',
      description: 'Strength, conditioning, and fitness development',
      icon: Zap,
      color: 'bg-red-500',
      components: ['Strength Training', 'Cardio Workouts', 'Flexibility', 'Core Stability']
    },
    {
      title: 'Technical Skills',
      description: 'Position-specific technical development',
      icon: Target,
      color: 'bg-blue-500',
      components: ['First Touch', 'Dribbling', 'Passing', 'Shooting']
    },
    {
      title: 'Stamina & Endurance',
      description: 'Build match-ready fitness levels',
      icon: Trophy,
      color: 'bg-green-500',
      components: ['Interval Training', 'Endurance Runs', 'Recovery Training', 'Match Fitness']
    },
    {
      title: 'Mental Training',
      description: 'Develop game intelligence and focus',
      icon: Crown,
      color: 'bg-purple-500',
      components: ['Decision Making', 'Concentration', 'Pressure Handling', 'Visualization']
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Position-Specific Training Programs
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Master your position with specialized 4-day home training programs. Each level includes 
              physical training, stamina building, technical skills, and position-specific development.
            </p>
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
              Every program includes comprehensive training components designed for home practice
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trainingComponents.map((component, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className={`${component.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <component.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{component.title}</h3>
                <p className="text-gray-600 mb-4">{component.description}</p>
                <div className="space-y-2">
                  {component.components.map((item, itemIndex) => (
                    <div key={itemIndex} className="text-sm text-gray-500 bg-white rounded-lg py-1 px-2">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skill Levels Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Level & Position
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Specialized training for every position at every skill level - all designed for home practice
            </p>
          </div>
          <div className="space-y-16">
            {skillLevels.map((level, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <div className={`${level.color} w-16 h-16 rounded-full flex items-center justify-center mr-6`}>
                        <level.icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900">{level.level}</h3>
                        <h4 className="text-xl font-semibold text-blue-600">{level.title}</h4>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="text-sm text-gray-500">Duration</div>
                          <div className="font-medium text-gray-900">{level.duration}</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">Training</div>
                          <div className="font-medium text-gray-900">{level.sessions}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-lg">{level.description}</p>
                </div>
                
                <div className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {level.positions.map((position, posIndex) => (
                      <div key={posIndex} className="bg-gray-50 rounded-xl p-6">
                        <div className="flex items-center mb-4">
                          <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mr-3">
                            <position.icon className="h-6 w-6 text-blue-700" />
                          </div>
                          <h5 className="text-lg font-semibold text-gray-900">{position.name}</h5>
                        </div>
                        <div className="space-y-2">
                          {position.programs.map((program, progIndex) => (
                            <div key={progIndex} className="flex items-center text-sm">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                              <span className="text-gray-700">{program}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 text-center">
                    <div className="space-y-3">
                      <button className={`${level.color} hover:opacity-90 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 w-full`}>
                        Start {level.level} Training
                      </button>
                      <div className="text-sm text-gray-600">
                        Complete all programs to unlock the final exam
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4-Day Training Schedule */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              4-Day Home Training Schedule
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Structured weekly training plan designed for home practice
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-blue-50 rounded-2xl p-6 text-center">
              <div className="bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Day 1</h3>
              <p className="text-blue-600 font-medium mb-3">Technical Skills</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>First Touch Training</li>
                <li>Dribbling Drills</li>
                <li>Position-Specific Skills</li>
                <li>Core Strength</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-2xl p-6 text-center">
              <div className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Day 2</h3>
              <p className="text-green-600 font-medium mb-3">Physical Training</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Strength Training</li>
                <li>Speed & Agility</li>
                <li>Stamina Building</li>
                <li>Flexibility</li>
              </ul>
            </div>
            <div className="bg-purple-50 rounded-2xl p-6 text-center">
              <div className="bg-purple-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Day 3</h3>
              <p className="text-purple-600 font-medium mb-3">Tactical Training</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Position Play</li>
                <li>Decision Making</li>
                <li>Game Situations</li>
                <li>Mental Training</li>
              </ul>
            </div>
            <div className="bg-orange-50 rounded-2xl p-6 text-center">
              <div className="bg-orange-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Day 4</h3>
              <p className="text-orange-600 font-medium mb-3">Match Preparation</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Finishing Practice</li>
                <li>Set Pieces</li>
                <li>Match Fitness</li>
                <li>Recovery Training</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Master Your Position?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Choose your position and skill level to start your specialized 4-day home training program today.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg w-full sm:w-auto transition-colors duration-200">
              Take Position Assessment
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-lg font-semibold text-lg w-full sm:w-auto transition-all duration-200 backdrop-blur-sm">
              View Training Schedule
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;