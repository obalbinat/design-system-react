"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _componentIsPrototype = _interopRequireDefault(require("../../utilities/warning/component-is-prototype"));

var _onlyOneOfProperties = _interopRequireDefault(require("../../utilities/warning/only-one-of-properties"));

var _getComponentDoc = _interopRequireDefault(require("../../utilities/get-component-doc"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */

/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */

/* eslint-disable import/no-mutable-exports */
var checkProps = function checkPropsFunction() {};

if (process.env.NODE_ENV !== 'production') {
  checkProps = function checkPropsFunction(COMPONENT, props, jsonDoc) {
    var createDocUrl = (0, _getComponentDoc.default)(jsonDoc);
    (0, _componentIsPrototype.default)(COMPONENT);
    (0, _onlyOneOfProperties.default)(COMPONENT, {
      'assistiveText.label': props.assistiveText && props.assistiveText.label,
      label: props.labels.label
    }, createDocUrl('assistiveText'));
  };
}

var _default = checkProps;
exports.default = _default;