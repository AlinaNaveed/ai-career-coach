/*
  Warnings:

  - You are about to drop the column `userName` on the `CommunityQuestion` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."CommunityQuestion" DROP COLUMN "userName",
ALTER COLUMN "answer" DROP NOT NULL;
