import { ChangeEvent, FunctionComponent, useState } from "react";
import { ISpaceXResponse, useCapsules } from "../../src/hooks/useCapsules";
import { GetServerSideProps } from "next";
import { HeroBanner } from "../../src/components/IHeroBanner";
import CapsuleCard from "../../src/components/CapsuleCard";
import { Container } from "../../src/components/Container";
import { PageHeader } from "../../src/components/PageHeader";
import Head from "next/head";

const Lifecycle: FunctionComponent<{ data: ISpaceXResponse[] }> = (props) => {
  // - [x] lifecycle
  // - [x] map & keys
  // - [x] custom hook
  // - [x] serverside fetch
  // - [ ] custom component

  const [capsule_id, setCapsule_id] = useState<string>(() => "");
  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setCapsule_id(event.target.value);
  };

  const spaceXCapsulesData = useCapsules(
    {
      capsule_id,
      status: "unknown",
    },
    props.data
  );

  return (
    <div className="mb-5">
        <HeroBanner/>

        <Container>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
            {spaceXCapsulesData.map((capsule) => (
              <CapsuleCard key={capsule.capsule_serial} {...capsule} />
            ))}
          </div>
        </Container>
      </div>
    </>
  );
};

//@ts-ignore
export const getServerSideProps: GetServerSideProps = async () => {
  const data = await fetch("https://api.spacexdata.com/v3/capsules")
    .then((response) => response.json())
    .then((data: ISpaceXResponse[]) => data);

  return {
    props: { data },
  };
};

export default Lifecycle;
