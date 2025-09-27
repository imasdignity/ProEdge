import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Star, CheckCircle, ArrowRight, Trophy, Target, Users, Shield, Goal, Compass, Crosshair, Crown, Zap, Sparkles } from 'lucide-react';

const Home = () => {
  const features = [
    {
      title: 'Position-Specific Training',
      description: 'Specialized programs for Defenders, Goalkeepers, Midfielders, and Strikers',
      icon: Trophy,
      gradient: 'from-electric-500 to-cyber-500'
    },
    {
      title: '4-Day Home Programs',
      description: 'Complete training schedules designed for home practice with physical conditioning',
      icon: Target,
      gradient: 'from-vibrant-500 to-lime-500'
    },
    {
      title: 'Progressive Skill Levels',
      description: 'Advance through Beginner, Intermediate, Advanced, and Pro levels',
      icon: CheckCircle,
      gradient: 'from-hot-500 to-neon-500'
    },
  ];

  const positions = [
    {
      position: 'Defender',
      description: 'Master defensive positioning, tackling, and leadership',
      icon: Shield,
      color: 'bg-gradient-to-r from-bright-500 to-hot-500',
      skills: ['Defensive Positioning', 'Tackling', 'Aerial Duels', 'Leadership']
    },
    {
      position: 'Goalkeeper',
      description: 'Develop shot-stopping, distribution, and command skills',
      icon: Goal,
      color: 'bg-gradient-to-r from-bright-400 to-bright-600',
      skills: ['Shot Stopping', 'Distribution', 'Cross Handling', 'Command']
    },
    {
      position: 'Midfielder',
      description: 'Perfect passing, vision, dribbling, and game control',
      icon: Compass,
      color: 'bg-gradient-to-r from-vibrant-500 to-lime-500',
      skills: ['Passing', 'Vision', 'Dribbling', 'First Touch']
    },
    {
      position: 'Striker',
      description: 'Excel in finishing, movement, and goal-scoring',
      icon: Crosshair,
      color: 'bg-gradient-to-r from-electric-500 to-cyber-500',
      skills: ['Finishing', 'Movement', 'First Touch', 'Speed']
    }
  ];

  const skillLevels = [
    {
      level: 'Beginner',
      description: 'Foundation skills and basic techniques for all positions',
      color: 'bg-gradient-to-r from-vibrant-500 to-lime-500',
      duration: '8-12 weeks',
      sessions: '4 days/week'
    },
    {
      level: 'Intermediate',
      description: 'Advanced techniques and tactical awareness',
      color: 'bg-gradient-to-r from-electric-500 to-cyber-500',
      duration: '10-14 weeks',
      sessions: '4 days/week'
    },
    {
      level: 'Advanced',
      description: 'Complex skills and competitive preparation',
      color: 'bg-gradient-to-r from-neon-500 to-hot-500',
      duration: '12-16 weeks',
      sessions: '4 days/week'
    },
    {
      level: 'Pro',
      description: 'Elite-level training and performance optimization',
      color: 'bg-gradient-to-r from-bright-500 to-hot-500',
      duration: '16-20 weeks',
      sessions: '4 days/week'
    }
  ];

  const testimonials = [
    {
      name: 'Marcus Johnson',
      position: 'Striker - Advanced Level',
      content: 'The striker-specific training helped me improve my finishing by 40%. The 4-day home program fits perfectly with my schedule.',
      rating: 5,
      gradient: 'from-electric-400 to-cyber-400'
    },
    {
      name: 'Sofia Rodriguez',
      position: 'Midfielder - Intermediate Level',
      content: 'My first touch and dribbling have improved dramatically. The physical training component really makes a difference.',
      rating: 5,
      gradient: 'from-vibrant-400 to-lime-400'
    },
    {
      name: 'James Wilson',
      position: 'Goalkeeper - Pro Level',
      content: 'The goalkeeper-specific programs are incredible. My shot-stopping and distribution have reached professional standards.',
      rating: 5,
      gradient: 'from-bright-400 to-hot-400'
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-electric-900 via-neon-800 to-cyber-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 text-6xl animate-bounce-slow opacity-30">⚽</div>
          <div className="absolute top-40 right-20 text-4xl animate-pulse-slow opacity-30">🌟</div>
          <div className="absolute bottom-40 left-20 text-5xl animate-wiggle opacity-30">⚡</div>
          <div className="absolute bottom-20 right-10 text-3xl animate-bounce opacity-30">🏆</div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Train Like a Pro —{' '}
                <span className="bg-gradient-to-r from-bright-400 via-hot-400 to-neon-400 bg-clip-text text-transparent animate-rainbow">
                  Master Your Position
                </span>
              </h1>
              <p className="text-xl text-electric-100 leading-relaxed">
                Welcome to ProEdge - the ultimate online football training platform! Master your position with our specialized 4-day home training programs designed for Defenders, Goalkeepers, Midfielders, and Strikers. Progress through four skill levels with comprehensive physical training, stamina building, technical skill development, and position-specific mastery. Complete with AI analysis, legendary skills training, and level completion exams to track your journey from beginner to pro!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/programs"
                  className="bg-gradient-to-r from-vibrant-500 to-lime-500 hover:from-vibrant-600 hover:to-lime-600 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center space-x-2 transition-all duration-200 transform hover:scale-105 shadow-lg animate-glow"
                >
                  <span>Choose Your Position</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  to="/ai-analysis"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center space-x-2 transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  <Zap className="h-5 w-5" />
                  <span>AI Analysis</span>
                </Link>
                <Link
                  to="/legendary-skills"
                  className="bg-gradient-to-r from-bright-500 to-hot-500 hover:from-bright-600 hover:to-hot-600 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center space-x-2 transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  <Crown className="h-5 w-5" />
                  <span>Train Like Legends</span>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-white/10 to-white/5 rounded-2xl backdrop-blur-sm border-2 border-bright-400/30 p-8 shadow-2xl">
                <div className="text-center text-white">
                  <h3 className="text-2xl font-bold mb-4">Complete Training System</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-white/10 rounded-lg p-3">
                      <Trophy className="h-6 w-6 mx-auto mb-2" />
                      <div>4 Positions</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3">
                      <Target className="h-6 w-6 mx-auto mb-2" />
                      <div>4 Skill Levels</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3">
                      <Zap className="h-6 w-6 mx-auto mb-2" />
                      <div>AI Analysis</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3">
                      <CheckCircle className="h-6 w-6 mx-auto mb-2" />
                      <div>Level Exams</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legendary Skills Highlight */}
      <section className="py-20 bg-gradient-to-r from-neon-600 via-hot-600 to-bright-600 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 text-4xl animate-bounce opacity-20">👑</div>
          <div className="absolute top-20 right-20 text-3xl animate-pulse opacity-20">⚡</div>
          <div className="absolute bottom-20 left-20 text-5xl animate-wiggle opacity-20">🌟</div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-gradient-to-r from-bright-400 to-hot-400 p-4 rounded-full w-fit mx-auto mb-6 animate-bounce">
              <Crown className="h-16 w-16 text-white" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Train Like Football Legends
            </h2>
            <p className="text-xl text-neon-100 max-w-3xl mx-auto mb-8">
              Master the signature skills of Messi, Ronaldo, De Bruyne, Van Dijk, and Neuer. 
              Learn their first touch techniques, signature moves, and training methods.
            </p>
            <Link
              to="/legendary-skills"
              className="bg-gradient-to-r from-bright-400 to-hot-400 hover:from-bright-500 hover:to-hot-500 text-white px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center space-x-2 transition-all duration-200 transform hover:scale-105 shadow-lg animate-glow"
            >
              <Crown className="h-5 w-5" />
              <span>Explore Legendary Skills</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Position-Specific Training */}
      <section className="py-20 bg-gradient-to-br from-white to-electric-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Train for Your Position
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized training programs designed for each football position, 
              including physical training, stamina building, and technical skills.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {positions.map((pos, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 border-2 border-transparent hover:border-bright-300"
              >
                <div className={`${pos.color} w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg animate-pulse`}>
                  <pos.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{pos.position}</h3>
                <p className="text-gray-600 mb-4">{pos.description}</p>
                <div className="space-y-2">
                  {pos.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-vibrant-500 mr-2" />
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skill Levels Section */}
      <section className="py-20 bg-gradient-to-br from-cyber-50 to-neon-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Four Levels of Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Progress through our structured level system with 4-day weekly training programs 
              that include physical conditioning, stamina training, and technical development.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillLevels.map((level, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 border-2 border-transparent hover:border-cyber-300"
              >
                <div className={`${level.color} w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-lg`}>
                  <span className="text-white font-bold text-lg">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{level.level}</h3>
                <p className="text-gray-600 mb-4">{level.description}</p>
                <div className="space-y-2 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Target className="h-4 w-4 mr-2 text-electric-500" />
                    <span>{level.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2 text-vibrant-500" />
                    <span>{level.sessions}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-white to-hot-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Complete Home Training System
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need for professional-level training at home, including physical 
              conditioning, technical skills, and position-specific development.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 border-2 border-transparent hover:border-bright-300"
              >
                <div className={`bg-gradient-to-r ${feature.gradient} w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg animate-pulse`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Components */}
      <section className="py-20 bg-gradient-to-br from-vibrant-50 to-lime-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What's Included in Every Program
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive training components for complete player development
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-gradient-to-r from-bright-500 to-hot-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg animate-bounce">
                <Trophy className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Physical Training</h3>
              <p className="text-sm text-gray-600">Strength & conditioning</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-vibrant-500 to-lime-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg animate-bounce">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Stamina Training</h3>
              <p className="text-sm text-gray-600">Endurance & fitness</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-electric-500 to-cyber-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg animate-bounce">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Technical Skills</h3>
              <p className="text-sm text-gray-600">First touch & dribbling</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-neon-500 to-hot-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg animate-bounce">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Position Skills</h3>
              <p className="text-sm text-gray-600">Role-specific training</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-white to-neon-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Position-Specific Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Athletes excelling in their specialized positions through our training programs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 border-2 border-transparent hover:border-cyber-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-bright-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className={`bg-gradient-to-r ${testimonial.gradient} bg-clip-text text-transparent font-medium`}>{testimonial.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-electric-700 via-neon-700 to-cyber-700 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 text-4xl animate-bounce opacity-20">⚽</div>
          <div className="absolute top-20 right-20 text-3xl animate-pulse opacity-20">🌟</div>
          <div className="absolute bottom-20 left-20 text-5xl animate-wiggle opacity-20">⚡</div>
          <div className="absolute bottom-10 right-10 text-4xl animate-bounce opacity-20">🏆</div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Master Your Position?
          </h2>
          <p className="text-xl text-electric-100 mb-8 max-w-2xl mx-auto">
            Choose your position and skill level to start your specialized 4-day home training program. 
            Build strength, stamina, and technical skills designed for your role on the field.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/programs"
              className="bg-gradient-to-r from-vibrant-500 to-lime-500 hover:from-vibrant-600 hover:to-lime-600 text-white px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center justify-center space-x-2 transition-all duration-200 transform hover:scale-105 shadow-lg animate-glow"
            >
              <span>Start Position Training</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/legendary-skills"
              className="bg-gradient-to-r from-bright-500 to-hot-500 hover:from-bright-600 hover:to-hot-600 text-white px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center justify-center space-x-2 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              <Crown className="h-5 w-5" />
              <span>Train Like Legends</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;