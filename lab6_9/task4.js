class Apartment {
    constructor(address1, numberOfRooms1, price1, repair1) {
        this.address = address1;
        this.numberOfRooms = numberOfRooms1;
        this.price = price1;
        this.repair = repair1;
    }

    show() {
        let html = "";
        html += "<tr>";
        html += "<td>" + this.address + "</td>";
        html += "<td>" + this.numberOfRooms + "</td>";
        html += "<td>" + this.price + "</td>";
        html += "<td>" + this.repair + "</td>";
        html += "</tr>";
        return html;
    }
}

function generateApartments() {
    var html = "<table class='res-table'>";
    html += "<tr class='res-table_th'><td>Address</td><td>Number of rooms</td><td>Price</td><td>Repair</td></tr>";

    let apartment1 = new Apartment('Yurria Illenka 61', 2, 80000, 'current');
    let apartment2 = new Apartment('Serhiia Danchenka 25', 3, 90000, 'under repair');
    let apartment3 = new Apartment('Bohdana Khmelnitskogo 3', 1, 80000, 'elite');
    let apartment4 = new Apartment('Geroiv Dnipra 15', 3, 10000, 'cosmetic');

    let listOfApartments = [apartment1, apartment2, apartment3, apartment4];

    for (let i = 0; i < listOfApartments.length; ++i) {
        html += listOfApartments[i].show();
    }

    html += "</table>";
    document.getElementById("result-table").innerHTML = html;
}
