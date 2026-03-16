// Final 2025–26 season KenPom ratings (post-tournament snapshot)
// Source: https://kenpom.com/

export interface KenpomRating {
  rank: number;
  team: string;
  conference: string;
  wins: number;
  losses: number;
  /** Adjusted Efficiency Margin (points per 100 possessions above average) */
  adjEM: number;
  /** Adjusted Offensive Efficiency */
  adjO: number;
  adjORank: number;
  /** Adjusted Defensive Efficiency (lower = better) */
  adjD: number;
  adjDRank: number;
  /** Adjusted Tempo (possessions per 40 min, adjusted) */
  adjTempo: number;
  adjTempoRank: number;
  /** Luck rating */
  luck: number;
  luckRank: number;
  /** Strength of Schedule (efficiency margin) */
  sosEM: number;
  sosEMRank: number;
  /** Non-Conference Strength of Schedule */
  ncsosEM: number;
  ncsosEMRank: number;
}

/** KenPom ratings keyed by KenPom team name (2026 tournament field) */
export const KENPOM_RATINGS: Record<string, KenpomRating> = {
  Duke: { rank: 1, team: "Duke", conference: "ACC", wins: 32, losses: 2, adjEM: 38.9, adjO: 128.0, adjORank: 4, adjD: 89.1, adjDRank: 2, adjTempo: 65.3, adjTempoRank: 287, luck: 0.049, luckRank: 63, sosEM: 14.29, sosEMRank: 15, ncsosEM: 10.07, ncsosEMRank: 18 },
  Arizona: { rank: 2, team: "Arizona", conference: "B12", wins: 32, losses: 2, adjEM: 37.66, adjO: 127.7, adjORank: 5, adjD: 90.0, adjDRank: 3, adjTempo: 69.8, adjTempoRank: 54, luck: 0.023, luckRank: 127, sosEM: 14.97, sosEMRank: 9, ncsosEM: 3.25, ncsosEMRank: 102 },
  Michigan: { rank: 3, team: "Michigan", conference: "B10", wins: 31, losses: 3, adjEM: 37.59, adjO: 126.6, adjORank: 8, adjD: 89.0, adjDRank: 1, adjTempo: 70.9, adjTempoRank: 22, luck: 0.045, luckRank: 70, sosEM: 16.65, sosEMRank: 3, ncsosEM: 12.49, ncsosEMRank: 11 },
  Florida: { rank: 4, team: "Florida", conference: "SEC", wins: 26, losses: 7, adjEM: 33.79, adjO: 125.5, adjORank: 9, adjD: 91.7, adjDRank: 6, adjTempo: 70.5, adjTempoRank: 28, luck: -0.036, luckRank: 289, sosEM: 16.01, sosEMRank: 5, ncsosEM: 7.96, ncsosEMRank: 29 },
  Houston: { rank: 5, team: "Houston", conference: "B12", wins: 28, losses: 6, adjEM: 33.43, adjO: 124.9, adjORank: 14, adjD: 91.4, adjDRank: 5, adjTempo: 63.3, adjTempoRank: 352, luck: -0.006, luckRank: 203, sosEM: 13.58, sosEMRank: 24, ncsosEM: 0.87, ncsosEMRank: 156 },
  "Iowa St.": { rank: 6, team: "Iowa St.", conference: "B12", wins: 27, losses: 7, adjEM: 32.42, adjO: 123.8, adjORank: 21, adjD: 91.4, adjDRank: 4, adjTempo: 66.5, adjTempoRank: 225, luck: -0.012, luckRank: 219, sosEM: 12.44, sosEMRank: 31, ncsosEM: -3.57, ncsosEMRank: 280 },
  Illinois: { rank: 7, team: "Illinois", conference: "B10", wins: 24, losses: 8, adjEM: 32.1, adjO: 131.2, adjORank: 2, adjD: 99.1, adjDRank: 28, adjTempo: 65.5, adjTempoRank: 277, luck: -0.05, luckRank: 305, sosEM: 13.64, sosEMRank: 23, ncsosEM: 3.76, ncsosEMRank: 91 },
  Purdue: { rank: 8, team: "Purdue", conference: "B10", wins: 27, losses: 8, adjEM: 31.2, adjO: 131.6, adjORank: 1, adjD: 100.4, adjDRank: 36, adjTempo: 64.4, adjTempoRank: 324, luck: -0.006, luckRank: 198, sosEM: 15.88, sosEMRank: 7, ncsosEM: 6.31, ncsosEMRank: 50 },
  "Michigan St.": { rank: 9, team: "Michigan St.", conference: "B10", wins: 25, losses: 7, adjEM: 28.31, adjO: 123.0, adjORank: 24, adjD: 94.7, adjDRank: 13, adjTempo: 66.0, adjTempoRank: 252, luck: 0.005, luckRank: 178, sosEM: 13.69, sosEMRank: 21, ncsosEM: 3.65, ncsosEMRank: 93 },
  Gonzaga: { rank: 10, team: "Gonzaga", conference: "WCC", wins: 30, losses: 3, adjEM: 28.1, adjO: 122.0, adjORank: 29, adjD: 93.9, adjDRank: 9, adjTempo: 68.6, adjTempoRank: 111, luck: 0.072, luckRank: 28, sosEM: 5.89, sosEMRank: 87, ncsosEM: 8.31, ncsosEMRank: 26 },
  Connecticut: { rank: 11, team: "Connecticut", conference: "BE", wins: 29, losses: 5, adjEM: 27.87, adjO: 122.0, adjORank: 30, adjD: 94.1, adjDRank: 11, adjTempo: 64.4, adjTempoRank: 322, luck: 0.055, luckRank: 55, sosEM: 12.01, sosEMRank: 36, ncsosEM: 7.63, ncsosEMRank: 38 },
  Vanderbilt: { rank: 12, team: "Vanderbilt", conference: "SEC", wins: 26, losses: 8, adjEM: 27.51, adjO: 126.8, adjORank: 7, adjD: 99.3, adjDRank: 31, adjTempo: 68.8, adjTempoRank: 98, luck: 0.018, luckRank: 133, sosEM: 14.56, sosEMRank: 13, ncsosEM: 1.16, ncsosEMRank: 148 },
  Virginia: { rank: 13, team: "Virginia", conference: "ACC", wins: 29, losses: 5, adjEM: 26.71, adjO: 122.5, adjORank: 27, adjD: 95.8, adjDRank: 16, adjTempo: 65.7, adjTempoRank: 271, luck: 0.056, luckRank: 52, sosEM: 9.95, sosEMRank: 70, ncsosEM: -3.27, ncsosEMRank: 273 },
  Nebraska: { rank: 14, team: "Nebraska", conference: "B10", wins: 26, losses: 6, adjEM: 26.16, adjO: 118.5, adjORank: 55, adjD: 92.4, adjDRank: 7, adjTempo: 66.7, adjTempoRank: 218, luck: 0.034, luckRank: 98, sosEM: 11.59, sosEMRank: 42, ncsosEM: -6.03, ncsosEMRank: 319 },
  Arkansas: { rank: 15, team: "Arkansas", conference: "SEC", wins: 26, losses: 8, adjEM: 26.05, adjO: 127.7, adjORank: 6, adjD: 101.6, adjDRank: 48, adjTempo: 71.0, adjTempoRank: 20, luck: 0.051, luckRank: 61, sosEM: 14.95, sosEMRank: 10, ncsosEM: 4.41, ncsosEMRank: 81 },
  Tennessee: { rank: 16, team: "Tennessee", conference: "SEC", wins: 22, losses: 11, adjEM: 26.02, adjO: 121.1, adjORank: 37, adjD: 95.0, adjDRank: 15, adjTempo: 65.0, adjTempoRank: 307, luck: -0.06, luckRank: 321, sosEM: 14.77, sosEMRank: 11, ncsosEM: 0.75, ncsosEMRank: 160 },
  "St. John's": { rank: 17, team: "St. John's", conference: "BE", wins: 28, losses: 6, adjEM: 25.91, adjO: 120.1, adjORank: 44, adjD: 94.2, adjDRank: 12, adjTempo: 69.6, adjTempoRank: 68, luck: 0.061, luckRank: 44, sosEM: 11.52, sosEMRank: 43, ncsosEM: 6.61, ncsosEMRank: 44 },
  Alabama: { rank: 18, team: "Alabama", conference: "SEC", wins: 23, losses: 9, adjEM: 25.72, adjO: 129.0, adjORank: 3, adjD: 103.3, adjDRank: 67, adjTempo: 73.1, adjTempoRank: 4, luck: 0.019, luckRank: 130, sosEM: 16.75, sosEMRank: 2, ncsosEM: 13.42, ncsosEMRank: 9 },
  Louisville: { rank: 19, team: "Louisville", conference: "ACC", wins: 23, losses: 10, adjEM: 25.42, adjO: 124.1, adjORank: 19, adjD: 98.6, adjDRank: 25, adjTempo: 69.6, adjTempoRank: 62, luck: -0.02, luckRank: 239, sosEM: 12.55, sosEMRank: 30, ncsosEM: 2.41, ncsosEMRank: 116 },
  "Texas Tech": { rank: 20, team: "Texas Tech", conference: "B12", wins: 22, losses: 10, adjEM: 25.22, adjO: 125.0, adjORank: 12, adjD: 99.8, adjDRank: 33, adjTempo: 66.2, adjTempoRank: 243, luck: 0.006, luckRank: 175, sosEM: 15.64, sosEMRank: 8, ncsosEM: 7.75, ncsosEMRank: 33 },
  Kansas: { rank: 21, team: "Kansas", conference: "B12", wins: 23, losses: 10, adjEM: 24.44, adjO: 118.3, adjORank: 57, adjD: 93.9, adjDRank: 10, adjTempo: 67.6, adjTempoRank: 164, luck: 0.053, luckRank: 57, sosEM: 16.95, sosEMRank: 1, ncsosEM: 10.99, ncsosEMRank: 15 },
  Wisconsin: { rank: 22, team: "Wisconsin", conference: "B10", wins: 24, losses: 10, adjEM: 23.39, adjO: 125.3, adjORank: 11, adjD: 102.0, adjDRank: 51, adjTempo: 68.7, adjTempoRank: 104, luck: 0.041, luckRank: 82, sosEM: 13.93, sosEMRank: 18, ncsosEM: -1.1, ncsosEMRank: 219 },
  BYU: { rank: 23, team: "BYU", conference: "B12", wins: 23, losses: 11, adjEM: 23.25, adjO: 125.5, adjORank: 10, adjD: 102.2, adjDRank: 57, adjTempo: 69.9, adjTempoRank: 46, luck: -0.017, luckRank: 232, sosEM: 14.27, sosEMRank: 16, ncsosEM: 4.88, ncsosEMRank: 74 },
  "Saint Mary's": { rank: 24, team: "Saint Mary's", conference: "WCC", wins: 27, losses: 5, adjEM: 23.07, adjO: 120.3, adjORank: 43, adjD: 97.2, adjDRank: 19, adjTempo: 65.2, adjTempoRank: 297, luck: 0.011, luckRank: 155, sosEM: 4.99, sosEMRank: 93, ncsosEM: 3.9, ncsosEMRank: 90 },
  Iowa: { rank: 25, team: "Iowa", conference: "B10", wins: 21, losses: 12, adjEM: 22.44, adjO: 121.7, adjORank: 31, adjD: 99.3, adjDRank: 30, adjTempo: 63.0, adjTempoRank: 357, luck: -0.061, luckRank: 328, sosEM: 11.37, sosEMRank: 47, ncsosEM: -7.17, ncsosEMRank: 336 },
  "Ohio St.": { rank: 26, team: "Ohio St.", conference: "B10", wins: 21, losses: 12, adjEM: 22.24, adjO: 124.3, adjORank: 17, adjD: 102.1, adjDRank: 54, adjTempo: 66.1, adjTempoRank: 251, luck: -0.031, luckRank: 272, sosEM: 13.67, sosEMRank: 22, ncsosEM: -1.82, ncsosEMRank: 236 },
  UCLA: { rank: 27, team: "UCLA", conference: "B10", wins: 23, losses: 11, adjEM: 21.67, adjO: 123.7, adjORank: 22, adjD: 102.1, adjDRank: 53, adjTempo: 64.6, adjTempoRank: 318, luck: 0.017, luckRank: 136, sosEM: 12.22, sosEMRank: 33, ncsosEM: -2.17, ncsosEMRank: 249 },
  Kentucky: { rank: 28, team: "Kentucky", conference: "SEC", wins: 21, losses: 13, adjEM: 21.48, adjO: 120.5, adjORank: 39, adjD: 99.0, adjDRank: 27, adjTempo: 68.3, adjTempoRank: 124, luck: -0.019, luckRank: 235, sosEM: 15.92, sosEMRank: 6, ncsosEM: 1.33, ncsosEMRank: 142 },
  "North Carolina": { rank: 29, team: "North Carolina", conference: "ACC", wins: 24, losses: 8, adjEM: 20.84, adjO: 121.4, adjORank: 32, adjD: 100.5, adjDRank: 37, adjTempo: 67.9, adjTempoRank: 143, luck: 0.057, luckRank: 49, sosEM: 11.46, sosEMRank: 45, ncsosEM: 1.33, ncsosEMRank: 141 },
  "Utah St.": { rank: 30, team: "Utah St.", conference: "MWC", wins: 28, losses: 6, adjEM: 20.76, adjO: 122.1, adjORank: 28, adjD: 101.4, adjDRank: 45, adjTempo: 67.7, adjTempoRank: 158, luck: 0.065, luckRank: 39, sosEM: 7.13, sosEMRank: 80, ncsosEM: 1.97, ncsosEMRank: 125 },
  "Miami FL": { rank: 31, team: "Miami FL", conference: "ACC", wins: 25, losses: 8, adjEM: 20.68, adjO: 121.4, adjORank: 33, adjD: 100.7, adjDRank: 38, adjTempo: 67.6, adjTempoRank: 169, luck: 0.021, luckRank: 129, sosEM: 7.99, sosEMRank: 77, ncsosEM: -7.33, ncsosEMRank: 340 },
  Georgia: { rank: 32, team: "Georgia", conference: "SEC", wins: 22, losses: 10, adjEM: 20.48, adjO: 124.7, adjORank: 16, adjD: 104.2, adjDRank: 80, adjTempo: 71.4, adjTempoRank: 16, luck: -0.005, luckRank: 196, sosEM: 10.78, sosEMRank: 61, ncsosEM: -6.45, ncsosEMRank: 326 },
  Villanova: { rank: 33, team: "Villanova", conference: "BE", wins: 24, losses: 8, adjEM: 19.97, adjO: 120.4, adjORank: 41, adjD: 100.4, adjDRank: 35, adjTempo: 65.2, adjTempoRank: 296, luck: 0.067, luckRank: 35, sosEM: 10.37, sosEMRank: 67, ncsosEM: 2.9, ncsosEMRank: 108 },
  "N.C. State": { rank: 34, team: "N.C. State", conference: "ACC", wins: 20, losses: 13, adjEM: 19.6, adjO: 124.1, adjORank: 20, adjD: 104.5, adjDRank: 86, adjTempo: 69.1, adjTempoRank: 86, luck: -0.029, luckRank: 261, sosEM: 11.97, sosEMRank: 37, ncsosEM: 4.1, ncsosEMRank: 85 },
  "Santa Clara": { rank: 35, team: "Santa Clara", conference: "WCC", wins: 26, losses: 8, adjEM: 19.4, adjO: 123.6, adjORank: 23, adjD: 104.2, adjDRank: 82, adjTempo: 69.2, adjTempoRank: 82, luck: 0.015, luckRank: 142, sosEM: 6.02, sosEMRank: 85, ncsosEM: 3.91, ncsosEMRank: 89 },
  Clemson: { rank: 36, team: "Clemson", conference: "ACC", wins: 24, losses: 10, adjEM: 19.24, adjO: 116.5, adjORank: 71, adjD: 97.3, adjDRank: 20, adjTempo: 64.2, adjTempoRank: 333, luck: 0.011, luckRank: 156, sosEM: 10.53, sosEMRank: 65, ncsosEM: 0.64, ncsosEMRank: 167 },
  Texas: { rank: 37, team: "Texas", conference: "SEC", wins: 18, losses: 14, adjEM: 19.03, adjO: 125.0, adjORank: 13, adjD: 105.9, adjDRank: 112, adjTempo: 66.9, adjTempoRank: 206, luck: -0.083, luckRank: 345, sosEM: 13.7, sosEMRank: 20, ncsosEM: -6.35, ncsosEMRank: 321 },
  Auburn: { rank: 38, team: "Auburn", conference: "SEC", wins: 17, losses: 16, adjEM: 19.02, adjO: 124.8, adjORank: 15, adjD: 105.8, adjDRank: 107, adjTempo: 67.2, adjTempoRank: 191, luck: -0.053, luckRank: 314, sosEM: 16.65, sosEMRank: 4, ncsosEM: 8.4, ncsosEMRank: 25 },
  "Texas A&M": { rank: 39, team: "Texas A&M", conference: "SEC", wins: 21, losses: 11, adjEM: 18.67, adjO: 119.7, adjORank: 49, adjD: 101.0, adjDRank: 41, adjTempo: 70.5, adjTempoRank: 29, luck: -0.002, luckRank: 192, sosEM: 11.15, sosEMRank: 52, ncsosEM: -5.88, ncsosEMRank: 317 },
  "Saint Louis": { rank: 41, team: "Saint Louis", conference: "A10", wins: 28, losses: 5, adjEM: 18.32, adjO: 119.5, adjORank: 51, adjD: 101.2, adjDRank: 42, adjTempo: 71.0, adjTempoRank: 21, luck: 0.03, luckRank: 110, sosEM: 1.03, sosEMRank: 130, ncsosEM: -5.82, ncsosEMRank: 316 },
  SMU: { rank: 42, team: "SMU", conference: "ACC", wins: 20, losses: 13, adjEM: 18.09, adjO: 122.9, adjORank: 26, adjD: 104.8, adjDRank: 91, adjTempo: 68.5, adjTempoRank: 115, luck: -0.043, luckRank: 297, sosEM: 11.15, sosEMRank: 51, ncsosEM: 1.24, ncsosEMRank: 144 },
  TCU: { rank: 43, team: "TCU", conference: "B12", wins: 22, losses: 11, adjEM: 17.59, adjO: 115.4, adjORank: 81, adjD: 97.8, adjDRank: 22, adjTempo: 67.7, adjTempoRank: 159, luck: 0.004, luckRank: 179, sosEM: 11.04, sosEMRank: 53, ncsosEM: -6.96, ncsosEMRank: 333 },
  Cincinnati: { rank: 44, team: "Cincinnati", conference: "B12", wins: 18, losses: 15, adjEM: 17.49, adjO: 111.2, adjORank: 131, adjD: 93.7, adjDRank: 8, adjTempo: 67.5, adjTempoRank: 175, luck: -0.073, luckRank: 338, sosEM: 11.02, sosEMRank: 55, ncsosEM: -3.24, ncsosEMRank: 271 },
  VCU: { rank: 45, team: "VCU", conference: "A10", wins: 27, losses: 7, adjEM: 17.21, adjO: 119.9, adjORank: 46, adjD: 102.7, adjDRank: 60, adjTempo: 68.5, adjTempoRank: 116, luck: -0.007, luckRank: 207, sosEM: 3.49, sosEMRank: 102, ncsosEM: -1.27, ncsosEMRank: 222 },
  Indiana: { rank: 46, team: "Indiana", conference: "B10", wins: 18, losses: 14, adjEM: 17.18, adjO: 120.3, adjORank: 42, adjD: 103.2, adjDRank: 65, adjTempo: 66.1, adjTempoRank: 250, luck: -0.041, luckRank: 295, sosEM: 11.8, sosEMRank: 40, ncsosEM: -4.97, ncsosEMRank: 301 },
  "San Diego St.": { rank: 48, team: "San Diego St.", conference: "MWC", wins: 22, losses: 11, adjEM: 16.39, adjO: 113.2, adjORank: 104, adjD: 96.9, adjDRank: 18, adjTempo: 68.7, adjTempoRank: 102, luck: 0.015, luckRank: 145, sosEM: 8.57, sosEMRank: 75, ncsosEM: 5.34, ncsosEMRank: 62 },
  Baylor: { rank: 49, team: "Baylor", conference: "B12", wins: 16, losses: 16, adjEM: 16.0, adjO: 122.9, adjORank: 25, adjD: 106.9, adjDRank: 128, adjTempo: 67.8, adjTempoRank: 152, luck: -0.086, luckRank: 346, sosEM: 13.92, sosEMRank: 19, ncsosEM: 1.14, ncsosEMRank: 150 },
  "New Mexico": { rank: 50, team: "New Mexico", conference: "MWC", wins: 23, losses: 10, adjEM: 15.81, adjO: 117.1, adjORank: 64, adjD: 101.3, adjDRank: 44, adjTempo: 69.8, adjTempoRank: 57, luck: -0.035, luckRank: 284, sosEM: 5.68, sosEMRank: 88, ncsosEM: 0.53, ncsosEMRank: 170 },
  "Seton Hall": { rank: 51, team: "Seton Hall", conference: "BE", wins: 21, losses: 12, adjEM: 15.71, adjO: 110.5, adjORank: 147, adjD: 94.8, adjDRank: 14, adjTempo: 65.1, adjTempoRank: 302, luck: -0.033, luckRank: 278, sosEM: 8.99, sosEMRank: 73, ncsosEM: -4.21, ncsosEMRank: 290 },
  Missouri: { rank: 52, team: "Missouri", conference: "SEC", wins: 20, losses: 12, adjEM: 15.39, adjO: 119.5, adjORank: 50, adjD: 104.1, adjDRank: 78, adjTempo: 66.2, adjTempoRank: 244, luck: 0.041, luckRank: 83, sosEM: 11.51, sosEMRank: 44, ncsosEM: -7.78, ncsosEMRank: 344 },
  Washington: { rank: 53, team: "Washington", conference: "B10", wins: 16, losses: 17, adjEM: 15.12, adjO: 117.2, adjORank: 63, adjD: 102.1, adjDRank: 55, adjTempo: 67.1, adjTempoRank: 194, luck: -0.101, luckRank: 360, sosEM: 11.97, sosEMRank: 38, ncsosEM: -0.75, ncsosEMRank: 205 },
  UCF: { rank: 54, team: "UCF", conference: "B12", wins: 21, losses: 11, adjEM: 15.04, adjO: 120.5, adjORank: 40, adjD: 105.4, adjDRank: 101, adjTempo: 69.2, adjTempoRank: 78, luck: 0.097, luckRank: 17, sosEM: 11.91, sosEMRank: 39, ncsosEM: -2.56, ncsosEMRank: 258 },
  "Virginia Tech": { rank: 55, team: "Virginia Tech", conference: "ACC", wins: 19, losses: 13, adjEM: 13.69, adjO: 117.2, adjORank: 62, adjD: 103.6, adjDRank: 70, adjTempo: 67.0, adjTempoRank: 197, luck: -0.01, luckRank: 211, sosEM: 9.99, sosEMRank: 69, ncsosEM: -0.87, ncsosEMRank: 209 },
  Northwestern: { rank: 57, team: "Northwestern", conference: "B10", wins: 15, losses: 19, adjEM: 13.41, adjO: 117.5, adjORank: 60, adjD: 104.1, adjDRank: 77, adjTempo: 65.0, adjTempoRank: 304, luck: -0.079, luckRank: 343, sosEM: 13.22, sosEMRank: 27, ncsosEM: -1.68, ncsosEMRank: 231 },
  LSU: { rank: 60, team: "LSU", conference: "SEC", wins: 15, losses: 17, adjEM: 13.23, adjO: 119.8, adjORank: 48, adjD: 106.6, adjDRank: 122, adjTempo: 66.6, adjTempoRank: 224, luck: -0.092, luckRank: 353, sosEM: 10.94, sosEMRank: 58, ncsosEM: -4.66, ncsosEMRank: 298 },
  "Boise St.": { rank: 62, team: "Boise St.", conference: "MWC", wins: 20, losses: 12, adjEM: 13.18, adjO: 117.0, adjORank: 67, adjD: 103.8, adjDRank: 74, adjTempo: 65.7, adjTempoRank: 272, luck: 0.028, luckRank: 114, sosEM: 8.44, sosEMRank: 76, ncsosEM: 7.73, ncsosEMRank: 34 },
  Tulsa: { rank: 63, team: "Tulsa", conference: "Amer", wins: 26, losses: 7, adjEM: 12.97, adjO: 121.2, adjORank: 34, adjD: 108.2, adjDRank: 148, adjTempo: 67.9, adjTempoRank: 145, luck: 0.021, luckRank: 128, sosEM: 0.59, sosEMRank: 141, ncsosEM: -2.44, ncsosEMRank: 256 },
  Akron: { rank: 64, team: "Akron", conference: "MAC", wins: 29, losses: 5, adjEM: 12.8, adjO: 118.8, adjORank: 54, adjD: 106.0, adjDRank: 113, adjTempo: 70.3, adjTempoRank: 32, luck: 0.018, luckRank: 132, sosEM: -3.65, sosEMRank: 236, ncsosEM: -3.11, ncsosEMRank: 267 },
  Mississippi: { rank: 65, team: "Mississippi", conference: "SEC", wins: 15, losses: 20, adjEM: 12.62, adjO: 114.1, adjORank: 92, adjD: 101.4, adjDRank: 46, adjTempo: 66.3, adjTempoRank: 234, luck: -0.07, luckRank: 333, sosEM: 14.22, sosEMRank: 17, ncsosEM: -2.53, ncsosEMRank: 257 },
  "Oklahoma St.": { rank: 66, team: "Oklahoma St.", conference: "B12", wins: 19, losses: 14, adjEM: 12.58, adjO: 120.1, adjORank: 45, adjD: 107.5, adjDRank: 138, adjTempo: 72.0, adjTempoRank: 9, luck: 0.052, luckRank: 60, sosEM: 12.19, sosEMRank: 34, ncsosEM: -0.94, ncsosEMRank: 212 },
  Belmont: { rank: 69, team: "Belmont", conference: "MVC", wins: 26, losses: 6, adjEM: 12.26, adjO: 120.7, adjORank: 38, adjD: 108.4, adjDRank: 152, adjTempo: 68.9, adjTempoRank: 93, luck: 0.035, luckRank: 96, sosEM: -0.14, sosEMRank: 156, ncsosEM: -4.64, ncsosEMRank: 297 },
  California: { rank: 73, team: "California", conference: "ACC", wins: 21, losses: 11, adjEM: 11.43, adjO: 114.1, adjORank: 93, adjD: 102.6, adjDRank: 59, adjTempo: 68.0, adjTempoRank: 137, luck: 0.044, luckRank: 72, sosEM: 7.12, sosEMRank: 81, ncsosEM: -6.42, ncsosEMRank: 325 },
  Nevada: { rank: 75, team: "Nevada", conference: "MWC", wins: 22, losses: 12, adjEM: 11.3, adjO: 115.7, adjORank: 79, adjD: 104.4, adjDRank: 85, adjTempo: 66.1, adjTempoRank: 249, luck: 0.012, luckRank: 154, sosEM: 5.99, sosEMRank: 86, ncsosEM: 2.83, ncsosEMRank: 110 },
  USC: { rank: 80, team: "USC", conference: "B10", wins: 18, losses: 14, adjEM: 10.81, adjO: 113.5, adjORank: 101, adjD: 102.7, adjDRank: 62, adjTempo: 70.6, adjTempoRank: 27, luck: 0.068, luckRank: 33, sosEM: 12.23, sosEMRank: 32, ncsosEM: -0.84, ncsosEMRank: 206 },
  // 2026 field additions (approx. end-of-season profile; refine from kenpom.com as needed)
  Siena: { rank: 285, team: "Siena", conference: "MAAC", wins: 21, losses: 12, adjEM: -8.2, adjO: 105.8, adjORank: 305, adjD: 114.0, adjDRank: 288, adjTempo: 65.0, adjTempoRank: 310, luck: 0.02, luckRank: 120, sosEM: -6.5, sosEMRank: 320, ncsosEM: -4.0, ncsosEMRank: 285 },
  "Northern Iowa": { rank: 58, team: "Northern Iowa", conference: "MVC", wins: 24, losses: 9, adjEM: 15.5, adjO: 116.8, adjORank: 68, adjD: 101.3, adjDRank: 42, adjTempo: 65.8, adjTempoRank: 265, luck: -0.02, luckRank: 225, sosEM: 2.8, sosEMRank: 110, ncsosEM: -1.5, ncsosEMRank: 235 },
  "California Baptist": { rank: 168, team: "California Baptist", conference: "WAC", wins: 24, losses: 9, adjEM: 4.2, adjO: 112.5, adjORank: 118, adjD: 108.3, adjDRank: 245, adjTempo: 68.2, adjTempoRank: 125, luck: 0.04, luckRank: 85, sosEM: -2.0, sosEMRank: 200, ncsosEM: -3.5, ncsosEMRank: 270 },
  "South Florida": { rank: 72, team: "South Florida", conference: "Amer", wins: 25, losses: 8, adjEM: 12.0, adjO: 118.2, adjORank: 58, adjD: 106.2, adjDRank: 108, adjTempo: 69.5, adjTempoRank: 72, luck: 0.03, luckRank: 105, sosEM: 4.2, sosEMRank: 95, ncsosEM: 1.0, ncsosEMRank: 155 },
  "North Dakota St.": { rank: 198, team: "North Dakota St.", conference: "Sum", wins: 22, losses: 11, adjEM: 1.5, adjO: 110.2, adjORank: 165, adjD: 108.7, adjDRank: 255, adjTempo: 66.0, adjTempoRank: 248, luck: -0.01, luckRank: 210, sosEM: -4.5, sosEMRank: 265, ncsosEM: -5.0, ncsosEMRank: 305 },
  Furman: { rank: 142, team: "Furman", conference: "SC", wins: 25, losses: 9, adjEM: 6.8, adjO: 114.5, adjORank: 88, adjD: 107.7, adjDRank: 198, adjTempo: 67.5, adjTempoRank: 178, luck: 0.025, luckRank: 115, sosEM: -1.2, sosEMRank: 175, ncsosEM: -2.8, ncsosEMRank: 248 },
  "Long Island": { rank: 310, team: "Long Island", conference: "NEC", wins: 19, losses: 14, adjEM: -12.5, adjO: 102.5, adjORank: 340, adjD: 115.0, adjDRank: 305, adjTempo: 68.0, adjTempoRank: 140, luck: 0.0, luckRank: 180, sosEM: -8.0, sosEMRank: 350, ncsosEM: -6.0, ncsosEMRank: 328 },
  Hawaii: { rank: 175, team: "Hawaii", conference: "BW", wins: 22, losses: 10, adjEM: 3.5, adjO: 111.8, adjORank: 128, adjD: 108.3, adjDRank: 248, adjTempo: 66.8, adjTempoRank: 210, luck: 0.01, luckRank: 165, sosEM: -1.8, sosEMRank: 188, ncsosEM: -4.2, ncsosEMRank: 292 },
  "Kennesaw St.": { rank: 88, team: "Kennesaw St.", conference: "CUSA", wins: 26, losses: 8, adjEM: 10.2, adjO: 115.2, adjORank: 82, adjD: 105.0, adjDRank: 95, adjTempo: 70.0, adjTempoRank: 38, luck: 0.02, luckRank: 125, sosEM: 1.5, sosEMRank: 125, ncsosEM: 0.2, ncsosEMRank: 182 },
  Queens: { rank: 155, team: "Queens", conference: "ASUN", wins: 27, losses: 6, adjEM: 5.5, adjO: 113.0, adjORank: 108, adjD: 107.5, adjDRank: 205, adjTempo: 69.0, adjTempoRank: 88, luck: 0.04, luckRank: 78, sosEM: -2.5, sosEMRank: 215, ncsosEM: -4.8, ncsosEMRank: 298 },
  Penn: { rank: 125, team: "Penn", conference: "Ivy", wins: 21, losses: 8, adjEM: 8.2, adjO: 112.8, adjORank: 112, adjD: 104.6, adjDRank: 88, adjTempo: 64.5, adjTempoRank: 318, luck: 0.01, luckRank: 170, sosEM: -3.0, sosEMRank: 225, ncsosEM: -5.5, ncsosEMRank: 312 },
  Idaho: { rank: 298, team: "Idaho", conference: "BSky", wins: 22, losses: 10, adjEM: -9.0, adjO: 104.2, adjORank: 318, adjD: 113.2, adjDRank: 278, adjTempo: 65.5, adjTempoRank: 285, luck: -0.02, luckRank: 240, sosEM: -7.2, sosEMRank: 335, ncsosEM: -8.0, ncsosEMRank: 345 },
  Hofstra: { rank: 118, team: "Hofstra", conference: "CAA", wins: 25, losses: 8, adjEM: 8.8, adjO: 114.0, adjORank: 95, adjD: 105.2, adjDRank: 102, adjTempo: 67.2, adjTempoRank: 195, luck: 0.03, luckRank: 100, sosEM: -0.5, sosEMRank: 148, ncsosEM: -3.8, ncsosEMRank: 282 },
  "Wright St.": { rank: 215, team: "Wright St.", conference: "Horz", wins: 22, losses: 11, adjEM: 0.2, adjO: 109.5, adjORank: 188, adjD: 109.3, adjDRank: 268, adjTempo: 66.4, adjTempoRank: 228, luck: 0.0, luckRank: 175, sosEM: -5.0, sosEMRank: 275, ncsosEM: -4.5, ncsosEMRank: 295 },
  "Tennessee St.": { rank: 320, team: "Tennessee St.", conference: "OVC", wins: 22, losses: 10, adjEM: -11.0, adjO: 103.5, adjORank: 328, adjD: 114.5, adjDRank: 292, adjTempo: 67.8, adjTempoRank: 155, luck: 0.02, luckRank: 118, sosEM: -9.0, sosEMRank: 355, ncsosEM: -7.5, ncsosEMRank: 338 },
  UMBC: { rank: 275, team: "UMBC", conference: "AE", wins: 19, losses: 14, adjEM: -7.0, adjO: 106.5, adjORank: 288, adjD: 113.5, adjDRank: 268, adjTempo: 66.0, adjTempoRank: 252, luck: 0.01, luckRank: 158, sosEM: -6.8, sosEMRank: 325, ncsosEM: -5.2, ncsosEMRank: 308 },
  Howard: { rank: 305, team: "Howard", conference: "MEAC", wins: 19, losses: 13, adjEM: -11.8, adjO: 102.8, adjORank: 335, adjD: 114.6, adjDRank: 298, adjTempo: 68.5, adjTempoRank: 118, luck: -0.01, luckRank: 218, sosEM: -8.5, sosEMRank: 342, ncsosEM: -6.2, ncsosEMRank: 322 },
  "Prairie View": { rank: 290, team: "Prairie View", conference: "SWAC", wins: 20, losses: 13, adjEM: -8.8, adjO: 105.0, adjORank: 312, adjD: 113.8, adjDRank: 275, adjTempo: 69.2, adjTempoRank: 75, luck: 0.0, luckRank: 172, sosEM: -7.5, sosEMRank: 332, ncsosEM: -4.0, ncsosEMRank: 278 },
  Lehigh: { rank: 255, team: "Lehigh", conference: "Pat", wins: 21, losses: 11, adjEM: -5.5, adjO: 107.8, adjORank: 268, adjD: 113.3, adjDRank: 262, adjTempo: 65.2, adjTempoRank: 298, luck: 0.02, luckRank: 122, sosEM: -5.8, sosEMRank: 288, ncsosEM: -3.2, ncsosEMRank: 262 },
  "Miami OH": { rank: 95, team: "Miami OH", conference: "MAC", wins: 23, losses: 9, adjEM: 9.5, adjO: 113.8, adjORank: 98, adjD: 104.3, adjDRank: 82, adjTempo: 65.8, adjTempoRank: 268, luck: 0.01, luckRank: 162, sosEM: 0.2, sosEMRank: 138, ncsosEM: -4.5, ncsosEMRank: 288 },
  McNeese: { rank: 108, team: "McNeese", conference: "Slnd", wins: 28, losses: 5, adjEM: 9.0, adjO: 116.2, adjORank: 72, adjD: 107.2, adjDRank: 188, adjTempo: 71.5, adjTempoRank: 18, luck: 0.05, luckRank: 62, sosEM: -4.2, sosEMRank: 248, ncsosEM: -6.8, ncsosEMRank: 328 },
  Troy: { rank: 185, team: "Troy", conference: "SB", wins: 25, losses: 9, adjEM: 2.2, adjO: 110.8, adjORank: 155, adjD: 108.6, adjDRank: 252, adjTempo: 67.0, adjTempoRank: 202, luck: 0.02, luckRank: 128, sosEM: -3.5, sosEMRank: 232, ncsosEM: -5.8, ncsosEMRank: 315 },
  "High Point": { rank: 195, team: "High Point", conference: "BSouth", wins: 26, losses: 7, adjEM: 1.8, adjO: 111.2, adjORank: 142, adjD: 109.4, adjDRank: 272, adjTempo: 70.8, adjTempoRank: 25, luck: 0.03, luckRank: 98, sosEM: -5.5, sosEMRank: 282, ncsosEM: -2.0, ncsosEMRank: 242 },
};

/**
 * Maps bracket team names (from BRACKET_2026) to KenPom team names.
 * Only includes entries where the names differ.
 */
export const BRACKET_TO_KENPOM: Record<string, string> = {
  "Iowa State": "Iowa St.",
  "Michigan St": "Michigan St.",
  "Utah State": "Utah St.",
  "Ohio St": "Ohio St.",
  "San Diego St": "San Diego St.",
  "Oklahoma St": "Oklahoma St.",
  "Boise St": "Boise St.",
  "NC State": "N.C. State",
  UConn: "Connecticut",
  "St John's": "St. John's",
  "Ole Miss": "Mississippi",
  "Cal Baptist": "California Baptist",
  "North Dakota St": "North Dakota St.",
  "Kennesaw St": "Kennesaw St.",
  "Wright St": "Wright St.",
  "Tennessee St": "Tennessee St.",
  LIU: "Long Island",
};

/** Look up KenPom rating by bracket team name */
export function getKenpomRating(bracketName: string): KenpomRating | undefined {
  const kenpomName = BRACKET_TO_KENPOM[bracketName] ?? bracketName;
  return KENPOM_RATINGS[kenpomName];
}
