
//Exercise #5
//For each of the exercises below, assume you are starting with the following people array.
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
    // 1. Write a command that prints out all of the people in the list.
    const printPeople = document.getElementById('result-people');
    printPeople.textContent = `Lista de personas: [${people.join(', ')}]`;
    // 2. Write the command to remove "Dani" from the array.
    people.splice(1, 1);
    const printRemoveDani = document.getElementById('result-dani');
    printRemoveDani.textContent = `Después de remover a Dani: [${people.join(', ')}]`;
    // 3. Write the command to remove "Juan" from the array.
    people.splice(2, 1);
    const printRemoveJuan = document.getElementById('result-juan');
    printRemoveJuan.textContent = `Después de remover a Juan: [${people.join(', ')}]`;
    // 4. Write the command to move "Luis" to the front of the array.
    people.splice(1, 1);
    people.unshift("Luis");
    const moveLuisToFront = document.getElementById('result-luis');
    moveLuisToFront.textContent += `Después de mover a Luis al frente: ${people.join(', ')}`;
    // 5. Write the command to add your name to the end of the array.
    people.push("Fernanda");
    const addMyname = document.getElementById('result-my-name');
    addMyname.textContent += `Después de agregar mi nombre (Fernanda): ${people.join(', ')}`;
    // 6. Using a loop, iterate through this array and after console.log "Maria", exit from the loop.
    for (let i = 0; i < people.length; i++) {
        console.log(people[i]);
        if (people[i] === "Maria") {
            break; // 
        }
    }
    // 7. Write the command that gives the indexOf where "Maria" is located. 
    const indexMaria = people.indexOf("Maria");
    const printIndexMaria = document.getElementById('result-index-maria');
    printIndexMaria.textContent = `El índice de Maria es: ${indexMaria}`;
       