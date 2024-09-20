import Link from 'next/link'
import Suspense from 'react'

async function ModelsList({ makeId, year }) {
  const fetchModels = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`,
    )
    const data = await res.json()
    return data.Results
  }

  const models = await fetchModels()

  return (
    <div>
      {models.length > 0 ? (
        <ul className="gap-2 grid grid-cols-2 md:grid-cols-4">
          {models.map((model) => (
            <li
              key={model.Model_ID}
              className="p-2 bg-indigo-100 rounded-md shadow text-center"
            >
              {model.Model_Name}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-xl text-center text-red-700">No models found.</p>
      )}
    </div>
  )
}

export default function ResultPage({ params }) {
  const { makeId, year } = params

  return (
    <div className="lg:w-3/4 mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-center text-2xl font-semibold mb-4">
        Models for {year}
      </h2>

      <Suspense
        fallback={
          <svg
            className="animate-spin h-32 w-32 text-indigo-600 mx-auto"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            ></path>
          </svg>
        }
      >
        <ModelsList makeId={makeId} year={year} />
      </Suspense>

      <div>
        <Link href="/" className="flex justify-center">
          <button className="w-full lg:w-1/2 mt-6 bg-indigo-600 text-white py-2 rounded-md">
            Back
          </button>
        </Link>
      </div>
    </div>
  )
}
