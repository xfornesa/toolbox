#README
Just playing a bit with gulp and similar tools in order to start a project.


## Requirements
[NodeJS](http://nodejs.org/)  
  Note: If using OS X, make sure you are using at least `node v0.10.21` in order
  to avoid [Bus error: 10](https://github.com/gruntjs/grunt-contrib-watch/issues/204) 
  bug when watching files.

## Installation
`bash install.sh`

This would try to:
- Update RubyGems (requires sudo password)
- Install required gems (specified at Gemfile)
- Install node modules (specified at package.json)
- Install gulp plugins (specified at appConfig.json)
- Install bower packages (specified at bower.json)

## Configuration
Toolbox project should run 'as is', but app scaffolding can be configured in `appConfig.json`
