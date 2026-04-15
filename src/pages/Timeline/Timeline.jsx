import React, { useContext } from 'react';
import { InstallAppsContext } from '../../context/InstalledAppsContext';

import callImg from '../../assets/call.png';
import textImg from '../../assets/text.png';
import videoImg from '../../assets/video.png';

const Timeline = () => {
  const { installedApps } = useContext(InstallAppsContext);

  const getIcon = (type) => {
    if (type === "call") return callImg;
    if (type === "text") return textImg;
    if (type === "video") return videoImg;
    return callImg;
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen space-y-4">

      {installedApps.map((app, ind) => (
        <div
          key={ind}
          className="flex items-center gap-4 bg-white shadow rounded-xl p-4 hover:shadow-md transition"
        >
          {/* ICON */}
          <img
            src={getIcon(app.type)}
            alt="icon"
            className="w-10 h-10"
          />

          {/* TEXT */}
          <div>
            <h2 className="font-semibold text-gray-800">
              {app.type === "call" && "Call"}
              {app.type === "text" && "Text"}
              {app.type === "video" && "Video"}{" "}
              <span className="text-gray-500 font-normal">
                with {app.name}
              </span>
            </h2>

            <p className="text-sm text-gray-400">
              {app.next_due_date}
            </p>
          </div>
        </div>
      ))}

    </div>
  );
};

export default Timeline;