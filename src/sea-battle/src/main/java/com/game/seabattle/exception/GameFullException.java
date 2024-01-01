package com.game.seabattle.exception;

public class GameFullException extends Exception {

	private static final long serialVersionUID = 1L;

	public GameFullException() {
		super();
	}
	
	public GameFullException(String str) {
		super(str);
	}
	
	public GameFullException(String str, Throwable ex) {
		super(str, ex);
	}
	
	public GameFullException(Throwable ex) {
		super(ex);
	}
}
