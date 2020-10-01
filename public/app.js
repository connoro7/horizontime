var moment = require('moment-timezone')


let fullDate = new Date() /*?*/
moment(fullDate).tz('US/Arizona').format('hh:mm a') //?
moment(fullDate).tz('US/Pacific' ).format('hh:mm a') //?
moment(fullDate).tz('US/Mountain' ).format('hh:mm a') //?
moment(fullDate).tz('US/Eastern').format('hh:mm a') //?
moment(fullDate).tz('US/Central').format('hh:mm a') //?

