import React from 'react';
import { Star, Quote, Award, TrendingUp, Trophy, Shield, Goal, Compass, Crosshair } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Marcus Johnson',
      position: 'Striker - Advanced Level',
      currentLevel: 'Pro Level',
      team: 'University of California',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      content: 'The striker-specific training transformed my finishing. The 4-day program with physical training and first touch work helped me score 25 goals this season.',
      rating: 5,
      achievement: 'Top Scorer - 25 Goals',
      improvement: 'Finishing accuracy improved 45%',
      icon: Crosshair,
      color: 'bg-blue-500'
    },
    {
      name: 'Sofia Rodriguez',
      position: 'Midfielder - Intermediate Level',
      currentLevel: 'Advanced Level',
      team: 'Barcelona Academy USA',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      content: 'The midfielder programs are incredible. My passing accuracy and stamina have improved dramatically. The first touch training was exactly what I needed.',
      rating: 5,
      achievement: 'Academy Team Captain',
      improvement: 'Passing accuracy up 30%',
      icon: Compass,
      color: 'bg-green-500'
    },
    {
      name: 'James Wilson',
      position: 'Goalkeeper - Pro Level',
      currentLevel: 'Pro Level',
      team: 'Austin FC Reserve',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      content: 'The goalkeeper-specific training is world-class. The agility training and shot-stopping drills helped me achieve a 78% save rate this season.',
      rating: 5,
      achievement: 'Professional Contract',
      improvement: '78% save rate achieved',
      icon: Goal,
      color: 'bg-yellow-500'
    },
    {
      name: 'Emma Thompson',
      position: 'Defender - Advanced Level',
      currentLevel: 'Pro Level',
      team: 'Portland Thorns Academy',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      content: 'The defender training built my physical strength and tactical awareness. The 4-day program with stamina training helped me become team captain.',
      rating: 5,
      achievement: 'Team Captain & National Call-up',
      improvement: 'Defensive success rate 85%',
      icon: Shield,
      color: 'bg-red-500'
    },
    {
      name: 'Diego Martinez',
      position: 'Striker - Beginner to Advanced',
      currentLevel: 'Advanced Level',
      team: 'Miami High School',
      image: 'https://images.pexels.com/photos/1484794/pexels-photo-1484794.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      content: 'Started as a beginner striker and progressed to Advanced level. The position-specific training and physical conditioning made all the difference.',
      rating: 5,
      achievement: 'School Top Scorer',
      improvement: 'Advanced 2 levels in 8 months',
      icon: Crosshair,
      color: 'bg-blue-500'
    },
    {
      name: 'Olivia Chen',
      position: 'Midfielder - Beginner Level',
      currentLevel: 'Intermediate Level',
      team: 'Local Recreation League',
      image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      content: 'The beginner midfielder program was perfect for learning fundamentals. The dribbling and first touch training gave me confidence to progress.',
      rating: 5,
      achievement: 'League Player of the Month',
      improvement: 'First touch consistency up 60%',
      icon: Compass,
      color: 'bg-green-500'
    }
  ];

  const stats = [
    {
      number: '10,000+',
      label: 'Position-Specific Athletes',
      icon: Award
    },
    {
      number: '95%',
      label: 'Position Mastery Rate',
      icon: TrendingUp
    },
    {
      number: '4.9/5',
      label: 'Training Effectiveness',
      icon: Star
    }
  ];

  const positionStats = [
    {
      position: 'Defenders',
      graduates: '2,400+',
      avgImprovement: '40% stronger',
      color: 'bg-red-500',
      icon: Shield
    },
    {
      position: 'Goalkeepers',
      graduates: '1,800+',
      avgImprovement: '35% save rate',
      color: 'bg-yellow-500',
      icon: Goal
    },
    {
      position: 'Midfielders',
      graduates: '3,200+',
      avgImprovement: '45% passing',
      color: 'bg-green-500',
      icon: Compass
    },
    {
      position: 'Strikers',
      graduates: '2,600+',
      avgImprovement: '50% finishing',
      color: 'bg-blue-500',
      icon: Crosshair
    }
  ];

  const trainingResults = [
    {
      component: 'Physical Training',
      improvement: '40% strength increase',
      description: 'Average strength improvement across all positions',
      color: 'bg-red-500'
    },
    {
      component: 'Stamina Training',
      improvement: '35% endurance boost',
      description: 'Enhanced match fitness and cardiovascular health',
      color: 'bg-green-500'
    },
    {
      component: 'Technical Skills',
      improvement: '45% skill enhancement',
      description: 'First touch, dribbling, and ball control mastery',
      color: 'bg-blue-500'
    },
    {
      component: 'Position Mastery',
      improvement: '50% role proficiency',
      description: 'Position-specific skills and tactical understanding',
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
              Position-Specific Success Stories
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Discover how our specialized 4-day training programs have helped athletes excel in their 
              positions with improved physical strength, stamina, technical skills, and position mastery.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-4">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <stat.icon className="h-8 w-8 text-blue-700" />
                </div>
                <div className="text-3xl font-bold text-gray-900">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Position Success Stats */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Success Across All Positions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Athletes in every position achieve remarkable improvements through our specialized training
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {positionStats.map((position, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-lg">
                <div className={`${position.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <position.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{position.position}</h3>
                <p className="text-2xl font-bold text-gray-900 mb-1">{position.graduates}</p>
                <p className="text-gray-600 text-sm mb-2">Trained Athletes</p>
                <p className="text-sm font-medium text-green-600">{position.avgImprovement}</p>
                <p className="text-xs text-gray-500">Average improvement</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Results */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Training Component Results
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Measurable improvements across all aspects of our comprehensive training system
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trainingResults.map((result, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 text-center">
                <div className={`${result.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <Trophy className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{result.component}</h3>
                <p className="text-2xl font-bold text-green-600 mb-2">{result.improvement}</p>
                <p className="text-sm text-gray-600">{result.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Real Athletes, Real Results
            </h2>
            <p className="text-xl text-gray-600">
              Hear from athletes who've mastered their positions through our specialized training
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-8"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                    <div className="flex items-center">
                      <div className={`${testimonial.color} w-6 h-6 rounded-full flex items-center justify-center mr-2`}>
                        <testimonial.icon className="h-4 w-4 text-white" />
                      </div>
                      <p className="text-blue-600 font-medium">{testimonial.position}</p>
                    </div>
                    <p className="text-gray-500 text-sm">{testimonial.team}</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <div className="relative mb-6">
                  <Quote className="h-8 w-8 text-blue-200 absolute -top-2 -left-2" />
                  <p className="text-gray-700 leading-relaxed pl-6">
                    {testimonial.content}
                  </p>
                </div>
                
                <div className="border-t border-gray-200 pt-4">
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Current Level</div>
                      <div className="font-medium text-blue-600">{testimonial.currentLevel}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Achievement</div>
                      <div className="font-medium text-gray-900">{testimonial.achievement}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Improvement</div>
                      <div className="font-medium text-green-600">{testimonial.improvement}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Excel in Your Position?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of athletes who've improved their physical strength, stamina, technical skills, 
            and position mastery through our specialized 4-day training programs.
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

export default Testimonials;