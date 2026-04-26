import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function transformSheetsAPIResponse(json: any) {

  const columns = json[0];
  const rows = json.slice(1);

  return  rows.map((row: any) =>
    Object.fromEntries(
      columns.map((col: any, index: string | number) => [col, row[index]])
    )
  );

}

export function  generateStandings (players: any[], matches: any[]) {
  const newStats:any = [];
  for (let i = 0; i < players.length; i++) {
    if (players[i] && players[i].id) {
      newStats[players[i].id] = { id: players[i].id, wins: 0, losses: 0, pe: 0, pa: 0, pd: 0 };
    }
  }
  for (let i = 0; i < matches.length; i++) {
    if (
      matches[i].court === "qf1" || 
      matches[i].court === "qf2" ||
      matches[i].court === "sf1" || 
      matches[i].court === "sf2" || 
      matches[i].court === "finals" ||
      matches[i].court === "bronze"
    ) {
      continue;
    }
    const ist1p1Subbed = matches[i].team1player1.includes("*");
    const ist1p2Subbed = matches[i].team1player2.includes("*");
    const ist2p1Subbed = matches[i].team2player1.includes("*");
    const ist2p2Subbed = matches[i].team2player2.includes("*");
    const ist1p1NoShow = matches[i].team1player1.includes("-");
    const ist1p2NoShow = matches[i].team1player2.includes("-");
    const ist2p1NoShow = matches[i].team2player1.includes("-");
    const ist2p2NoShow = matches[i].team2player2.includes("-");
    const t1p1 = matches[i].team1player1.trim().replace(/[-*]/g, '');
    const t1p2 = matches[i].team1player2.trim().replace(/[-*]/g, '');
    const t2p1 = matches[i].team2player1.trim().replace(/[-*]/g, '');
    const t2p2 = matches[i].team2player2.trim().replace(/[-*]/g, '');
    const team1score = Number(matches[i].team1score);
    const team2score = Number(matches[i].team2score);

    if (!newStats[t1p1]) {
      newStats[t1p1] = { id: t1p1, wins: 0, losses: 0, pe: 0, pa: 0, pd: 0 };
    }
    if (!newStats[t1p2]) {
      newStats[t1p2] = { id: t1p2, wins: 0, losses: 0, pe: 0, pa: 0, pd: 0};
    }
    if (!newStats[t2p1]) {
      newStats[t2p1] = { id: t2p1, wins: 0, losses: 0, pe: 0, pa: 0, pd: 0};
    }
    if (!newStats[t2p2]) {
      newStats[t2p2] = { id: t2p2, wins: 0, losses: 0, pe: 0, pa: 0, pd: 0};
    }
    if (team1score > team2score) {
      if (ist1p1Subbed) {
        newStats[t1p1].wins += 0.5;
      } else if (ist1p1NoShow) {
        // No win recorded for no show
      } else {
        newStats[t1p1].wins += 1;
      }
      newStats[t1p1].pe += team1score;
      newStats[t1p1].pa += team2score;
      newStats[t1p1].pd += team1score - team2score;

      if (ist1p2Subbed) {
        newStats[t1p2].wins += 0.5;
      } else if (ist1p2NoShow) {
        // No win recorded for no show
      } else {
        newStats[t1p2].wins += 1;
      }
      newStats[t1p2].pe += team1score;
      newStats[t1p2].pa += team2score;
      newStats[t1p2].pd += team1score - team2score;

      newStats[t2p1].losses += 1;
      newStats[t2p1].pe += team2score;
      newStats[t2p1].pa += team1score;
      newStats[t2p1].pd += team2score - team1score;
      
      newStats[t2p2].losses += 1;
      newStats[t2p2].pe += team2score;
      newStats[t2p2].pa += team1score;
      newStats[t2p2].pd += team2score - team1score;


    } else if (team2score > team1score) {
      if (ist2p2Subbed) {
        newStats[t2p2].wins += 0.5;
      } else if (ist2p2NoShow) {
        // No win recorded for no show
      } else {
        newStats[t2p2].wins += 1;
      }
      newStats[t2p2].pe += team2score;
      newStats[t2p2].pa += team1score;
      newStats[t2p2].pd += team2score - team1score;
     
      if (ist2p1Subbed) {
        newStats[t2p1].wins += 0.5;
      } else if (ist2p1NoShow) {
        // No win recorded for no show
      } else {
        newStats[t2p1].wins += 1;
      }
      newStats[t2p1].pe += team2score;
      newStats[t2p1].pa += team1score;
      newStats[t2p1].pd += team2score - team1score;

      newStats[t1p1].losses += 1;
      newStats[t1p1].pe += team1score;
      newStats[t1p1].pa += team2score;
      newStats[t1p1].pd += team1score - team2score;
     
      newStats[t1p2].losses += 1;
      newStats[t1p2].pe += team1score;
      newStats[t1p2].pa += team2score;
      newStats[t1p2].pd += team1score - team2score;
    }
  }
  const sortedPlayers = Object.entries(newStats)
    .map(([name, record]) => ({ name, ...(record as any) }))
      .sort((a, b) => {
        if (b.wins !== a.wins) return b.wins - a.wins;      // most wins first
        if (a.losses !== b.losses) return a.losses - b.losses; // fewest losses next
        if (b.pd !== a.pd) return b.pd - a.pd;  // highest pd next
        if (b.pe !== a.pe) return b.pe - a.pe; // highest pe next
        return a.pa - b.pa;  // lowest pa last
});
  return sortedPlayers;
}

