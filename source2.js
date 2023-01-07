import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import {
  doc,
  getFirestore,
  addDoc,
  getDoc,
  getDocs,
  collection,
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";

//add your credentials from firebase project
const firebaseConfig = {
  apiKey: "AIzaSyAzDq6Z5DMXuuFeMqGR1qZ3GP3kYBVjB-I",
  authDomain: "dbms-project-9e525.firebaseapp.com",
  databaseURL: "https://dbms-project-9e525-default-rtdb.firebaseio.com",
  projectId: "dbms-project-9e525",
  storageBucket: "dbms-project-9e525.appspot.com",
  messagingSenderId: "1077677663504",
  appId: "1:1077677663504:web:12646d4218a10f8f1cb195",
  measurementId: "G-6SZ6LZD3PE",
};


const app = initializeApp(firebaseConfig);
const db = getFirestore();


const sorter = {
  "monday": 1,
  "tuesday": 2,
  "wednesday": 3,
  "thursday": 4,
  "friday": 5,
  "saturday": 6,
  "sunday": 7
};

var users = collection(db, "mbccet");

var text = document.getElementsByClassName("main-form")
var department = localStorage.getItem("department")
var semester = localStorage.getItem("semester")
console.log(department, semester)


const docRef = doc(db, department, semester);
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
  const datas = docSnap.data()
  let tmp = [];
  Object.keys(datas).forEach(function (key) {
    let value = datas[key];
    let index = sorter[key.toLowerCase()];
    tmp[index] = {
      key: key,
      value: value
    };
  });

  let orderedData = {};
  tmp.forEach(function (obj) {
    orderedData[obj.key] = obj.value;
  });
  console.log(orderedData)

  Object.keys(orderedData).map((data) => {
    const body = document.getElementById("main"), tbl = document.createElement('table');
    tbl.style.width = '200px';
    // tbl.style.border = '1px solid black';
    const tr = tbl.insertRow();
    const td = tr.insertCell();
    td.appendChild(document.createTextNode(`${data.toUpperCase()}`));
    td.style.border = '1px solid black';
    td.style.textAlign = 'center'
    td.style.fontWeight = 'bold'
    var x = orderedData[data]
    Object.values(x).map((sub) => {
      const tr = tbl.insertRow();
      const td = tr.insertCell();
      td.appendChild(document.createTextNode(`${sub}`));
      td.style.textAlign = 'center'
      td.style.border = '1px solid black';
    })
    body.appendChild(tbl);
  })
} else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
}
// getDocs(users).then((snapshot) => {
//   snapshot.docs.forEach((doc) => {
//     var datas = doc.data()[semester][department]

//   });
// });


function tableCreate() {
  const body = document.getElementById("main"),
    tbl = document.createElement('table');
  tbl.style.width = '200px';
  tbl.style.border = '1px solid black';

  for (let i = 0; i < 5; i++) {
    const tr = tbl.insertRow();
    for (let j = 0; j < 2; j++) {
      const td = tr.insertCell();
      td.appendChild(document.createTextNode(`Cell I${i}/J${j}`));
      td.style.border = '1px solid black';

    }
  }
  body.appendChild(tbl);
}

