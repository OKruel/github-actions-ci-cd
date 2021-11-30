#!/bin/sh -l

echo "::debug ::Debug message"
echo "::warning ::Warning message"
echo "::error ::Error message"

echo "::add-mask::$1"

echo "Hello $1"

time=$(date)
echo "::set-output name=time::$time"

echo "::group::Some expandable logs"
echo "some log"
echo "some log"
echo "some log"
echo "::endgroup::"

# The `set-env` command is disabled. Please upgrade to using Environment Files or opt into unsecure command execution by setting the `ACTIONS_ALLOW_UNSECURE_COMMANDS` environment variable to `true`. For more information see: https://github.blog/changelog/2020-10-01-github-actions-deprecating-set-env-and-add-path-commands/
# echo "::set-env name=HELLO::hello"
