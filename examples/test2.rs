// Ex: reference error
// One variable can only have one reference type: & or &mut
// fn main(){
//     let mut s = 5;
//     let r1 = &s; 
//     let r2 = &mut s; // error
//     println!("{}, {}", r1, r2);
// }

// Two mutable references of the same variable are not allowed to appear at the same time
fn main(){
    let mut s = 5;
    let r1 = &mut s;
    let r2 = &mut s;// error
    // println!("{}, {}", *r1, *r2);
}

// fn main(){
//     let mut s = 5;
//     {
//         let r1 = &s; // allowed
//         let r2 = &s;
//         println!("{} {}",*r1, *r2);
//     };
//     let r3 = &mut s; // allowed
//     println!("{}",*r3);
// }