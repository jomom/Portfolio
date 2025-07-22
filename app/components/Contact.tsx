// Contact Component
const Contact = () => {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">Get In Touch</h2>
      
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-4">Let's Work Together</h3>
              <p className="text-gray-300 mb-6">
                I'm always interested in new opportunities and exciting projects. 
                Whether you need a full-stack application, consulting, or just want to chat about tech.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center text-gray-300">
                  <Mail className="w-5 h-5 text-blue-400 mr-3" />
                  alex.developer@email.com
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="w-5 h-5 text-blue-400 mr-3" />
                  Remote • Available Worldwide
                </div>
                <div className="flex items-center text-gray-300">
                  <Calendar className="w-5 h-5 text-blue-400 mr-3" />
                  Usually responds within 24 hours
                </div>
              </div>
            </div>

            {/* Links */}
            <div className="flex space-x-4">
              <a 
                href="https://github.com/alexdev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 bg-gray-800/50 rounded-xl p-4 border border-gray-700 hover:border-blue-500 transition-colors text-center group"
              >
                <Github className="w-6 h-6 text-gray-400 group-hover:text-white mx-auto mb-2 transition-colors" />
                <span className="text-gray-300 group-hover:text-white transition-colors">GitHub</span>
              </a>
              <a 
                href="https://linkedin.com/in/alexdev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 bg-gray-800/50 rounded-xl p-4 border border-gray-700 hover:border-blue-500 transition-colors text-center group"
              >
                <User className="w-6 h-6 text-gray-400 group-hover:text-white mx-auto mb-2 transition-colors" />
                <span className="text-gray-300 group-hover:text-white transition-colors">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-6">Quick Facts</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-gray-700/50 rounded-lg">
                <span className="text-gray-300">Experience</span>
                <span className="text-blue-400 font-semibold">3+ Years</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-700/50 rounded-lg">
                <span className="text-gray-300">Projects Completed</span>
                <span className="text-green-400 font-semibold">20+</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-700/50 rounded-lg">
                <span className="text-gray-300">Client Satisfaction</span>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                  <span className="text-yellow-400 font-semibold">5.0/5.0</span>
                </div>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-700/50 rounded-lg">
                <span className="text-gray-300">Response Time</span>
                <span className="text-purple-400 font-semibold">< 24hrs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}