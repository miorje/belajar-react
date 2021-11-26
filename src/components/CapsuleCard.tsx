import { FunctionComponent } from "react";
import { ISpaceXResponse } from "../hooks/useCapsules";

const CapsuleCard: FunctionComponent<ISpaceXResponse> = (capsule) => {
  return (
    <div className="border-2 p-8 bg-white rounded-md shadow-md">
      <section className="flex justify-between">
        <div className="flex">
          {capsule.capsule_serial} &bull; {capsule.type}
        </div>
        <div className="flex uppercase">{capsule.status}</div>
      </section>
      <span className="">{capsule.details}</span>
      <section>
        <span>
          <h6 className="font-bold">Missions</h6>
        </span>
          <ul className="list-none">
              {capsule.missions.map((mission,index) => (
                  <li key={index+mission.name}>{mission.name}</li>
              ))}
          </ul>

      </section>
    </div>
  );
};

export default CapsuleCard;
