// multiple reference error
let mut s = 5;
let r1 = &s; // no problem
let r2 = &s; // no problem
let r3 = &mut s; // BIG PROBLEM
println!("{}, {}, and {}", r1, r2, r3);


//???
fn a(a:i32)->i32
{
   if false {
       2
   }
   else{
       3
   }
}

fn a(a:i32)
{
    {
       3
    }
}