/*
 Navicat PostgreSQL Data Transfer

 Source Server         : localhost
 Source Server Version : 90601
 Source Host           : localhost
 Source Database       : photo_web_site
 Source Schema         : public

 Target Server Version : 90601
 File Encoding         : utf-8

 Date: 12/31/2016 11:29:22 AM
*/

-- ----------------------------
--  Table structure for photo_tiles
-- ----------------------------
DROP TABLE IF EXISTS "public"."photo_tiles";
CREATE TABLE "public"."photo_tiles" (
	"id" bigserial NOT NULL,
	"caption" varchar(30) NOT NULL,
	"normal_url" varchar(200) NOT NULL,
	"hover_url" varchar(200) NOT NULL
)
WITH (OIDS=FALSE);
ALTER TABLE "public"."photo_tiles" OWNER TO "photo_web_site";

-- ----------------------------
--  Records of photo_tiles
-- ----------------------------
BEGIN;
INSERT INTO "public"."photo_tiles" VALUES ('1', 'Hawaii', 'images/hawaii_bw.jpg', 'images/hawaii_color.jpg');
INSERT INTO "public"."photo_tiles" VALUES ('2', 'New York', 'images/newyork_bw.jpg', 'images/newyork_color.jpg');
INSERT INTO "public"."photo_tiles" VALUES ('3', 'California', 'images/goldengate_bw.jpg', 'images/goldengate_color.jpg');
INSERT INTO "public"."photo_tiles" VALUES ('4', 'Canada', 'images/canada_bw.jpg', 'images/canada_color.jpg');
INSERT INTO "public"."photo_tiles" VALUES ('5', 'Sarah', 'images/sarah_bw.jpg', 'images/sarah_color.jpg');
INSERT INTO "public"."photo_tiles" VALUES ('6', 'Nature', 'images/hawaii_bw.jpg', 'images/nature_color.jpg');
INSERT INTO "public"."photo_tiles" VALUES ('7', 'Animals', 'images/animals_bw.jpg', 'images/animals_color.jpg');
INSERT INTO "public"."photo_tiles" VALUES ('8', 'Hawaii', 'images/hawaii_bw.jpg', 'images/hawaii_color.jpg');
INSERT INTO "public"."photo_tiles" VALUES ('9', 'Food','images/cappuccino_bw.jpg', 'images/cappuccino_color.jpg');
COMMIT;

-- ----------------------------
--  Primary key structure for table photo_tiles
-- ----------------------------
ALTER TABLE "public"."photo_tiles" ADD PRIMARY KEY ("id") NOT DEFERRABLE INITIALLY IMMEDIATE;

