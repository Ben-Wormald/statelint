# statelint
[![Tymly Package](https://img.shields.io/badge/tymly-package-blue.svg)](https://tymly.io/) [![npm (scoped)](https://img.shields.io/npm/v/@wmfs/statelint.svg)](https://www.npmjs.com/package/@wmfs/statelint) [![Build Status](https://travis-ci.org/wmfs/statelint.svg?branch=master)](https://travis-ci.org/wmfs/statelint) [![codecov](https://codecov.io/gh/wmfs/statelint/branch/master/graph/badge.svg)](https://codecov.io/gh/wmfs/statelint) [![CodeFactor](https://www.codefactor.io/repository/github/wmfs/statelint/badge)](https://www.codefactor.io/repository/github/wmfs/statelint) [![Dependabot badge](https://img.shields.io/badge/Dependabot-active-brightgreen.svg)](https://dependabot.com/) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/wmfs/tymly/blob/master/packages/statelint/LICENSE)

An npm package providing a validator for Amazon State Language JSON files. Usable from the command-line or as a library.

This package is derived from [awslabs/statelint](https://github.com/awslabs/statelint).

## Usage

```javascript
statelint state-machine-spec [state-machine-spec...]
```

There are no options. If you see no output, your state machine is fine.

## To Do

At time of writing, the awslabs' package carries the following TODO

> Currently covers most of the grammatical constraints for
> state-machine definitions. The checking of JsonPath syntax is
> hand-built and probably imperfect.

## Contributing

Bug reports and pull requests are welcome on GitHub

## <a name="license"></a>License
[MIT](https://github.com/wmfs/statelint/blob/master/LICENSE)

