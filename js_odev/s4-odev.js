const randomIntArrayInRange = (min, max, n = 1) =>
  Array.from(
    { length: n },
    () => Math.floor(Math.random() * (max - min + 1)) + min
  );

const numbers = randomIntArrayInRange(0, 500, 100);

console.log(numbers);

//1

function findEvensSquare(numbers){
  return numbers.filter(num => num %2 === 0)
  .map(num => num*num); 
}

console.log(findEvensSquare(numbers));

//2

function toSum(numbers){
  return numbers.reduce((total, num)=>
  total += num, 0);
  
}

console.log(toSum(numbers));

//3

function findFirstEven(numbers){

  return numbers.find(num => num%2 === 0);

}

console.log(findFirstEven(numbers));

//4

function allPositive(numbers){

  return  numbers.every(num => num > 0 );
 
}

console.log(allPositive(numbers));

//5

function ascendingSort(numbers){

  return numbers.sort((a, b) => a - b);
  
}

console.log(ascendingSort(numbers));

//6

const num = Math.floor(Math.random() * 10);
console.log(num);

function checkNumber(numbers, num) {

  return numbers.includes(num);
  
}

console.log(checkNumber(numbers, num));

//7

const nestedArray = [[1, 2],[7, 31, 74], [0, 4, 6], [32, [6, 9], 10]];

function oneArray(){

  return nestedArray.flat(2);

}

console.log(oneArray(nestedArray));

//8-a

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  hobbies: ['reading', 'hiking', 'gardening'],
  address: {
    street: '123 Main St',
    city: 'Anytown',
    country: 'USA'
  }
};

function separateArr(person){

  return Object.entries(person);

}

console.log(separateArr(person));

//8-b

const person2 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  hobbies: ['reading', 'hiking', 'gardening'],
  address: {
    street: '123 Main St',
    city: 'Anytown',
    country: 'USA'
  }
};

function separateArr2(person2){
  const keys = Object.keys(person2);
  const values = Object.values(person2);


  return [keys, values]; 
}

console.log(separateArr2(person2));

//9

function repetitiveNumbers(numbers){
  const repetitives = numbers.reduce((total, num)=> {
    if(!total.includes(num)){
      total.push(num);
    }
    return total;
    }, []);
    return repetitives;
};

console.log(repetitiveNumbers(numbers));

//10

const minNum = Math.floor(Math.random() * 6);
console.log(minNum);

function toCompare(numbers, minNum){
 for (let i = 0; i < numbers.length; i++){
  if (numbers[i] < minNum){
    return false;
  }
 }
 return true;
}

console.log(toCompare(numbers, minNum));

//11

const newPerson = {
  name: 'Alice', 
  age: 25, 
  city: 'London' 
}; 

function arr2(newPerson){

  return Object.entries(newPerson);

}

console.log(arr2(newPerson));

//12

function isBiggerThan2(numbers){

  return numbers.some((num)=>num > 2);

}

console.log(isBiggerThan2(numbers));

//13

const str = 'Shopping list: lemon, mint, walnut, potato, salt, olive, mayonnaise';

function findSubstrings(str){

  return str.toLowerCase().includes('milk');

}

console.log(findSubstrings(str));

//14

function theBiggerOne(numbers){

  let biggerOne = numbers[0];

  numbers.forEach((num) => {
    if(num > biggerOne) {
      biggerOne = num ;
    }
  });  
  return biggerOne;
}

console.log(theBiggerOne(numbers));

// return Math.max(...numbers);

//15

const stringArray = [
  "123",
  "44",
  "76",
  "987",
  "12",
  "3",
  "765",
  "658",
  "60",
  "71"
];

function toNumbers(stringArray){

  return stringArray.map((str) => +str);

}

// stringArray.map(x => +x);
// stringArray.map(Number);
// stringArray.map(x => parseInt(x));

console.log(toNumbers(stringArray));

const newArr1 = [1, 2, 3, 4, 5];
const newArr2 = [4, [5, [6, 7]], 9];

function toConcat(newArr1, newArr2){

  return newArr1.concat(newArr2.flat(2));
}

console.log(toConcat(newArr1, newArr2));

//17

const findIndex = stringArray.indexOf("12");

console.log(findIndex);

//18

const toReverse = stringArray.reverse();

