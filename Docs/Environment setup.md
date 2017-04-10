###Environment setup:
##Setup git
All is kind of ready for mac users, you just need to generate and add your ssh key to github
Also you might need to change git user email for this repo
`git config user.email "your_email@example.com"`

##Setup Tests tools
#Setup Node
As Nightwatch require NodeJS, You need to install it first
For mac users, quickiest way to use brew and install npm which have node in depenencies(we will use npm later also):
`brew install npm`

#Setup Nightwatch
Install from npm:
`npm install nightwatch`

If you run in without -g option, node_modules will be added to current user dir, so you can execute tests only from there. Fro prod I would suggest to use global install

#Setup JDK for selenium sever
If you don't have java, you will need to install it (also add $JAVA_HOME env var)
check if java is installed `java -version`

#Install Selenium server
Fast way on mac using brew: `brew install selenium-server-standalone`

Otherwise [download](http://selenium-release.storage.googleapis.com/index.html)

#Start Selenium server:
1.  manually if installed from `brew: selenium-server -port 4444`
2.  manually if downloaded `$ java -jar selenium-server-standalone-{VERSION}.jar`
3.  automatically on login: `brew services start selenium-server-standalone`
4. Nightwatch runner will start if automatically, if installed on same machine

#setup chromedriver
easiest way by npm: `npm install chromedriver`

#Setup IDE
1. [Sublime plugin for markdown preview](https://github.com/revolunet/sublimetext-markdown-preview)
2. [Sublime plugin for markdown text editing](https://github.com/SublimeText-Markdown/MarkdownEditing)
3. [Babel synax for JS](https://packagecontrol.io/packages/Babel)
4. [JSFormat](https://packagecontrol.io/packages/JsFormat)
5. [SideBarEnhancements](https://packagecontrol.io/packages/SideBarEnhancements)

#Setup CI:
1. Get Travis CI integrated [install travis-cli: gem install travis](https://docs.travis-ci.com/user/encryption-keys/)
2. Get Sauselabs, install sause-connect CLI `brew install sauce-connect`
3. [Setup Sauselabs with Travis CI](https://docs.travis-ci.com/user/sauce-connect/)
4. [Setup Nightwatch to work with CI](https://medium.com/@mikaelberg/zero-to-hero-with-end-to-end-tests-using-nightwatch-saucelabs-and-travis-e932c8deb695)

