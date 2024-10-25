export default function Announcements() {
  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Announcements</h1>
        <span className="text-xs text-gray-400">View All</span>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-lama-sky-light rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem, ipsum dolor sit.</h2>
            <span className="text-gray-400 text-xs bg-white rounded-md p-1">
              2024-10-23
            </span>
          </div>
          <p className="mt-1 text-gray-400 text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis.
          </p>
        </div>
        <div className="bg-lama-purple-light rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem, ipsum dolor sit.</h2>
            <span className="text-gray-400 text-xs bg-white rounded-md p-1">
              2024-10-23
            </span>
          </div>
          <p className="mt-1 text-gray-400 text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis.
          </p>
        </div>
        <div className="bg-lama-yellow-light rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem, ipsum dolor sit.</h2>
            <span className="text-gray-400 text-xs bg-white rounded-md p-1">
              2024-10-23
            </span>
          </div>
          <p className="mt-1 text-gray-400 text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis.
          </p>
        </div>
      </div>
    </div>
  );
}
