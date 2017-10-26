import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 0, name: 'Hansi Held' },
      { id: 11, name: 'Isidor Ironman' },
      { id: 12, name: 'Sabine Superwomen' },
      { id: 13, name: 'Sandro Superman' },
      { id: 14, name: 'Basti Batman' },
      { id: 15, name: 'Franzi Feuerwerfer' },
      { id: 16, name: 'Sebastian Schnellläufer' },
      { id: 17, name: 'Harald Hulk' },
      { id: 18, name: 'Adolf Alphaheld' },
      { id: 19, name: 'Thomas Thor' },
      { id: 20, name: 'Kevin' }
    ];
    return {heroes};
  }
}
