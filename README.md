# pluckjson

Pick values from a JSON string print the value on screen or copy to clipboard.

## Installation

```
npm install -g pluckjson
```

## Usage

```
pluckjson --key=hello.galaxy < test-file.json
```

## Options

```
--key: key to value to print
--copy: copy value to clipboard
--noemit: do not print value
```

# Change Logs

## 0.0.1

- initial release

## 0.1.0

- Require node 18.13.0
- Update dependencies
- Add uglify-js for compression
- Compress and move bin location to `dist` folder 