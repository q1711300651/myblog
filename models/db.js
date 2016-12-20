/**
 * Created by ww on 16/12/21.
 */
var setting = require("../setting");
var Db = require("mongodb").Db;
var Connection = require('mongodb').Connection;
var Server = require('mongodb').Server;
module.export = new Db(setting.db, new Server(setting.host, setting.port), {safe: true});
