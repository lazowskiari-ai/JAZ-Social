import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { ArrowRight, Cloud, Users, TrendingUp, Zap } from 'lucide-react'
import heroBackground from './assets/jaz_social_hero_background.png'
import './App.css'

function App() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-gray-900">JAZ Social</div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#services" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">Services</a>
                <a href="#about" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">About</a>
                <a href="#contact" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">Contact</a>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBackground})` }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        <div className={`relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            ABOVE THE NOISE
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl mb-8 font-light max-w-3xl mx-auto">
            Smart marketing for the social generation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
              Discover Our Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg">
              Learn More
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We help brands rise above the digital noise with strategic social media marketing that connects, engages, and converts.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Cloud className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Cloud Strategy</h3>
              <p className="text-gray-600">
                Elevate your brand presence with our comprehensive cloud-based social media strategies that reach new heights.
              </p>
            </div>
            
            <div className="text-center p-8 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Community Building</h3>
              <p className="text-gray-600">
                Build authentic connections with your audience through targeted community engagement and social listening.
              </p>
            </div>
            
            <div className="text-center p-8 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Growth Analytics</h3>
              <p className="text-gray-600">
                Data-driven insights and performance tracking to optimize your social media ROI and accelerate growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose JAZ Social?</h2>
              <p className="text-lg text-gray-600 mb-6">
                In today's crowded digital landscape, standing out requires more than just posting content. 
                It requires strategic thinking, creative execution, and the ability to rise above the noise.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Zap className="h-6 w-6 text-blue-600 mt-1 mr-3" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Lightning-Fast Results</h4>
                    <p className="text-gray-600">See measurable improvements in engagement within the first 30 days.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Cloud className="h-6 w-6 text-blue-600 mt-1 mr-3" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Sky-High Reach</h4>
                    <p className="text-gray-600">Expand your brand's visibility across all major social platforms.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="h-6 w-6 text-blue-600 mt-1 mr-3" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Generation-Focused</h4>
                    <p className="text-gray-600">Tailored strategies that speak to today's social-first generation.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center">
                <Cloud className="h-32 w-32 text-white opacity-80" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Rise Above the Noise?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's create a social media strategy that elevates your brand to new heights.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg">
            Start Your Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="text-2xl font-bold mb-4">JAZ Social</div>
              <p className="text-gray-400 mb-4">
                Smart marketing for the social generation. Rising above the noise to deliver results that matter.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Social Media Strategy</li>
                <li>Content Creation</li>
                <li>Community Management</li>
                <li>Analytics & Reporting</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>hello@jazsocial.com</li>
                <li>+1 (555) 123-4567</li>
                <li>Follow us on social</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 JAZ Social. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

