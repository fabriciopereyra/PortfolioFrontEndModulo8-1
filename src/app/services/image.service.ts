import { Injectable } from '@angular/core';
import {
  Storage,
  getDownloadURL,
  list,
  ref,
  uploadBytes,
} from '@angular/fire/storage';
import { async } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  url: string = '';

  constructor(private storage: Storage) {}

  public uploadImage($event: any, directory: string, name: string) {
    const imageRef = ref(this.storage, directory + name);
    const file = $event.target.files[0];
    uploadBytes(imageRef, file)
      .then((response) => {
        this.getImage(directory, name);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getImage(directory: string, name: string) {
    const imageRef = ref(this.storage, directory);
    list(imageRef)
      .then(async (response) => {
        for (let item of response.items) {
          if (name === item.name) {
            this.url = await getDownloadURL(item);
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
