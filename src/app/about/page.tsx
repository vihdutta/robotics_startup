import { UserGroupIcon, RocketLaunchIcon, LightBulbIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

export default function About() {
  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "CEO & Co-Founder",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Former Tesla Autopilot lead with 15+ years in autonomous systems."
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO & Co-Founder", 
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "AI researcher specializing in reinforcement learning and robotics control."
    },
    {
      name: "Dr. Emily Watson",
      role: "Head of Robotics",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "MIT robotics PhD with expertise in humanoid systems and motor control."
    },
    {
      name: "Alex Kim",
      role: "Lead AI Engineer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Machine learning expert focusing on real-time decision making systems."
    }
  ];

  const values = [
    {
      icon: RocketLaunchIcon,
      title: "Innovation First",
      description: "We push the boundaries of what's possible in robotics, always seeking breakthrough solutions that redefine industry standards."
    },
    {
      icon: UserGroupIcon,
      title: "Human-Centric Design",
      description: "Our technology enhances human capabilities rather than replacing them, creating symbiotic relationships between humans and machines."
    },
    {
      icon: LightBulbIcon,
      title: "Intelligent Solutions",
      description: "Every system we build incorporates advanced AI to learn, adapt, and improve performance continuously in real-world environments."
    },
    {
      icon: GlobeAltIcon,
      title: "Global Impact",
      description: "We&apos;re committed to creating technologies that address global challenges and improve quality of life worldwide."
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-gray-900 to-black"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold text-white font-tech">
              About <span className="text-gradient">FlowRobotics</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We provide cutting-edge research equipment packages for autonomous systems, 
              empowering academic institutions and research labs worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="glass-effect rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-6 font-tech">Our Mission</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                To accelerate autonomous systems research by providing comprehensive, high-quality equipment 
                packages to academic institutions and research labs. We democratize access to cutting-edge 
                robotics technology, enabling breakthrough discoveries and innovations in autonomous systems.
              </p>
            </div>
            
            <div className="glass-effect rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-6 font-tech">Our Vision</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                A future where every research institution has access to state-of-the-art autonomous systems 
                equipment, accelerating breakthroughs in robotics, AI, and automation. We envision a global 
                research ecosystem where cutting-edge technology enables rapid innovation and discovery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6 font-tech">Our Values</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide our innovation and shape our culture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="glass-effect rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <value.icon className="h-12 w-12 text-primary-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6 font-tech">Meet Our Team</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Visionary leaders and brilliant minds driving the future of robotics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="glass-effect rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-primary-400 font-medium mb-3">{member.role}</p>
                <p className="text-gray-300 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6 font-tech">Our Impact</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-gradient font-mono mb-2">50+</div>
              <div className="text-gray-400">Patents Filed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-gradient font-mono mb-2">$25M</div>
              <div className="text-gray-400">Funding Raised</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-gradient font-mono mb-2">100+</div>
              <div className="text-gray-400">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-gradient font-mono mb-2">10+</div>
              <div className="text-gray-400">Global Partners</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 