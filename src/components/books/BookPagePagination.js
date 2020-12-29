import React from 'react';

const BookPagePagination = props => {

    const setPagesArr = () => {
        const pageCount = Math.floor(props.books / 20) / 2;
        let pagesList = [];
    
        for (let count = 0; count <= pageCount; count++) {    
            pagesList.push(count);
        }

        return pagesList;
    }

    const pagesArr = setPagesArr();

    return (
        <div className="pagination">
            {
                pagesArr.map(num => {
                    return <div
                        key={num}
                        data-id={num}
                        onClick={props.handleSearch}
                        className={props.activePageIndex === num ? 'active' : ''}>
                            {num+1}
                    </div>
                })
            }
        </div>
    )
};

export default BookPagePagination;