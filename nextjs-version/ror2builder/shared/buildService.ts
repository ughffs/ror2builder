import { Build } from "../types/app.type";

export const decode = (input: string): string => {
    const value = Buffer.from(input, 'base64').toString('binary');
    return value;
}

export const encode = (input: string): string => {
    const value = Buffer.from(input, 'binary').toString('base64');
    return value;
}

export const generateBuildLink = (input: Build): string => {
    const jsonString = JSON.stringify(input);
    const base64string = encode(jsonString);

    const link = `${process.env.NEXT_PUBLIC_HOST}/build/${base64string}`
    return link;
}