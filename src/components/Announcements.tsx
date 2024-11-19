import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

export default async function Announcements() {
  const { userId, sessionClaims } = await auth();
  const role = (sessionClaims?.metadata as { role?: string })?.role;

  const roleConditions = {
    teacher: { lessons: { some: { teacherId: userId! } } },
    student: { students: { some: { id: userId! } } },
    parent: { students: { some: { parentId: userId! } } },
  };

  const data = await prisma.announcement.findMany({
    where: {
      ...(role !== "admin" && {
        OR: [
          { classId: null },
          {
            class: roleConditions[(role as keyof typeof roleConditions) || {}],
          },
        ],
      }),
    },
    take: 3,
    orderBy: { date: "desc" },
  });

  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Announcements</h1>
        <span className="text-xs text-gray-400">View All</span>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        {data[0] && (
          <div className="bg-lama-sky-light rounded-md p-4">
            <div className="flex items-center justify-between">
              <h2 className="font-medium">{data[0].title}</h2>
              <span className="text-gray-400 text-xs bg-white rounded-md p-1">
                {new Intl.DateTimeFormat("en-US").format(data[0].date)}
              </span>
            </div>
            <p className="mt-1 text-gray-400 text-sm">{data[0].description}</p>
          </div>
        )}
        {data[1] && (
          <div className="bg-lama-purple-light rounded-md p-4">
            <div className="flex items-center justify-between">
              <h2 className="font-medium">{data[1].title}</h2>
              <span className="text-gray-400 text-xs bg-white rounded-md p-1">
                {new Intl.DateTimeFormat("en-US").format(data[1].date)}
              </span>
            </div>
            <p className="mt-1 text-gray-400 text-sm">{data[1].description}</p>
          </div>
        )}
        {data[2] && (
          <div className="bg-lama-yellow-light rounded-md p-4">
            <div className="flex items-center justify-between">
              <h2 className="font-medium">{data[2].title}</h2>
              <span className="text-gray-400 text-xs bg-white rounded-md p-1">
                {new Intl.DateTimeFormat("en-US").format(data[2].date)}
              </span>
            </div>
            <p className="mt-1 text-gray-400 text-sm">{data[2].description}</p>
          </div>
        )}
      </div>
    </div>
  );
}
