[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Build Status](https://travis-ci.org/crsten/mongoose-setup.svg?branch=master&style=flat-square)](https://travis-ci.org/crsten/mongoose-setup)
[![npm](https://img.shields.io/npm/dt/mongoose-setup.svg?style=flat-square)](https://www.npmjs.com/package/mongoose-setup)
[![npm](https://img.shields.io/npm/v/mongoose-setup.svg?style=flat-square)](https://www.npmjs.com/package/mongoose-setup)
![npm](https://img.shields.io/npm/l/mongoose-setup.svg?style=flat-square)

# mongoose-setup

This plugin allows you to setup your mongoose structure in a cleaner way. (Better docs will be added later...)

```js
const mongoose = require('mongoose')

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      set: val => Capitalize(val, true),
    },
    email: Types.Email({
      required: true,
    }),
    phone: Types.Phone(),
    upsell: Boolean,
  },
  {
    timestamps: true,
  },
)

// Initialize like this:
require('mongoose-setup')(module, schema)
```