console.log(toReverse);

//19

const bookProperties1 = {
  name: 'To Kill a Mockingbird',
  writer: 'Harper Lee',
  published:'May 23, 2006 by Harper Perennial Modern Classics',
};

const bookProperties2 = {
  language:'English',
  format:'323 pages, Paperback',
  genre:'Classics',
};

const bookDetails = {...bookProperties1, ...bookProperties2};

console.log(bookDetails);

//20

const toSlice = numbers.slice(2, 6);

console.log(toSlice);

//21

  const students = [
  {
    name: 'John', 
    grades: { 
      math: 80, 
      science: 85, 
      history: 90 
     }
  },
  { 
    name: 'Jane', 
    grades: {
      math: 90,
      science: 95, 
      history: 85
     } 
  }, 
  { 
    name: 'Jim',
    grades: { 
      math: 70, 
      science: 75, 
      history: 80
     }
  }, 
];

function highestGrades(students){

 const highGrades = students.map((student)=> Math.max(...Object.values(student.grades)));

 return highGrades.reduce((acc, crrVal) => acc + crrVal, 0);

} 

console.log(highestGrades(students));

//22

const isPrime = (num) => {
  if (num <= 1){
    return false;
  } 
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
;}

// for döngüsü sayının ikiden başlayarak bölenlerini bulmak için. i < num da diyebilirdik ama döngünün uzun sürmemesi için kareköküne kadar bakıyoruz. karekökü tam sayı ise bölünür, tam sayı çıkar, false döner. Asal değildir.

function findPrimeNumberSquaring(numbers){
  
  return numbers
  .filter(isPrime) //isPrime true ya da false dönüyor. filter true dönen sayıları yeni bir dizi olarak alır.
  .map((num) => num * num); 

}

console.log(findPrimeNumberSquaring(numbers));

//23

const students2 = [
  { name: 'Alice', age: 20},
  { name: 'Bob', age: 22 },
  { name: 'Charlie', age: 20 }, 
  { name: 'David', age: 23}, 
  { name: 'Edward', age: 22} 
];

  function groupByAge(students2){

  return students2.reduce((acc, student) => {

   // const age = student.age; diyerek kullanabilirim ya da acc[student.age] diyebilirim. burada nesneye direk ekleme yaparak --acc[student.age].push(student.name);-- kullanamıyorum. önce nesnede anahtar var mı kontrol ediyorum.
  
   if (!acc[student.age]){
      acc[student.age] = [];
   }
      acc[student.age].push(student.name);
      return acc;
  }, {});

}


/* const groupByAge = students => {
  return students.reduce((acc, student) => {
    acc[student.age] = student.name;
    return acc;
  }, {})
} bu şekilde aynı yaşta olanları almıyor, tek yaşa tek isim sonradan gelen override ediyor. */

console.log(groupByAge(students2));


//24

const nestedArray1 = [[1, 2], [3, [4, 5]], 6];

function flatAndDouble(nestedArray1){

const flatArr = nestedArray1.flat(2);

return flatArr.map((v) => v*2);
}
console.log(flatAndDouble(nestedArray1));

//25

const words = ['apple', 'banana', 'cherry', 'date'];

function createObject(words){

  return words.reduce((acc, word)=> {
      acc[word] = word.length; //const ya da let ile nesne içinde bir word değişkeni tanımlamadım. acc[word] = kullanımı anahtar yoksa oluşturuyor, varsa güncelliyor.
      return acc;
  }, {})

};

console.log(createObject(words));

//26

const students3 = [
  { name: 'John', 
    grades: { math: 80, science: 85 }
  }, 
  { name: 'Jane', 
    grades: { math: 75, science: 95 }
  }, 
  { name: 'Jim', 
    grades: { math: 70, science: 75 }
  } 
  ];

const checkNotes = students3.some((student) => student.grades['math'] > 80 && student.grades['science'] > 80);

//student.grades['math'] => tırnak içinde yazılması gerek çünkü object içindeki anahtarları belirtirken tırnak içinde kullan. ?ne zaman sadece köşeli parantez kullanıyoruz ne zaman köşeli parantez ve tırnak?

console.log(checkNotes);

