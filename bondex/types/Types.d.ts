
export type OurServiceProps ={
    image: string | StaticImageData;
    text1?: string;
    text2?: string;
    text3?: string;
    text4?: string;
    onClick?: ()=> void;
}

export type OverlayProps={
    image?: string | StaticImageData;
    message: string;
}