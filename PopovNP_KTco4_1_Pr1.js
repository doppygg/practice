function Test1() {
    let Mystr = "Это строка";
    let Mydig = 12;
    let Myflo = 54.45;
    let Mybool = true;
    let MyUndefine;
    let MyNuul = null;
    let MyObj = {};
    console.log(Mystr,Mydig,Myflo,Mybool,MyUndefine,MyNuul,MyObj)
}
// Test1()

function ArrayTest(Smth) {
    let MyArr = new Array();
    console.log("MyArr имеет тип " + typeof MyArr);
    let MyArr2 = [];
    console.log("А MyArr2 имеет тип " + typeof MyArr2);
    MyArr2.push(Smth);
    console.log("MyArr2 теперь содержит " + MyArr2);
}
// ArrayTest()

function matrixTest() {
    let MyMat = [[1,2,3],["Петя",5.45, false]];
    console.log("MyMat является " + typeof MyMat + " и содержит " + MyMat);
    console.log(MyMat[1][1]);
}
// matrixTest()

function objTest() {
    let NewObj = new Object();
    console.log("NewObj имеет тип " + typeof NewObj);
    let NewObj2 = {};
    console.log("NewObj2 имеет тип " + typeof NewObj2);
    let testobj = {country: "Россия", city: "Москва", width: 38};
    console.log("testobj является " + typeof testobj + " и содержит " + testobj);
    delete testobj.country;
    console.log("после удаления testobj получился " + testobj); 
    console.log(testobj.width);
}
objTest()