import { FunctionComponent, useMemo } from "react";
import { ISpaceXResponse } from "../hooks/useCapsules";
// import { FavouriteButton } from "@/src/components/FavouriteButton";
import { useStoreActions, useStoreState } from "@/src/store/hooks";
import dynamic from "next/dynamic";
import {IFavouriteButton} from "@/src/components/FavouriteButton";

const FavouriteButton = dynamic(
  () =>
    import("@/src/components/FavouriteButton").then<FunctionComponent<IFavouriteButton>>(
      (mod) => mod.FavouriteButton
    ),
  {ssr:false}
);

const CapsuleCard: FunctionComponent<ISpaceXResponse> = (capsule) => {
  const favorites = useStoreState((state) => state.capsules.favorites);

  const setFavorite = useStoreActions(
    (actions) => actions.capsules.setFavorite
  );

  const removeFavorite = useStoreActions(
    (actions) => actions.capsules.removeFavorite
  );

  const isFavorite = useMemo(
    () => favorites.find(item=> item.capsule_serial === capsule.capsule_serial),
    [favorites, capsule]
  );

  const handleSetFavo = () => {
    isFavorite ? removeFavorite(capsule) : setFavorite(capsule);
  };

  return (
    <div className="border-2 p-8 bg-white rounded-md shadow-md">
      <FavouriteButton
        isFavorite={isFavorite}
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
