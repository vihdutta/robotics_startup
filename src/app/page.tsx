import Hero from '@/components/Hero';
import ProductShowcase from '@/components/ProductShowcase';
import ContactForm from '@/components/ContactForm';
import { 
  CpuChipIcon, 
  EyeIcon, 
  BoltIcon, 
  SparklesIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

export default function Home() {
  const autonomousVehicleSpecs = [
    {
      name: "LIDAR Range",
      value: "300m Detection",
      icon: EyeIcon
    },
    {
      name: "Processing Power",
      value: "1000 TOPS AI Chip",
      icon: CpuChipIcon
    },
    {
      name: "Battery Life",
      value: "500km Range",
      icon: BoltIcon
    },
    {
      name: "AI Learning",
      value: "Real-time PPO",
      icon: SparklesIcon
    }
  ];

  const humanoidRobotSpecs = [
    {
      name: "Motor Control",
      value: "40 DOF Precision",
      icon: RocketLaunchIcon
    },
    {
      name: "Vision System",
      value: "360° 4K Cameras",
      icon: EyeIcon
    },
    {
      name: "Safety Rating",
      value: "ISO 10218 Certified",
      icon: ShieldCheckIcon
    },
    {
      name: "Operation Time",
      value: "8hrs Continuous",
      icon: ClockIcon
    }
  ];

  return (
    <>
      <Hero />
      
      <ProductShowcase
        id="autonomous-vehicle"
        title="FlowRobotics AV Research Kit"
        subtitle="Autonomous Vehicle Research Package"
        description="Complete autonomous vehicle research platform designed for academic institutions and research labs. This comprehensive package includes advanced LIDAR systems, sensor fusion hardware, and AI development tools. Perfect for studying autonomous navigation algorithms, safety systems, and real-world testing scenarios in controlled environments."
        imageUrl="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=75"
        specs={autonomousVehicleSpecs}
      />

      <ProductShowcase
        id="humanoid-robot"
        title="FlowRobotics Humanoid Research Platform"
        subtitle="Advanced Humanoid Research Package"
        description="Comprehensive humanoid robotics research platform for advanced studies in human-robot interaction, bipedal locomotion, and AI behavior. This complete package includes high-precision actuators, sensory systems, and development frameworks. Ideal for universities and research institutions studying robotics, AI, and biomechanics."
        imageUrl="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=75"
        specs={humanoidRobotSpecs}
        reverse={true}
      />

      <ContactForm />
    </>
  );
}
