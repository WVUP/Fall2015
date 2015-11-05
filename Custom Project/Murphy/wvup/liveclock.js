function show()
{
  var now=new Date()
  var hours=now.getHours()
  var minutes=now.getMinutes()
  if (hours<=9)
    hours="0"+hours
  if (minutes<=9)
    minutes="0"+minutes
  document.Tick.Clock.value=hours+":"+minutes+""
  setTimeout("show()",10000)
}
show()