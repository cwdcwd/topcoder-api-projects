/**
 * tc-project-service
 * Services that provide access and interaction with user projects.
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/GenericResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GenericResult'));
  } else {
    // Browser globals (root is window)
    if (!root.TcProjectService) {
      root.TcProjectService = {};
    }
    root.TcProjectService.GenericResponse = factory(root.TcProjectService.ApiClient, root.TcProjectService.GenericResult);
  }
}(this, function(ApiClient, GenericResult) {
  'use strict';




  /**
   * The GenericResponse model module.
   * @module model/GenericResponse
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>GenericResponse</code>.
   * @alias module:model/GenericResponse
   * @class
   * @param id {String} 
   * @param version {String} 
   * @param result {module:model/GenericResult} 
   */
  var exports = function(id, version, result) {
    var _this = this;

    _this['id'] = id;
    _this['version'] = version;
    _this['result'] = result;
  };

  /**
   * Constructs a <code>GenericResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GenericResponse} obj Optional instance to populate.
   * @return {module:model/GenericResponse} The populated <code>GenericResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('version')) {
        obj['version'] = ApiClient.convertToType(data['version'], 'String');
      }
      if (data.hasOwnProperty('result')) {
        obj['result'] = GenericResult.constructFromObject(data['result']);
      }
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} version
   */
  exports.prototype['version'] = undefined;
  /**
   * @member {module:model/GenericResult} result
   */
  exports.prototype['result'] = undefined;



  return exports;
}));


