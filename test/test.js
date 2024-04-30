// Import chai and assign expect variable
import('chai').then(chai => {
    const expect = chai.expect;
    
    
    const baseUrl = "http://localhost:3000";

    
    const request = require("request");

    describe('User Form API', () => {
        describe('POST /saveUserForm', () => {
            it('should save user form data', (done) => {
                const formData = {
                    title: "BootStrap",
                    path: "images/bootstrap.jpeg",
                    subTitle: "About BootStrap",
                    description: "Bootstrap is the most popular HTML, CSS, and JavaScript framework for developing responsive, mobile-first websites.",
                };
    
                request.post({
                    url: baseUrl + '/api/tech/saveUserForm', // Update API endpoint path
                    json: true,
                    body: formData
                }, function (err, res, body) {
                    expect(res.statusCode).to.equal(200);
                    done();
                });
            });
    
            it('should return 400 if form data is invalid', (done) => {
                const invalidData = null;
    
                request.post({
                    url: baseUrl + '/api/tech/saveUserForm', // Update API endpoint path
                    json: true,
                    body: invalidData
                }, function (err, res, body) {
                    expect(res.statusCode).to.equal(400);
                    done();
                });
            });
        });
    
        describe('DELETE /deleteUser', () => {
            it('should delete user by email', (done) => {
                const titleToDelete = {
                    title: 'BOOTSTRAP'
                };
    
                request.delete({
                    url: baseUrl + '/api/tech/deleteUser', // Update API endpoint path
                    json: true,
                    body: titleToDelete
                }, function (err, res, body) {
                    expect(res.statusCode).to.equal(200);
                    done();
                });
            });
    
            it('should return 500 if email is not available', (done) => {
                const invalidTitle = {
                    title: null
                };
    
                request.delete({
                    url: baseUrl + '/api/tech/deleteUser', // Update API endpoint path
                    json: true,
                    body: invalidTitle
                }, function (err, res, body) {
                    expect(res.statusCode).to.equal(500);
                    done();
                });
            });
        });
    });
}).catch(error => {
    console.error('Error importing chai:', error);
});
