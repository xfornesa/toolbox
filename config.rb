# Require any additional compass plugins here.
devAssets = 'app/assets/dev/'
buildAssets = 'app/assets/build/'

# Set this to the root of your project when deployed:
http_path = "app/"
css_dir = buildAssets + "css/"
sass_dir = devAssets + "scss/"
images_dir = devAssets + "img/"
generated_images_dir = buildAssets + "img/"
javascripts_dir = buildAssets + "js/"

# You can select your preferred output style here (can be overridden via the command line):
# output_style = :expanded or :nested or :compact or :compressed
output_style = :compressed

# To enable relative paths to assets via compass helper functions. Uncomment:
# relative_assets = true