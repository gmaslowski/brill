package com.gmaslowski.brill.uat

import groovyx.net.http.RESTClient
import spock.lang.Specification

class UATBasicSpecification extends Specification {

    public static final RESTClient BRILL = new RESTClient("http://localhost:3000")

    public static final String APPLICATION_JSON = "application/json"

    public static final String IDEAS_API = "/api/ideas"
}