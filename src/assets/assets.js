import fueltypeicon from "./fueltype.png"
import logo from "./logo.png"
import seaticon from "./seat.png"
import transmissionicon from "./transmission.png"
import searchicon from "./searchicon.png"
import header from "./header.jpg"

import suv from "./suv.png"
import sedan from "./sedan.png"
import hatchback from "./hatchback.png"
import supercar from "./super.png"

export const assets = {
    fueltypeicon,
    logo,
    seaticon,
    transmissionicon,
    searchicon,
    header
}

export const fleet = [
    {
        fleet_name: "Hatchback",
        fleet_image: hatchback
    },
    {
        fleet_name: "Sedan",
        fleet_image: sedan
    },
    {
        fleet_name: "SUV",
        fleet_image: suv
    },
    {
        fleet_name: "Super",
        fleet_image: supercar
    }
]



import minicooperscountryman from "./minicooperscountryman.jpg";
import bmw1series from "./bmw1series.jpg";
import rangeroverevoque from "./rangeroverevoque.jpg";
import audiq5 from "./audiq5.jpg"
import mercedesbenzaclass from "./mercedescclass.jpg";
import bmw530d from "./bmw530d.jpg"
import audia8 from "./audia8.jpg";
import bmwm4competition from "./bmwm4.jpg";
import bmwx7 from "./bmwx7.jpg";
import maybachgls600 from "./maybachgls.jpg";
import landroverrangeroverautobiography from "./rangeroverautobiography.jpg";
import landroverdefender from "./landroverdefender.jpg";
import laborghinihuracanevo from "./lamborghinihuracanevo.jpg";
import porsche911 from "./porsche911.jpg";
import mclaren570s from "./mclaren570s.jpg";
import audir8 from "./audir8.jpg";

export const car_list = [
    {
        _id: "1",
        name: "Mini Cooper S Countryman",
        image: minicooperscountryman,
        price: "₹2500/day",
        category: "Hatchback",
        description: "A versatile and stylish compact SUV.",
        transmission: "Automatic",
        fueltype: "Petrol",
        seat: "5"
    },
    {
        _id: "2",
        name: "Audi Q5",
        image: audiq5,
        price: "₹3000/day",
        category: "Hatchback",
        description: "A luxury hatchback with a sleek design.",
        transmission: "Automatic",
        fueltype: "Petrol",
        seat: "5"
    },
    {
        _id: "3",
        name: "BMW 1 Series",
        image: bmw1series,
        price: "₹2800/day",
        category: "Hatchback",
        description: "A sporty hatchback with advanced features.",
        transmission: "Manual",
        fueltype: "Petrol",
        seat: "5"
    },
    {
        _id: "4",
        name: "Land Rover Range Rover Evoque",
        image: rangeroverevoque,
        price: "₹4000/day",
        category: "Hatchback",
        description: "A premium hatchback with outstanding off-road capabilities.",
        transmission: "Automatic",
        fueltype: "Diesel",
        seat: "5"
    },
    {
        _id: "5",
        name: "Mercedes-Benz C-Class",
        image: mercedesbenzaclass,
        price: "₹3500/day",
        category: "Sedan",
        description: "A sophisticated sedan with top-notch features.",
        transmission: "Automatic",
        fueltype: "Petrol",
        seat: "5"
    },
    {
        _id: "6",
        name: "BMW 530d",
        image: bmw530d,
        price: "₹3600/day",
        category: "Sedan",
        description: "A luxury sedan known for its performance and style.",
        transmission: "Automatic",
        fueltype: "Petrol",
        seat: "5"
    },
    {
        _id: "7",
        name: "Audi A8",
        image: audia8,
        price: "₹5000/day",
        category: "Sedan",
        description: "A high-end luxury sedan with advanced features.",
        transmission: "Automatic",
        fueltype: "Petrol",
        seat: "5"
    },
    {
        _id: "8",
        name: "BMW M4 Competition",
        image: bmwm4competition,
        price: "₹5500/day",
        category: "Sedan",
        description: "A high-performance coupe with a powerful engine.",
        transmission: "Automatic",
        fueltype: "petrol",
        seat: "2"
    },
    {
        _id: "9",
        name: "BMW X7",
        image: bmwx7,
        price: "₹6000/day",
        category: "SUV",
        description: "A full-sized luxury SUV with ample space and features.",
        transmission: "Manual",
        fueltype: "Diesel",
        seat: "7"
    },
    {
        _id: "10",
        name: "Mercedes-Benz Maybach GLS 600",
        image: maybachgls600,
        price: "₹10000/day",
        category: "SUV",
        description: "An ultra-luxurious SUV with exceptional comfort and features.",
        transmission: "Automatic",
        fueltype: "Petrol",
        seat: "4"
    },
    {
        _id: "11",
        name: "Land Rover Range Rover Autobiography",
        image: landroverrangeroverautobiography,
        price: "₹8000/day",
        category: "SUV",
        description: "A luxury SUV with superior off-road capabilities and features.",
        transmission: "Automatic",
        fueltype: "Diesel",
        seat: "4"
    },
    {
        _id: "12",
        name: "Land Rover Defender",
        image: landroverdefender,
        price: "₹7500/day",
        category: "SUV",
        description: "A rugged SUV built for extreme off-road conditions.",
        transmission: "Manual",
        fueltype: "Diesel",
        seat: "5"
    },
    {
        _id: "13",
        name: "Lamborghini Huracan EVO",
        image: laborghinihuracanevo,
        price: "₹12000/day",
        category: "Super",
        description: "A high-performance supercar with stunning design.",
        transmission: "Automatic",
        fueltype: "Petrol",
        seat: "2"
    },
    {
        _id: "14",
        name: "Porsche 911",
        image: porsche911,
        price: "₹11000/day",
        category: "Super",
        description: "An iconic sports car with outstanding performance.",
        transmission: "Automatic",
        fueltype: "Petrol",
        seat: "2"
    },
    {
        _id: "15",
        name: "McLaren 570s",
        image: mclaren570s,
        price: "₹13000/day",
        category: "Super",
        description: "A supercar known for its speed and aerodynamics.",
        transmission: "Automatic",
        fueltype: "Petrol",
        seat: "2"
    },
    {
        _id: "16",
        name: "Audi R8",
        image: audir8,
        price: "₹14000/day",
        category: "Super",
        description: "A high-performance supercar with a V10 engine.",
        transmission: "Automatic",
        fueltype: "Petrol",
        seat: "2"
    }
];


// {
//     "name" : "",
//     "description": "",
//     "price" :"",
//     "category" : "",
//     "transmission" : "",
//     "fueltype": "",
//     "seat":""
// }