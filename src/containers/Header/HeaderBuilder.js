import React, {useContext} from 'react';
import {connect} from 'react-redux';
import AppContext from '../../context/app-context';
import * as actions from '../../store/actions';
import {actionChangeUserLocale} from '../../store/reducers/locale';
import Header from '../../components/Header/Header';

export const HeaderBuilder = props => {
		console.log(props)
    const {currentPage, setCurrentPage, setCharacterId} = useContext(AppContext);
    const onChangePage = (next, prev) => {
        if(next) {
            props.listProcessHandler(`?page=${currentPage + 1}`);
            setCharacterId((currentPage + 1) * 20 - 19);
            setCurrentPage(currentPage +1);           
        };
        if(prev) {
            props.listProcessHandler(`?page=${currentPage - 1}`);
            setCharacterId((currentPage - 1) * 20 - 19);
            setCurrentPage(currentPage -1);           
        };
    };  

    return (
        <Header 
            title="THE RICK AND MORTY API"
            total={props.info.count}
            currentPage={currentPage}
            totalPages={props.info.pages} 
            changePage={onChangePage}
            firstPage = {currentPage - 1 === 0}
						lastPage = {props.info.pages - currentPage === 0}
						changeLocale={props.changeLocaleHandler}
						locale={props.locale}
        />
    )
};
const mapStateToProps = state => {
    return{
				info: state.listReducer.info,
				locale: state.localeReducer.locale
    }
};
const mapDispatchToProps = dispatch => {
    return {
				listProcessHandler: (page) => dispatch(actions.listProcess(page)),
				changeLocaleHandler: (locale) => dispatch(actionChangeUserLocale(locale))
		
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HeaderBuilder)