//-----------------------------------
// Copyright(c) 2015 猫王子
//-----------------------------------
'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, Promise, generator) {
    return new Promise(function (resolve, reject) {
        generator = generator.call(thisArg, _arguments);
        function cast(value) { return value instanceof Promise && value.constructor === Promise ? value : new Promise(function (resolve) { resolve(value); }); }
        function onfulfill(value) { try { step("next", value); } catch (e) { reject(e); } }
        function onreject(value) { try { step("throw", value); } catch (e) { reject(e); } }
        function step(verb, value) {
            var result = generator[verb](value);
            result.done ? resolve(result.value) : cast(result.value).then(onfulfill, onreject);
        }
        step("next", void 0);
    });
};
(function (VPN_TYPE) {
    VPN_TYPE[VPN_TYPE["SOCKS5"] = 5] = "SOCKS5";
})(exports.VPN_TYPE || (exports.VPN_TYPE = {}));
var VPN_TYPE = exports.VPN_TYPE;
exports.defaultCipherAlgorithm = 'aes-256-cfb';
exports.defaultPassword = 'lightsword.neko';
exports.defaultServerPort = 2015;
