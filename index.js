/**
 * @file 入口模块
 * @author sparklewhy@gmail.com
 */

'use strict';

var DEFAULT_REQUIRE_BABEL_HELPER_ID = 'babelHelpers';

function addBabelHelper(content, file, conf) {
    if (file.disableBabel) {
        return content;
    }
    var prefix = 'var babelHelpers = require("'
        + (conf.babelHelperModId || DEFAULT_REQUIRE_BABEL_HELPER_ID)
        + '");';
    return prefix + content;
}

module.exports = exports = addBabelHelper;
