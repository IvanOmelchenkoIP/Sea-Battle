# Sea Battle

Гра - морський бій.

## Дизайн-докмент

[Посилання](https://github.com/IvanOmelchenkoIP/Sea-Battle/blob/main/docs/design-document.md)

## Технологій

Використані технології - Spring Boot (Microsoft Build of Java OpenJDK 17) для бекендку, JavaScript, HTML, CSS.

## Запуск

Програму можна запустити, відкривши проект і запустити клавішу Launch Run у IDE Eclipse (у даному IDE проходила розробка, необхідно JRE або JDK, проекту можливо необхідно деякий час для дозавантаження). Також у папці: 
	
	./src/sea-battle/src/main/resources/static 
	
Необхідно встановити @stomp/stompjs:

	npm install @stomp/stompjs
	
## Функціонал

Функціональним є меню (можна створити онлайн гру і приєднатись до онлайн гри) і розміщення кораблів. Існує логіка взаємодії ігрового процесу, але потребує правок для кращої читаємості коду і сервер ламає збереження даних кораблів.

## Подальша розробка 

Подальна розробка відбувається у гілці **development**.

