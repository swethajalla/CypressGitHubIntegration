/// <reference types="Cypress" />
describe('Login the ineuron app', () => {
    it('Login test', () => {
        cy.visit("https://ineuron-courses.vercel.app/login")
        cy.get("input[name='email1']").type("ineuron@ineuron.ai")
        cy.get("input[name ='password1']").type("ineuron")
        cy.get(".submit-btn").click()
        
        
    
        
    });
});