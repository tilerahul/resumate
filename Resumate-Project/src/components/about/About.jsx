import Team from "./Team";
import Title from "./title";

const About = () => {
    return (
        <div className="w-full flex justify-center">
            <div className="w-10/12 pt-24">
                <div className="flex flex-col items-center">
                    <Title title='About Us'/>
                    <div className="text-center w-10/12">
                        Welcome to [Your Website Name]! We are passionate about empowering individuals to craft compelling resumes that highlight their unique skills and experiences. Our mission is to provide user-friendly tools and resources to help you land your dream job.
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <Title title='Our Story'/>
                    <div className="text-center w-10/12">
                    [Your Website Name] was born out of a shared vision between [Your Name] and [Co-Founder's Name]. As [briefly describe your background or motivation for starting the project], we recognized the need for a streamlined and effective solution for creating professional resumes.
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <Title title='What we offer'/>
                    <div className="text-center w-10/12">
                    At [Your Website Name], we offer a comprehensive resume-building platform designed to simplify the process of crafting polished resumes. Our intuitive tools and customizable templates make it easy for users to create standout resumes tailored to their individual strengths and career goals.
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <Title title='why choose us'/>
                    <div className="text-center w-10/12">
                    <li>Our platform is designed with simplicity in mind, making it accessible to users of all skill levels.</li>
                    <li>We offer a variety of templates and formatting options to suit your preferences and industry standards.</li>
                    <li>From resume writing tips to career advice, we provide valuable resources to support you at every stage of your job search journey.</li>
                    <li>Have questions or need assistance? Our dedicated support team is here to help you succeed.</li>
                    </div>
                </div>
                <Title title='The Creative Minds Behind Resumate' />
                <Team />
            </div>
        </div>
    );
}

export default About;