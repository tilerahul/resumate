import TeamCard from "./TeamCard";
import rahulImg from '../../assets/rahultile.jpg'

const team = [
    {
        name : 'Rahul Tile',
        position : 'Founder Resumate',
        college : 'Dr. Vithalrao Vikhe Patil College Of Engineering, Ahemadnagar',
        img : rahulImg,
        github : '',
        linkedin : ''
    },
    {
        name : 'Om Patil',
        position : 'Founder Resumate',
        college : 'Dr. Vithalrao Vikhe Patil College Of Engineering, Ahemadnagar',
        img : "https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg",
        github : '',
        linkedin : ''
    }
]

const Team = () =>{
    return (
        <div className="flex justify-center gap-9 flex-wrap ">
            {
                team.map((data, index)=>(
                    <div key={index}>
                        <TeamCard name={data.name} position={data.position} college={data.college} img={data.img} github={data.github} linkedin={data.linkedin} />
                    </div>
                ))
            }
        </div>
    );
}

export default Team;