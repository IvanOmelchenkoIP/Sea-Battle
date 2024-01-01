package com.game.seabattle.controller.routing;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.view.RedirectView;

@RequestMapping("/")
@RestController
public class RouteRedirectController {

	@GetMapping
	public RedirectView showMenuPage() {
		return new RedirectView("/menu");
	}
}
