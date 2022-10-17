describe('create a new user', () => {
  it('New user sign up', () => {
    cy.visit("https://ineuron-courses.vercel.app/login")
    //cy.get("input[name='email1']").type("ineuron@ineuron.ai")
    //cy.get("input[name ='password1']").type("ineuron")
    //cy.get(".submit-btn").click()
    cy.contains("New user").click()
    cy.get("#name").type("Swetha")
    cy.get("#email").type("swethalearncypress3@gmail.com")
    cy.get("#password").type("password")
    cy.xpath("//label[text()='Data Science']/preceding::input[1]").click()
    cy.get("input[value='Female']").click()
    cy.get("select[name='state']").select("Bihar")
    cy.contains("Sign up").should("be.enabled").click()

    
  })
})