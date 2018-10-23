////POP////
(function () {
  let testArray = ["Banana", "Orange", "Apple", "Mango"];
  let testPopMethod = document.getElementById("pop");
  testPopMethod.getElementsByTagName("span")[0].innerHTML = testArray;
  testPopMethod.getElementsByTagName("button")[0].addEventListener("click", function (event) {
    event.preventDefault();
    testArray.pop();
    testPopMethod.getElementsByTagName("span")[1].innerHTML = `<strong>Array after method pop:</strong> ${testArray}`;
    console.log(`Array after method pop: ${testArray}`);
  });
})();
///push///
(function () {
  let testArray = ["Banana", "Orange", "Apple", "Mango"];
  let testPopMethod = document.getElementById("push");
  testPopMethod.getElementsByTagName("span")[0].innerHTML = testArray;
  testPopMethod.getElementsByTagName("button")[0].addEventListener("click", function (event) {
    event.preventDefault();
    let iptutVal = testPopMethod.getElementsByTagName("input")[0].value;
    testArray.push(iptutVal);
  
    testPopMethod.getElementsByTagName("span")[1].innerHTML = `<strong>Array after method push:</strong> ${testArray}`;
    console.log(`Array after method push: ${testArray}`);
  });
})();
///concat///
(function () {
  let testArrayFirst = ["Banana", "Orange", "Apple", "Mango"];
  let testArraySecond = ["Apricot", "Cherry", "Kiwi ", "Lemon"];
  let testPopMethod = document.getElementById("concat");
  testPopMethod.getElementsByTagName("span")[0].innerHTML = testArrayFirst;
  testPopMethod.getElementsByTagName("span")[1].innerHTML = testArraySecond;
  testPopMethod.getElementsByTagName("button")[0].addEventListener("click", function (event) {
    event.preventDefault();
    let testArray = testArrayFirst.concat(testArraySecond);

    testPopMethod.getElementsByTagName("span")[2].innerHTML = `<strong>Array after method concat:</strong> ${testArray} `;
    console.log(`Array after method concat: ${testArray}`);
  });
})();

///indexOf///
(function () {
  let testStr = 'Welcome to the GeekHub';
  let testPopMethod = document.getElementById("indexOf");
  testPopMethod.getElementsByTagName("span")[0].innerHTML = testStr;
  testPopMethod.getElementsByTagName("button")[0].addEventListener("click", function (event) {
    event.preventDefault();
    let iptutVal = testPopMethod.getElementsByTagName("input")[0].value;
    var n = testStr.indexOf(iptutVal);
    if(n<0){
      testPopMethod.getElementsByTagName("span")[1].innerHTML = `<strong>The value to search for never occurs</strong>`;
      console.log(`The value to search for never occurs`);
    }
    else{
      testPopMethod.getElementsByTagName("span")[1].innerHTML = `<strong>The value position is:</strong> ${n}`;
      console.log(`The value position is ${n}`);
    }    
  });
})();

///join///
(function () {
  let testArrayFirst = ['Welcome', 'to', 'the', 'GeekHub'];
  let testPopMethod = document.getElementById("join");
  testPopMethod.getElementsByTagName("span")[0].innerHTML = testArrayFirst;
  testPopMethod.getElementsByTagName("button")[0].addEventListener("click", function (event) {
    event.preventDefault();
    let iptutVal = testPopMethod.getElementsByTagName("input")[0].value;
    var resultString = testArrayFirst.join(iptutVal);
    testPopMethod.getElementsByTagName("span")[1].innerHTML = `<strong>Result join method:</strong> ${resultString}`;
    console.log(`Result join method:</strong > ${ resultString }`);
  });
})();

