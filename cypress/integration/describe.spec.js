/// <references types="cypress" />

// only execute a this test
it('a external test', () => {

});


describe('should group tests...', () => {
    // skip a group test
    describe.skip('should group more especific tests...', () => {
        // skip a test
        it.skip('a specific test', () => {

        });

        it('a other specific test', () => {

        });
    });

    describe('should group 2 more especific tests...', () => {
        // skip a test
        it.skip('a specific test', () => {

        });

        it('a other specific test', () => {

        });
    });

    it('a internal test', () => {

    });
});