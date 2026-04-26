export const GOOGLE_SHEET_ID = "1suz76dNv0uJhefMFfbrnt18gxNN28-mbomGhUM_cSGQ";

// men's ladder league
// export const GOOGLE_SHEET_ID = "1-Ue3sQ9vPBfJaNh1zlKXPMBV22uW8MgiNdGHaOjlUEw";

export const getMatchSheetUrlBasedOnLvl = (lvl: string, type = '') => {
    let sheetId = GOOGLE_SHEET_ID;
    if (type === 'mens') {
        sheetId = '1-Ue3sQ9vPBfJaNh1zlKXPMBV22uW8MgiNdGHaOjlUEw';
    }
    // return `https://sheets.googleapis.com/v4/spreadsheets/${GOOGLE_SHEET_ID}/values/'${encodeURIComponent(lvl)}'?key=AIzaSyC9hqTR13qtOoLLjnjxiVYRiw93gMpR0TU`;
    return `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/'${encodeURIComponent(lvl)}'?key=AIzaSyC9hqTR13qtOoLLjnjxiVYRiw93gMpR0TU`;
}

export const getPlayerDataSheetUrl = `https://sheets.googleapis.com/v4/spreadsheets/${GOOGLE_SHEET_ID}/values/'${encodeURIComponent("playerData")}'?key=AIzaSyC9hqTR13qtOoLLjnjxiVYRiw93gMpR0TU`;


export function  getMatchSheetUrlInfo (level, type = 'past_standings') {
    const googleSheetIds: any = {
        past_standings: GOOGLE_SHEET_ID,
        mens: '1-Ue3sQ9vPBfJaNh1zlKXPMBV22uW8MgiNdGHaOjlUEw',
        womens: '1-Ue3sQ9vPBfJaNh1zlKXPMBV22uW8MgiNdGHaOjlUEw',
        mixed: '1-Ue3sQ9vPBfJaNh1zlKXPMBV22uW8MgiNdGHaOjlUEw',
    };

    const sheetId = googleSheetIds[type];

    const playerDataSheetUrl = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/'${encodeURIComponent("playerData")}'?key=AIzaSyC9hqTR13qtOoLLjnjxiVYRiw93gMpR0TU`;
    const matchDataSheetUrl =  `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/'${encodeURIComponent(level)}'?key=AIzaSyC9hqTR13qtOoLLjnjxiVYRiw93gMpR0TU`;

    return {playerDataSheetUrl, matchDataSheetUrl};
}

export function getAvailableLevels (type = 'past_standings') {

    const levels: any = {
        past_standings: ["3.0", "3.5", "4.0+"],
        mens: ['4.0+'],
        womens: ['4.0+'],
        mixed: ['4.0+'],
    };
    const availableLevels = levels[type];
    return availableLevels;
}





export const USE_PLAYER_DATA = false;
export const SCHEDULE_FEATURE = false;
export const PROFILE_FEATURE = false;

export const startingWeekDate = "2026-01-21";

export const lengthOfLeague = 7;

