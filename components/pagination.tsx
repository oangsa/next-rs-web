import _ from 'lodash'

const Pagination = ({items, pageSize, currentPage, onPageChange}: any) => {

    const pageCount = items / pageSize

    // if (Math.ceil(pageCount) === 1) return null;
    const pages = _.range(1, pageCount + 1)

    return (
        <nav className="flex items-center justify-between pt-4 mt-2 lg:mr-16 md:mr-8" aria-label="Table navigation">
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400"></span>
            <ul className="inline-flex items-center -space-x-px">
                {pages.map(page => (
                    <li key={page}>
                        <a onClick={() => onPageChange(page)} className={page === currentPage ? "px-3 py-2 text-blue-600 border border-gray-300 bg-blue-50 dark:border-gray-700 dark:bg-gray-700 dark:text-white" :"px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"} >{page}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination
