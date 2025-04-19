import { StaticImageData } from "next/image";

export interface CardI{
    id: number;
    src: StaticImageData;
    card_id: string;
    active:boolean;
}
