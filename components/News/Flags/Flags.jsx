import React from 'react';

import { Pagination } from 'antd';
// Style
import s from './Flags.module.scss'

const Flags = ({ countryPerPage, setCurrentPage, allNews }) => {

    const handleChangePagination = (numberPage) => {
        setCurrentPage(numberPage)
    }

    return (
        <div className={s.wrapper}>
            <Pagination
                total={allNews && allNews.length}
                pageSize={countryPerPage}
                showSizeChanger={false}
                responsive={true}
                onChange={(numberPage) => handleChangePagination(numberPage)}
            />
        </div>
    );
};

export default Flags;