import { Injectable } from '@angular/core';
import { DashboardModel } from '../models/dashboard.model'; // Ensure this path matches your project structure

@Injectable({
  providedIn: 'root'
})

export class DashboardService {

  constructor() { }

  private dataStore: DashboardModel[] = []; // In-memory data store for demonstration

  async getBuoyData(): Promise<DashboardModel> {

    try {

      const response = await fetch("https://example.com/api/dashboard-data");
      
      if (!response.ok) {

        throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);

      }
      
      const data = await response.json();
  
      const dashboardModel = new DashboardModel(
        data.deveui,
        data.waarde,
        new Date(data.tijdstempel)
      );
  
      return {
        deveui: "70-B3-D5-7E-D0-06-AF-F0",
        waarde: {
            ph: 7.0,
            egv: 1.2,
            oxygen: 8.5,
            temperature: 22.4,
            turbidity: 3.1
        },
        tijdstempel: new Date()
    };

    // TODO: Test m.b.v. Een console log in het dashboard component of je de deveui, meetwaardes en tijdstempel waardes uit deze service kan halen

    //return dashboardModel;
  
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }

  createBuoy() {

    // business-logic for creating a new buoy

  }

  updateBuoy() {

    // business-logic for creating a new buoy

  }

  deleteBuoy() {

    // business-logic for creating a new buoy

  }


}
