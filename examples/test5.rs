// Ex: link list
// enum List {
//     Cons(i32, List),//error
//     Nil,
// } 

// fn main(){
//     let list = List::Cons(1,Nil); 
// }



enum List {
    Cons(i32, Box<List>), //allowed
    Nil,
} 
fn main(){
    let list = List::Cons(1, Box::new(List::Cons(2, List::Nil)));
}

