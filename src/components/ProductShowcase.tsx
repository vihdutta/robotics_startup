

interface ProductShowcaseProps {
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  specs: {
    name: string;
    value: string;
    icon: React.ComponentType<{ className?: string }>;
  }[];
  reverse?: boolean;
  id?: string;
}

export default function ProductShowcase({ 
  title, 
  subtitle, 
  description, 
  imageUrl, 
  specs, 
  reverse = false,
  id 
}: ProductShowcaseProps) {
  return (
    <section id={id} className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${reverse ? 'lg:grid-flow-col-dense' : ''}`}>
          
          {/* Content */}
          <div className={`space-y-8 ${reverse ? 'lg:col-start-2' : ''}`}>
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 font-tech">
                {title}
              </h2>
              <h3 className="text-xl lg:text-2xl text-gradient font-medium mb-6">
                {subtitle}
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                {description}
              </p>
            </div>

            {/* Specifications */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {specs.map((spec, index) => (
                <div key={index} className="glass-effect rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center space-x-3 mb-3">
                    <spec.icon className="h-6 w-6 text-primary-400" />
                    <h4 className="text-white font-semibold">{spec.name}</h4>
                  </div>
                  <p className="text-gray-300 font-mono text-sm">{spec.value}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                          <a 
              href="#contact" 
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 animate-glow inline-block text-center"
            >
              Get Research Quote
            </a>
                              <button className="border border-primary-400 text-primary-400 hover:bg-primary-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200">
                  Research Details
                </button>
            </div>
          </div>

          {/* Image */}
          <div className={`relative ${reverse ? 'lg:col-start-1' : ''}`}>
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden glass-effect">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-900/20 to-primary-500/20"></div>
              <img
                src={imageUrl}
                alt={title}
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              
              {/* Floating indicators */}
              <div className="absolute top-4 right-4 glass-effect rounded-lg px-3 py-2">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-white text-sm font-mono">ACTIVE</span>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-20 h-20 bg-primary-500/20 rounded-full blur-xl animate-float"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary-400/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
} 