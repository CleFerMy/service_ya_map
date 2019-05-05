import React from 'react';
import PropTypes from 'prop-types';
import { Panel, PanelHeader, HeaderButton, Search, Group, Footer, List, Cell } from '@vkontakte/vkui';
import '../style/style.css'
import image1 from '../img/image1.png';
import image2 from '../img/image2.png';
import Icon24Info from '@vkontakte/icons/dist/24/info';

const Home = props => (
	<Panel id={props.id}>
		<PanelHeader noShadow left={<HeaderButton onClick={props.go} data-to="about"><Icon24Info/></HeaderButton>}>
			Карта
		</PanelHeader>
		<Search value={ props.state.search } onChange={ props.change } />
		{ props.state.search.length > 0 ? (
			<div>
				{ props.state.list.length > 0 ? (
					 <Group title={`Список мест по запросу «${props.state.search}»`} >
						<List>
							{ props.state.list.map( (list, index) => 
								(
									<Cell key={index} multiline={true} onClick={ ( e ) => { props.view(list); props.go(e); } } data-to="view" description={ `${list.GeoObject.metaDataProperty.GeocoderMetaData.text}` }>{ `${list.GeoObject.metaDataProperty.GeocoderMetaData.Address.Components[0].name}` }</Cell>
								) 
							) }
						</List>
				 	</Group>
				) : (
					<div>
						<img className="Image" src={image2} alt="Пусто" />
						<Footer>Персик не смог найти это место</Footer>
					</div>
				) }
			</div>
		) : (
			<div>
				<img className="Image" src={image1} alt="Поиск по Яндекс картам" />
				<Footer>Поиск по Яндекс картам</Footer>
			</div>
		)
		}
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Home;
