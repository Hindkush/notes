let obj = {id : 10, fullName: 'Anuj'};

// //const id = obj.id; //obj['id']
// //const name = obj.name;

// //Destucturing can be done on Object as well as Arrays
// const { id : userId, fullName : name } = obj;
// console.log(userId);

// const arr = [10, 20, 30, 40, 50];

// const [first ] = arr;

// console.log(first);


function add(n1, ...nums) {
    let sum = 0;
    for(let  i = 0 ; i < nums.length ; i++) {
        sum += nums[i];
    }
    console.log(sum);
}

//add(1); // 1
//add(2, 4); // 6
//add(4, 5, 6); //15
//add(5, 4, 2, 6); // 17
//add('anuj', 'garg', 5, 6, 7, 8, 9); //45

function getData(n1, n2, n3) {
    return n1 + n2 + n3;
}

// let arr = [10, 40, 30, 60, 80, 100, 120, 150];

// const [first, second, third, foruth, ...last] = arr;
// console.log(last);

// const arr2 = [...arr]; //SPREAD

// const obj1 = {id: 10, name: 'anuj'};
// const obj2 = {obj1, city : 'gurgaon'};

// console.log(obj2);
// console.log(getData(...arr));

let map = new Map();
map.set('id', 10); //id - 10
map.set('name', 'Anuj'); //name = anuj
console.log(map);
 
//map.clear();
//console.log(map);

console.log(map.size);
//console.log(map.has("city"));
//console.log(map.delete("name"));
console.log("Name - " + map.get("name"));
console.log(typeof map);

map.forEach((value, key) => {
    console.log(key + "->" + value);
});

console.log(map.keys()); //iterator
console.log(map.values());
console.log(map.entries());

// let weakMap = new WeakMap();
// keys = objects, values = objects
// reference is not used  anywhere , it will be garbage collected

// weakMap.set(10, {name:'anuj'});
// console.log(weakMap);