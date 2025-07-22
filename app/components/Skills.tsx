// Skills Component
const Skills = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Frontend': return <Globe className="w-5 h-5" />
      case 'Backend': return <Server className="w-5 h-5" />
      case 'Database': return <Database className="w-5 h-5" />
      case 'Tools': return <Zap className="w-5 h-5" />
      default: return <Code className="w-5 h-5" />
    }
  }

  const getSkillsByCategory = (category: string) => 
    skills.filter(skill => skill.category === category)

  const categories = ['Frontend', 'Backend', 'Database', 'Tools']

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">Skills & Technologies</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories.map((category) => (
          <div key={category} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <div className="flex items-center mb-6">
              <div className="text-blue-400 mr-3">
                {getCategoryIcon(category)}
              </div>
              <h3 className="text-xl font-semibold text-white">{category}</h3>
            </div>
            
            <div className="space-y-4">
              {getSkillsByCategory(category).map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 font-medium">{skill.name}</span>
                    <span className="text-blue-400 text-sm font-medium">{skill.level}%</span>
                  </div>
                  <div className="bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-full h-2 transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

