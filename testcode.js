var date = new Date("22/01/2000");

function converttimetoformat(time) {
    if (time != null) {
      var date = new Date(time);
      var datevalues =
        ("0" + date.getDate()).slice(-2) +
        "/" +
        ("0" + (date.getMonth() + 1)).slice(-2) +
        "/" +
        date.getFullYear();
      return datevalues;
    }
  }
var time1 = converttimetoformat(date);
console.log(time1)
