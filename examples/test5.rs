// multiple reference error
let mut s = 5;
let r1 = &s; // no problem
let r2 = &s; // no problem
let r3 = &mut s; // BIG PROBLEM
println!("{}, {}, and {}", r1, r2, r3);


// return an assignment expression will cause problem
fn a()->i32{
    let x =2;
    x=3
}

fn main() {
    let b = a();
    println!("{:?}",b);
}


fn a(a:i32)
{
    {
       3
    }
}


// if something is out of scope, it will be deallocated 
// dangling pointer: 
// return Box::type allowed
// return reference type: not allowed
// explain their difference.
