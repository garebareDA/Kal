export enum ThemeColor {
    dark,
    light
}

export type Theme = {
    titleText:string,
    titleTextHover:string,
    mainText:string,
    subText:string,
    contentsText:string,
    backGround:string,
    button:string,
    shadow:string,
    border:string,
}

export const lightTheme:Theme = {
    titleText: '#3e83d1',
    titleTextHover: '#043b7a',
    mainText: '#000000',
    subText: '#a5a5a5',
    contentsText: '#414141',
    backGround: '#ffffff',
    button: '#f0f0f0',
    shadow: 'rgba(0, 6, 0, 0.5)',
    border: '#d8d8d8',
}

export const darkTheme:Theme = {
    titleText: '#3e83d1',
    titleTextHover: '#043b7a',
    mainText: '#ffffff',
    subText: '#a5a5a5',
    contentsText: '#d4d4d4',
    backGround: '#242424',
    button: '#4b4747',
    shadow: 'rgba(255, 255, 255, 0.5)',
    border: '#ffffff',
}