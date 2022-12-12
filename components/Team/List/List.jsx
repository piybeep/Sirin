import React, { useEffect } from 'react';
import Link from 'next/link';
// components
import CustomButton from '../../CustomButton/CustomButton'
// Style
import s from './List.module.scss'
import { teamAPI } from '../../../src/team/teamService';

const List = ({ info, text }) => {
    const { data: team, isLoading, error } = teamAPI.useFetchAllTeamQuery()

    const resultData = team?.map(current => {
        return (
            <div key={current.id} className={s.item}>
                <img className={s.item__img} src='' />
                <div className={s.item__info}>
                    <h2 className={s.item__title}>{current.name}</h2>
                    <h3 className={s.item__subtitle}>{current.website}</h3>
                    <Link href={`/team/${current.id}`} className={s.item__button}>
                        <CustomButton text={text} />
                    </Link>
                </div>
            </div>
        )
    })

    return (
        <div className={s.list}>
            {isLoading && <h2>Загрузка...</h2>}
            {error && <h2>Произошла ошибка</h2>}
            {resultData}
        </div>
    );
};

export default List;