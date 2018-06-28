import React, { Component } from 'react';
import Link from 'next/link';
import Meta_event from '../components/Meta_event';
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
		const { data, event, branch } = this.props;
		// find the index of particular subevent
		const index = this.links[event];
		console.log({ index, event });
		return (
			<div className="pages-stack">
				<div className="page">
					<header className="bp-header cf">
						<h1 className="bp-header__title">{data.events[index].name}</h1>
						<p className="info">{data.events[index].info}</p>
					</header>

					{/*	<img className="poster" src={/* image src alt="img01" /> */}
					{/*  All info about event */}
					<section />
					{/*List of All events */}

					<ul>
						{data.events.map(function(event, i) {
							let link = `/event?title=electromania&event=${event.name}`;
							return (
								<li>
									<Link href={link}>{event.name}</Link>
								</li>
							);
						})}
					</ul>
				</div>
				<Meta_event />
			</div>
		);
	}
}
export default Pages;
