import React, { useState } from 'react'

const Search = ({ searchMovies = Function.prototype }) => {
	const [search, setSearch] = useState('')
	const [type, setType] = useState('all')

	const handleSearch = (e) => {
		setSearch(e.target.value)
	}
	const handleKey = (e) => {
		if (e.key === 'Enter') {
			searchMovies(search, type)
		}
	}
	const handleFilter = (e) => {
		setType(e.target.dataset.type)
		searchMovies(search, e.target.dataset.type)
	}

	return (
		<>
			<div className="row">
				<div className="input-field ">
					<input id="search" className="validate" type="search" value={search} onChange={handleSearch} onKeyDown={handleKey} />
					<label for="search">Search</label>
					<span className="waves-effect waves-light btn search-btn" onClick={() => searchMovies(search, type)}>
						<i class="material-icons">search</i>
					</span>
				</div>
			</div>
			<div className="checkbox">
				<label>
					<input className="with-gap" name="type" type="radio" data-type="all" onChange={handleFilter} checked={type === 'all'} />
					<span>All</span>
				</label>
				<label>
					<input className="with-gap" name="type" type="radio" data-type="movie" onChange={handleFilter} checked={type === 'movie'} />
					<span>Movies only</span>
				</label>
				<label>
					<input className="with-gap" name="type" type="radio" data-type="series" onChange={handleFilter} checked={type === 'series'} />
					<span>Series only</span>
				</label>
			</div>
		</>
	)
}
export { Search }
