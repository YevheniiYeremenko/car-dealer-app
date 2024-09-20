'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function FilterPage() {
  const [makes, setMakes] = useState([])
  const [selectedMake, setSelectedMake] = useState('')
  const [selectedYear, setSelectedYear] = useState('')

  useEffect(() => {
    async function fetchMakes() {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/GetMakesForVehicleType/car?format=json`,
      )
      const data = await response.json()
      setMakes(data.Results)
    }
    fetchMakes()
  }, [])

  const years = Array.from(
    new Array(new Date().getFullYear() - 2015 + 1),
    (val, index) => 2015 + index,
  )

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-center text-2xl font-semibold mb-4">Car Filter</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Select Make:</label>
        <select
          className="w-full border border-gray-300 rounded-md p-2 mt-2"
          value={selectedMake}
          onChange={(e) => setSelectedMake(e.target.value)}
        >
          <option value="">Select Make</option>
          {makes.map((make) => (
            <option key={make.MakeId} value={make.MakeId}>
              {make.MakeName}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Select Year:</label>
        <select
          className="w-full border border-gray-300 rounded-md p-2 mt-2"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          <option value="">Select Year</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      <Link href={`/result/${selectedMake}/${selectedYear}`}>
        <button
          className="w-full bg-indigo-600 text-white py-2 rounded-md disabled:opacity-50"
          disabled={!selectedMake || !selectedYear}
        >
          Next
        </button>
      </Link>
    </div>
  )
}
