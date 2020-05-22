function person(name, age, tele)
{
    this.name = name;
    this.age = age;
    this.tele = tele;
}

var p1 = new person("john", 42, 4226396);

document.write("Name: "p1.name+"\nAge: "+ p1.age +"\nTele: " p1.tele);