/// forEach///
(function () {
  let testArrayFirst = ["Banana", "Orange", "Apple", "Mango"];
  let testArraySecond =['red','green','yellow']
  let testPopMethod = document.getElementById("forEach");
  testPopMethod.getElementsByTagName("span")[0].innerHTML = testArrayFirst;
  testPopMethod.getElementsByTagName("button")[0].addEventListener("click", function (event) {
    event.preventDefault();
    let ul = document.createElement("ul");
    testArrayFirst.forEach(function (element) {
      console.log(element);     
      let li = document.createElement("li");
      li.innerHTML = element;
      li.style.color = testArraySecond[Math.floor((Math.random() * 3))]
      ul.appendChild(li);
    });
    testPopMethod.appendChild(ul);
  });
})();
/// filter///
(function () {
  let testArray = [32, 33, 16, 40];
  let testPopMethod = document.getElementById("filter");
  testPopMethod.getElementsByTagName("span")[0].innerHTML = testArray;
  testPopMethod.getElementsByTagName("button")[0].addEventListener("click", function (event) {
    event.preventDefault();
    let iptutVal = testPopMethod.getElementsByTagName("input")[0].value;
    let newArray = testArray.filter(tester)

    testPopMethod.getElementsByTagName("span")[1].innerHTML = `<strong>Array after method filter:</strong> ${newArray}`;
    console.log(`Array after method filter: ${ newArray }`);
    function tester(params) {          
      return params > iptutVal;      
    }
  });
})();
/// find///
(function () {
  let testArray = [32, 33, 16, 40];
  let testPopMethod = document.getElementById("find");
  testPopMethod.getElementsByTagName("span")[0].innerHTML = testArray;
  testPopMethod.getElementsByTagName("button")[0].addEventListener("click", function (event) {
    event.preventDefault();
    let iptutVal = testPopMethod.getElementsByTagName("input")[0].value;
    let findVal = testArray.find(tester)
    if (findVal){
      testPopMethod.getElementsByTagName("span")[1].innerHTML = `<strong>Find val:</strong> ${findVal}`;
      console.log(`Find val: ${findVal}`);
    }
    else{
      testPopMethod.getElementsByTagName("span")[1].innerHTML = `<strong>value not found</strong>`;
      console.log(`value not found`);
    }
    function tester(params) {
      return params > iptutVal;
    }
  });
})();

///map///
(function () {
  let testArray = [32, 33, 16, 40];
  let testPopMethod = document.getElementById("map");
  testPopMethod.getElementsByTagName("span")[0].innerHTML = testArray;
  testPopMethod.getElementsByTagName("button")[0].addEventListener("click", function (event) {
    event.preventDefault();
    let iptutVal = testPopMethod.getElementsByTagName("input")[0].value;
    let findVal = testArray.map(tester)
    testPopMethod.getElementsByTagName("span")[1].innerHTML = `<strong>New array val:</strong> ${findVal}`;
    console.log(`New array val: ${findVal}`);  

    function tester(params) {
      return params * iptutVal;
    }
  });
})();

///slice///
(function () {
  let testArray = [32, 33, 16, 40];
  let testPopMethod = document.getElementById("slice");
  testPopMethod.getElementsByTagName("span")[0].innerHTML = testArray;
  testPopMethod.getElementsByTagName("button")[0].addEventListener("click", function (event) {
    event.preventDefault();
    let iptutStart = testPopMethod.getElementsByTagName("input")[0].value;
    let iptutAnd = testPopMethod.getElementsByTagName("input")[1].value;
    let finArray = testArray.slice(iptutStart, iptutAnd);
    testPopMethod.getElementsByTagName("span")[1].innerHTML = `<strong>New array after slice:</strong> ${finArray}`;
    console.log(`New array after slice: ${finArray}`);
  });
})();

///splice///
(function () {
  let testArray = [32, 33, 16, 40];
  let testPopMethod = document.getElementById("splice");
  testPopMethod.getElementsByTagName("span")[0].innerHTML = testArray;
  testPopMethod.getElementsByTagName("button")[0].addEventListener("click", function (event) {
    event.preventDefault();
    let iptutStart = testPopMethod.getElementsByTagName("input")[0].value;
    let iptutAnd = testPopMethod.getElementsByTagName("input")[1].value;
    let modified= testArray.splice(iptutStart, iptutAnd, 11, 99); ///return modified val 
    testPopMethod.getElementsByTagName("span")[1].innerHTML = `<strong>New array after splice:</strong> ${testArray}`;
    console.log(modified);
    
    console.log(`New array after splice: ${testArray}`);
  });
})();
///shift///
(function () {
  let testArray = ["Banana", "Orange", "Apple", "Mango"];
  let testPopMethod = document.getElementById("shift");
  testPopMethod.getElementsByTagName("span")[0].innerHTML = testArray;
  testPopMethod.getElementsByTagName("button")[0].addEventListener("click", function (event) {
    event.preventDefault();
    testArray.shift();
    testPopMethod.getElementsByTagName("span")[1].innerHTML = `<strong>Array after method shift:</strong> ${testArray}`;
    console.log(`Array after method shift: ${testArray}`);
  });
})();

///unshift///
(function () {
  let testArray = ["Banana", "Orange", "Apple", "Mango"];
  let testPopMethod = document.getElementById("unshift");
  testPopMethod.getElementsByTagName("span")[0].innerHTML = testArray;
  testPopMethod.getElementsByTagName("button")[0].addEventListener("click", function (event) {
    event.preventDefault();
    testArray.unshift("Lemon", "Pineapple");

    testPopMethod.getElementsByTagName("span")[1].innerHTML = `<strong>Array after method unshift:</strong> ${testArray}`;
    console.log(`Array after method unshift: ${testArray}`);
  });
})();

