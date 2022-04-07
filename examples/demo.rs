//Ex 1
let mut a:bool = true;
println!(\"{}\",a);

//Ex 2
let a = [1, 2, 3, 4, 5];
println!(\"{}\",a[2]);

//Ex 3
let x: (i32, f64, u8) = (500, 6.4, 1);
println!(\"{}\",x.0);



//Ex 4
let x;
let number=6;
if number < 5 {
    x=4;
} else if number >7 {
    x=3;
} else {
    x=2;
}
println!(\"{}\",x);


//Ex 5
let mut counter = 0;
loop {
    counter = counter + 1;
    println!(\"{}\",counter);
    if counter == 10 {
        println!(\"Finish at {}\",counter);
        break;
    }
}


// Ex 6
for number in 1..5 {
    println!(\"number is {}\", number);
}


// Ex 7
let mut number = 3;
while number != 0 {
    number = number - 1;
    println!(\"{}\",number);
}


// Ex 8
fn f(x: i32,y: i32) -> i32 {
    let a = 5; 
    x+y+a
}
let a = f(1,2);
println!(\"{}\",a);



// Ex 9
let a = 3;
let b = &a;
println!(\"{}\",*b);


// Ex 10
let a = Box::new(3);
println!(\"{}\",*a);


let a = Box::new([1,2]);
println!(\"{}\",(*a)[1]);


// Ex 11
let mut s = 5;
{
    let r1 = &s; // allowed
    let r2 = &s;
};
let r3 = &mut s; // allowed

let mut s = 5;
let r1 = &s; 
let r2 = &s;// allowed
let r3 = &mut s; // error

let mut s = 5;
let r1 = &mut s;
let r2 = &mut s;// error



// Ex 12
let mut s = 5;
let a = &mut s;
*a=1;
println!(\"{}\",s);


fn change(reference: &mut i32) {
    *reference = 6;
} 
let mut s = 5;
change(&s);
println!(\"{}\",s);


// Ex 13
let s = Box::new(1);
println!(\"{}\",*s);


// Ex 14
fn reference()->&i32{
    let a=1; 
    &a
} 
let r = reference(); // error

fn f()->Box<i32>{
    let a = Box::new(1); 
    a
} 
let b = f(); // allowed
println!(\"{}\",*b);


// Ex 15
enum List {
    Cons(i32, List),//error
    Nil,
} 
let list = List::Cons(1,Nil); 


enum List {
    Cons(i32, Box<List>), //allowed
    Nil,
} 
let list = List::Cons(1, Box::new(List::Cons(2, Box::new(List::Cons(3, Box::new(List::Nil))))));


// Ex 16
struct Point {x: i32, y: i32}
let p = Point {x: 10, y: 11};
println!(\"{}\",p.x);



struct Point {x: i32, y: i32}
let p = Point {x: 10, y: 11};
let bp = Box::new(p);
println!(\"{}\",(*bp).x);


