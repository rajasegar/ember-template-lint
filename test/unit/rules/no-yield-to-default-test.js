'use strict';

const generateRuleTests = require('../../helpers/rule-test-harness');

const ERROR_MESSAGE = require('../../../lib/rules/no-yield-to-default').ERROR_MESSAGE;

generateRuleTests({
  name: 'no-yield-to-default',

  config: true,

  good: [
    '{{yield}}',
    '{{has-block}}',
    '{{has-block-params}}',
    '{{hasBlock}}',
    '{{hasBlockParams}}',
  ],

  bad: [
    {
      template: '{{yield to="default"}}',
      result: {
        moduleId: 'layout',
        message: ERROR_MESSAGE,
        line: 1,
        column: 0,
        source: '{{yield to="default"}}',
      },
    },
    {
      template: '{{has-block "default"}}',
      result: {
        moduleId: 'layout',
        message: ERROR_MESSAGE,
        line: 1,
        column: 0,
        source: '{{has-block "default"}}',
      },
    },
    {
      template: '{{has-block-params "default"}}',
      result: {
        moduleId: 'layout',
        message: ERROR_MESSAGE,
        line: 1,
        column: 0,
        source: '{{has-block-params "default"}}',
      },
    },
    {
      template: '{{hasBlock "default"}}',
      result: {
        moduleId: 'layout',
        message: ERROR_MESSAGE,
        line: 1,
        column: 0,
        source: '{{hasBlock "default"}}',
      },
    },
    {
      template: '{{hasBlockParams "default"}}',
      result: {
        moduleId: 'layout',
        message: ERROR_MESSAGE,
        line: 1,
        column: 0,
        source: '{{hasBlockParams "default"}}',
      },
    },
  ],
});
