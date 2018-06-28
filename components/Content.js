import React, { Component } from 'react';
class Pages extends Component {
	constructor(props) {
		super(props);
		this.links = {
			quintathlon: 0,
			circuit_of_the_day: 1,
			codotron: 2,
			embedded_design: 3,
			impromptu: 4,
			combomagic: 5,
			FPGA: 6,
			robomania: 7,
			innodev: 8,
		};
	}
	render() {
		const { data, event } = this.props;
		//find the index of particular subevent
		console.log('index', event);
		const index = this.links[event];
		console.log('index', index);
		return (
			<div className="container">
				<header className="clearfix">
					<h1>{data.events[index].name}</h1>
					<nav>
						<img src="static/img/schedule.gif" alt="img01" className="mid" />
					</nav>
				</header>
				<div id="cbp-so-scroller" className="cbp-so-scroller">
					<section className="cbp-so-section">
						<article className="cbp-so-side cbp-so-side-left">
							<h2>Event Description</h2>
							<p>{data.events[index].info}</p>
						</article>
						<figure className="cbp-so-side cbp-so-side-right">
							<img src="static/img/event.jpg" alt="img01" className="mid" />
						</figure>
					</section>
					<section className="cbp-so-section">
						<figure className="cbp-so-side cbp-so-side-left">
							<img src="static/img/team.jpg" alt="img01" className="mid" />
						</figure>
						<article className="cbp-so-side cbp-so-side-right">
							<h2>Allowed Years</h2>
							<p>{data.events[index].targetedBatch}</p>
							<h2>Team Size</h2>
							<p>{data.events[index].teamSize}</p>
						</article>
					</section>
					<section className="cbp-so-section">
						<article className="cbp-so-side cbp-so-side-left">
							<h2>Rounds</h2>
							<p>
								<ul id="get">
									{data.events[index].rounds.map(row => {
										return (
											<>
												<li key={row.id}>
													<h3>{row.title}</h3>
												</li>
												<li key={row.id}>{row.structure}</li>
											</>
										);
									})}
								</ul>
							</p>
						</article>
						<figure className="cbp-so-side cbp-so-side-right">
							<img src="static/img/round2.jpg" alt="img01" className="mid" />
						</figure>
					</section>
					<section className="cbp-so-section">
						<figure className="cbp-so-side cbp-so-side-left">
							<img src="static/img/coordinator.jpg" alt="img01" className="mid" />
						</figure>
						<article className="cbp-so-side cbp-so-side-right">
							<h2>Co-ordinators</h2>
							<p>
								<ul>
									{data.events[index].coordinators.map(row => {
										return (
											<>
												<li key={row.id}>
													<h3>{row.name}</h3>
												</li>
											</>
										);
									})}
								</ul>
							</p>
						</article>
					</section>
					{/*
				<section className="cbp-so-section">
					<article className="cbp-so-side cbp-so-side-left">
						<h2>Pudding lollipop</h2>
						<p>Chupa chups pudding lollipop gummi bears gummies cupcake pie. Cookie cotton candy caramels. Oat cake dessert applicake. Sweet roll tiramisu sweet roll sweet roll.</p>
					</article>
					<figure className="cbp-so-side cbp-so-side-right">
						<img src="staticimg/5.png" alt="img01">
					</figure>
				</section>
				<section className="cbp-so-section">
					<figure className="cbp-so-side cbp-so-side-left">
						<img src="staticimg/6.png" alt="img01">
					</figure>
					<article className="cbp-so-side cbp-so-side-right">
						<h2>Soufflé bonbon</h2>
						<p>Cake cotton candy lollipop. Cake croissant cheesecake candy sugar plum icing apple pie wafer. Pie sugar plum tiramisu tiramisu pie fruitcake candy icing. Candy icing gummies gummies cheesecake brownie lemon drops chocolate gingerbread.</p>
					</article>
				</section>
				*/}
				</div>

				<style jsx>
					{`
						header {
							width: 80%;
							max-width: 70em;
						}
						cbp-so-side {
							font-size: 10px;
						}
						p {
							font-size: 20px;
						}
						h2 {
							font-size: 26px;
							color: black;
							font-weight: 600;
						}
						#get {
							list-style: none;
						}

						.mid {
							margin: 9px auto;
						}
					`}
				</style>
			</div>
		);
	}
}
export default Pages;
