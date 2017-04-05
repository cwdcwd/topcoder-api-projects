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
    define(['ApiClient', 'model/DirectProjectType', 'model/ProjectQuestionOption'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DirectProjectType'), require('./ProjectQuestionOption'));
  } else {
    // Browser globals (root is window)
    if (!root.TcProjectService) {
      root.TcProjectService = {};
    }
    root.TcProjectService.ProjectQuestion = factory(root.TcProjectService.ApiClient, root.TcProjectService.DirectProjectType, root.TcProjectService.ProjectQuestionOption);
  }
}(this, function(ApiClient, DirectProjectType, ProjectQuestionOption) {
  'use strict';




  /**
   * The ProjectQuestion model module.
   * @module model/ProjectQuestion
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ProjectQuestion</code>.
   * @alias module:model/ProjectQuestion
   * @class
   * @param id {Number} 
   * @param questionText {String} 
   */
  var exports = function(id, questionText) {
    var _this = this;

    _this['id'] = id;
    _this['questionText'] = questionText;




  };

  /**
   * Constructs a <code>ProjectQuestion</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProjectQuestion} obj Optional instance to populate.
   * @return {module:model/ProjectQuestion} The populated <code>ProjectQuestion</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('questionText')) {
        obj['questionText'] = ApiClient.convertToType(data['questionText'], 'String');
      }
      if (data.hasOwnProperty('questionOptions')) {
        obj['questionOptions'] = ApiClient.convertToType(data['questionOptions'], [ProjectQuestionOption]);
      }
      if (data.hasOwnProperty('answerHtmlId')) {
        obj['answerHtmlId'] = ApiClient.convertToType(data['answerHtmlId'], 'String');
      }
      if (data.hasOwnProperty('directProjectType')) {
        obj['directProjectType'] = DirectProjectType.constructFromObject(data['directProjectType']);
      }
      if (data.hasOwnProperty('multipleAnswersHtmlXpath')) {
        obj['multipleAnswersHtmlXpath'] = ApiClient.convertToType(data['multipleAnswersHtmlXpath'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} questionText
   */
  exports.prototype['questionText'] = undefined;
  /**
   * @member {Array.<module:model/ProjectQuestionOption>} questionOptions
   */
  exports.prototype['questionOptions'] = undefined;
  /**
   * @member {String} answerHtmlId
   */
  exports.prototype['answerHtmlId'] = undefined;
  /**
   * @member {module:model/DirectProjectType} directProjectType
   */
  exports.prototype['directProjectType'] = undefined;
  /**
   * @member {String} multipleAnswersHtmlXpath
   */
  exports.prototype['multipleAnswersHtmlXpath'] = undefined;



  return exports;
}));

