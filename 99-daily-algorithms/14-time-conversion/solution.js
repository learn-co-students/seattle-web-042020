// John

function timeConverter(time) {
    let timeSplit = time.split(/([A, P])/)
    const timeSuffix = timeSplit[1]
    timeSplit.splice(1)
    let newTime = timeSplit[0].split(":")
    if (timeSuffix === 'P') {
      let i = parseInt(newTime[0]) + 12
      newTime.splice(0, 1, i)
    } else if (newTime[0] === '12' && timeSuffix === 'A') {
      newTime.splice(0, 1, '00')
    }
    return newTime.join(":")
  }
  timeConverter("12:00:53AM")

//   aidan
// not the cleanest but space complexity is O(0)
function timeConverter(time) {
    if(time.substring(0, 2) == "12" && time.substring(8) == "AM"){
      return ("00" + time.substring(2, 8))
    } else if(time.substring(8) == "AM" || (time.substring(0, 2) == "12" && time.substring(8) == "PM")) {
      return (time.substring(0, 8))
    } else {
      return (parseInt(time.substring(0, 2))+12 + time.substring(2, 8))
    }
  }