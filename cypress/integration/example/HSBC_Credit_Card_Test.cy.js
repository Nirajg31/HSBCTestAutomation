describe('Credit card test',()=>
	{
    	beforeEach(()=>{
        	cy.viewport(1920,1080);
    	})
	it('Credit card test',()=>
	{
    	cy.visit('https://www.hsbc.co.in/')//
    	cy.wait(3000)
    	cy.contains('Banking').trigger('mouseover');
    	cy.contains('Credit Cards').click({force:true})
    	cy.url().should('include','/credit-cards/');
    	cy.contains('Credit Card').should('exist');
    	cy.get('h3 a span:nth-child(1)').eq(1).should('contain.text', 'HSBC Cashback Credit Card');
    	cy.get('.link').contains('HSBC Cashback Credit Card').click({force:true})
    	cy.wait(4000);
    	cy.url().should('include','/credit-cards/products/visa-cashback/');
    	cy.contains('Apply now').should('exist');
    	cy.contains('Joining fee').parent().next().should('contain.text', 'INR999');
    	cy.get('img[src*="visa-cashback-card-1600x900.jpg"]').should('be.visible');
    	cy.contains('INR999 (waived if you spend more than INR200,000 per year)').should('exist');    
    	cy.get('img.LPMimage', { timeout: 10000 }).should('be.visible');
    	cy.get('.header-logo>a>img').click({force:true});
    	cy.wait(10000);
    	cy.title().then((title) =>
    	{
        	expect(title).to.equal('HSBC India - Credit Cards, NRI Services, Saving and Deposit');
     	});
     	cy.screenshot();
 	})
})
