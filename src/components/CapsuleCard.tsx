import { FunctionComponent } from "react";
import { ISpaceXResponse } from "../hooks/useCapsules";
import { FavouriteButton } from "@/src/components/FavouriteButton";
import { useStoreActions } from "@/src/store/hooks";
import { action } from "easy-peasy";

const CapsuleCard: FunctionComponent<ISpaceXResponse> = (capsule) => {
  const setFavorite = useStoreActions(
    (actions) => actions.capsules.setFavorite
  );

  const handleSetFavo = () => {
    console.log(capsule);
  };
  return (
    <div className="border-2 p-8 bg-white rounded-md shadow-md">
      <FavouriteButton
        isFavorite={false}
        onClick={handleSetFavo}
        name="favourite-button"
        aria-details="button "
      />
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
          {capsule.missions.map((mission, index) => (
            <li key={index + mission.name}>{mission.name}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default CapsuleCard;
