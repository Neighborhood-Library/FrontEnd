import React from 'react';

const BookPagePagination = props => {

    const setPagesArr = () => {
        const pageCount = Math.ceil(props.books / 20);
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
                pagesArr.map(num => <div key={num} className={props.activePageIndex === num ? 'active' : ''}>{num+1}</div>)
            }
        </div>
    )
};

export default BookPagePagination;