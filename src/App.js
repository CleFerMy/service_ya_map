import React from 'react';
import connect from '@vkontakte/vkui-connect';
import { View } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import MapView from './panels/MapView';

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
		connect.subscribe((e) => {
			switch (e.detail.type) {
				case 'VKWebAppGetUserInfoResult':
					this.setState({ fetchedUser: e.detail.data });
					break;
				default:
			}
		});
		connect.send('VKWebAppGetUserInfo', {});
	}

	go = (e) => {
		this.setState({ activePanel: e.currentTarget.dataset.to })
	};

	ChangeSearch (e) { 
		this.setState({ search:e.replace(/\s+/g,' ') });
		this.maps();
	}

	maps() {
		let api = `https://geocode-maps.yandex.ru/1.x/?format=json&geocode=${this.state.search}`
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

	render() {
		return (
			<View activePanel={this.state.activePanel}>
				<Home id="home" fetchedUser={this.state.fetchedUser} go={this.go} change={this.ChangeSearch} state={this.state} view={this.view} />
				<MapView id="view" fetchedUser={this.state.fetchedUser} go={this.go} state={this.state} />
			</View>
		);
	}
}

export default App;
