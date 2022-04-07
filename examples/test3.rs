// if statement
let x;
if 3 < 5 {
   x=4;
} else {
   x=3;
}
x

if number < 5 {
    let x=4;
} else if number >3 {
    let x=3;
} else {
    let x=2;
}




// while loop
let mut number = 3;
while number != 0 {
    number = number - 1;
    println!("{}",number)
}



// loop loop
let mut counter = 0;
loop {
    counter = counter + 1;

    if counter == 10 {
        break;
    }
}
counter


let mut counter = 0;
loop {
    counter == 1;

    if counter == 10 {
        break counter * 2;
    }
};

// for loop
let x = 0;
for number in 1..5 {
    x = x + 1;
    println!(\"number is {}\", x);
}
