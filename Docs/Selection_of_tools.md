###Selection of tools

##Selection of test automation tools

*Summary:* I decided to work on JS tests with PageObjects and Selenium.

There is not much choise for modern web test automation. 
#Just to give some perspective on tools and meththods:
1. UI-based tools:
    - http://sikulix.com/#home2, fun to play with but not for dynamic web automation
    - https://applitools.com/features, service model, integrates in Selenium. I have some talks with them but didn't tried, I have doubts if they are suitable
2. Frameworks:
    - [Watir](https://github.com/watir/watir), if you have your website done in Rails
    - AAAnd finally [Selenium Webdriver](http://www.seleniumhq.org/projects/webdriver/)

I select Selenium, it's web standart, plenty of resources available, supports loads of codding languages and browsers. 

#Automation methods:

1. Record-and-playback: not reliable, not scalable, not easlity maintainable. Fast
2. Linear scripting: a bit of code, bit more reliable that record-and-plaback but other problems are there
3. BDD (Cucumber,[Jasmine](https://en.wikipedia.org/wiki/Jasmine_(JavaScript_testing_framework))). Suppose to work in agile teams, gave understanding and visibility of tests to all team (PO can even create user stories in this DSL and they can be converted to tests on fly). For developers imho its adds another layer that needs to be supported.
4. Modular tests, [PageObjects](https://martinfowler.com/bliki/PageObject.html) as example. Reusable components, clear code, better maintainability

I choose Modular PageObjects tests, I beleive that tests should be easy to understand, write and extend. 

#Language: 

1. Java. Powerfull language, bit verbose for fast task
2. Python. Fast to start, easy to read, dinamic
3. JS. Standart for web development (so most likely be easy to extend tests by devs)

I choose JS. I beleive it's fastest way to get started.
I will use [Nightwatch](http://nightwatchjs.org/guide/#page-objects) framework, it has already lots of things that I will need: PageObjects, integrated test runner, paralleling tests, selectors support, BDD, Before/After annotations, ability to extend it. Also I was working with author of framework in previous company so I can always ask him for help/advice, this is always great:)

#Code and docs organization:
I choose github, as I have account there.
Bitbucket is also great option, as it offers free private repost, maybe I will look on it later

Docs will live in same repo, so it's easier to track when they are changed.  Github provides UI for markdown so my docs will be in markdown format.

#CI:
I was thinking of setting up personal CI server (Jenkins) in my [Digital Ocean ](https://www.digitalocean.com/) droplert. In the end I decided to go with cloud solution [TravisCI](https://travis-ci.org/) It suppose to be faster and also can integrate with GitHub and notification channel of your choise(Slack mostlikely)

As test lab I will use [Sauselabs](https://saucelabs.com), 90h of runtime and 14days of trial period should be enought to try it out.
