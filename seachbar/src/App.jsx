import React, { useState } from "react";
import { data } from "./data";
const App = () => {
  const [search, setSearch] = useState("");
  console.log(data);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
    console.log(search);
  };

  return (
    <>
      <div className="flex justify-center items-center flex-col w-screen p-16">
        <form onSubmit={handleSubmit}>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search..."
            className="border-2 border-gray-300 p-2 rounded-lg w-[80vw] "
          />
        </form>

        <table className="min-w-full divide-y divide-gray-200 mt-16 ">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-extrabold text-gray-500 uppercase tracking-wider">
                #
              </th>
              <th className="px-6 py-3 text-left text-xs font-extrabold text-gray-500 uppercase tracking-wider">
                First Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-extrabold text-gray-500 uppercase tracking-wider">
                Last Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-extrabold text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-extrabold text-gray-500 uppercase tracking-wider">
                Gender
              </th>
              <th className="px-6 py-3 text-left text-xs font-extrabold text-gray-500 uppercase tracking-wider">
                Phone Number
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((item) => (
              <tr key={item.id}>
                <td className="px-6 py-4 whitespace-nowrap">{item.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {item.first_name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {item.last_name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{item.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.gender}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default App;
