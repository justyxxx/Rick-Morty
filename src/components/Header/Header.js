import React from 'react'
import classes from './Header.css';
import { Button, Icon, Menu, Dropdown,} from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { getLocale } from '../../utils/localization'

const Header = props => {
	const handleChangeLocale = (locale) => {
		props.changeLocale(locale)
	}

	
const menu = (
  <Menu>
    <Menu.Item key="1" onClick={() => handleChangeLocale('ru')} active={props.locale === 'ru'}>>
			Русский
    </Menu.Item>
    <Menu.Item key="2" onClick={() => handleChangeLocale('en')} active={props.locale === 'en'}>>
			English
    </Menu.Item>
  </Menu>
);

	return (
		<div className={classes.Header}>
			<div>
				<h2>{props.title}</h2>
			</div>
			<div>
				<Button.Group>
					<Button
						type="dashed"
						disabled={props.firstPage}
						onClick={() => props.changePage(null, "prev")}
					>
						<Icon type="left" />
						{getLocale(props.locale, 'locale.navigation.prev')}
					</Button>
					<Button
						type="dashed"
						disabled={props.lastPage}
						onClick={() => props.changePage("next")}
					>
						{getLocale(props.locale, 'locale.navigation.next')}
						<Icon type="right" />
					</Button>
				</Button.Group>
			</div>
			<div>
				<Dropdown.Button overlay={menu} icon={<DownOutlined style={{ fontSize: '16px'}}/>}>
						{props.locale === 'ru' ? 'Язык: Русский' : 'Lang: English'}
				</Dropdown.Button>
			</div>
			<div>
				<span>{getLocale(props.locale, 'locale.navigation.total.chars')}:</span>
				<span>{props.total}</span>
				<span>{getLocale(props.locale, 'locale.navigation.total.pages')}:</span>
				<span>{props.totalPages}</span>
				<span>{getLocale(props.locale, 'locale.navigation.cur.page')}:</span>
				<span>{props.currentPage}</span>
			</div>
		</div>
	);
}

export default Header