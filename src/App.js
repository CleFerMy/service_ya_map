import React from 'react';
import bridge from '@vkontakte/vk-bridge';
import { View } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import MapView from './panels/MapView';
import About from './panels/About';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			activePanel: 'home',
			fetchedUser: null,
			search: '',
			list:	{}
		};
		this.ChangeSearch 	= this.ChangeSearch.bind(this);
	}

	componentDidMount() {
		window.addEventListener('popstate', e => e.preventDefault() & this.menu(e));
		window.history.pushState( { panel: 'home' }, `home` );
		bridge.subscribe((e) => {
			switch (e.detail.type) {
				case 'VKWebAppGetUserInfoResult':
					this.setState({ fetchedUser: e.detail.data });
					break;
				default:
			}
		});
		bridge.send('VKWebAppGetUserInfo', {});
	}

	go = (e) => {
		this.setState({ activePanel: e.currentTarget.dataset.to });
		window.history.pushState( { panel: e.currentTarget.dataset.to }, `${e.currentTarget.dataset.to}` );
	};

	back () { window.history.back(); }

	ChangeSearch (e) { 
		this.setState({ search:e.target.value.replace(/\s+/g,' ') }); 
		this.maps();
	}

	maps() {
		let key = `2fcdfa38-f379-48fa-a79a-e2da8afbf65b`;
		let api = `https://geocode-maps.yandex.ru/1.x/?format=json&geocode=${this.state.search}&apikey=${key}`;
		fetch(api)
		.then(res => res.json())
        .then(data => this.setState({
            list: data.response.GeoObjectCollection.featureMember
        }))
		.catch(e => console.log(e))
	}

	view = (e) => {
		this.setState({ pos: e.GeoObject.Point.pos.split(' ', 2).reverse() });
	}

	menu (e) {
		if(e.state) {
			this.setState( { activePanel: e.state.panel } );
		} else {
			this.setState( { activePanel: 'home', search: '' } );
			window.history.pushState( { panel: 'home' }, `home` );
		}
	}

	render() {
		return (
			<View activePanel={this.state.activePanel}>
				<Home id="home" fetchedUser={this.state.fetchedUser} go={this.go} change={this.ChangeSearch} state={this.state} view={this.view} back={this.back} />
				<MapView id="view" fetchedUser={this.state.fetchedUser} go={this.go} state={this.state} back={this.back} />
				<About id="about" go={this.go} back={this.back} />
			</View>
		);
	}
}

export default App;
