package com.game.seabattle.controller.routing;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RequestMapping("/menu")
@RestController
public class MenuController {

	@GetMapping
	public ModelAndView showMenuPage() {
		return new ModelAndView("menu.html");
	}
}
