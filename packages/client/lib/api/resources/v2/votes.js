const Base = require('../../base')

module.exports = class Votes extends Base {
  /**
   * [all description]
   * @return {[type]} [description]
   */
  all () {
    return this.http.get('votes')
  }

  /**
   * [get description]
   * @param  {String} id [description]
   * @return {[type]}    [description]
   */
  get (id) {
    return this.http.get(`votes/${id}`)
  }
}