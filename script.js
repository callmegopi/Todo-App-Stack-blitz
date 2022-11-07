// let todoActivites = [
//   {
//     activity: 'JOB Support for USA candidate',
//     status: 'completed',
//     activityId: 1,
//   },
//   { activity: '10K Training', status: 'in Progress', activityId: 2 },
//   { activity: 'watching Akhanda', status: 'Yet to start', activityId: 3 },
//   {
//     activity: 'watching pushpa trailer',
//     status: 'Yet to start',
//     activityId: 4,
//   },
// ];
var todoActivites = JSON.parse(localStorage.getItem('todoActivites'));

todoActivites.forEach((todo, i) => {
  var myTr = document.createElement('tr');
  for (a in todo) {
    if (a !== 'activityId') {
      var myTd = document.createElement('td');
      myTd.innerHTML = todo[a];
      myTr.appendChild(myTd);
    }
  }

  var actionTd = document.createElement('td');
  var detailsBtn = document.createElement('button');
  detailsBtn.innerHTML = 'View Detailes';
  detailsBtn.setAttribute('onclick', 'viewDetailes(' + i + ')');
  actionTd.appendChild(detailsBtn);

  var deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = 'DELETE';
  actionTd.appendChild(deleteBtn);

  myTr.appendChild(actionTd);
  var deleteTd = document.createElement('td');
  document.querySelector('tbody').appendChild(myTr);
});
function viewDetailes(i) {
  console.log(todoActivites[i]);
  localStorage.setItem('todoActivites', JSON.stringify(todoActivites));
  window.location.href = 'detailes.html?' + todoActivites[i].activityId;
}
