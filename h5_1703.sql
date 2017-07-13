/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : h5_1703

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-07-13 11:14:21
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `img02` varchar(255) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `xiang` varchar(255) DEFAULT NULL,
  `jia` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=31 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES ('1', 'Hermes 爱马仕', '../img/ddd04.png', '../img/ddd05.png', 'Picotin Lock 咖啡色', 'RMB：26000.00');
INSERT INTO `goods` VALUES ('2', 'Hermes 爱马仕', '../img/ddd04.png', '../img/ddd05.png', 'Picotin Lock 咖啡色', 'RMB：26000.00');
INSERT INTO `goods` VALUES ('3', 'Hermes 爱马仕', '../img/ddd04.png', '../img/ddd05.png', 'Picotin Lock 咖啡色', 'RMB：26000.00');
INSERT INTO `goods` VALUES ('4', 'Hermes 爱马仕', '../img/ddd04.png', '../img/ddd05.png', 'Picotin Lock 咖啡色', 'RMB：26000.00');
INSERT INTO `goods` VALUES ('5', 'Hermes 爱马仕', '../img/ddd04.png', '../img/ddd05.png', 'Picotin Lock 咖啡色', 'RMB：26000.00');
INSERT INTO `goods` VALUES ('6', 'Hermes 爱马仕', '../img/ddd04.png', '../img/ddd05.png', 'Picotin Lock 咖啡色', 'RMB：26000.00');
INSERT INTO `goods` VALUES ('7', 'Hermes 爱马仕', '../img/ddd04.png', '../img/ddd05.png', 'Picotin Lock 咖啡色', 'RMB：26000.00');
INSERT INTO `goods` VALUES ('8', 'Hermes 爱马仕', '../img/ddd04.png', '../img/ddd05.png', 'Picotin Lock 咖啡色', 'RMB：26000.00');
INSERT INTO `goods` VALUES ('9', 'Hermes 爱马仕', '../img/ddd04.png', '../img/gg00.png', 'Picotin Lock 咖啡色', 'RMB：26000.00');
INSERT INTO `goods` VALUES ('10', 'Hermes 爱马仕', '../img/ddd04.png', '../img/gg00.png', 'Picotin Lock 咖啡色', 'RMB：26000.00');
INSERT INTO `goods` VALUES ('11', 'Hermes 爱马仕', '../img/ddd04.png', '../img/ddd04.png', 'Picotin Lock 咖啡色', 'RMB：26000.00');
INSERT INTO `goods` VALUES ('12', 'Hermes 爱马仕', '../img/ddd04.png', '../img/gg00.png', 'Picotin Lock 咖啡色', 'RMB：26000.00');
INSERT INTO `goods` VALUES ('13', 'Hermes 爱马仕', '../img/ddd04.png', '../img/gg00.png', 'Picotin Lock 咖啡色', 'RMB：26000.00');
INSERT INTO `goods` VALUES ('14', 'Hermes 爱马仕', null, '../img/gg00.png', 'Picotin Lock 咖啡色', 'RMB：26000.00');
INSERT INTO `goods` VALUES ('15', 'Hermes 爱马仕', null, '../img/gg00.png', 'Picotin Lock 咖啡色', 'RMB：26000.00');
INSERT INTO `goods` VALUES ('16', 'Hermes 爱马仕', null, '../img/gg00.png', 'Picotin Lock 咖啡色', 'RMB：26000.00');
INSERT INTO `goods` VALUES ('17', 'Hermes 爱马仕', null, '../img/gg00.png', 'Picotin Lock 咖啡色', 'RMB：26000.00');
INSERT INTO `goods` VALUES ('18', 'Hermes 爱马仕', null, '../img/gg00.png', 'Picotin Lock 咖啡色', 'RMB：26000.00');
INSERT INTO `goods` VALUES ('19', 'Hermes 爱马仕', null, '../img/gg00.png', 'Picotin Lock 咖啡色', 'RMB：26000.00');
INSERT INTO `goods` VALUES ('20', 'Hermes 爱马仕', null, '../img/gg00.png', 'Picotin Lock 咖啡色', 'RMB：26000.00');
INSERT INTO `goods` VALUES ('21', 'Hermes 爱马仕', null, '../img/gg00.png', 'Picotin Lock 咖啡色', 'RMB：26000.00');
INSERT INTO `goods` VALUES ('22', 'Hermes 爱马仕', null, '../img/gg00.png', 'Picotin Lock 咖啡色', 'RMB：26000.00');
INSERT INTO `goods` VALUES ('23', 'Hermes 爱马仕', null, '../img/gg00.png', 'Picotin Lock 咖啡色', 'RMB：26000.00');
INSERT INTO `goods` VALUES ('24', 'Hermes 爱马仕', null, '../img/gg00.png', 'Picotin Lock 咖啡色', 'RMB：26000.00');
INSERT INTO `goods` VALUES ('25', 'Hermes 爱马仕', null, '../img/gg00.png', 'Picotin Lock 咖啡色', 'RMB：26000.00');
INSERT INTO `goods` VALUES ('26', 'Hermes 爱马仕', null, '../img/gg00.png', 'Picotin Lock 咖啡色', 'RMB：26000.00');
INSERT INTO `goods` VALUES ('27', 'Hermes 爱马仕', null, '../img/gg00.png', 'Picotin Lock 咖啡色', 'RMB：26000.00');
INSERT INTO `goods` VALUES ('28', 'Hermes 爱马仕', null, '../img/gg00.png', 'Picotin Lock 咖啡色', 'RMB：26000.00');
INSERT INTO `goods` VALUES ('29', 'Hermes 爱马仕', null, '../img/gg00.png', 'Picotin Lock 咖啡色', 'RMB：26000.00');
INSERT INTO `goods` VALUES ('30', 'Hermes 爱马仕', null, '../img/gg00.png', 'Picotin Lock 咖啡色', 'RMB：26000.00');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '用户id，用于识别每个学生',
  `name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `age` int(11) NOT NULL,
  `hobby` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `xueli` varchar(255) DEFAULT NULL,
  `addtime` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'liu', '', '18', '代码', '男', '蓝翔', '2017-07-05 17:11:43');
INSERT INTO `user` VALUES ('2', 'cheng', '', '22', '代码', '女', '清华', '2017-07-11 18:02:34');
SET FOREIGN_KEY_CHECKS=1;
