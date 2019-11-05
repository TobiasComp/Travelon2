

// ARRAY WITH DESTINATIONS
let destinations = [
    { dest_code: 100, dest_name: "Thailand", dest_price: 1000 },
    { dest_code: 101, dest_name: "China", dest_price: 1200 },
    { dest_code: 102, dest_name: "Usa", dest_price: 700 },
    { dest_code: 103, dest_name: "Canada", dest_price: 1250 },
    { dest_code: 104, dest_name: "Paris", dest_price: 450 },
    { dest_code: 105, dest_name: "London", dest_price: 600 },
    { dest_code: 106, dest_name: "Peru", dest_price: 1130 },
    { dest_code: 107, dest_name: "Sydney", dest_price: 2000 },
];

// ARRAY OF EXISTING ORDERS
let orders = [
    { total: 2000, passengers: 2, destination:"Thailand", pid:'234', name: 'avi', number: 1}, 
    { total: 2400, passengers: 2, destination:"China", pid:'3', name: 'moshe', number: 2}, 
    { total: 900, passengers: 2, destination:"Paris", pid:'999', name: 'daniel', number: 3}, 
    { total: 2000, passengers: 2, destination:"Thailand", pid:'234', name: 'avi', number: 4}, 
];


// FUNCTION TO DISPLAY THE DESTINATIONS
function displayDestinations(){
    try {
        console.log("The js file has started...");
        let tableDestination = document.querySelector('.table-destinations tbody');
        tableDestination.innerHTML="";
        let templateDest = "<tr><td>{{dest_code}}</td><td>{{dest_name}}</td><td>{{dest_price}}</td></tr>"
        
        tableDestination.innerHTML =  renderEngine(templateDest,destinations).body;  

    } catch (error) {
        console.error("Error",error);
    }
}
displayDestinations();
displayOrders();

// FUNCTION TO DISPLAY ORDERS
function displayOrders(){
    try {
        console.log("display order start");
        let tableOrder = document.querySelector('.table-orders tbody');
        
        let templateOrder = "<tr><td>{{total}}</td><td>{{passengers}}</td><td>{{destinations}}</td>" +
                            "<td>{{pid}}</td><td>{{name}}</td><td>{{number}}</td></tr>";
       
        tableOrder.innerHTML =  renderEngine(templateOrder,orders).body;  

    } catch (error) {
        console.error("An error has occured - Tuvia", error);
    }
}

// FUNCTION TO ADD AN ORDER
function addOrder(){
    console.log("start add order")
    let newOrderName = document.querySelector('#new-order-name').value;
    let newOrderPid = document.querySelector('#new-order-pid').value;
    let newOrderCode = document.querySelector('#new-order-code').value;
    let newOrderNumPassengers = document.querySelector('#new-order-num-passengers').value;
    let newOrderTotal = 0;
    let newOrderDestination="";
    

    destinations.forEach( (dest) => {
        if (newOrderCode==dest.dest_code) {
            newOrderTotal = newOrderNumPassengers*dest.dest_price;
            newOrderDestination = dest.dest_name;
        }
    });
    newOrder = { total: newOrderTotal, passengers: newOrderNumPassengers, destination: newOrderDestination,
        pid: newOrderPid, name: newOrderName, number:(orders[orders.length-1].number)+1};
    console.log(newOrder.number);
    orders.push(newOrder);
    let tableOrder = document.querySelector('.table-orders tbody');
    tableOrder.innerHTML += "<tr><td>"+newOrder.total+"</td><td>"+ newOrder.passengers+"</td><td>"+
            newOrder.destination+"</td><td>"+newOrder.pid+"</td><td>"+newOrder.name+"</td><td>"+
            newOrder.number+"</td></tr>";

}

// FUNCTION TO FIND ORDER
function findOrder(){
    let searchName = document.querySelector('#find-order-name').value;
    let tableFind = document.querySelector('.find-order-table tbody');
    tableFind.innerHTML = "";
    let templateOrder = "<tr><td>#TOTAL</td><td>#PASSENGERS</td><td>#DESTINATION</td>" +
                            "<td>#PID</td><td>#NAME</td><td>#ORDER-NUMBER</td></tr>";
    orders.forEach( (order)=> {
        if (order.name==searchName) {
            tableFind.innerHTML += templateOrder
            .replace("#TOTAL",order.total)
            .replace("#PASSENGERS",order.passengers)
            .replace("#DESTINATION",order.destination)
            .replace("#PID",order.pid)
            .replace("#NAME",order.name)
            .replace("#ORDER-NUMBER",order.number)
        }

    });
}

// FUNCTION TO FIND ORDERS BY NAME
function findOrdersByDestination(){
    let selectedDestination = document.getElementById('order-lookup').value;
    let tableFind = document.querySelector('.find-orders-destination tbody');
    let totalCostDestination = 0;
    tableFind.innerHTML = "";
    let templateOrder = "<tr><td>#TOTAL</td><td>#PASSENGERS</td><td>#DESTINATION</td>" +
                            "<td>#PID</td><td>#NAME</td><td>#ORDER-NUMBER</td></tr>";
    orders.forEach( (order)=> {
        if (order.destination==selectedDestination) {
            tableFind.innerHTML += templateOrder
            .replace("#TOTAL",order.total)
            .replace("#PASSENGERS",order.passengers)
            .replace("#DESTINATION",order.destination)
            .replace("#PID",order.pid)
            .replace("#NAME",order.name)
            .replace("#ORDER-NUMBER",order.number)
            totalCostDestination += order.total;
        }
    });
    tableFind.innerHTML+="<tr><td>"+totalCostDestination+"</td></tr>";
}

