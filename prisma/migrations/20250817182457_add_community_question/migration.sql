/*
  Warnings:

  - Added the required column `answer` to the `CommunityQuestion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userName` to the `CommunityQuestion` table without a default value. This is not possible if the table is not empty.
  - Made the column `userId` on table `CommunityQuestion` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "public"."CommunityQuestion" DROP CONSTRAINT "CommunityQuestion_userId_fkey";

-- AlterTable
ALTER TABLE "public"."CommunityQuestion" ADD COLUMN     "answer" TEXT NOT NULL,
ADD COLUMN     "userName" TEXT NOT NULL,
ALTER COLUMN "userId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."CommunityQuestion" ADD CONSTRAINT "CommunityQuestion_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
