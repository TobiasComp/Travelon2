// let Student = function (name, id, score) {
//     this.id = id;
//     this.name = name;
//     this.score = score;
// }

// studentList = [
//      new Student("Tuvi","111",90),
//      new Student("Moshe","222",95),
//      new Student("Daniel","333",85),
//      new Student("Shuki","444",80)
// ];

// let studentTemplate = "<tr><td>{{name}}</td><td>{{id}}</td><td>{{score}}</td></tr>";


function renderEngine(templateStr, obj){
    var frag1 = templateStr.split("{{");
    let arr = [];
    let newField = "";
    let finalrender="";
    let headRender = "<tr>";
    frag1.forEach( (element) => {
        if (element.search("}}")>-1) {
            newField = element.split("}}")[0];
            arr.push(newField);
        }      
    });
    
    arr.forEach(field=>{
        headRender += "<th>" + field + "</th>"
    })
    headRender += "</tr>";
    // document.querySelector('thead').innerHTML = headRender;
    obj.forEach(object=>{
        finalrender += templateStr;
        arr.forEach(field=>{
            finalrender = finalrender.replace("{{"+field+"}}",object[field]);
            
        });
    
    });
    // document.querySelector('tbody').innerHTML = finalrender;
    return {
        head: headRender,
        body: finalrender
    }
}

// renderEngine(studentTemplate, studentList);
