-- phpMyAdmin SQL Dump
-- version phpStudy 2014
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2018 年 10 月 06 日 15:16
-- 服务器版本: 5.5.53
-- PHP 版本: 5.4.45

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `lp`
--

-- --------------------------------------------------------

--
-- 表的结构 `comment`
--

CREATE TABLE IF NOT EXISTS `comment` (
  `commentId` int(11) NOT NULL COMMENT '评论id',
  `commentContent` varchar(100) NOT NULL COMMENT '评论内容',
  `commentTitle` varchar(100) NOT NULL COMMENT '评论标题',
  `commentTime` datetime NOT NULL COMMENT '评论时间',
  `shopId` int(11) NOT NULL COMMENT '评论对应商品ID',
  `userId` int(11) NOT NULL COMMENT '评论对应用户ID',
  PRIMARY KEY (`commentId`) USING BTREE,
  KEY `coShop` (`shopId`) USING BTREE
) ENGINE=MyISAM DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

--
-- 转存表中的数据 `comment`
--

INSERT INTO `comment` (`commentId`, `commentContent`, `commentTitle`, `commentTime`, `shopId`, `userId`) VALUES
(1, '这是第一个评论内容', '这是第一个评论标题', '2018-10-04 00:00:00', 1, 2),
(2, '这是第二个评论内容', '这是第二个评论标题', '2018-10-26 00:00:00', 3, 3);

-- --------------------------------------------------------

--
-- 表的结构 `message`
--

CREATE TABLE IF NOT EXISTS `message` (
  `messageId` int(11) NOT NULL COMMENT '留言ID',
  `messageTitle` varchar(100) NOT NULL COMMENT '留言标题',
  `messageCon` varchar(500) NOT NULL COMMENT '留言内容',
  `messageUrl` varchar(200) NOT NULL COMMENT '留言图片路径',
  `messageTime` datetime NOT NULL COMMENT '留言时间',
  `userId` int(11) DEFAULT NULL COMMENT '留言者ID',
  PRIMARY KEY (`messageId`) USING BTREE,
  KEY `me_user` (`userId`) USING BTREE
) ENGINE=MyISAM DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

--
-- 转存表中的数据 `message`
--

INSERT INTO `message` (`messageId`, `messageTitle`, `messageCon`, `messageUrl`, `messageTime`, `userId`) VALUES
(1, '这是第一个留言标题', '这是第一个留言内容', 'html/img/1(1).png', '2018-10-02 06:29:17', 2),
(2, '这是第二个留言标题', '这是第二个留言内容', 'html/img/1(4).png', '2018-10-18 08:41:11', 3);

-- --------------------------------------------------------

--
-- 表的结构 `order`
--

CREATE TABLE IF NOT EXISTS `order` (
  `orderId` int(11) NOT NULL COMMENT '订单ID',
  `orderMoney` float(11,2) NOT NULL COMMENT '订单金额',
  `orderComplete` varchar(5) NOT NULL COMMENT '订单状态',
  `orderTime` datetime NOT NULL COMMENT '订单开始时间',
  `userId` int(11) NOT NULL COMMENT '购买者Id',
  PRIMARY KEY (`orderId`) USING BTREE
) ENGINE=MyISAM DEFAULT CHARSET=utf8 ROW_FORMAT=FIXED;

--
-- 转存表中的数据 `order`
--

INSERT INTO `order` (`orderId`, `orderMoney`, `orderComplete`, `orderTime`, `userId`) VALUES
(1, 500.00, 'true', '2018-10-06 04:00:00', 2),
(2, 599.00, 'false', '2018-10-12 00:00:00', 3);

-- --------------------------------------------------------

--
-- 表的结构 `orderdetail`
--

CREATE TABLE IF NOT EXISTS `orderdetail` (
  `detaiId` int(11) NOT NULL COMMENT '订单编号',
  `orderNum` int(40) NOT NULL COMMENT '订单数量',
  `orderPrice` float(11,3) NOT NULL COMMENT '订单价格',
  `shopId` int(11) DEFAULT NULL COMMENT '对应商品ID',
  PRIMARY KEY (`detaiId`) USING BTREE
) ENGINE=MyISAM DEFAULT CHARSET=utf8 ROW_FORMAT=FIXED;

--
-- 转存表中的数据 `orderdetail`
--

INSERT INTO `orderdetail` (`detaiId`, `orderNum`, `orderPrice`, `shopId`) VALUES
(1, 6, 300.000, 1),
(2, 8, 320.000, 2);

-- --------------------------------------------------------

--
-- 表的结构 `shop`
--

CREATE TABLE IF NOT EXISTS `shop` (
  `shopId` int(11) NOT NULL COMMENT '商品编号',
  `shopName` varchar(200) NOT NULL COMMENT '商品名称',
  `shopDesc` varchar(500) NOT NULL COMMENT '商品简介',
  `shopUrl` varchar(200) NOT NULL COMMENT '商品图片路径',
  `shopPrice` double(11,2) NOT NULL COMMENT '商品价格',
  PRIMARY KEY (`shopId`) USING BTREE
) ENGINE=MyISAM DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

--
-- 转存表中的数据 `shop`
--

INSERT INTO `shop` (`shopId`, `shopName`, `shopDesc`, `shopUrl`, `shopPrice`) VALUES
(1, '关羽', '关羽的脸谱', 'html/img/1(77).png', 50.00),
(2, '后裔', '嫦娥奔月', 'html/img/1(4).png', 40.00),
(3, '程咬金', '贾家楼', 'html/img/1(5).png', 50.00),
(4, '可爱', '萌', 'images/1(1).png', 50.00),
(5, '可爱', '萌', 'images/1(2).png', 100.00),
(6, '可爱', '萌', 'images/1(3).png', 50.00),
(7, '可爱', '萌', 'images/2(2).png', 50.00),
(8, '可爱', '萌', 'images/2(1).png', 50.00),
(9, '可爱', '萌', 'images/2(3).png', 50.00);

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `userId` int(11) NOT NULL COMMENT '用户编号',
  `userName` varchar(11) NOT NULL COMMENT '用户名',
  `userPassword` varchar(11) NOT NULL COMMENT '用户密码',
  `userSex` char(2) NOT NULL COMMENT '性别',
  `userPhone` varchar(11) NOT NULL COMMENT '手机号',
  `userMail` varchar(40) NOT NULL COMMENT '邮箱',
  `userMoney` float NOT NULL,
  PRIMARY KEY (`userId`) USING BTREE
) ENGINE=MyISAM DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`userId`, `userName`, `userPassword`, `userSex`, `userPhone`, `userMail`, `userMoney`) VALUES
(1, 'admin', 'admin123', '', '', '', 0),
(2, 'ruanruan1', 'ruanruan123', 'M', '13412345678', 'ruanruan@163.com', 0),
(3, 'anan', 'anan123', 'N', '13412345678', 'anan@163.com', 0),
(4, 'tiantian', 'tiantian123', 'M', '15678901234', 'tiantian@163.com', 0),
(5, 'ruoruo', 'ruoruo123', 'N', '15645231234', 'ruoruo@163.com', 0),
(6, 'yiyi', 'yiyi123', 'M', '15000901234', 'yiyi@163.com', 0);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
