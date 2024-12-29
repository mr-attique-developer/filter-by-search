import React, { useState } from "react";
import { data } from "./data";

const App = () => {
  const [search, setSearch] = useState("");
  console.log(search);

  const filter = data.filter((item) => {
    return (
      item.first_name.toLowerCase().includes(search.toLowerCase()) ||
      item.last_name.toLowerCase().includes(search.toLowerCase()) ||
      item.email.toLowerCase().includes(search.toLowerCase()) ||
      item.gender.toLowerCase().includes(search.toLowerCase()) ||
      item.phone.toLowerCase().includes(search.toLowerCase())
    );
  });
  console.log(filter);

  return (
    <>
      <div className="flex justify-center items-center flex-col w-screen p-4 sm:p-16">
        <form className="w-full sm:w-auto">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search..."
            className="border-2 border-gray-300 p-2 rounded-lg w-full sm:w-[80vw]"
          />
        </form>

        <div className="overflow-x-auto w-full mt-8 sm:mt-16">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-2 py-1 sm:px-6 sm:py-3 text-left text-xs font-extrabold text-gray-500 uppercase tracking-wider">
                  #
                </th>
                <th className="px-2 py-1 sm:px-6 sm:py-3 text-left text-xs font-extrabold text-gray-500 uppercase tracking-wider">
                  First Name
                </th>
                <th className="px-2 py-1 sm:px-6 sm:py-3 text-left text-xs font-extrabold text-gray-500 uppercase tracking-wider">
                  Last Name
                </th>
                <th className="px-2 py-1 sm:px-6 sm:py-3 text-left text-xs font-extrabold text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-2 py-1 sm:px-6 sm:py-3 text-left text-xs font-extrabold text-gray-500 uppercase tracking-wider">
                  Gender
                </th>
                <th className="px-2 py-1 sm:px-6 sm:py-3 text-left text-xs font-extrabold text-gray-500 uppercase tracking-wider">
                  Phone Number
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filter.map((item) => (
                <tr key={item.id}>
                  <td className="px-2 py-1 sm:px-6 sm:py-4 whitespace-nowrap">{item.id}</td>
                  <td className="px-2 py-1 sm:px-6 sm:py-4 whitespace-nowrap">{item.first_name}</td>
                  <td className="px-2 py-1 sm:px-6 sm:py-4 whitespace-nowrap">{item.last_name}</td>
                  <td className="px-2 py-1 sm:px-6 sm:py-4 whitespace-nowrap">{item.email}</td>
                  <td className="px-2 py-1 sm:px-6 sm:py-4 whitespace-nowrap">{item.gender}</td>
                  <td className="px-2 py-1 sm:px-6 sm:py-4 whitespace-nowrap">{item.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default App;