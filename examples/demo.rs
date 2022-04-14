//Ex 1

fn main(){
    let mut a:bool = true;
    println!(\"{}\",a);    
}

//Ex 2
fn main(){
    let a = [1, 2, 3, 4, 5];
    println!(\"{}\",a[2]);
}
//Ex 3
fn main(){
    let x: (i32, f64, u8) = (500, 6.4, 1);
    println!(\"{}\",x.0);
}



//Ex 4
fn main(){
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
}

//Ex 5
fn main(){
    let mut counter = 0;
    loop {
        counter = counter + 1;
        println!(\"{}\",counter);
        if counter == 10 {
            println!(\"Finish at {}\",counter);
            break;
        }
    }
}



// Ex 6
fn main(){
    for number in 1..5 {
        println!(\"number is {}\", number);
    }
}



// Ex 7
fn main(){
    let mut number = 3;
    while number != 0 {
        number = number - 1;
        println!(\"{}\",number);
    }
}



// Ex 8
fn f(x: i32,y: i32) -> i32 {
    let a = 5; 
    x+y+a
}
fn main(){
    let a = f(1,2);
    println!(\"{}\",a);
}




// Ex 9
fn main(){
    let a = 3;
    let b = &a;
    println!(\"{}\",*b);
}



// Ex 10
fn main(){
    let a = Box::new(3);
    println!(\"{}\",*a);
}


fn main(){
    let a = Box::new([1,2]);
    println!(\"{}\",(*a)[1]);
}



// Ex 11
fn main(){
    let mut s = 5;
    {
        let r1 = &s; // allowed
        let r2 = &s;
        println!(\"{} {}\",*r1, *r2);
    };
    let r3 = &mut s; // allowed
}

fn main(){
    let mut s = 5;
    let r1 = &s; 
    let r2 = &s;// allowed
    let r3 = &mut s; // error
}

fn main(){
    let mut s = 5;
    let r1 = &mut s;
    let r2 = &mut s;// error
    println!(\"{}, {}\", r1, r2);
}




// Ex 12
fn main(){
    let mut s = 5;
    let a = &mut s;
    *a=1;
    println!(\"{}\",s);
}


fn change(reference: &mut i32) {
    *reference = 6;
}
fn main(){
    let mut s = 5;
    change(&mut s);
    println!(\"{}\",s);
}

 




// Ex 13
let s = Box::new(1);
println!(\"{}\",*s);


// Ex 14
fn reference()->&i32{
    let a=1; 
    &a
} 
fn main(){
    let r = reference(); // error
}


fn f()->Box<i32>{
    let a = Box::new(1); 
    a
} 
fn main(){
    let b = f(); // allowed
    println!(\"{}\",*b);
}



// Ex 15
enum List {
    Cons(i32, List),//error
    Nil,
} 
fn main(){
    let list = List::Cons(1,Nil); 
}



enum List {
    Cons(i32, Box<List>), //allowed
    Nil,
} 
fn main(){
    let list = List::Cons(1, Box::new(List::Cons(2, Box::new(List::Cons(3, Box::new(List::Nil))))));
}


// Ex 16
fn main(){
    struct Point {x: i32, y: i32}
    let p = Point {x: 10, y: 11};
    println!(\"{}\",p.x);
}


fn main(){
    struct Point {x: i32, y: i32}
    let p = Point {x: 10, y: 11};
    let bp = Box::new(p);
    println!(\"{}\",(*bp).x);
    
}


