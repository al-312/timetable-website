// getDocs(users).then((snapshot) => {
//   snapshot.docs.forEach((doc) => {
//     console.log(doc.data());
//   });
// });



document.getElementById("btn").addEventListener("click", getData);


var text = document.getElementsByClassName("main-form")

function getData() {
  const semester = document.getElementById("semester").value
  const department = document.getElementById("department").value
  if (semester === 'semester' || department === 'department'){
    alert("Select correct Values")
  }
  else{
    window.location.href = "./timetable.html";
    localStorage.setItem("department", department)
    localStorage.setItem("semester", semester)
  }
}

console.log(text)