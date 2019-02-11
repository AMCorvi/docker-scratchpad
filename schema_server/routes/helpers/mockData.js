const jsf = require('@amcorvi/loadout/jsf');
const yaml = require('@amcorvi/loadout/yaml');
const C = require('@amcorvi/loadout/chance')


const schema = yaml.parse(
`
type: array
minItems: 40
items:
  type: object
  properties:
    name:
      type: string
      chance: company
    address:
      type: string
      chance: address
    city:
      type: string
      chance: city
    state:
      type: string
      chance: state
    start_time:
      type: string
      chance: timestamp
    end_time:
      type: string
      chance: timestamp
    zip:
      type: integer
      chance:
        integer:
          min: 9999
          max: 99999
  required:
    - address
    - state
    - zip
    - city
    - start_time
    - end_time
    - name
`
)

jsf.extend('chance', () => new C())
let data = jsf.generate(schema);

module.exports = schema
