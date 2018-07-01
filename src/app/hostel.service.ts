import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HostelService 
{

  constructor() { }

  GetHostelDetails()
{
  return [
    {"Name":"ABC", "Fees":9000, "Duration":"1 Months"},
    {"Name":"XYZ", "Fees":7500, "Duration":"2 Months"},
    {"Name":"PQR", "Fees":2500, "Duration":"3 Months"},
    {"Name":"MNR", "Fees":4000, "Duration":"4 Months"},
        ];
}

}
