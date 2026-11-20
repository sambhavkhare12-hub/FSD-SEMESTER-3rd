function add() {
    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);

    let sum = a + b;

    document.getElementById("result").innerHTML = "Sum = " + sum;
}

document.getElementById("btn").addEventListener("click", add);