describe('Perform Navigation', ()=>{
    Given( 'I open the Libri web url',()=>{
        cy.visit('https://www.libri.hu')
    });
    
    Then('I verify title of web page as {string}', (title) => {
        cy.title().should('include', title);
    });
});

describe('Close starting pop-up',()=>{
    Given( 'I open the Libri web url',()=>{
        cy.visit('https://www.libri.hu');
    });

    When('Pop-ups shown, should be closed after' , () =>{
        cy.get('[id="onetrust-accept-btn-handler"]')
            .click();
        cy.get('[title="Close"]')
            .click();
    });

    Then('Pop-ups shouldnt be displayed', ()=>{
        cy.get('[class="no-js"]')
    });
});

describe('Check search', ()=>{
    Given( 'I open the Libri web url',()=>{
        cy.visit('https://www.libri.hu');
    });
    
    When('I close pop ups', ()=>{
         cy.get('[id="onetrust-accept-btn-handler"]')
            .click();
         cy.get('[title="Close"]')
            .click();
    });

    And('I type {string} in the search field' , (booktitle) =>{
        cy.get('[id="topsearch_input"]')
            .type(booktitle)
                .should('have.value',booktitle);
    });

    And('Click on the search button',()=>{
        cy.get('[title="Keresés"]')
            .click();
    });

    Then('Found books should be shown', ()=>{
        cy.get('[class="box-product-full clearfix gtm gtm-view gtm-view-processed"]')
            .should('have.attr','data-name')
                .should('include','Vaják');
    });

});


describe('Home page Libri title should be linked', ()=>{
    Given( 'I open the Libri web url',()=>{
        cy.visit('https://www.libri.hu');
    });
    
    When('I close pop-ups' , () =>{
        cy.get('[id="onetrust-accept-btn-handler"]')
            .click();
        cy.get('[title="Close"]')
            .click();
    });

    And('I click on the Home page title',()=>{
        cy.get('[class="sprite-brand-logo"]')
            .click()
    });

    Then('It should throw back to the Main page', ()=>{
        cy.wait(1000)
        cy.url()
            .should('eq','https://www.libri.hu/')
    })

});


describe('Menu option Fizetés és szállítás', ()=>{
    Given('I open the Libri web url',()=>{
        cy.visit('https://www.libri.hu');
    });

    When('I close pop-ups',()=>{
        cy.get('[id="onetrust-accept-btn-handler"]')
            .click();
        cy.get('[title="Close"]')
            .click();
    });

    And('I click on the Fizetés és szállítás option',()=>{
        cy.get('[href="/cikk/fizetes_es_szallitas"]')
            .click();
    });

    Then('It should navigate me to a new page describing that', ()=>{
        cy.url()
            .should('eq','https://www.libri.hu/cikk/fizetes_es_szallitas');
    });
});

describe('Navigating to detailed search', ()=>{
    Given('I open the Libri web url',()=>{
        cy.visit('https://www.libri.hu');
    });

    When('I close pop ups',()=>{
        cy.get('[id="onetrust-accept-btn-handler"]')
            .click();
        cy.get('[title="Close"]')
            .click();
    });

    And('I click on the Részletes keresés option',()=>{
        cy.get('[href="/reszletes_kereso/"]')
            .click();
    });

    Then('It should navigate me to a new page to use it', ()=>{
        cy.url()
            .should('eq','https://www.libri.hu/reszletes_kereso/');
    })
});

describe('Using detailed search', ()=>{
    Given('I open the Libri web url',()=>{
        cy.visit('https://www.libri.hu');
    });

    When('I close pop ups',()=>{
        cy.get('[id="onetrust-accept-btn-handler"]')
            .click();
        cy.get('[title="Close"]')
            .click();
    });

    And('I click on the Részletes keresés option',()=>{
        cy.get('[href="/reszletes_kereso/"]')
            .click();
    });

    And('I type in {string} in the name field',(name)=>{
        cy.get('[id="s_szerzo"]')
            .type(name);
    });    

    And('I click on Keresés button',()=>{
        cy.get('[value="Keresés"]')
            .click();
    })    

    Then('It should navigate me to a new page showing products related to the given infromation', ()=>{
        cy.get('[class="authors"]')
            .should('have.attr','content')
                .should('include','Babits Mihály');
    })
});

describe('Possible to put item in the shopping cart', ()=>{
    Given('I open the Libri web url',()=>{
        cy.visit('https://www.libri.hu');
    });

    When('I close pop ups',()=>{
        cy.get('[id="onetrust-accept-btn-handler"]')
            .click();
        cy.get('[title="Close"]')
            .click();
    });

    And('I type {string} in the search field' , (booktitle) =>{
        cy.get('[id="topsearch_input"]')
            .type(booktitle)
                .should('have.value',booktitle);
    });

    And('I click on the search button',()=>{
        cy.get('[title="Keresés"]')
            .click();
    });

    And('I click on one item to put in the shopping cart',()=>{
        cy.get('[onclick="addToBasket(3272883);return false;"]')
            .click();
    });

    Then('It should make a sign about the picked item', ()=>{
        cy.get('[id="libriMessagePanelContent"]')
            cy.get('[class="msgOk"]')
                .should('have.text','A termék a kosárba került.');
    })
});

describe('Possible to put items in the shopping cart', ()=>{
    Given('I open the Libri web url',()=>{
        cy.visit('https://www.libri.hu');
    });

    When('I close pop ups',()=>{
        cy.get('[id="onetrust-accept-btn-handler"]')
            .click();
        cy.get('[title="Close"]')
            .click();
    });

    And('I type {string} in the search field' , (booktitle) =>{
        cy.get('[id="topsearch_input"]')
            .type(booktitle)
                .should('have.value',booktitle);
    });

    And('I click on the search button',()=>{
        cy.get('[title="Keresés"]')
            .click();
    });

    And('I click on items to put in the shopping cart',()=>{
        cy.get('[onclick="addToBasket(3272883);return false;"]')
            .click();
        cy.get('[onclick="addToBasket(7167796);return false;"]')
            .click();
    });

    Then('It should make a sign about the picked items', ()=>{
        cy.get('[id="basketBoxSumPiece"]')
            .should('have.text',22);
    })
});

describe('Possible to view picked items by clicking', ()=>{
    And('I click on the items I picked in the top right corner', ()=>{
            cy.get('[id="basketBoxOpenIcon"]')
                .click();
    })

    Then('It should show a list about the order', ()=>{
        cy.get('[data-list="Kosár doboz lista"]')
                .should('have.attr','data-quantity')
                    .should('eq','1');
    })
})