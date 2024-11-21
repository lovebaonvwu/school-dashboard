import Announcements from "@/components/Announcements";
import BigCalendarContainer from "@/components/BigCalendarContainer";
import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

export default async function Page() {
  const { userId } = await auth();

  const students = await prisma.student.findMany({
    where: {
      parentId: userId!,
    },
  });

  return (
    <div className="flex-1 p-4 flex gap-4 flex-col xl:flex-row">
      {/* Left  */}
      {students.map((student) => (
        <div className="w-full xl:w-2/3" key={student.id}>
          <div className="h-full bg-white p-4 rounded-md">
            <h1 className="text-xl font-semibold">
              Schedule ({student.name + " " + student.surname})
            </h1>
            <BigCalendarContainer type="classId" id={student.classId} />
          </div>
        </div>
      ))}
      {/* Right  */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
        <Announcements />
      </div>
    </div>
  );
}
