export enum ThemeColor {
    dark,
    light
}

export type Theme = {
    titleText:string,
    mainText:string,
    subText:string,
    contentsText:string,
    backGround:string,
    button:string,
    shadow:string,
}

export const lightTheme:Theme = {
    titleText: '#3e83d1',
    mainText: '#000000',
    subText: '#a5a5a5',
    contentsText: '#414141',
    backGround: '#ffffff',
    button: '#f0f0f0',
    shadow: 'rgba(0, 6, 0, 0.5)',
}