const students4 = [
  { name: 'John', 
    grades: { math: 80, science: 85, history: 90  }
  }, 
  { name: 'Jane', 
    grades: { math: 90, science: 65, history: 85  }
  }, 
  { name: 'Jim', 
    grades: { math: 70, science: 75, history: 60  }
  } 
  ];

 //ilk öğrencinin notlar anahtarında her bir ders anahtarının değerine bak. en az biri 70 den büyük mü bak.

 const checkNotes2 = students4.every((student) => {

  return Object.values(student.grades).some((grade) => grade > 70 );

 }
 );

 console.log(checkNotes2);

 //28

 //Object.assign(); deep copy mi?

 const students5 = [
  { name: 'John', 
    grades: { math: 80, science: 85 }
  },
  { name: 'John',
    grades: { math: 75, science: 80}
  },
  { name: 'Jane', 
  grades: { math: 75, science: 95 }
  }];

  let students6 = Object.assign(students5);

  console.log(students6);

  //29

  function nameAndGrade (students5, name, lesson){

    const student = students5.find((student) => student.name === name);

    if (student) {
      return `${name}: ${student.grades[lesson]}`;
    } 
  }

  console.log(nameAndGrade(students5, 'John', 'math'));

  //aynı isimde birden çok öğrenci varsa filter nasıl kullanılır?
  //filter sonrası reduce kullandım overwrite etti, olmadı. Map kullan array dönsün, array de içinde objeler dönsün.

  function nameAndGrade2(students5, name, lesson) {
    const result = students5.filter((student) => student.name === name).map((student) => {
      return {
        [student.name]: student.grades[lesson]
      }
    });

    return result;
  }

  console.log(nameAndGrade2(students5, 'John', 'math'));

  //30

  const students7 = [
    { name: 'John', 
      grades: { 
        math: 80, 
        science: 85 
      }
    },
    { name: 'Jane',
      grades: { 
        math: 75, 
        science: 95 
      }
    }, 
    { name: 'Jim', 
      grades: { 
        math: 60, 
        science: 75 
        } 
    }
    ];

    function mathNotes(students7) {
      return students7.map((student) => {
        if (student.grades['math'] < 80) {
          student.grades['math'] *= 1.1;
        }
        return student;
      });
    };

    console.log(mathNotes(students7));

    //31

    /* const arr = [
  {
     name: "Nina"
  },
  {
     name: "Andre"
  },
  {
     name: "Graham"
  }
];
const sortedArr = arr.sort((a,b) => {
  if ( a.name < b.name ){
    return -1;
  }
  if ( a.name > b.name ){
    return 1;
  }
  return 0;
});

<= -1 then a will come before b.
0 then keep a and b in the same positions
>= 1 then b will come before a

neden -1 ?    
    
    */
    const people = [
      { name: 'Alice', age: 30 },
      { name: 'Bob', age: 25 },
      { name: 'Charlie', age: 30 },
      { name: 'Dave', age: 25 }
      ];

  function order(people){
    const sortedPeople = people.sort((a,b) => {
      if(a.age !== b.age){
        return a.age - b.age; //sayısal değer olduğu için sıralamada + - kullanabiliyoruz
      } 
      else {
        a.name < b.name // string olduğu için < > işareti ile karşılaştırma yap.
        /*if(a.name < b.name)
          return -1;
        if(a.name > b.name)
          return 1;
          return 0; */
        }
      });
    return sortedPeople;
  }

    console.log(order(people));

//32

/* 
const merge = (...objs) =>
  [...objs].reduce(
    (acc, obj) =>
      Object.keys(obj).reduce((a, k) => {
        acc[k] = acc.hasOwnProperty(k)
          ? [].concat(acc[k]).concat(obj[k])
          : obj[k];
        return acc;
      }, {}),
    {}
  );

const obj1 = {
  a: [{ x: 2 }, { y: 4 }],
  b: 1
};
const obj2 = {
  a: { z: 3 },
  b: [2, 3],
  c: 'foo'
};

merge(obj1, obj2);
// {
//   a: [ { x: 2 }, { y: 4 }, { z: 3 } ],
//   b: [ 1, 2, 3 ],
//   c: 'foo'
// }

*/

/* if the expected output = const = 
{ a: [ 1, 3, 5 ], b: [ 2, 4, 6 ] } */

