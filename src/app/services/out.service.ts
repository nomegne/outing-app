import { Out } from "../models/out";





export class OutService{
    outs: Out []=[
{categories:"retaurant",name:"la saveur",description:"savourer",lieu:"vincent gache"},
{categories:"retaurant",name:"la saveur",description:"savourer",lieu:"vincent gache"},
{categories:"retaurant",name:"la saveur",description:"savourer",lieu:"vincent gache"}

    ];

    constructor(){}
    getOutService():Out[]{
    return this.outs;
  }
}



 
