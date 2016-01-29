require "sprockets"
require "uglifier"

desc "Compile the codelation.js file and save to /bower"
task :compile do
  destination = File.expand_path("../../../bower", __FILE__)
  file = "codelation"

  # Initialize the sprockets environment
  assets = Sprockets::Environment.new(File.expand_path("../../../", __FILE__))
  assets.append_path("app/assets/javascripts")

  # Compile bower/codelation.js
  compiled_js = assets.find_asset(file).to_s
  File.write(File.join(destination, "#{file}.js"), compiled_js)

  # Compile bower/codelation.min.js
  minified_js = Uglifier.compile(compiled_js)
  File.write(File.join(destination, "#{file}.min.js"), minified_js)
end
