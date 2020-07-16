import React from 'react';
import PropTypes from 'prop-types';
import { Panel, PanelHeaderSimple, PanelHeaderBack, Footer, Group, List, Cell, Avatar } from '@vkontakte/vkui';
import '../style/style.css'
import image3 from '../img/icon.jpg';
import Icon24Flash from '@vkontakte/icons/dist/24/flash';
import Icon24Download from '@vkontakte/icons/dist/24/download';
import Icon24Link from '@vkontakte/icons/dist/24/link';
import Icon24Place from '@vkontakte/icons/dist/24/place';
import Icon24LogoVk from '@vkontakte/icons/dist/24/logo_vk';

const About = props => (
	<Panel id={props.id}>
        <PanelHeaderSimple left={ <PanelHeaderBack onClick={ props.back } /> }>
            О сервисе
        </PanelHeaderSimple>
        <img className="Image" style={ { borderRadius: 20 } } src={ image3 } alt="Map"/>
        <Footer>Поиск по Яндекс картам</Footer>
        <Footer>Обновлено до версии 1.03</Footer>
        <Group>
            <List>
                <Cell multiline={true} target="_blank" href="https://vk.com/@clefer-vkapps-api" before={ <Avatar style={ { background: '#5C9CE6' } } size={36}><Icon24Flash	fill="#fff" /></Avatar> } description="https://vk.com/@clefer-vkapps-api">Статья о API и картах</Cell>
                <Cell multiline={true} target="_blank" href="https://vk.com/@clefer-vkapps-menu" before={ <Avatar style={ { background: '#5C9CE6' } } size={36}><Icon24Flash	fill="#fff" /></Avatar> } description="https://vk.com/@clefer-vkapps-menu">Статья о навигации</Cell>
                <Cell multiline={true} target="_blank" href="https://github.com/CleFerMy/service_ya_map" before={ <Avatar style={ { background: '#5C9CE6' } } size={36}><Icon24Download	fill="#fff" /></Avatar> } description="https://github.com/CleFerMy/service_ya_map">Исходники</Cell>
                <Cell multiline={true} target="_blank" href="https://tech.yandex.ru/maps/" before={ <Avatar style={ { background: '#5C9CE6' } } size={36}><Icon24Link	fill="#fff" /></Avatar> } description="https://tech.yandex.ru/maps/">API Яндекс карт</Cell>
                <Cell multiline={true} target="_blank" href="https://github.com/gribnoysup/react-yandex-maps" before={ <Avatar style={ { background: '#5C9CE6' } } size={36}><Icon24Place	fill="#fff" /></Avatar> } description="https://github.com/gribnoysup/react-yandex-maps">react-yandex-maps</Cell>
                <Cell multiline={true} target="_blank" href="https://vk.com/write138269465" before={ <Avatar style={ { background: '#5C9CE6' } } size={36}><Icon24LogoVk fill="#fff" /></Avatar> } description="https://vk.com/clefer">Обратная связь</Cell>
            </List>
        </Group>
	</Panel>
);

About.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default About;
