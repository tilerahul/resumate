import React from 'react'
function Feature() {
    return (
        <>
            <section>
                <div className="card flex flex-col lg:flex-row lg:items-center lg:justify-evenly mt-8 bg-gray-100 p-6 rounded-2xl shadow-md ml-32 mr-32">
                <div className="flex flex-col justify-between lg:mr-6 gap-6">
                    <div className="flex justify-end">
                    <img src="1.png" alt="1" className="rounded-3xl w-6 h-6 lg:w-auto lg:h-auto" />
                    </div>
                    <div className=" lg:mt-0 lg:ml-5 p-4 rounded-lg h-35 bg-slate-200">
                    <h1 className="text-xl lg:text-2xl font-bold">Pick a Template</h1>
                    <p className="text-gray-700 text-xl">Start your job search right. Choose from our ATS-friendly, expertly crafted resume templates.</p>
                    </div>
                </div>
                <div className="flex justify-center mt-6 lg:mt-0">
                    <img src="Pro1.png" alt="Step-1" className="w-full max-w-[300px] lg:max-w-[450px] rounded-3xl" />
                </div>
                </div>


                <div className="card flex flex-col lg:flex-row lg:items-center lg:justify-evenly mt-8 bg-gray-100 p-6 rounded-2xl shadow-md ml-32 mr-32">
                <div className="flex justify-center mt-6 lg:mt-0">
                    <img src="Pro2.png" alt="Step-2" className="w-full max-w-[300px] lg:max-w-[450px] rounded-3xl" />
                </div>
                <div className="flex flex-col justify-between lg:mr-6 gap-6">
                    <div className="flex justify-start ml-5">
                    <img src="2.png" alt="2" className="rounded-3xl w-6 h-6 lg:w-auto lg:h-auto" />
                    </div>
                    <div className=" lg:mt-0 lg:ml-5 p-4 rounded-lg h-35 bg-slate-200">
                    <h1 className="text-xl lg:text-2xl font-bold">Customize you Layout</h1>
                    <p className="text-gray-700 text-xl">Personalize Your resume to reflect your unique style,tailor the layout to match your level of experience</p>
                    </div>
                </div>
                </div>

                <div className="card flex flex-col lg:flex-row lg:items-center lg:justify-evenly mt-8 bg-gray-100 p-6 rounded-2xl shadow-md ml-32 mr-32">
                <div className="flex flex-col justify-between lg:mr-6 gap-6">
                    <div className="flex justify-end">
                    <img src="3.png" alt="3" className="rounded-3xl w-6 h-6 lg:w-auto lg:h-auto" />
                    </div>
                    <div className=" lg:mt-0 lg:ml-5 p-4 rounded-lg h-35 bg-slate-200">
                    <h1 className="text-xl lg:text-2xl font-bold">Fill in the blanks</h1>
                    <p className="text-gray-700 text-xl">Enter your resume details and watch your resume transform in real time</p>
                    </div>
                </div>
                <div className="flex justify-center mt-6 lg:mt-0">
                    <img src="Pro3.png" alt="Step-3" className="w-full max-w-[300px] lg:max-w-[450px] rounded-3xl" />
                </div>
                </div>

                <div className="card flex flex-col lg:flex-row lg:items-center lg:justify-evenly mt-8 bg-gray-100 p-6 rounded-2xl shadow-md ml-32 mr-32">
                <div className="flex justify-center mt-6 lg:mt-0">
                    <img src="Pro4.png" alt="Step-4" className="w-full max-w-[300px] lg:max-w-[450px] rounded-3xl" />
                </div>
                <div className="flex flex-col justify-between lg:mr-6 gap-6">
                    <div className="flex justify-start ml-5">
                    <img src="4.png" alt="4" className="rounded-3xl w-6 h-6 lg:w-auto lg:h-auto" />
                    </div>
                    <div className=" lg:mt-0 lg:ml-5 p-4 rounded-lg h-35 bg-slate-200">
                    <h1 className="text-xl lg:text-2xl font-bold">Hit the download button</h1>
                    <p className="text-gray-700 text-xl">It's completely free and no hidden charges after you finish your resume</p>
                    </div>
                </div>
                </div>
            </section>


            {/* why choose us section */}
            <section>
            <div class="bg-gray-200 px-2 py-10">

                <div id="features" class="mx-auto max-w-6xl">
                    
                    <h2 class="text-center font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                    Why Use Resumate, resume builder?
                    </h2>
                    <br />
                    <p class="text-center text-base font-semibold leading-7 text-primary-500">The best resume builder for your needs</p>
                    <ul class="mt-16 grid grid-cols-1 gap-6 text-center text-slate-700 md:grid-cols-3">
                    <li class="rounded-xl bg-white px-6 py-8 shadow-sm">

                        <img src="free.svg" alt="" class="mx-auto h-10 w-10"/>
                        <h3 class="my-3 font-display font-medium">Totally Free</h3>
                        <p class="mt-1.5 text-sm leading-6 text-secondary-500">
                        Enjoy our free feature. If you want to give your resume an extra boost, feel free to use our resume builder at no cost.
                        </p>

                    </li>
                    <li class="rounded-xl bg-white px-6 py-8 shadow-sm">

                        <img src="professional.svg"
                                alt="" class="mx-auto h-10 w-10"/>
                        <h3 class="my-3 font-display font-medium">Professional Resume Templates</h3>
                        <p class="mt-1.5 text-sm leading-6 text-secondary-500">
                        Find the perfect template here! Whether you prefer a classic black & white design or something more creative we've got right on for you.
                        </p>

                    </li>
                    <li class="rounded-xl bg-white px-6 py-8 shadow-sm">
                        <img src="free.svg" alt="" class="mx-auto h-10 w-10"/>
                        <h3 class="my-3 font-display font-medium">No Hidden Fees</h3>
                        <p class="mt-1.5 text-sm leading-6 text-secondary-500">
                        We value transparency. With us, what you see is what you get. There are no hidden fees or charges.
                        </p>

                    </li>
                    <li class="rounded-xl bg-white px-6 py-8 shadow-sm">
                        <a href="/pricing" class="group">
                        <img src="AtsFriendly.svg" alt="" class="mx-auto h-10 w-10"/>
                        <h3 class="my-3 font-display font-medium group-hover:text-primary-500">ATS Friendly</h3>
                        <p class="mt-1.5 text-sm leading-6 text-secondary-500">Our templates are designed to be Applicant Tracking System (ATS) friendly. This means they are optimized to make it through automated resume screening software used by many employers.</p>
                        </a>
                    </li>
                    <li class="rounded-xl bg-white px-6 py-8 shadow-sm">
                        <a href="/templates" class="group">
                        <img src="editResume.svg" alt="" class="mx-auto h-10 w-10"/>
                        <h3 class="my-3 font-display font-medium group-hover:text-primary-500">
                        Edit Your Resume in Real Time
                        </h3>
                        <p class="mt-1.5 text-sm leading-6 text-secondary-500">Our resume builder allows you to edit and update your resume in real time. This means you can see changes as you make them, allowing for easy customization and refinement. </p>
                        </a>
                    </li>
                    <li class="rounded-xl bg-white px-6 py-8 shadow-sm">
                        <a href="/download" class="group">
                        <img src="EasyToUse.svg" alt="" class="mx-auto h-10 w-10"/>
                        <h3 class="my-3 font-display font-medium group-hover:text-primary-500">Easy to Use</h3>
                        <p class="mt-1.5 text-sm leading-6 text-secondary-500">Our resume builder is user-friendly and intuitive. Even if you’re not tech-savvy, you’ll find our platform easy to navigate and use.</p>
                        </a>
                    </li>
                    </ul>
                </div>

            </div>  
            </section>

            {/* Review Section */}
            <section>

            </section>


        </>
            
    )
}

export default Feature
