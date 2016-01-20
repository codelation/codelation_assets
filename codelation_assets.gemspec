$:.push File.expand_path("../lib", __FILE__)

# Maintain your gem's version:
require "codelation_assets/version"

# Describe your gem and declare its dependencies:
Gem::Specification.new do |s|
  s.name        = "codelation_assets"
  s.version     = CodelationAssets::VERSION
  s.authors     = ["Brian Pattison"]
  s.email       = ["brian@brianpattison.com"]
  s.homepage    = "https://github.com/codelation/codelation_assets"
  s.summary     = "A collection of Sass mixins and JavaScript helpers."
  s.description = "A collection of Sass mixins and JavaScript helpers used by Codelation for building awesome Rails apps quickly."
  s.licenses    = ["MIT"]

  s.files = Dir["{app,lib}/**/*", "LICENSE", "Rakefile", "README.md"]

  s.add_dependency "bourbon", "~> 4.2"
  s.add_dependency "rails", "~> 4.0"
  s.add_development_dependency "rake"
end
