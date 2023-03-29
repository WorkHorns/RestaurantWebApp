import React from 'react';
import RestoServiceContext from '../resto-service-context';

//Компонент вышего порядка принимает другой компонент
const WithRestoService = () => (Wrapper) => {
    //В него передаються какие-то реквизиты.
    return (props) => {
        //Возвращает render-структуру
        return (
            //Прячим реализацию Consumer-а
            //Внутри рендерится тот компонет который мы ему передаем
            <RestoServiceContext.Consumer>
                {
                    //Используем контекст из контекста получаем Сервис
                    (RestoService) => {
                        return <Wrapper {...props} RestoService={RestoService} />
                    }
                }
            </RestoServiceContext.Consumer>
        )
    };
};

export default WithRestoService;