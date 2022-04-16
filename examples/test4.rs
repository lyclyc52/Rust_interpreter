
// Ex: local reference
fn reference()->&i32{
    let a=1; 
    &a
} 
fn BoxReference()->Box<i32>{
    let a = Box::new(1); 
    a
} 

// fn main(){
//     let r = reference(); // error
// }

fn main(){
    let b = BoxReference(); // allowed
    println!("{}",*b);
}