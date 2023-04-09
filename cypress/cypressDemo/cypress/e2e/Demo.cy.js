describe('Http Method', function(){
    it('GET',function(){
        cy.request({
            method : 'GET',
            url : 'https://ykij0bteij.execute-api.us-east-1.amazonaws.com/new/farm',
        }).then(function(response){
           // expect(response.body).have.property('url');
        });
    });
    it('POST',()=>{
        cy.request({
            method:"POST",
            url : 'https://ykij0bteij.execute-api.us-east-1.amazonaws.com/new/farm',
            headers : {
                'Content-Type': 'application?JSON'
            },
            body : {
                "farm_id":"10",
                "farm_name":"GeetaBhawan",
                "city":"indore",
                "lat":123,
                "long":321,
                "country":"india"
            }
        }).then((response)=>{
         //   expect(response.body).to.have.property('JSON');
            //expect(response.body.JSON).to.deep.equal({"farm_id":"10"})
        })
    })
})