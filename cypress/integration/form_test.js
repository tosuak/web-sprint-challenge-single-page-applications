describe('pizza App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    const name = () => cy.get('input[name=name]');
    const pizzaSize = () => cy.get('input[name=pizzaSize]');
    const pizzaSauce = () => cy.get('input[name=pizzaSauce]');
    const specialOrder = () => cy.get('input[name=specialOrder]');
    const orderButton = () => cy.get('button[id="order-button"]');
    const toppings = () => cy.get('input[class="toppings"]')


    it('sanity check to make sure tests work', () => {
        expect(1 + 2).to.equal(3);
        expect(2 + 2).not.to.equal(5); 
        expect({}).not.to.equal({}); 
        expect({}).to.eql({})
    })

    it('the proper elements are showing', () => {
        name().should('exist');
        pizzaSize().should('exist');
        pizzaSauce().should('exist');
        specialOrder().should('exist');
        orderButton().should('exist');
        toppings().should('exist');
      })

      describe('Filling out the inputs', () => {
        it('can navigate to the site', () => {
          cy.url().should('include', 'localhost');
        })
    
        it('submit button starts out disabled', () => {
          orderButton().should('be.disabled');
        })

        it('can type in the inputs', () => {
            name()
              .should('have.value', '')
              .type('Tafiqul')
              .should('have.value', 'Tafiqul')
      
            pizzaSize()
              .should('have.value', '')
              .type('small')
              .should('have.value', 'small')

            pizzaSauce()
              .should('have.value', '')
              .type('original red')
              .should('have.value', 'original red')
            
          })
      
          it('the submit button enables when both inputs are filled out', () => {
            name().type('Tafiqul');
            pizzaSize().type('small');
            pizzaSauce().type('original red');
            orderButton().should('not.be.disabled');
          })
      
        })
})