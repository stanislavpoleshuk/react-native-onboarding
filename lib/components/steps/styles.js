"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_iphone_x_helper_1 = require("react-native-iphone-x-helper");
const react_native_1 = require("react-native");
const styles = react_native_1.StyleSheet.create({
    wrapper: {
        zIndex: 1,
        elevation: 1,
        flexDirection: 'row',
        paddingHorizontal: 26,
        marginTop: react_native_iphone_x_helper_1.getStatusBarHeight() + 20,
    },
});
exports.default = styles;