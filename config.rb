# Read common config
require 'json'
file = File.read('app.json')
config = JSON.parse(file)

# Set Devel folders
sass_dir =   config["assets"]["devel"]["scss"]
images_dir = config["assets"]["devel"]["img"]

# Set Build folders
http_path = config["app"]["root"]
css_dir = config["assets"]["build"]["css"]
generated_images_dir = config["assets"]["build"]["img"]
javascripts_dir = config["assets"]["build"]["js"]

# You can select your preferred output style here (can be overridden via the command line):
# output_style = :expanded or :nested or :compact or :compressed
output_style = :compressed

# To enable relative paths to assets via compass helper functions. Uncomment:
# relative_assets = true