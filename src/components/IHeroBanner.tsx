import {FunctionComponent, ReactNode} from "react";
import {Container} from "./Container";

interface IHeroBanner {
    title: ReactNode | string;
}



export const HeroBanner: FunctionComponent<IHeroBanner> = (props) => {
    return <div className="mb-10">
        <Container>
            <h1 className="text-2xl font-extrabold text-gray-800 mt-10 mb-8 xs:text-6xl">
                Selamat Pagi Malaysia
                <br/>
                Jom Cari Sarapan
            </h1>
        </Container>
    </div>;
}