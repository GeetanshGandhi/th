import React from 'react'
import './Letter.css'
import ScrollAnimation from 'react-animate-on-scroll'
export default function Letter() {
	const mess1 = `yeah well it took longer than u thought or expected but i wanted to do something more than plain text so here it is my pookie.. <3`
	const mess2 = `also i'd never think of a day (30 June 2024) better than today to have a mood worth writing an amazing letter to you finally HAPPY THREE YEARS TO USS BABYYYY and it just feels like much more than 3 years we fell in love as kids we did so much as kids we fooled around together and then we grew up together we learned together and now we're two interesting person and one boring uncle aunty couple lol its just so overwhelming damnnn i have loved you the most, I still do and i will love you till forever ends.`
	const mess3 = `Although it seemed a little bit like forever ended up in january but here we are kaleshing our ways to all the pre-existing forevers hehe i only wanna fight you ALWAYS.`
	const mess4 = `But Jokes aside, no matter how hard we fight it is just so difficult to spend even a day without you jab bhi tu gussa hotie nazar hoti mujhse that day out of nowhere just becomes the worst i get so annoyed when i dont have you. I never thought once again i would get on this stage of relationship with you but you are just so irresistable! (ofc your perky t#ts are irresistable too) But yes be assured always that you make me 10000x happier than how much they make me happy. And they make me so so so sooooooo happy u would never know so do the math about yourself too ;) Its just damn I love you bro❤️❤️❤️❤️`
	const mess5 = `Although i dont sound excited enough but I'll always be the person who is eager to know about how your day was. Hearing all the rants about your college homeland dramas and your bitch friends and your tt boys ofc i am a bit jealous meri jagah koi aur hota to vo bhi hota par thike i understand ab nhi hi bolunga about those sexy men u hang out with (ITS A JOKE). Know that you should never have to hesitate before saying anything to me. You mine onli bm tt boys hehe.
Happy three years sweetheart. All my love for you <3`
	return (
		<div className='letter-container'>
			<div className="letter">
				<ScrollAnimation animateIn='wobble'>
				<p className="let-title">Dear Shreshtha (the prettiest Love of my Life),</p>
				</ScrollAnimation>
				<ScrollAnimation animateIn='bounceInLeft' animateOut='bounceOutRight'>
				<p className="let-body">{mess1}<br />{mess2}<br />{mess3}</p>
				</ScrollAnimation>				
				
				<ScrollAnimation animateIn='bounceInRight' animateOut='bounceOutLeft'>
				<p className="let-body">{mess4}</p>
				</ScrollAnimation>
				<ScrollAnimation animateIn='bounceInLeft' animateOut='bounceOutRight'>
				<p className="let-body">{mess5}</p>
				</ScrollAnimation>
			</div>
		</div>
	)
}
