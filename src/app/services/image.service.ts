import { Injectable } from '@angular/core';
import { Storage, getDownloadURL, list, ref, uploadBytes } from '@angular/fire/storage';
import { async } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImageService {

  url: string = ";"
  constructor(private storage: Storage) {}

  public uploadImage($event: any, name: string) {
    const file = $event.target.files[0];
    const imageRef = ref(this.storage, `image/` + name);
    uploadBytes(imageRef, file)
      .then((response) => {
        this.getImage();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getImage() {
    const imageRef = ref(this.storage, "image");
    list(imageRef)
    .then(async response => {
      for(let item of response.items) {
        this.url = await getDownloadURL(item);
      }
    })
    .catch((err) => {
      console.log(err);
    });
  }
}
