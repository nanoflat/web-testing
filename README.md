# web-testing
experiments with testing web sites [![Build Status](https://travis-ci.org/pkruhlei/web-testing.svg?branch=master)](https://travis-ci.org/pkruhlei/web-testing)

Logs of last run: https://travis-ci.org/pkruhlei/web-testing

# How I approached it
For long time I wanted to try again web atutomation, and finally it happens :)

1. I started with a [plan](./Docs/Tasks_plan.md) to estimate types of tasks and how much time I need to spend on them
2. Than I created [high-level checklist](./Docs/Checklist.md#high-level-checks) of elements that presented on [SUT](https://en.wikipedia.org/wiki/System_under_test). This is important for me to visualise scope of work and have model of future tests
3. Gradually I extended check-list with [more detailed checks](./Docs/Checklist.md#elements) (edge cases, negative tests)
4. After that I created [high-level test scenarios](./Docs/Checklist.md#test-scenarios), which will be UberSmoke, Smoke and Regression tests.
5. I did quick research and selected tool, language and framework for future tests. [Notes on reasoning for selection](./Docs/Selection_of_tools.md)
6. Than I setup [environment for development](./Docs/Environment_setup.md) 
7. Than I setup [tests framework ](./Docs/Framework_setup.md)
8. Than I designed how test structure will look like with basic [PageObjects](./tests/PageObjects) and [Test cases](./tests/TestCases)
9. Than I [Setup CI](./Docs/Environment_setup.md##setup-ci) (Travis CI and Sauselabs)

[Links used in process](./Docs/Links.md)
