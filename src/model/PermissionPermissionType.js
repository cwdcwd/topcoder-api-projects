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
    root.TcProjectService.PermissionPermissionType = factory(root.TcProjectService.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PermissionPermissionType model module.
   * @module model/PermissionPermissionType
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>PermissionPermissionType</code>.
   * @alias module:model/PermissionPermissionType
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>PermissionPermissionType</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PermissionPermissionType} obj Optional instance to populate.
   * @return {module:model/PermissionPermissionType} The populated <code>PermissionPermissionType</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('permissionTypeId')) {
        obj['permissionTypeId'] = ApiClient.convertToType(data['permissionTypeId'], 'Number');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Number} permissionTypeId
   */
  exports.prototype['permissionTypeId'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;



  return exports;
}));


