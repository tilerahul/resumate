import React from 'react'

const Achievement = () => {
  return (
    <div>
      <h3 className="font-bold py-3 text-xl">Achievement</h3>
      <form className="space-y-4 md:space-y-6">
        <div>
          <label
            htmlFor="achievement"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Achievement
          </label>
          <div className="flex items-center">
            <input
              type="text"
              name="achievement"
              id="achievement"
              placeholder="Enter Your achievement"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Description
          </label>
          <div className="flex items-center">
            <textarea
              rows={3}
              type="text"
              name="description"
              id="description"
              placeholder="Enter Your Description"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
        </div>
        </form>
    </div>
  )
}

export default Achievement
