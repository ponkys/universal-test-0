import { Injectable } from '@angular/core';

@Injectable()
export class ResourceService {

  constructor() {}

  getImage(index, path): string {
    let res = '';
    if (path !== '') {
        res = `url(${path})`;
    }
    return res;
  }


}
