const inp = document.querySelector('.inp');
const table = document.querySelector('table');
let num = 1

inp.addEventListener('input', (e) => {
    fetch(`/all/${inp.value.toLowerCase()}`).then(item => item.json()).then((item) => {
        console.log(item);
        const html = item.map(people => {
            return `
            <tr>
                <td  class="top">${num++}</td>
                <td>${people.name} ${people.surname}</td>
                <td>${people.score}</td>
                <td>${people.number}</td>
                <td>${people.group}</td>
                <td>${people.month}</td>
                <td class="btn"><a href="/people/${people._id}" class="edit">Edit<img width="20px" src="/img/pencil.png" alt=""></a></td>
            </tr>
            `
        }).join('')
        table.querySelector('tbody').innerHTML = html
    })
})