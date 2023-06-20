///< reference types= "cypress "/>
//const data = require("../../fixtures/postapidata")

describe("user post api", function() {

  let accesToken = 'ad408baa49975e5a7705ced7e3ed54a29dd2798a0e8dfcadffbcd1a399b45fb4';

  it("should create a new user and verify the response", function() {

    // Generate a random email for the new user
    const length = 10;
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    const testemail = result + '@gmail.com';

    // Send a POST request to create a new user
    cy.request({
      method: "POST",
      url: "https://gorest.co.in/public/v2/users",
      headers: {
        'Authorization': "Bearer " + accesToken
      },
      body: {
        "id": data.id,
        "name": data.name,
        "email": testemail,
        "gender": data.gender,
        "status": "active"
      }
    }).then((response) => {

      // Verify the response from the API
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('email', testemail);
      expect(response.body).to.have.property('gender', data.gender);
      expect(response.body).to.have.property('status', 'active');

      // Get the ID of the new user from the response
      const userid = response.body.id;

      // Send a GET request to verify the user details
      cy.request({
        method: "GET",
        url: "https://gorest.co.in/public/v2/users/" + userid,
        headers: {
          'Authorization': "Bearer " + accesToken
        }
      }).then((response) => {

        // Verify the response from the API
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('email', testemail);

      });
    });
  });
});

 
//  describe("usert post api",function(){


// // // //let accesstoken ="4d922482156d8e3a267a23abdad509428718e6cc9be3389ceb675f418addd3b9";
// let accesToken='ad408baa49975e5a7705ced7e3ed54a29dd2798a0e8dfcadffbcd1a399b45fb4'

//  it("hitting post api and validating through get request",function(){

//      //it("hitting api call",function(){
//  cy.request({
//  method:"POST",
//   url: "https://gorest.co.in/public/v2/users",
//   headers:{
//    'Authorization': "Bearer"+accesToken

    
//  },
//     body:{
//          "id": 158009,
//          "name": "amit Kocchar", 
//          "email": "34sumit_kocchar@strosin.com", 
//          "gender": "male",     
//              "status": "active" 

//    }

//  }).then((response)=>{
// expect(response.body.email).has.property("email","34sumit_kocchar@strosin.com")
// expect(response.body.id).has.property("id","158001")
//  expect(response.body.gender).has.property("gender","male")
//  }).then((response)=>{
//      let userid= response.body.id
//     cy.request({
//          method:"GET",
//         url:"https://gorest.co.in/public/v2/users/"+userid,
//         headers:{         "Authorization":'Bearer' +accesToken    
//        }

//      }).then((response)=>{
// expect(response.status).to.equal(200)
// expect(response).has.property(userid)
//          expect(response.body.email).has.property("email","34sumit_kocchar@strosin.com")
//        })
//  })
 
  
  
 



    