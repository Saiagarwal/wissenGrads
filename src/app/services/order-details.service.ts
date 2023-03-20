import { Injectable } from '@angular/core';
import { UrlHandlingStrategy } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }




  //fooddetails

  foodDetails=[
    {
      id:1,
      foodName:"Seekh Kabab",
      foodDetails:"roasted kababs served straight from the grill with delicious mint chutney.",
      foodPrice:250,
      foodImg: '../../../assets/kabab.jpg'
    },
    {
      id:2,
      foodName:"Strawberry Cheesecake",
      foodDetails:"Delectable cheesecake made with fresh strawberries and rich cream cheese is sure to make you fall in love berry much!!!.",
      foodPrice:200,
      foodImg:'../../../assets/cheesecake.jpg'
    },
    {
      id:3,
      foodName:"Litti Chokha",
      foodDetails:"Served with the goodness of desi ghee with hot and spicy chokha is not something you should miss.",
      foodPrice:300,
      foodImg:'../../../assets/litti.jpg'
    },
    {
      id:4,
      foodName:"Mezze Platter",
      foodDetails:"Assortment of small dishes that can surely make you go mad for this crazy and rich platter.",
      foodPrice:450,
      foodImg:'../../../assets/mezze.jpg'
    },
    {
      id:5,
      foodName:"Hot Chilli Dumplings",
      foodDetails:"Classic steamed dumplings stuffed with finely chopped vegetables tosses in hot chilli oil, enough to make your heart pounce.",
      foodPrice:200,
      foodImg:'../../../assets/momos.jpg'
    },
    {
      id:6,
      foodName:"Pancake",
      foodDetails:"Now enjoy your favourite, fingerlicking pancake with the goodness of fine dining.",
      foodPrice:300,
      foodImg:'../../../assets/pancake.jpg'
    },
    {
      id:7,
      foodName:"Pina Colada",
      foodDetails:"this summer beat the heat! with our super refreshing pina colada .",
      foodPrice:150,
      foodImg:'../../../assets/pina.jpg'
    },
    {
      id:8,
      foodName:"Chocolate Roullade",
      foodDetails:"rolls with rich chocolate filled to the very corner.",
      foodPrice:275,
      foodImg:'../../../assets/roullade.jpg'
    },
    {
      id:9,
      foodName:"Sarso ka Saag and Makke ki Roti",
      foodDetails:"go on a mini trip to the farms of punjab with our sarso ka saag and makke ki roti .",
      foodPrice:250,
      foodImg:'../../../assets/sarso.jpg'
    },
    {
      id:10,
      foodName:"Taco",
      foodDetails:"eat tasty without feeling guilty about those carbs, we serve freshly made tacos with loads of freshly chopped vegetables.",
      foodPrice:400,
      foodImg:'../../../assets/taco.jpg'
    },
    {
      id:11,
      foodName:"Pad Thai Noodles",
      foodDetails:"make your evening extra special on;y with our pad thai noodles!!!.",
      foodPrice:250,
      foodImg:'../../../assets/thai.jpg'
    },
    

  ]

}
