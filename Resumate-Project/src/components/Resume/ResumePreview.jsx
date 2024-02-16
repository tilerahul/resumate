import React from 'react'

const ResumePreview = ({resumeData}) => {
    const {BasicInfo, Education} = resumeData;
  return (
    <>
        <div className="bg-slate-100 shadow-lg rounded-lg p-6 inline-block mr-4">
        <div className="mb-4">
        <h1 className="text-2xl font-semibold">DENVER DAHL</h1>
        <p className="font-bold text-blue-700 text-xl">Account Manager</p>
        <div className="flex flex-row justify-between">
            <p className="text-gray-600">+1 555 666 5555</p>
            <p className="text-gray-600">denver@dahldigitalgroup.com</p>
            <a href="https://linkedin.com/denver-dahl" className="text-blue-500">linkedin.com/denver-dahl</a>
        </div>
        
    </div>
    <div className="mb-6">
        <h2 className="text-lg font-semibold">EXPERIENCE</h2>
        <div className="border-t-2 border-black"></div>
        <div className="mb-4">
            <p className="text-gray-600 font-medium">Key Account Manager</p>
            <p className="text-gray-600">Luzon Inc - San Francisco, CA</p>
            <p className="text-gray-600">Jan 2019 to Present</p>
            <ul className="list-disc list-inside text-gray-600">
                <li>Established a Cloud Team and increased Cloud Business.</li>
            </ul>
        </div>
        <div className="mb-4">
            <p className="text-gray-600 font-medium">Senior Account Manager</p>
            <p className="text-gray-600">Koop Inc - San Francisco, CA</p>
            <p className="text-gray-600">May 2014 to Dec 2018</p>
            <ul className="list-disc list-inside text-gray-600">
                <li>Managed all the largest buyer accounts generating $17,500,000.</li>
            </ul>
        </div>
        <div className="mb-4">
            <p className="text-gray-600 font-medium">Account Manager in Infrastructure & Application Development</p>
            <p className="text-gray-600">Droin S.A.R.L - San Francisco, CA</p>
            <p className="text-gray-600">Feb 2012 to Apr 2014</p>
            <ul className="list-disc list-inside text-gray-600">
                <li>Generated $2,000,000+ new revenue by signing 10+ new contracts.</li>
            </ul>
        </div>
    </div>
    <div className="mb-6">
        <h2 className="text-lg font-semibold">EDUCATION</h2>
        <div className="border-t-2 border-black"></div>
        <p className="text-gray-600">Master of Marketing Management [MMM]</p>
        <p className="text-gray-600">La Trobe University - San Francisco, CA</p>
    </div>
    <div className="mb-6">
        <h2 className="text-lg font-semibold">KEY ACHIEVEMENTS</h2>
        <div className="border-t-2 border-black"></div>
        <ul className="list-disc list-inside text-gray-600">
            <li>Building the future: Established a Cloud Team and increased Cloud Business.</li>
            <li>Managing the largest accounts: Managed all the largest buyer accounts generating $17,500,000.</li>
            <li>Market share - Key accounts & projects: Generated $2,000,000+ new revenue by signing 10+ new contracts.</li>
            <li>Work-life balance: In charge of spending weekends in nature with family off-site.</li>
        </ul>
    </div>
    <div className="mb-6">
        <h2 className="text-lg font-semibold">SKILLS</h2>
        <div className="border-t-2 border-black"></div>
        <p className="text-gray-600">MS Office Programs, Windows & Mac OSX, Asana, Salesforce, Agile CRM Systems, Hubspot, LinkedIn Sales Navigator, Dun & Bradstreet</p>
    </div>
    <div>
        <h2 className="text-lg font-semibold">LANGUAGES</h2>
        <div className="border-t-2 border-black"></div>
        <p className="text-gray-600">English (Native), German (Proficient), Greek (Advanced)</p>
    </div>
        </div>
    </>
  )
}

export default ResumePreview