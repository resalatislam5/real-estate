import MainLayout from "../components/MainLayout";
import agent1 from "../assets/agents-1.png";
import agent2 from "../assets/agents-2.png";
import agent3 from "../assets/agents-3.png";
import agent4 from "../assets/agents-4.png";
function Agents() {
  const AgentsData = [
    {
      img: agent1,
      name: "Robert Fox",
      title: "Lead Designer",
    },
    {
      img: agent2,
      name: "Floyd Miles",
      title: "CEO, Director ",
    },
    {
      img: agent3,
      name: "Darle. Robertson",
      title: "Marketer",
    },
    {
      img: agent4,
      name: "Nguyen",
      title: "Project Manager",
    },
  ];
  return (
    <div>
      <MainLayout
        heading={"Meet Our Agents"}
        para={"Lorem ipsum dolor sit amet, consectetur adipisicing elit"}
      >
        <div className="flex flex-wrap justify-center gap-20 sm:px-5 px-3">
          {AgentsData.map((e, i) => (
            <div className="relative" key={i}>
              <img src={e.img} alt="" />
              <div className="flex justify-center text-center ">
                <div className="absolute -bottom-6 bg-white shadow-md px-7 py-2 rounded-md">
                  <h1 className="text-p-m-f font-bold">{e.name}</h1>
                  <p className="text-p-s-f text-pc">{e.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </MainLayout>
    </div>
  );
}

export default Agents;
