import { Injectable } from '@angular/core';
import { HousingLocationInfo } from './housinglocation';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

    url = 'http://localhost:3000/locations';

    async getAllHousingLocations(): Promise<HousingLocationInfo[]> {

      // TODO: Currently uses fetch, look into using HttpClient
      const data = await fetch(this.url);
      return (await data.json()) ?? [];
    }

    async getHousingLocationById(id: number): Promise<HousingLocationInfo | undefined> {
      const data = await fetch(`${this.url}?id=${id}`);
      const locationJson = await data.json();
      return locationJson[0] ?? {};
    }

    submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`,
    );
  }
}
