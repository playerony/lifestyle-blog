import React, { useState, useEffect } from 'react'

import Item from './Item'

const articles: any = [
    { id: 1, title: 'c', description: 'description', category: 'sport', icon: 'icon' },
    { id: 2, title: 'b', description: 'description', category: 'programming', icon: 'icon' },
    { id: 3, title: 'a', description: 'description', category: 'lifestyle', icon: 'icon' }
]
const ArticleList = (): JSX.Element => {

    const [ascValue, setAscValue] = useState(true);
    const [view, setView] = useState(true)

    const [values, setValues] = useState([]);
    const [categories, setCategories] = useState([])
    const [displayCategory, setdisplayCategory] = useState('all')

    const sortValues = (articles: Array<Object>) => {
        //const compare = ascValue ? (a: any, b: any) => a - b : (a: any, b: any) => b - a;
        const titles = (articles.map((articles: any) => articles.title))
        titles.sort()
        // setValues(titles)
    }

    const setCategory = (category: string) => {
        setdisplayCategory(category)
    }

    useEffect(() => {
        const category = articles.map((article: any) => article.category)
        category.push("all")
        setCategories(category)
    }, [ascValue]);

    return (
        <div>
            <div className="filters">
                {categories.map((category: any, key: any) =>
                    <button key={key}
                        className={`${category}`}
                        onClick={() => setCategory(category)}>
                        <p>{category}</p>
                    </button>
                )}
            </div>
            <button onClick={() => sortValues(articles)}>Sort ASC/DESC</button>
            <button onClick={() => setView(true)}>View Square</button>
            <button onClick={() => setView(false)}>View Lines</button>

            <div>
                {articles.filter(({ category }) => displayCategory === category || displayCategory === "all")
                    .map((articles: any) => <Item display={view} values={values} {...articles} />)}
            </div>
        </div >
    )
}

export default ArticleList



