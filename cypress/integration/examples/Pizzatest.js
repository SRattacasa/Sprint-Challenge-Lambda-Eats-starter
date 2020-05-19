describe("Testing our form inputs", () => {
    
    it("This should visit the site", () => {
        cy.visit("http://localhost:3000/pizza")
    })

    it("Finds Name Input", () => {
        cy.get('[for="ordername"] > input')
    })

    it("Enters Name Input", () => {
        cy.get('[for="ordername"] > input').type("Clark Kent").should("have.value", "Clark Kent");
    })

    it("Check a few boxes for toppings", () => {
        cy.get('[type="checkbox"]').check()
    })

    it("Can it submit the form?", () => {
        cy.get('form').submit();
    })
})
