
const parse = data => {
  const file = data.split('\n')
  const output = {}
  let target = null

  for (let i = 0; i < file.length; i++) {
    const line = file[i]

    // WHITESPACE or COMMENT
    // not whitespace || starts with whitespace of 0 or more; hashtag
    if (/\S/.test(line) === false || /^\s*#/.test(line) === true) {
      continue // next iteration
    }

    // TARGET
    // starts with a word of one or more; ends with a colon
    if (/^\w+:$/.test(line) === true) {
      target = line.slice(0, -1)
      output[target] = []
      continue // next iteration
    }

    // INVALID
    if (target === null) {
      const message = 'Must have a target before items can be set'
      throw new Error(`Line ${i}, ${message}`)
    }

    // starts with whitespace of one or more; dash; whitespace of one or more
    const match = line.match(/^\s+-\s+/)

    // ITEMS
    if (match !== null) {
      output[target].push(line.slice(match[0].length))
      continue // next iteration
    }

    const length = output[target].length

    // INVALID
    if (length === 0) {
      const message = 'Must have an item before multiline strings can be set'
      throw new Error(`Line ${i}, ${message}`)
    }

    // MULTILINE
    output[target][length - 1] += ' ' + line.trim()
  }

  return output
}

module.exports = parse
