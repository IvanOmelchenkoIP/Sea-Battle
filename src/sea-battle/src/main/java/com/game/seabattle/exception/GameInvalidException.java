package com.game.seabattle.exception;

public class GameInvalidException extends Exception {

	private static final long serialVersionUID = 1L;

	public GameInvalidException() {
		super();
	}
	
	public GameInvalidException(String str) {
		super(str);
	}
	
	public GameInvalidException(String str, Throwable ex) {
		super(str, ex);
	}
	
	public GameInvalidException(Throwable ex) {
		super(ex);
	}
}
