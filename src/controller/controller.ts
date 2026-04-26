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

export const USE_PLAYER_DATA = false;
export const SCHEDULE_FEATURE = false;
export const PROFILE_FEATURE = false;

export const startingWeekDate = "2026-01-21";

export const lengthOfLeague = 7;