const objects = [ 
  { a: 1, b: 2 },
  { a: 3, b: 4 },
  { a: 5, b: 6 }
  ];

  function  merge (objects) {
   return objects.reduce(
    (acc, obj) =>
      Object.keys(obj).reduce((a, k) => {
        acc[k] = acc.hasOwnProperty(k)
          ? [].concat(acc[k]).concat(obj[k])
          : obj[k];
        return acc;
      }, {}),
    {}
  );
  }
console.log(merge(objects));

/* if the expected output = const = {a: 9, b: 12} ; */

const mergedObject = objects.reduce((acc, objs) => {
  Object.keys(objs).forEach(key => {
    acc[key] = acc[key]? acc[key] + objs[key] : objs[key];
  });
  return acc;
}, {});

//objs[key], anahtarın değerini verir

console.log(mergedObject);

//33

const students8 = [
  { name: 'John', 
    subjects: ['math', 'science', 'history'] 
  }, 
  { name: 'Jane', 
    subjects: ['math', 'art', 'history'] 
  },
  { name: 'Jim', 
    subjects: ['science', 'math', 'PE'] 
  }
  ];

  function subjectsArr(students8){
    const allSubjects = students8.map((student) => student.subjects).flat();

    //There are duplicate ones => You can use ES6 Set() function to remove the duplicates. const newArray = [...new Set(arrayWithDuplicates)];

    const uniqueSubjects = [...new Set(allSubjects)];

    return uniqueSubjects;

  }

  console.log(subjectsArr(students8));

  //34

  const item = {
    name: 'apple',
    color: 'red',
    type: 'fruit'
  }

  function upperCaseKeys(item){
    return Object.keys(item).reduce((acc, k) => {
    acc[k.toUpperCase()] = item[k];
    return acc}, {});
  }

  console.log(upperCaseKeys(item));

  //35

  const students9 = [
    { 
      name: 'John', 
      grades: { math: 80, science: 85 } 
    }, 
    { name: 'Jane', 
      grades: { math: 75, science: 95 }
    }
  ];

  function newStudentArr (students9){
    return students9.map((student) => {

     const gradeArr = Object.entries(student.grades).flat(); 
  
     return [{ name: student.name, subject: gradeArr[0], grade: gradeArr[1] }, {name: student.name, subject: gradeArr[2], grade:gradeArr[3]}];
    }).flat();
  }
 
console.log(newStudentArr(students9));

//36

 const students10 = [
  { name: 'Alice', age: 20 },
  { name: 'Bob', age: 22 },
  { name: 'Charlie', age: 20 }, 
  { name: 'David', age: 23 }, 
  { name: 'Edward', age: 22 } ];

function groupedByAge(students10){

  return students10.filter((student) => student.age > 20).sort((a, b) => a.age - b.age);
};

console.log(groupedByAge(students10));

//37

const students11 = [
  { name: 'John', 
    grades: { math: 80, science: 85 }
  }, 
  { name: 'Jane', grades: { math: 75, science: 95}
  }, 
  { name: 'Jim', grades: { math: 60, science: 75 } 
  }
  ];

  function totalGrades(students11) {
    return students11.reduce((acc, student) => {
     
      Object.entries(student.grades).forEach(([subject, grade]) => {
       
        //Object.entries sonucu: [ ['math', 80], ['science', 85] ].
        //forEach parametre olarak ne alıyor? (([subject, grade])) -> entries ile gelen key value çiftini parametre olarak alıyor.

        /*Destructuring bir obje veya bir array içinden her bir elemanın alınıp bir değişken içine kaydedilmesi. -> 
        const foo = { a: 123, b: true }
        const {a,b} = foo; 
        ***Ama en önemlisi destructuring bir fonksiyonun bir objeyi parametre olarak alması sırasında çok kullanışlıdır. Yani fonksiyona parametre girerken de destructuring yapabiliriz; */

        if (!acc[subject]) {
          acc[subject] = 0; 
        }
        acc[subject] += grade; 
      });
      return acc; 
    }, {});
  }

  console.log(totalGrades(students11));

  //38

  const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape'];
  

  function checkLetters(fruits, letter){
   return fruits.every((fruit) => fruit.charAt(0) === letter);
  }

  console.log(checkLetters(fruits, 'a'));

  /* String.prototype.startsWith()
The startsWith() method of String values determines whether this string begins with the characters of a specified string, returning true or false as appropriate. 

 function checkLetters(fruits, letter){
   return fruits.every((fruit) => fruit.startsWith(letter));
  }
*/

