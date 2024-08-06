import React from 'react'
import {Link} from "react-router-dom";

function Price() {
    return (
        <>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <span className="ml-3 text-xl">HEALIX</span>
                    </a>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <Link className="mr-5 hover:text-gray-900" to='/'>홈</Link>
                        <Link className="mr-5 hover:text-gray-900" to='/near'>근처 병원 조회</Link>
                        <Link className="mr-5 hover:text-gray-900" to='/resevation'>예약 목록</Link>
                    </nav>
                    <span
                        className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                        증상부터 병원까지
                    </span>
                </div>
            </header>
        </>
    )
}

export default Price
