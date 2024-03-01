const root = document.querySelector("#root");
let html = "";

async function getAPI() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await res.json();
    console.log(data);
    for (let i = 0; i < data.length; i++) {
        let title = data[i].title;
        html += `<h1>${title}</h1>
     `;
        let body = data[i].body;
        html += `<p>${body}</p>
     <hr/> `;

    }
    root.innerHTML = html;

}
getAPI();