export function getPlayerFormattedName(playerId: string, playerData: any[]) {
  const playerDetails = playerData.find((p: any) => p.id === playerId.trim());
    const names = playerDetails.fullName.split(" ");
    const lastNameInitial = names[1].slice(0, 1);
    return names[0] + " " + lastNameInitial + ".";
}

export function getPlayerFormattedNameWithSubIndicator(playerId: string, playerData: any[]) {
  if (playerId === "") return "";
  const rawPlayerId = playerId.replace(/[-*]/g, '');
  const formattedPlayerName = getPlayerFormattedName(rawPlayerId, playerData);
  let returnString = formattedPlayerName;
  if (playerId.includes("*") || playerId.includes("-")) {
    returnString += " (S)";
  }
  return returnString;
}

export function getCourtAssignees (players: any[], playerData: any[], start: number, end: number) {
  return players.slice(start, end).map((player: any) => {
    return getPlayerFormattedName(player.id, playerData);
    });
}

export function getCourtAssignment(players: any[], playerData: any[]) {

  const numOfCourts = playerData.length / 4;

  let courts = [];

  for (let i = 0; i < numOfCourts; i++) {
    courts.push(getCourtAssignees(players, playerData, i*4, (i*4)+4));
  }
  return courts;
}


export function getNextWeekInfo(startDateString: string) {
  const startDate: any = new Date(startDateString); // week 1
  const today: any = new Date(Date.now() - (24 * 60 * 60 * 1000));


  const diffInMs = today - startDate;
  const diffInWeeks = Math.floor(diffInMs / (7 * 24 * 60 * 60 * 1000));

  const currentWeek = diffInWeeks + 1;

  const nextWeekNumber = currentWeek + 1;
  const nextWeekDate = new Date(startDate);
  nextWeekDate.setDate(1 + startDate.getDate() + (nextWeekNumber - 1) * 7);

  return {
    dayOfWeek: startDate.getUTCDay(),
    currentWeek,
    nextWeekNumber,
    nextWeekDate: nextWeekDate.toLocaleDateString("en-us", { year: "numeric", month: "long", day: "numeric" })
  };
}

export function getRelativeCourtNumber(courtNum: number, level: string) {
  if (level === "3.0") {
    if (courtNum === 0) return 9;
    if (courtNum === 1) return 2;
    if (courtNum === 2) return 1;

  } else if (level === "3.5") {
    if (courtNum === 0) return 8;
    if (courtNum === 1) return 4;
    if (courtNum === 2) return 3;
    
  } else if (level === "4.0+") {
    if (courtNum === 0) return 7;
    if (courtNum === 1) return 6;
    if (courtNum === 2) return 5;
  }
}