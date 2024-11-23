////// <reference types ="cypress" />
describe("Lesson3",()=>{
    it('Task1', () => {
cy.visit("https://demo.productionready.io/#/register")
cy.get('.container').contains("conduit").first()
cy.get('.nav-link').contains("Home")//cy.get('.li.nav-item').contains("Home")
cy.get('.ng-scope').find('h1') // for the big sing up title 
cy.get('.nav-item').contains('Sign up')// for the sign up trigger 
cy.get("[href='#/login']")// or we can use cy.get('text-xs-center').contains('Have an account') 
cy.get("[ng-model='$ctrl.formData.username']")
cy.get("[ng-model='$ctrl.formData.email']")
cy.get("[type='password']")
cy.get("button")
cy.get('.container').last().find('a').contains("conduit") //cy.get("[href='conduit']").last()
cy.get('.container').find('span')
});

});