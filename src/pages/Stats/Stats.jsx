import { useContext } from "react";
import { InstallAppsContext } from "../../context/InstalledAppsContext";
import { PieChart, Pie, Tooltip, Legend } from "recharts";

const Stats = () => {
  const { installedApps } = useContext(InstallAppsContext);

  // 👉 Count by type
  const callCount = installedApps.filter(app => app.type === "call").length;
  const textCount = installedApps.filter(app => app.type === "text").length;
  const videoCount = installedApps.filter(app => app.type === "video").length;

  const data = [
    { name: "Text", value: textCount, fill: "#7c3aed" },
    { name: "Call", value: callCount, fill: "#1f4d3d" },
    { name: "Video", value: videoCount, fill: "#16a34a" },
  ];

  return (
    <div className="bg-[#f8fafc]">
    <div className="    p-10 rounded-md  max-w-[1110px] mx-auto">
      <h2 className="font-bold text-4xl mb-10 ">
        Friendship Analytics
      </h2>

<div className="px-6 rounded-md bg-white">
  <h2 className="font-semibold text-2xl pt-2">By Interaction Type</h2>
      <PieChart style={{
        width:'100%',
        maxWidth: '500px',
        maxHeight:'50vh',
        margin : 'auto',
        aspectRatio:1,

      }} >
        <Pie
          data={data}
          innerRadius={100}
          outerRadius={140}
          paddingAngle={5}
          dataKey="value"
        />
        <Tooltip />
        <Legend />
      </PieChart>
</div>

    </div>
    </div>
  );
};

export default Stats;