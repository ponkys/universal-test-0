// import { TestBed, inject } from '@angular/core/testing';
// import {HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
// import { HttpClient } from '@angular/common/http';

// import { FeedService } from './feed.service';

// describe('FeedService', () => {
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [
//         HttpClientTestingModule,
//       ],
//       providers: [FeedService]
//     });
//   });

//   it('should be created', inject([FeedService], (service: FeedService) => {
//     expect(service).toBeTruthy();
//   }));

//   it('expects a GET request', inject([HttpClient, HttpTestingController], (http: HttpClient, httpMock: HttpTestingController) => {
//     // Make an HTTP GET request, and expect that it return an object
//     // of the form {name: 'Test Feed'}.
//     http
//       .get('/feed')
//       .subscribe(feed => expect(feed['name']).toEqual('Test Feed'));

//     // At this point, the request is pending, and no response has been
//     // sent. The next step is to expect that the request happened.
//     const req = httpMock.expectOne('/Feed');

//     // If no request with that URL was made, or if multiple requests match,
//     // expectOne() would throw. However this test makes only one request to
//     // this URL, so it will match and return a mock request. The mock request
//     // can be used to deliver a response or make assertions against the
//     // request. In this case, the test asserts that the request is a GET.
//     expect(req.request.method).toEqual('GET');

//     // Next, fulfill the request by transmitting a response.
//     req.flush({name: 'Test Feed'});

//     // Finally, assert that there are no outstanding requests.
//     httpMock.verify();
//   }));

//   afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {
//     httpMock.verify();
//   }));
// });
