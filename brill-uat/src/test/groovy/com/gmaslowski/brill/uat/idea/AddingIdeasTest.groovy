package com.gmaslowski.brill.uat.idea

import com.gmaslowski.brill.uat.UATBasicSpecification

class AddingIdeasTest extends UATBasicSpecification {

    def "should add an idea"() {
        when:
        def response = BRILL.post(
                path: IDEAS_API,
                body: [description: "groovy-test-idea"],
                requestContentType: APPLICATION_JSON)

        then:
        response.status == 200
        response.data._id != null
    }
}