import { ChevronDownIcon } from '@heroicons/react/24/outline';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-10"></div>
      
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-gray-900 to-black"></div>
      
      {/* Floating particles */}
      <div className="absolute top-20 left-20 w-4 h-4 bg-primary-400 rounded-full animate-float opacity-60"></div>
      <div className="absolute top-40 right-32 w-6 h-6 bg-primary-300 rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-1/4 w-3 h-3 bg-primary-500 rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-32 right-20 w-5 h-5 bg-primary-200 rounded-full animate-float opacity-30" style={{ animationDelay: '3s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white font-tech leading-tight">
              <span className="text-gradient">Accelerate</span><br />
              Autonomous Systems<br />
              Research
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Complete research packages for autonomous systems development. Advanced robotics equipment, 
              sensors, and AI platforms designed specifically for researchers and academic institutions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a 
              href="#autonomous-vehicle" 
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 animate-glow inline-block text-center"
            >
              Browse Research Kits
            </a>
            <a 
              href="#contact" 
              className="border border-primary-400 text-primary-400 hover:bg-primary-400 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 inline-block text-center"
            >
              Get in Touch
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 pt-16 border-t border-gray-800">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-gradient font-mono">500+</div>
              <div className="text-gray-400 mt-2">Research Institutions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-gradient font-mono">50+</div>
              <div className="text-gray-400 mt-2">Equipment Packages</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-gradient font-mono">24/7</div>
              <div className="text-gray-400 mt-2">Research Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDownIcon className="h-8 w-8 text-primary-400" />
      </div>
    </section>
  );
} 