workflow "Pull Request" {
  on = [push, pull_request]
  resolves = ["ESLint"]
}

action "ESLint" {
  uses = "hallee/eslint-action@master"
  secrets = ["GITHUB_TOKEN"]
}
