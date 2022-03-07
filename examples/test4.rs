// mutable reference
fn main() {
    let mut s = 5;
    change(&mut s);
}

fn change(reference: &mut i32) {
    reference = 6;
}



// Smart pointer Box<T>
struct Point {
    x: f64,
    y: f64,
}

let x = Box::new(Point { x: 0.0, y: 0.0 })