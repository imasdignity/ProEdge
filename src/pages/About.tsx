import React from 'react';
import { Award, Users, Target, Globe, Trophy, Star, Shield, Goal, Compass, Crosshair } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '10,000+', label: 'Athletes Trained', icon: Users },
    { number: '50+', label: 'Expert Coaches', icon: Award },
    { number: '100+', label: 'Countries Reached', icon: Globe },
    { number: '95%', label: 'Level Progression Rate', icon: Target },
  ];

  const coaches = [
    {
      name: 'Michael Torres',
      role: 'Head Coach & Founder',
      experience: '15+ years coaching experience',
      credentials: 'Former MLS player, UEFA Pro License',
      specialization: 'Advanced & Pro Level Programs',
      positions: 'All Positions',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    },
    {
      name: 'Sarah Williams',
      role: 'Midfielder Specialist',
      experience: '12+ years elite coaching',
      credentials: 'USSF A License, Sports Science PhD',
      specialization: 'Midfielder Training & Physical Conditioning',
      positions: 'Midfielder Focus',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    },
    {
      name: 'Carlos Rodriguez',
      role: 'Striker & Defender Coach',
      experience: '10+ years professional coaching',
      credentials: 'USSF B License, Former Professional Player',
      specialization: 'Striker Finishing & Defensive Tactics',
      positions: 'Striker & Defender',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    },
    {
      name: 'Emma Thompson',
      role: 'Goalkeeper Specialist',
      experience: '8+ years goalkeeper coaching',
      credentials: 'Goalkeeper Coaching Certification, Former Pro GK',
      specialization: 'Goalkeeper Training & Mental Preparation',
      positions: 'Goalkeeper Focus',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    },
  ];

  const positionPhilosophy = [
    {
      position: 'Defender',
      philosophy: 'Defensive Excellence & Leadership',
      description: 'Build unbreakable defensive foundations with tactical awareness, physical strength, and leadership skills that anchor the team.',
      icon: Shield,
      color: 'bg-red-500',
      components: ['Tactical Defending', 'Physical Strength', 'Leadership', 'Communication']
    },
    {
      position: 'Goalkeeper',
      philosophy: 'Command & Distribution',
      description: 'Master shot-stopping, command your area, and become the first line of attack with precise distribution and game reading.',
      icon: Goal,
      color: 'bg-yellow-500',
      components: ['Shot Stopping', 'Distribution', 'Command', 'Mental Strength']
    },
    {
      position: 'Midfielder',
      philosophy: 'Game Control & Vision',
      description: 'Control the tempo, create opportunities, and link defense to attack with exceptional passing, vision, and stamina.',
      icon: Compass,
      color: 'bg-green-500',
      components: ['Passing Vision', 'First Touch', 'Stamina', 'Game Intelligence']
    },
    {
      position: 'Striker',
      philosophy: 'Clinical Finishing & Movement',
      description: 'Perfect your finishing, master movement in the box, and develop the killer instinct needed to score consistently.',
      icon: Crosshair,
      color: 'bg-blue-500',
      components: ['Clinical Finishing', 'Movement', 'First Touch', 'Mental Toughness']
    }
  ];

  const trainingComponents = [
    {
      component: 'Physical Training',
      description: 'Position-specific strength and conditioning',
      focus: 'Build the physical attributes needed for your position',
      color: 'bg-red-500'
    },
    {
      component: 'Stamina Training',
      description: 'Endurance and cardiovascular development',
      focus: 'Maintain peak performance throughout matches',
      color: 'bg-green-500'
    },
    {
      component: 'Technical Skills',
      description: 'First touch, dribbling, and ball mastery',
      focus: 'Perfect fundamental skills essential for all positions',
      color: 'bg-blue-500'
    },
    {
      component: 'Position Mastery',
      description: 'Role-specific skills and tactical understanding',
      focus: 'Excel in your specialized position requirements',
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
              Position-Specific Training Excellence
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              We believe every position requires specialized training. Our mission is to provide 
              comprehensive 4-day home programs that develop physical strength, stamina, technical skills, 
              and position-specific mastery for athletes worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-blue-700" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                At ProEdge, we understand that each position on the football field requires unique skills, 
                physical attributes, and tactical understanding. Our comprehensive training system provides 
                specialized 4-day home programs for Defenders, Goalkeepers, Midfielders, and Strikers.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Every program combines physical training, stamina building, technical skill development, 
                and position-specific mastery. Whether you're building defensive strength, perfecting your 
                first touch, or developing clinical finishing, our progressive system adapts to your needs.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 p-1 rounded-full">
                    <Target className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">Position-specific training programs for all roles</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 p-1 rounded-full">
                    <Target className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">4-day home training with physical conditioning</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 p-1 rounded-full">
                    <Target className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">Progressive skill development from Beginner to Pro</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-blue-100 rounded-2xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop"
                  alt="Football training"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Position Philosophy */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Position-Specific Training Philosophy
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Each position requires unique skills and attributes. Our specialized approach ensures 
              you develop exactly what's needed for your role on the field.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {positionPhilosophy.map((position, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className={`${position.color} w-16 h-16 rounded-full flex items-center justify-center mb-6`}>
                  <position.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{position.position}</h3>
                <h4 className="text-lg font-medium text-blue-600 mb-4">{position.philosophy}</h4>
                <p className="text-gray-600 mb-6">{position.description}</p>
                <div className="grid grid-cols-2 gap-2">
                  {position.components.map((component, compIndex) => (
                    <div key={compIndex} className="bg-white rounded-lg p-2 text-center">
                      <span className="text-sm font-medium text-gray-700">{component}</span>
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
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Every position program includes these essential training components for complete development
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trainingComponents.map((component, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className={`${component.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <Trophy className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{component.component}</h3>
                <p className="text-gray-600 mb-3">{component.description}</p>
                <p className="text-sm text-gray-500">{component.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coaches Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Position-Specialist Coaches
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our expert coaches specialize in different positions and skill levels, 
              ensuring you receive targeted guidance for your role and development stage.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coaches.map((coach, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                  <img
                    src={coach.image}
                    alt={coach.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{coach.name}</h3>
                <p className="text-blue-700 font-medium mb-2">{coach.role}</p>
                <p className="text-gray-600 text-sm mb-2">{coach.experience}</p>
                <p className="text-xs text-gray-500 mb-3">{coach.credentials}</p>
                <div className="bg-blue-50 rounded-lg p-3 mb-2">
                  <p className="text-xs font-medium text-blue-800">Specializes in:</p>
                  <p className="text-xs text-blue-600">{coach.specialization}</p>
                </div>
                <div className="bg-green-50 rounded-lg p-2">
                  <p className="text-xs font-medium text-green-800">{coach.positions}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Philosophy Section */}
      <section className="py-20 bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Our Complete Training Philosophy
          </h2>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            We believe in position-specific development that combines physical training, stamina building, 
            technical skill mastery, and tactical understanding. Our 4-day home programs ensure every 
            athlete develops the complete skill set needed to excel in their chosen position, progressing 
            from fundamental basics to professional-level mastery through our structured level system.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;