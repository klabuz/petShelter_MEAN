import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BeltService {

  constructor(private _http: HttpClient) { }

  getAll() {
    return this._http.get('/api/pets');
  }

  getOne(id) {
    return this._http.get(`/api/pets/${id}`);
  }

  addNew(newItem) {
    return this._http.post('/api/pets', newItem);
  }

  update(id, item) {
    return this._http.put(`/api/pets/${id}`, item,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }

  delete(id) {
    return this._http.delete(`/api/pets/${id}`);
  }

  vote(id) {
    console.log(id);
    return this._http.post(`/api/pets/likes/${id}`, {});
  }

}
