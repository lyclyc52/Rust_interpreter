//Ex: boolean
// fn main(){
//     let mut a:bool = true;
//     println!(\"{}\",a);    
// }

// Ex: array
// fn main(){
//     let a = [1, 2, 3, 4, 5];
//     println!(\"{}\",a[2]);
// }



//Ex: tuple
// fn main(){
//     let x: (i32, f64, u8) = (500, 6.4, 1);
//     println!(\"{}\",x.1);
// }

//Ex: Struct
// fn main(){
//     struct Point {x: i32, y: i32}
//     let p = Point {x: 10, y: 11};
//     println!(\"{}\",p.x);
// }

//Ex: if-else 
// fn main(){
//     let x;
//     let number=6;
//     if number < 5 {
//         x=4;
//     } else if number >7 {
//         x=3;
//     } else {
//         x=2;
//     }
//     println!(\"{}\",x);
// }

//Ex: loop
// fn main(){
//     let mut counter = 0;
//     loop {
//         counter = counter + 1;
//         println!(\"{}\",counter);
//         if counter == 10 {
//             println!(\"Finish at {}\",counter);
//             break;
//         }
//     }
// }



// Ex: for loop
// fn main(){
//     for number in 1..5 {
//         println!(\"number is {}\", number);
//     }
// }



// Ex: while loop
// fn main(){
//     let mut number = 3;
//     while number != 0 {
//         number = number - 1;
//         println!(\"{}\",number);
//     }
// }



// Ex: function
// fn f(x: i32,y: i32) -> i32 {
//     let a = 5; 
//     x+y+a
// }
// fn main(){
//     let a = f(1,2);
//     println!(\"{}\",a);
// }




// Ex: reference
// fn main(){
//     let a = 3;
//     let b = &a;
//     println!(\"{}\",*b);
// }




// Ex: reference error
// One variable can only have one reference type: & or &mut
// fn main(){
//     let mut s = 5;
//     let r1 = &s; 
//     let r2 = &mut s; // error
//     println!(\"{}, {}\", r1, r2);
// }
// Two mutable references of the same variable are not allowed to appear at the same time
// fn main(){
//     let mut s = 5;
//     let r1 = &mut s;
//     let r2 = &mut s;// error
//     println!(\"{}, {}\", r1, r2);
// }


// fn main(){
//     let mut s = 5;
//     {
//         let r1 = &s; // allowed
//         let r2 = &s;
//         println!(\"{} {}\",*r1, *r2);
//     };
//     let r3 = &mut s; // allowed
//     println!(\"{}\",*r3);
// }




// Ex: change by reference
// fn main(){
//     let mut s = 5;
//     let a = &mut s;
//     *a=1;
//     println!(\"{}\",s);
// }


// Ex: change by reference
// fn change(reference: &mut i32) {
//     *reference = 6;
// }
// fn main(){
//     let mut s = 5;
//     println!(\"s is {}\",s);
//     change(&mut s);
//     println!(\"s is {}\",s);
// }


// Ex: Box pointer
// fn main(){
//     let a = Box::new(3);
//     println!(\"{}\",*a);
// }

// fn main(){
//     let a = Box::new([1,2]);
//     println!(\"{}\",(*a)[1]);
// }

// fn main(){
//     struct Point {x: i32, y: i32}
//     let p = Point {x: 10, y: 11};
//     let bp = Box::new(p);
//     println!(\"{}\",(*bp).x); 
// }


// Ex: garbage collection
// fn main(){
//     let mut b; // allowed
//     for i in 1..100{
//         b = Box::new(1);
//     }
// }

// fn main(){
//     let mut a =Box::new(1);
//     let mut b =Box::new(1);
//     let mut c =Box::new(1);
//     let mut d =Box::new(1);
//     let mut e =Box::new(1);
//     let mut f =Box::new(1);
// }


// Ex: local reference
// fn reference()->&i32{
//     let a=1; 
//     &a
// } 
// fn main(){
//     let r = reference(); // error
// }


// fn f()->Box<i32>{
//     let a = Box::new(1); 
//     a
// } 
// fn main(){
//     let b = f(); // allowed
//     println!(\"{}\",*b);
// }






// Ex: link list
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
    let list = List::Cons(1, Box::new(List::Cons(2, List::Nil)));
}







