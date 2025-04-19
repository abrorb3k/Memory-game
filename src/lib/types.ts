import { StaticImageData } from "next/image";

export interface cardI{
    id: number;
    src: StaticImageData;
    card_id: string;
    active:boolean;
}