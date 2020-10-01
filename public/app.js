import { DateTime } from 'luxon'

let fullDate = new Date() /*?*/

let pacific = DateTime.fromObject({ zone: 'America/Los_Angeles' }) //?
let pacificTime = pacific.toLocaleString(DateTime.TIME_SIMPLE) //?

let mountain = DateTime.fromObject({ zone: 'America/Denver' }) //?
let mountainTime = mountain.toLocaleString(DateTime.TIME_SIMPLE) //?

let central = DateTime.fromObject({ zone: 'America/Chicago' }) //?
let centralTime = central.toLocaleString(DateTime.TIME_SIMPLE) //?

let eastern = DateTime.fromObject({ zone: 'America/New_York' }) //?
let easternTime = eastern.toLocaleString(DateTime.TIME_SIMPLE) //?

let arizona = DateTime.fromObject({ zone: 'UTC-7' }) //?
let arizonaTime = arizona.toLocaleString(DateTime.TIME_SIMPLE) //?
