import React from 'react'
import DataTable from "react-data-table-component"
import { data } from '../data'
import {Link } from "react-router-dom"
// sconst ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;

const columns = [
    {
        name: "#",
        selector: row => row.id,
        sortable: true,
    },
	{
		name: 'Fitst Name',
		selector: row => row.first_name,
        sortable : true
	},
	{
		name: 'Last Name',
		selector: row => row.last_name,
        sortable: true,
	},
	{
		name: 'Email',
		selector: row => row.email,
	},
	{
		name: 'Gender',
		selector: row => row.gender,
	},
	{
		name: 'Phone',
		selector: row => row.phone,
        sortable: true,
	},
];
const ReactDataTable = () => {
  return (
    <>
    <div className=' p-16'>
  <div className="flex justify-between items-center mb-8">
  <h1 className='text-4xl underline text-center '>
            React Data Table
        </h1>

        
            <button className='p-4 bg-slate-500 rounded-xl '> 
                <Link to="/search">Search by Name</Link>
            </button>
        
  </div>

    <DataTable 
    columns={columns}
    data={data}
    pagination
    // selectableRows
    // expandableRowsComponent={ExpandedComponent}
    highlightOnHover
    />
    
    </div>
    </>
  )
}

export default ReactDataTable