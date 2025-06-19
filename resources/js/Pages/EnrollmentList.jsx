import { routeUrl } from "../config";

export default function EnrollmentList({ enrollments }) {
  const handleDownload = () => {
    window.location.href = routeUrl('/admin/export');
  };

  return (
    <div className="relative overflow-x-auto shadow-sm bg-white sm:rounded-lg p-6 ">
      <div className="flex flex-col sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
        
        {/* Download Button */}
        <button
          onClick={handleDownload}
          className="inline-flex items-center text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-base px-5 py-3 transition duration-200 ease-in-out shadow-md hover:shadow-lg"
          aria-label="Download Excel"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15M9 12l3 3m0 0 3-3m-3 3V2.25" />
          </svg>
          Download Excel
        </button>

        {/* Search Input */}
        <div className="relative w-full sm:w-1/3">
          <input
            type="text"
            id="table-search"
            className="block p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-full bg-white shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out"
            placeholder="Search for students"
            aria-label="Search for students"
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Table */}
      <div class="max-h-svh overflow-y-auto">
      <table className="w-full text-sm text-left text-gray-600 max-h-screen overflow-y-auto">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100">
            <tr>
              {['Child Name', 'Birthday', 'LRN', 'Parent', 'Contact', 'Email', 'Relationship'].map((header) => (
                <th key={header} className="px-6 py-3 font-medium">{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {enrollments.map((e) => (
              <tr key={e.id} className="bg-white border-b hover:bg-gray-50 transition duration-200 ease-in-out">
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{e.child_name}</td>
                <td className="px-6 py-4">{e.child_birthday}</td>
                <td className="px-6 py-4">{e.lrn}</td>
                <td className="px-6 py-4">{e.parent_name}</td>
                <td className="px-6 py-4">{e.parent_contact}</td>
                <td className="px-6 py-4">{e.parent_email}</td>
                <td className="px-6 py-4">{e.parent_relationship}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}
