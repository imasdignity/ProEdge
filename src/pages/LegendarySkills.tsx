import React, { useState } from 'react';
import { Star, Play, Target, Zap, Crown, ArrowRight, Shield, Goal, Compass, Crosshair, Clock, Users, Trophy, Sparkles, Siren as Fire, CloudLightning as Lightning } from 'lucide-react';

const LegendarySkills = () => {
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const legendaryPlayers = [
    {
      name: 'Lionel Messi',
      nickname: 'La Pulga (The Flea)',
      position: 'Forward/Attacking Midfielder',
      nationality: 'Argentina',
      image: 'https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      signatureSkills: [
        'Close Control Dribbling',
        'Left Foot Magic',
        'Body Feints',
        'Low Center of Gravity'
      ],
      firstTouchMastery: 'Velvet First Touch',
      description: 'Master the art of close control and precision like the GOAT!',
      icon: Crosshair,
      color: 'bg-gradient-to-r from-blue-600 to-purple-600',
      bgPattern: 'bg-gradient-to-br from-blue-50 to-purple-50',
      funFact: '8 Ballon d\'Or winner with magical feet!',
      trainingPrograms: [
        {
          skill: 'Messi Close Control Magic',
          description: 'Develop exceptional close control in tight spaces like the master himself!',
          exercises: [
            'Cone weaving with ball glued to feet (8 mins)',
            'First touch in 1x1 meter box (6 mins)',
            'Body feint combinations (10 mins)',
            'Left foot precision shooting (8 mins)',
            'Cool down and stretching (3 mins)'
          ],
          totalDuration: '35 minutes',
          warmUp: '5 minutes',
          mainTraining: '27 minutes',
          coolDown: '3 minutes',
          difficulty: 'Advanced',
          equipment: ['6-8 cones', 'Football', '1x1m marked area'],
          restPeriods: '30-45 seconds between exercises',
          funElement: 'Train like you\'re dancing with the ball!'
        },
        {
          skill: 'La Pulga First Touch',
          description: 'Perfect the instant ball control that made Messi legendary!',
          exercises: [
            'Wall pass first touch control (7 mins)',
            'Cushioned first touch under pressure (6 mins)',
            'First touch into space creation (8 mins)',
            'Weighted ball control drills (6 mins)',
            'Cool down (3 mins)'
          ],
          totalDuration: '30 minutes',
          warmUp: '5 minutes',
          mainTraining: '22 minutes',
          coolDown: '3 minutes',
          difficulty: 'Intermediate',
          equipment: ['Football', 'Wall or rebounder', 'Cones'],
          restPeriods: '30 seconds between exercises',
          funElement: 'Imagine you\'re performing magic tricks!'
        }
      ]
    },
    {
      name: 'Cristiano Ronaldo',
      nickname: 'CR7',
      position: 'Forward/Winger',
      nationality: 'Portugal',
      image: 'https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      signatureSkills: [
        'Explosive Speed',
        'Aerial Dominance',
        'Power Shooting',
        'Step-over Mastery'
      ],
      firstTouchMastery: 'Power First Touch',
      description: 'Train with the intensity and precision of CR7!',
      icon: Zap,
      color: 'bg-gradient-to-r from-red-600 to-orange-600',
      bgPattern: 'bg-gradient-to-br from-red-50 to-orange-50',
      funFact: '5 Ballon d\'Or winner with incredible dedication!',
      trainingPrograms: [
        {
          skill: 'CR7 Step-over Mastery',
          description: 'Master the devastating step-over that terrorized defenders!',
          exercises: [
            'Multiple step-over combinations (10 mins)',
            'Step-over to acceleration (8 mins)',
            'Body drop step-over (8 mins)',
            'Step-over finishing moves (9 mins)',
            'Recovery and stretching (5 mins)'
          ],
          totalDuration: '40 minutes',
          warmUp: '7 minutes',
          mainTraining: '28 minutes',
          coolDown: '5 minutes',
          difficulty: 'Advanced',
          equipment: ['Football', '8-10 cones', '20m space'],
          restPeriods: '45-60 seconds between exercises',
          funElement: 'Dance your way past defenders!'
        },
        {
          skill: 'Ronaldo Power Touch',
          description: 'Develop the powerful first touch for immediate attack!',
          exercises: [
            'Power first touch into sprint (8 mins)',
            'Chest control to power shot (7 mins)',
            'First touch for crossing position (8 mins)',
            'Aerial first touch control (7 mins)',
            'Cool down (5 mins)'
          ],
          totalDuration: '35 minutes',
          warmUp: '6 minutes',
          mainTraining: '24 minutes',
          coolDown: '5 minutes',
          difficulty: 'Advanced',
          equipment: ['Football', 'Goal or target', 'Partner or wall'],
          restPeriods: '45 seconds between exercises',
          funElement: 'Channel your inner superhero!'
        }
      ]
    },
    {
      name: 'Kevin De Bruyne',
      nickname: 'KDB',
      position: 'Central Midfielder',
      nationality: 'Belgium',
      image: 'https://images.pexels.com/photos/1618200/pexels-photo-1618200.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      signatureSkills: [
        'Vision & Passing',
        'Long Range Shooting',
        'Through Ball Mastery',
        'Set Piece Delivery'
      ],
      firstTouchMastery: 'Visionary First Touch',
      description: 'Develop the vision and passing range of a modern maestro!',
      icon: Compass,
      color: 'bg-gradient-to-r from-green-600 to-teal-600',
      bgPattern: 'bg-gradient-to-br from-green-50 to-teal-50',
      funFact: 'The assist king with laser-guided passes!',
      trainingPrograms: [
        {
          skill: 'KDB Vision Training',
          description: 'Develop the exceptional vision and passing of De Bruyne!',
          exercises: [
            'Long range passing accuracy (12 mins)',
            'Through ball timing drills (10 mins)',
            'First touch into immediate pass (10 mins)',
            'Weighted pass precision training (8 mins)',
            'Recovery and flexibility (5 mins)'
          ],
          totalDuration: '45 minutes',
          warmUp: '8 minutes',
          mainTraining: '32 minutes',
          coolDown: '5 minutes',
          difficulty: 'Advanced',
          equipment: ['2 footballs', 'Targets/cones', '40m space', 'Partner'],
          restPeriods: '60 seconds between exercises',
          funElement: 'Become a passing sniper!'
        },
        {
          skill: 'Maestro First Touch',
          description: 'Perfect the first touch that creates immediate opportunities!',
          exercises: [
            'First touch to create passing angles (8 mins)',
            'Pressure first touch control (7 mins)',
            'First touch for long range shots (8 mins)',
            'Quick first touch combinations (7 mins)',
            'Cool down (5 mins)'
          ],
          totalDuration: '35 minutes',
          warmUp: '6 minutes',
          mainTraining: '24 minutes',
          coolDown: '5 minutes',
          difficulty: 'Intermediate',
          equipment: ['Football', 'Cones', 'Target goals'],
          restPeriods: '45 seconds between exercises',
          funElement: 'Conduct the orchestra of football!'
        }
      ]
    },
    {
      name: 'Virgil van Dijk',
      nickname: 'VVD',
      position: 'Centre-Back',
      nationality: 'Netherlands',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      signatureSkills: [
        'Aerial Dominance',
        'Defensive Positioning',
        'Long Ball Distribution',
        'Calm Under Pressure'
      ],
      firstTouchMastery: 'Composed First Touch',
      description: 'Master the defensive excellence and composure of VVD!',
      icon: Shield,
      color: 'bg-gradient-to-r from-orange-600 to-red-600',
      bgPattern: 'bg-gradient-to-br from-orange-50 to-red-50',
      funFact: 'The defensive colossus who never panics!',
      trainingPrograms: [
        {
          skill: 'VVD Defensive Mastery',
          description: 'Learn the positioning and timing that makes Van Dijk elite!',
          exercises: [
            'Defensive positioning drills (10 mins)',
            'Aerial duel training (8 mins)',
            'Interception timing practice (10 mins)',
            'Calm under pressure scenarios (7 mins)',
            'Recovery and stretching (5 mins)'
          ],
          totalDuration: '40 minutes',
          warmUp: '7 minutes',
          mainTraining: '28 minutes',
          coolDown: '5 minutes',
          difficulty: 'Advanced',
          equipment: ['Football', 'Cones', 'Partner', 'Headers'],
          restPeriods: '60 seconds between exercises',
          funElement: 'Be the fortress that never falls!'
        },
        {
          skill: 'Composed Touch',
          description: 'Develop the calm first touch under defensive pressure!',
          exercises: [
            'First touch under pressure (8 mins)',
            'Defensive first touch clearance (7 mins)',
            'First touch to distribution (8 mins)',
            'Calm ball control drills (7 mins)',
            'Cool down (5 mins)'
          ],
          totalDuration: '35 minutes',
          warmUp: '6 minutes',
          mainTraining: '24 minutes',
          coolDown: '5 minutes',
          difficulty: 'Intermediate',
          equipment: ['Football', 'Pressure partner', 'Targets'],
          restPeriods: '45 seconds between exercises',
          funElement: 'Stay zen like a meditation master!'
        }
      ]
    },
    {
      name: 'Manuel Neuer',
      nickname: 'The Wall',
      position: 'Goalkeeper',
      nationality: 'Germany',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      signatureSkills: [
        'Sweeper Keeper',
        'Distribution Excellence',
        'Shot Stopping',
        'Command of Area'
      ],
      firstTouchMastery: 'Goalkeeper First Touch',
      description: 'Train like the revolutionary sweeper-keeper!',
      icon: Goal,
      color: 'bg-gradient-to-r from-yellow-600 to-orange-600',
      bgPattern: 'bg-gradient-to-br from-yellow-50 to-orange-50',
      funFact: 'The goalkeeper who redefined the position!',
      trainingPrograms: [
        {
          skill: 'Neuer Sweeper Training',
          description: 'Master the sweeper-keeper role that revolutionized goalkeeping!',
          exercises: [
            'Sweeper keeper positioning (12 mins)',
            'Quick distribution training (10 mins)',
            'Foot skill development (10 mins)',
            'Command and communication (8 mins)',
            'Recovery and flexibility (5 mins)'
          ],
          totalDuration: '45 minutes',
          warmUp: '8 minutes',
          mainTraining: '32 minutes',
          coolDown: '5 minutes',
          difficulty: 'Advanced',
          equipment: ['Football', 'Goal', 'Cones', 'Partner'],
          restPeriods: '60 seconds between exercises',
          funElement: 'Be the goalkeeper of the future!'
        },
        {
          skill: 'Keeper Touch Control',
          description: 'Develop exceptional first touch for modern goalkeeping!',
          exercises: [
            'First touch distribution (8 mins)',
            'Pressure first touch control (7 mins)',
            'Quick release training (8 mins)',
            'Foot skill development (7 mins)',
            'Cool down (5 mins)'
          ],
          totalDuration: '35 minutes',
          warmUp: '6 minutes',
          mainTraining: '24 minutes',
          coolDown: '5 minutes',
          difficulty: 'Advanced',
          equipment: ['Football', 'Targets', 'Pressure partner'],
          restPeriods: '45 seconds between exercises',
          funElement: 'Master the art of goalkeeping wizardry!'
        }
      ]
    }
  ];

  const skillCategories = [
    {
      category: 'Dribbling & Control',
      players: ['Messi', 'Ronaldo'],
      description: 'Master close control and explosive dribbling like magic!',
      color: 'bg-gradient-to-r from-blue-500 to-purple-500',
      icon: Target
    },
    {
      category: 'Vision & Passing',
      players: ['De Bruyne'],
      description: 'Develop exceptional vision and passing range!',
      color: 'bg-gradient-to-r from-green-500 to-teal-500',
      icon: Compass
    },
    {
      category: 'Defensive Excellence',
      players: ['Van Dijk'],
      description: 'Learn world-class defensive positioning and composure!',
      color: 'bg-gradient-to-r from-orange-500 to-red-500',
      icon: Shield
    },
    {
      category: 'Goalkeeping Innovation',
      players: ['Neuer'],
      description: 'Master modern goalkeeping techniques!',
      color: 'bg-gradient-to-r from-yellow-500 to-orange-500',
      icon: Goal
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-400 p-4 rounded-full animate-pulse">
                <Crown className="h-12 w-12 md:h-16 md:w-16 text-black" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              Train Like the LEGENDS!
            </h1>
            <p className="text-lg md:text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed mb-8">
              Master the signature skills and first touch techniques of football's greatest players! 
              Learn from Messi's magic, Ronaldo's power, De Bruyne's vision, Van Dijk's composure, and Neuer's innovation
            </p>
          </div>
        </div>
      </section>

      {/* Skill Categories */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Legendary Skill Categories
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Train in the specific areas where legends excel!
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-2xl p-4 md:p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 border-2 border-transparent hover:border-yellow-400">
                <div className={`${category.color} w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-lg`}>
                  <category.icon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                </div>
                <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2">{category.category}</h3>
                <p className="text-sm md:text-base text-gray-600 mb-3">{category.description}</p>
                <div className="text-xs md:text-sm text-gray-500 bg-gray-50 rounded-lg p-2">
                  Featured: {category.players.join(', ')}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legendary Players */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Master Legendary Techniques
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Learn the signature skills that made these players legends!
            </p>
          </div>
          <div className="space-y-8 md:space-y-16">
            {legendaryPlayers.map((player, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300 border-4 border-transparent hover:border-yellow-400">
                <div className="flex flex-col lg:flex-row">
                  <div className={`lg:w-1/3 p-6 md:p-8 ${player.bgPattern} relative overflow-hidden`}>
                    <div className="text-center relative z-10">
                      <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mx-auto mb-4 md:mb-6 border-4 border-white shadow-2xl transform hover:scale-110 transition-all duration-300">
                        <img
                          src={player.image}
                          alt={player.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{player.name}</h3>
                      <p className="text-sm md:text-base font-medium text-purple-600 mb-1">{player.nickname}</p>
                      <p className="text-blue-600 font-medium mb-1 text-sm md:text-base">{player.position}</p>
                      <p className="text-gray-500 mb-4 text-sm md:text-base">{player.nationality}</p>
                      <div className={`${player.color} w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg animate-pulse`}>
                        <player.icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
                      </div>
                      <p className="text-gray-600 text-sm md:text-base mb-3">{player.description}</p>
                      <div className="bg-yellow-100 border-2 border-yellow-300 rounded-lg p-3 mb-4">
                        <p className="text-yellow-800 text-xs md:text-sm font-medium">{player.funFact}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:w-2/3 p-6 md:p-8">
                    <div className="mb-6 md:mb-8">
                      <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-4 flex items-center">
                        <Sparkles className="h-5 w-5 mr-2 text-yellow-500" />
                        Signature Skills
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {player.signatureSkills.map((skill, skillIndex) => (
                          <div key={skillIndex} className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-3 text-center border-2 border-transparent hover:border-blue-300 transition-all duration-300 transform hover:scale-105">
                            <span className="text-sm font-medium text-gray-700">{skill}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-4 border-2 border-yellow-200">
                        <h5 className="font-semibold text-yellow-800 mb-2 flex items-center">
                          <Star className="h-4 w-4 mr-2" />
                          First Touch Mastery
                        </h5>
                        <p className="text-yellow-700 text-sm md:text-base">{player.firstTouchMastery}</p>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-6 flex items-center">
                        <Fire className="h-5 w-5 mr-2 text-red-500" />
                        Training Programs
                      </h4>
                      <div className="space-y-6">
                        {player.trainingPrograms.map((program, progIndex) => (
                          <div key={progIndex} className="border-2 border-gray-200 rounded-xl p-4 md:p-6 hover:shadow-lg transition-all duration-300 hover:border-blue-300 bg-gradient-to-br from-white to-gray-50">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-3">
                              <h5 className="text-base md:text-lg font-semibold text-gray-900">{program.skill}</h5>
                              <div className="flex flex-wrap items-center gap-2">
                                <span className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 px-3 py-1 rounded-full text-xs md:text-sm font-medium flex items-center shadow-sm">
                                  <Clock className="h-3 w-3 md:h-4 md:w-4 mr-1" />
                                  {program.totalDuration}
                                </span>
                                <span className={`px-3 py-1 rounded-full text-xs md:text-sm font-medium shadow-sm ${
                                  program.difficulty === 'Advanced' 
                                    ? 'bg-gradient-to-r from-red-100 to-red-200 text-red-800' 
                                    : 'bg-gradient-to-r from-green-100 to-green-200 text-green-800'
                                }`}>
                                  {program.difficulty}
                                </span>
                              </div>
                            </div>
                            
                            <p className="text-gray-600 mb-4 text-sm md:text-base">{program.description}</p>
                            
                            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-3 mb-4 border border-purple-200">
                              <p className="text-purple-700 text-sm font-medium flex items-center">
                                <Sparkles className="h-4 w-4 mr-2" />
                                {program.funElement}
                              </p>
                            </div>
                            
                            {/* Training Breakdown */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                              <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-3 text-center border border-green-200">
                                <div className="text-xs text-green-600 font-medium">Warm-up</div>
                                <div className="text-sm font-semibold text-green-800">{program.warmUp}</div>
                              </div>
                              <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-3 text-center border border-blue-200">
                                <div className="text-xs text-blue-600 font-medium">Main Training</div>
                                <div className="text-sm font-semibold text-blue-800">{program.mainTraining}</div>
                              </div>
                              <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg p-3 text-center border border-purple-200">
                                <div className="text-xs text-purple-600 font-medium">Cool Down</div>
                                <div className="text-sm font-semibold text-purple-800">{program.coolDown}</div>
                              </div>
                            </div>
                            
                            {/* Exercises */}
                            <div className="mb-4">
                              <h6 className="font-medium text-gray-900 mb-3 text-sm md:text-base flex items-center">
                                <Lightning className="h-4 w-4 mr-2 text-yellow-500" />
                                Training Exercises:
                              </h6>
                              <div className="grid grid-cols-1 gap-2">
                                {program.exercises.map((exercise, exIndex) => (
                                  <div key={exIndex} className="flex items-start text-xs md:text-sm text-gray-700 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-3 border border-gray-200 hover:border-blue-300 transition-all duration-300">
                                    <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-blue-400 rounded-full mr-3 mt-1.5 flex-shrink-0 animate-pulse"></div>
                                    <span>{exercise}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                            
                            {/* Equipment & Rest */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-3 border border-yellow-200">
                                <h6 className="font-medium text-gray-900 mb-2 text-sm flex items-center">
                                  <Target className="h-4 w-4 mr-2 text-orange-500" />
                                  Equipment Needed:
                                </h6>
                                <div className="flex flex-wrap gap-1">
                                  {program.equipment.map((item, eqIndex) => (
                                    <span key={eqIndex} className="bg-white text-gray-700 px-2 py-1 rounded-full text-xs border border-gray-200 shadow-sm">
                                      {item}
                                    </span>
                                  ))}
                                </div>
                              </div>
                              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-3 border border-blue-200">
                                <h6 className="font-medium text-gray-900 mb-2 text-sm flex items-center">
                                  <Clock className="h-4 w-4 mr-2 text-blue-500" />
                                  Rest Periods:
                                </h6>
                                <span className="text-xs text-gray-600 bg-white px-2 py-1 rounded-full border border-gray-200">{program.restPeriods}</span>
                              </div>
                            </div>
                            
                            <div className="pt-4 border-t border-gray-200">
                              <button className={`${player.color} hover:opacity-90 text-white px-4 md:px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2 w-full sm:w-auto justify-center shadow-lg transform hover:scale-105`}>
                                <Play className="h-4 w-4" />
                                <span>Start Training!</span>
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Benefits */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-white to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Train Like Legends?
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Learn from the best to become your best!
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="text-center bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-blue-300">
              <div className="bg-gradient-to-r from-blue-100 to-purple-100 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg">
                <Target className="h-6 w-6 md:h-8 md:w-8 text-blue-700" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4">Proven Techniques</h3>
              <p className="text-gray-600 text-sm md:text-base">
                Master the exact skills and techniques that made these players legendary at the highest level!
              </p>
            </div>
            <div className="text-center bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-green-300">
              <div className="bg-gradient-to-r from-green-100 to-teal-100 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg">
                <Zap className="h-6 w-6 md:h-8 md:w-8 text-green-700" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4">Accelerated Learning</h3>
              <p className="text-gray-600 text-sm md:text-base">
                Learn faster by studying and practicing the methods of football's greatest talents!
              </p>
            </div>
            <div className="text-center bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-purple-300">
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg">
                <Crown className="h-6 w-6 md:h-8 md:w-8 text-purple-700" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4">Elite Mindset</h3>
              <p className="text-gray-600 text-sm md:text-base">
                Develop the mental approach and dedication that separates legends from ordinary players!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-purple-700 via-blue-700 to-indigo-700 relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            Start Training Like a Legend Today!
          </h2>
          <p className="text-lg md:text-xl text-purple-100 mb-6 md:mb-8 max-w-2xl mx-auto">
            Master the signature skills of football's greatest players with our specialized training programs! 
            Perfect your first touch, develop legendary techniques, and elevate your game!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold text-base md:text-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg transform hover:scale-105">
              <Crown className="h-5 w-5" />
              <span>Choose Your Legend!</span>
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold text-base md:text-lg transition-all duration-300 backdrop-blur-sm flex items-center justify-center space-x-2 shadow-lg transform hover:scale-105">
              <Play className="h-5 w-5" />
              <span>Watch Training Videos!</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LegendarySkills;