//39

const students12 = [
  { name: 'Alice', grades: { math: 70, science: 85 } },
  { name: 'Bob', grades: { math: 85, science: 95 } },
  { name: 'Charlie', grades: { math: 60, science: 75 } }
];

function checkGrades(students12){
  return students12.some(student => {
    return Object.values(student.grades).some(grade => grade > 90) 
});
}
console.log(checkGrades(students12));

//40 ?

const words1 = [['hello', 'world'], ['foo', 'bar'], 'baz', 'quux'];

function upsideDown(words) {
  const newArr = words.flat(Infinity);
  
  const allChars = newArr.map(word => word.split('').sort().join(''));

  return allChars.join('');
}
console.log(upsideDown(words1));

//41

const data = [
  { name: 'Alice', score: 45 },
  { name: 'Bob', score: 55 },
  { name: 'Charlie', score: 65 }, 
  { name: 'David', score: 35 } ];

  function averageScore(data) {

  const totalScore = data.reduce((acc, student) => acc += student.score, 0);
   const average = totalScore/data.length;

  const belowAverage = data
  .filter(student => student.score < average)
  .map(student => student.name);
  
  return belowAverage;
  }
  
  console.log(averageScore(data));

  //42

  const nestedNumbers = [1, [2, 3], [4, 5], 6]; 

  function flatAndSum (nestedNumbers){
     const newArr = nestedNumbers.flat(Infinity);
     
    const cubeOdds = newArr
    .filter(number => number % 2 !== 0)
    .map(number => Math.pow(number, 3));
    return cubeOdds.reduce((sum, v) => sum += v, 0)
  }

  console.log(flatAndSum(nestedNumbers))

  //43

  const data1 = [
    { name: 'Alice', score: 45 },
    { name: 'Bob', score: 55 },
    { name: 'Charlie', score: 65 },
    { name: 'David', score: 35 } ];

  function underMaxKeys(data1){
    
      let maxValue = 0;
      for (let i = 0; i < data1.length; i++) {
          if (data1[i].score > maxValue) {
              maxValue = data[i].score;
          }
      }
      const belowMax = data1.filter(person => person.score < maxValue).map(person => person.name);
    
      return belowMax;
    
  }

  console.log(underMaxKeys(data1));

  //44

  function reverseWords(words1){

    return words1.flat(Infinity).map((word) => word.split('').reverse().join('')).join('');
  }

  console.log(reverseWords(words1));

  //45

  function flatAndTakeLength(words1){
   const lengthArr = words1.flat(Infinity).map((word) => word.length);

   return lengthArr.reduce((sum, v) => sum += v, 0);
  }

  console.log(flatAndTakeLength(words1));

  //46

  const studentsLast = [
    { name: 'John', 
      grades: { math: 80, science: 85, history: 90 }, 
      activities: ['basketball', 'chess'] },
    { name: 'Jane', 
      grades: { math: 90, science: 95, history: 85 }, 
      activities: ['volleyball', 'chess'] },
    { name: 'Jim', 
      grades: { math: 70, science: 75, history: 80 }, 
      activities: ['football', 'basketball'] },
    { name: 'Jill', 
      grades: { math: 85, science: 80, history: 88 }, 
      activities: ['chess', 'debate'] }
    ];
    
  
    /*
        -öğrencilerde map yap / filter yaptığımda boolean döndü istediğim sonucu alamadım.
        -derslerin notlarından  80'den büyük olanları filtrele
        -chess olanları filtrele,
        -80'den büyük not ve chess eşleşiyorsa nesne dön
      */

    function filterStudents(studentsLast){
      
      return studentsLast.map((student) => {
        
      const highGrades = Object.entries(student.grades)
        .filter(([key, value]) => value > 80)
        .map(([key, value]) => key);

      //console.log(highGrades); sadece value ya da key'i aldığımda olmadı, ikisini aldım.
      
      const hasChess = student.activities.includes('chess');

      if (highGrades && hasChess) {
        return {
          name: student.name.toUpperCase(),
          highGrades,
          activities: student.activities.sort()
        };
      }  
    });
    }

    console.log(filterStudents(studentsLast))