package com.game.seabattle.httpbody.response;

public class HttpResponseBody {

	private String message;
	
	public HttpResponseBody(String message) {
		this.message = message;
	}
	
	public void setMessage(String message) {
		this.message = message;
	}
	
	public String getMessage() {
		return message;
	}
}
