module.exports = function (parent, schema) {
  let directory = require('require-directory')(parent)

  Object.entries(directory).forEach(([key, value]) => {
    switch (key) {
      case 'methods':
      case 'statics':
      case 'query':
        Object.entries(value).forEach(([name, func]) => (schema[key][name] = func))
        return
      case 'virtuals':
        Object.entries(value).forEach(([name, func]) => {
          if (typeof func === 'function') schema.virtual(name).get(func)
          else schema.virtual(name).get(func.get).set(func.set)
        })
        return
      case 'plugins':
        value.forEach(entry => schema.plugin(entry.plugin, entry.options))
        return
      case 'hooks':
        Object.entries(value).forEach(([hook, events]) => {
          Object.entries(events).forEach(([event, funcArr]) => {
            funcArr.forEach(func => schema[hook](event, func))
          })
        })
        return
    }
  })
}
