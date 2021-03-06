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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.TcProjectService) {
      root.TcProjectService = {};
    }
    root.TcProjectService.ProjectRequestBody = factory(root.TcProjectService.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ProjectRequestBody model module.
   * @module model/ProjectRequestBody
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ProjectRequestBody</code>.
   * @alias module:model/ProjectRequestBody
   * @class
   * @param projectName {String} 
   */
  var exports = function(projectName) {
    var _this = this;

    _this['projectName'] = projectName;


  };

  /**
   * Constructs a <code>ProjectRequestBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProjectRequestBody} obj Optional instance to populate.
   * @return {module:model/ProjectRequestBody} The populated <code>ProjectRequestBody</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('projectName')) {
        obj['projectName'] = ApiClient.convertToType(data['projectName'], 'String');
      }
      if (data.hasOwnProperty('projectDescription')) {
        obj['projectDescription'] = ApiClient.convertToType(data['projectDescription'], 'String');
      }
      if (data.hasOwnProperty('billingAccountId')) {
        obj['billingAccountId'] = ApiClient.convertToType(data['billingAccountId'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {String} projectName
   */
  exports.prototype['projectName'] = undefined;
  /**
   * @member {String} projectDescription
   */
  exports.prototype['projectDescription'] = undefined;
  /**
   * @member {Number} billingAccountId
   */
  exports.prototype['billingAccountId'] = undefined;



  return exports;
}));


