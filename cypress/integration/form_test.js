describe('pizza App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    const name = () => cy.get('input[name=name]');
    const pizzaSize = () => cy.get('input[name=lastName]');
    const pizzaSauce = () => cy.get('input[name=username]');
    const specialOrder = () => cy.get('input[name=email]');
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
      })

      describe('Filling out the inputs and cancelling', () => {
        it('can navigate to the site', () => {
          cy.url().should('include', 'localhost');
        })
    
        it('submit button starts out disabled', () => {
          submitButton().should('be.disabled');
        })

        it('can type in the inputs', () => {
            firstName()
              .should('have.value', '')
              .type('Tafiqul')
              .should('have.value', 'Tafiqul')
      
            lastName()
              .should('have.value', '')
              .type('Tosuak')
              .should('have.value', 'Tosuak')
            
            username()
              .should('have.value', '')
              .type('tosuak')
              .should('have.value', 'tosuak')

            email()
              .should('have.value', '')
              .type('tosuak@gmail.com')
              .should('have.value', 'tosuak@gmail.com')
            
            password()
              .should('have.value', '')
              .type('12345')
              .should('have.value', '12345')
          })
      
          it('the submit button enables when both inputs are filled out', () => {
            firstName().type('Tafiqul');
            lastName().type('Tosuak');
            username().type('tosuak');
            email().type('tosuak@gmail.com');
            password().type('12345');
            submitButton().should('not.be.disabled');
          })
      
        })
})