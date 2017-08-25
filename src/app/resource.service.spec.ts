import { TestBed, inject } from '@angular/core/testing';

import { ResourceService } from './resource.service';

describe('ResourceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResourceService]
    });
  });

  it('should be created', inject([ResourceService], (service: ResourceService) => {
    expect(service).toBeTruthy();
  }));

  it('should return modified string', inject([ResourceService], (service: ResourceService) => {
    const result = 'url(link.jpg)';
    const link = 'link.jpg';
    expect(service.getImage(link)).toEqual(result);
  }));
});
