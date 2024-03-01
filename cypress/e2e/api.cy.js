describe('add contact', () => {
  it('Add contact', () => {
    cy.request({
      method: 'POST',
      url: 'https://thinking-tester-contact-list.herokuapp.com/contacts',
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQyMjM3ODMxM2ZhNzAwMTM4ZGE3MjkiLCJpYXQiOjE3MDkyNjA5NDR9.n52xunILx-8vqHvUOlTRt7ZZlodAgoAq5kykTSvkFpQ'
      },
      body:
      {
        "firstName": "John",
        "lastName": "Dam",
        "birthdate": "1970-01-01",
        "email": "jdoe@fake.com",
        "phone": "8005555555",
        "street1": "1 Main St.",
        "street2": "Apartment A",
        "city": "Anytown",
        "stateProvince": "KS",
        "postalCode": "12345",
        "country": "USA"
        }
      }).should((response) => {
        expect(response.status).to.eq(201);
      });
    });
  });
  
  it('get contact list', () => {
    cy.request("GET", "https://thinking-tester-contact-list.herokuapp.com/contactList").should((response) => {
      expect(response.status).to.eq(200);
    });
  }); 
  
  it('get contact', () => {
    cy.request({
      method: 'GET',
      url: 'https://thinking-tester-contact-list.herokuapp.com/contacts',
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQyMjM3ODMxM2ZhNzAwMTM4ZGE3MjkiLCJpYXQiOjE3MDkyNjA5NDR9.n52xunILx-8vqHvUOlTRt7ZZlodAgoAq5kykTSvkFpQ'
      },
      body:
      {
        "id":"65d54221fd33c20013c9daaf", 
      }
    }).should((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it("update contact", () => {
    cy.request({
    method:'PUT',
    url:"https://thinking-tester-contact-list.herokuapp.com/contacts/65d54221fd33c20013c9daaf", 
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQyMjM3ODMxM2ZhNzAwMTM4ZGE3MjkiLCJpYXQiOjE3MDkyNjA5NDR9.n52xunILx-8vqHvUOlTRt7ZZlodAgoAq5kykTSvkFpQ',
      },
    body:
    {
      "firstName": "John",
        "lastName": "Dat",
        "birthdate": "1970-01-01",
        "email": "jdoe@fake.com",
        "phone": "8005555555",
        "street1": "1 Main St.",
        "street2": "Apartment A",
        "city": "Anytown",
        "stateProvince": "KS",
        "postalCode": "12345",
        "country": "USA"      
      } 
    }).should((response) => {
      expect(response.status).to.eq(200);
    });
  });
  
  it("DELETE contact", () => {
   cy.request("DELETE", "https://thinking-tester-contact-list.herokuapp.com/65d54221fd33c20013c9daaf").should((response) => {
      expect(response.status).to.eq(204);
    });
  });
