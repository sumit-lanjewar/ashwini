/// <reference types='cypress'/>

import opencart from "../e2e/POM/opencartpom.cy.js";

describe("ygdg", function() {
  let opc = new opencart();

  beforeEach(function() {
    cy.visit("https://demo.opencart.com/admin/index.php");
    opc.username();
    opc.password();
    opc.submit();
    opc.popup();
    opc.parentcustomer();
    opc.childcustomer();
  });

  it("checking number of rows and columns", function() {
    cy.get('table[class="table table-bordered table-hover"] >tbody>tr').should("have.length", 10);
    cy.get('table[class="table table-bordered table-hover"]>thead>tr>td').should("have.length", 7);
  });

  it("printing values from table", function() {
    cy.get('table[class="table table-bordered table-hover"]>tbody>tr').each(($row, index, $rows) => {
      cy.wrap($row).within(() => {
        cy.get('td').each(($col, index, $cols) => {
          cy.log($col.text());
        });
      });
    });
  });

  it("printing data by another method", function() {
    cy.get('tbody > tr:nth-child(4) > td:nth-child(3)').then(function(data) {
      let text = data.text();
      expect(text).include("gorankrezic90@gmail.com");
    });

    cy.get("div.table-responsive thead").then(function(data) {
      let text = data.text();
      cy.log(text);
      expect(text).includes("Customer Name");
    });

    cy.get("div.table-responsive tbody tr").then(function(data) {
      let text = data.text();
      cy.log(text);
    });
  });

  it.only("pagination finding number of pages", function() {
    
    cy.get(".col-sm-6.text-end").then((e) => {
      let str = e.text();
    // let  totalpages = mytext.substring(mytext.indexOf("(") + 1, mytext.indexOf("pages") - 1);
    //   totalpages=parseFloat(totalpages)
    //   cy.log("total number of pages: " + totalpages);
      //const str = "Showing 1 to 10 of 13295 (1330 Pages)";
 const startIndex = str.lastIndexOf("(") + 1;
 const endIndex = str.lastIndexOf(" Pages");
 const totalPages = parseInt(str.substring(startIndex, endIndex));

cy.log(totalPages); // Output: 1330

    });
  });
  it("checking pagination pages and validating one of  fromtable",function(){
    let tp = 5;
    for (let p = 1; p <= tp; p++) {
      if (tp > 1) {
        cy.get('ul[class="pagination"] li:nth-child(' + p + ')').click();
        cy.wait(3000);
        cy.get('table[class="table table-bordered table-hover"]>tbody>tr').each(($row, index, $rows) => {
          cy.wrap($row).within(() => {
            cy.get('td').each(($col, index, $cols) => {
              cy.get("td:nth-child(3)").then(data => {
                const el = data.text();
                cy.log(el);
              });
            });
          });
        });
      }
    }
})
})
    
