# Read common config
require 'json'
file = File.read('appConfig.json')
appConfig = JSON.parse(file)

# Set Devel folders
sass_dir =   appConfig["assets"]["devel"]["scss"]
images_dir = appConfig["assets"]["devel"]["img"]

# Set Build folders
http_path = appConfig["app"]["root"]
css_dir = appConfig["assets"]["build"]["css"]
generated_images_dir = appConfig["assets"]["build"]["img"]
javascripts_dir = appConfig["assets"]["build"]["js"]

# Output style (:expanded || :nested || :compact || :compressed)
output_style = :compressed

# Enable relative paths to assets via compass helper functions (true || false)
relative_assets = false