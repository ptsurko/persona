#!/bin/bash

# This makes sure, that we don't deploy pull requests to gh-pages :-)
if [ $TRAVIS_PULL_REQUEST != false ];
  then
  echo "Not deploying test-run for a pull request"
  exit 0
fi
(
  echo "Pushing build to ${GH_REF} gh-pages branch."
  cd build
  git init
  git config user.name "${GIT_NAME}"
  git config user.email "${GIT_EMAIL}"
  git add .
  git commit -m "Deployed to Github Pages"
  git push --force "https://${GH_TOKEN}:x-oauth-basic@${GH_REF}" gh-pages:gh-pages
)
