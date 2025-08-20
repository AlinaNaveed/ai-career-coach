/*
  Warnings:

  - You are about to drop the column `userId` on the `CommunityQuestion` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."CommunityQuestion" DROP CONSTRAINT "CommunityQuestion_userId_fkey";

-- AlterTable
ALTER TABLE "public"."CommunityQuestion" DROP COLUMN "userId";
