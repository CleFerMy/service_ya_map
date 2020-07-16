import React from 'react';
import PropTypes from 'prop-types';
import { Panel, PanelHeaderSimple, PanelHeaderBack } from '@vkontakte/vkui';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import '../style/style.css'

const MapView = props => (
	<Panel id={props.id}>
		<PanelHeaderSimple left={ <PanelHeaderBack onClick={ props.back } /> }>
			Карта
        </PanelHeaderSimple>
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
