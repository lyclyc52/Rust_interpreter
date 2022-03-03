// mutable reference
fn main() {
    let mut s = 5;
    change(&mut s);
}

fn change(reference: &mut i32) {
    reference = 6;
}
