describe('Validate login scenario',()=>
	{
    	beforeEach(()=>{
        	cy.viewport(1920,1080);
    	})
	it('HSBC login test case',()=>
	{
    	cy.visit('https://www.hsbc.co.in/');
    	cy.wait(4000)
    	cy.get('img[alt="HSBC India Bank"]').first().should('be.visible');
    	cy.title().should('eq','HSBC India - Credit Cards, NRI Services, Saving and Deposit')
    	cy.wait(1000);
    	cy.get('a.selected-item.login-button.only-one-link').first().should('be.visible');
    	cy.contains('Log On').click({force:true});
    	cy.url().should('include','/#modal');
    	cy.wait(3000)
    	cy.get('div>a.crh-button').first().click({force:true});
    	cy.wait(1000)
    	cy.contains('Log On').click({force:true});
    	cy.contains('Log on').should('be.visible')
    	cy.get('#username_submit_btn').should('be.visible').and('be.disabled');
    	cy.get('.username-field').type('niraj@gmail.com')
    	cy.get('#username_submit_btn').should('be.visible').and('not.be.disabled');
    	cy.get('#username_help_link > [role="text"] > .icon').should('be.visible').click({force:true});
    	cy.get('.t16b>span:visible').should('be.visible');
    	cy.get('a.close-btn>[role="text"]>.icon').should('be.visible').click({force:true})
    	cy.screenshot();

	})

})



