import React from 'react';
import PropTypes from 'prop-types';
import { Panel, PanelHeader, HeaderButton, platform, IOS } from '@vkontakte/vkui';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import '../style/style.css'

const osname = platform();

const MapView = props => (
	<Panel id={props.id}>
        <PanelHeader
			noShadow left={<HeaderButton onClick={() => window.history.back()} >
				{osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</HeaderButton>}
		>
			Карта
		</PanelHeader>
		<YMaps>
			<Map className="mapview" width="100vw" height="100vh" defaultState={{ center: props.state.pos, zoom: 9 }} >
				<Placemark geometry={props.state.pos} />
			</Map>
        </YMaps>
	</Panel>
);

MapView.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default MapView;
