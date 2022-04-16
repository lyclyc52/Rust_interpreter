// Ex: change by reference
fn change(reference: &mut i32) {
    *reference = 6;
}
fn main(){
    let mut s = 5;
    println!("s is {}",s);
    change(&mut s);
    println!("s is {}",s);
}