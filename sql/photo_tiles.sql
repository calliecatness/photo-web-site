/*
 Navicat PostgreSQL Data Transfer

 Source Server         : localhost
 Source Server Version : 90601
 Source Host           : localhost
 Source Database       : photo_web_site
 Source Schema         : public

 Target Server Version : 90601
 File Encoding         : utf-8

 Date: 12/31/2016 09:53:57 AM
*/

-- ----------------------------
--  Table structure for photo_tiles
-- ----------------------------
DROP TABLE IF EXISTS "public"."photo_tiles";
CREATE TABLE "public"."photo_tiles" (
	"id" int4 NOT NULL DEFAULT nextval('photo_tiles_id_seq'::regclass),
	"caption" varchar(30) NOT NULL COLLATE "default",
	"normal_url" varchar(200) NOT NULL COLLATE "default",
	"hover_url" varchar(200) NOT NULL COLLATE "default"
)
WITH (OIDS=FALSE);
ALTER TABLE "public"."photo_tiles" OWNER TO "ericwgreene";

-- ----------------------------
--  Records of photo_tiles
-- ----------------------------
BEGIN;
INSERT INTO "public"."photo_tiles" VALUES ('1', 'Hawaii 1', 'images/hawaii_bw.jpg', 'images/hawaii_color.jpg');
INSERT INTO "public"."photo_tiles" VALUES ('2', 'Hawaii 2', 'images/hawaii_bw.jpg', 'images/hawaii_color.jpg');
INSERT INTO "public"."photo_tiles" VALUES ('3', 'Hawaii 3', 'images/hawaii_bw.jpg', 'images/hawaii_color.jpg');
INSERT INTO "public"."photo_tiles" VALUES ('4', 'Hawaii 4', 'images/hawaii_bw.jpg', 'images/hawaii_color.jpg');
INSERT INTO "public"."photo_tiles" VALUES ('5', 'Hawaii 5', 'images/hawaii_bw.jpg', 'images/hawaii_color.jpg');
INSERT INTO "public"."photo_tiles" VALUES ('6', 'Hawaii 6', 'images/hawaii_bw.jpg', 'images/hawaii_color.jpg');
INSERT INTO "public"."photo_tiles" VALUES ('7', 'Hawaii 7', 'images/hawaii_bw.jpg', 'images/hawaii_color.jpg');
INSERT INTO "public"."photo_tiles" VALUES ('8', 'Hawaii 8', 'images/hawaii_bw.jpg', 'images/hawaii_color.jpg');
INSERT INTO "public"."photo_tiles" VALUES ('9', 'Hawaii 9', 'images/hawaii_bw.jpg', 'images/hawaii_color.jpg');
COMMIT;

-- ----------------------------
--  Primary key structure for table photo_tiles
-- ----------------------------
ALTER TABLE "public"."photo_tiles" ADD PRIMARY KEY ("id") NOT DEFERRABLE INITIALLY IMMEDIATE;

