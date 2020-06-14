package com.fullstackapp.ecommerce.config;

import org.springframework.boot.web.embedded.tomcat.TomcatServletWebServerFactory;
import org.springframework.boot.web.server.WebServerFactoryCustomizer;
import org.springframework.stereotype.Component;

@Component
public class MyTomcatWebServerCustomizer
		implements WebServerFactoryCustomizer<TomcatServletWebServerFactory> {

	@Override
	public void customize(TomcatServletWebServerFactory factory) {
		String portNo = System.getenv("PORT");
		if(portNo == null) {
			portNo = "8080";
		}
		factory.setPort(Integer.valueOf(portNo));
	}
}