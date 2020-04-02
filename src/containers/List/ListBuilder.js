import React, {useContext} from 'react';
import {connect} from 'react-redux';
import Card from '../../components/UI/Card/Card';
import {Switch} from 'antd';
import AppContext from '../../context/app-context';

export const ListBuilder = props => {

		const {characterId, setCharacterId} = useContext(AppContext);
		const showDetails = (val) => {        
			val = Number(val);        
			val === characterId ? setCharacterId(null) : setCharacterId(val)
	};    

    const avatarsArr = props.characters.map(character => {
        return <li 
            key={character.id} 
            id={character.id}>
            <Card
                img={character.image}      
                switch = {
                    <Switch
                        id={character.id}
                        checked={characterId === character.id }
                        onChange={(checked, event) => showDetails(event.target.id)}
                    />
                }
                locale={props.locale}
            />
        </li>
    });

    return(
        <ul style={{listStyle: 'none', padding: 0}}>
            {avatarsArr}
        </ul>
    )
};

const mapStateToProps = state => {
    return {
        characters: state.listReducer.results,
        locale: state.localeReducer.locale
    }
};
export default connect(mapStateToProps)(ListBuilder)